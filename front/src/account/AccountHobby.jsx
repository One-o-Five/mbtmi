import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../SignupProvider"; // ✅ Context 불러오기

const AccountHobby = () => {
    const navigate = useNavigate();
    const { formData, setFormData, returnToSummary, setReturnToSummary } =
        useSignup(); // 전역 상태 가져오기

    const handleNext = () => {
        if (returnToSummary) {
            setReturnToSummary(false);
            navigate("/summary");
        } else {
            navigate("/wantedmbti");
        }
    };

    // 활동적인 취미
    const activeHobbies = [
        "#등산",
        "#여행",
        "#자전거",
        "#러닝",
        "#댄스",
        "#수영",
        "#헬스",
        "#볼링",
        "#스포츠관람",
        "#캠핑",
        "#서핑",
        "#클라이밍",
        "#농구",
        "#축구",
        "#방탈출",
    ];

    // 비활동적인 취미
    const passiveHobbies = [
        "#영화보기",
        "#드라마",
        "#넷플릭스",
        "#유튜브",
        "#독서",
        "#요리하기",
        "#베이킹",
        "#악기연주",
        "#사진찍기",
        "#보드게임",
        "#명상",
        "#그림그리기",
        "#수다",
        "#멍때리기",
        "#산책하기",
    ];

    const [selectedTags, setSelectedTags] = useState([]);

    // const toggleTag = (tag) => {
    //   if (selectedTags.includes(tag)) {
    //     setSelectedTags(selectedTags.filter((t) => t !== tag));
    //   } else {
    //     if (selectedTags.length < 6) {
    //       setSelectedTags([...selectedTags, tag]);
    //     } else {
    //       alert("최대 6개까지만 선택할 수 있어요!");
    //     }
    //   }
    // };

    // ✅ Context 기반으로 상태 관리
    const toggleTag = (tag) => {
        const currentHobbies = formData.hobby || [];
        if (currentHobbies.includes(tag)) {
            setFormData({
                ...formData,
                hobby: currentHobbies.filter((t) => t !== tag),
            });
        } else {
            if (currentHobbies.length < 6) {
                setFormData({
                    ...formData,
                    hobby: [...currentHobbies, tag],
                });
            } else {
                alert("최대 6개까지만 선택할 수 있어요!");
            }
        }
    };

    return (
        <Container>
            <Title>당신의 취미를 선택해주세요!</Title>
            <TagTag>최대 6개 선택 가능합니다.</TagTag>

            <Section>
                <TagTitle>🌟 밖에서 즐기는</TagTitle>
                <TagsWrapper>
                    {activeHobbies.map((tag) => (
                        <TagButton
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            selected={formData.hobby?.includes(tag)}>
                            {tag}
                        </TagButton>
                    ))}
                </TagsWrapper>
            </Section>

            <Section>
                <TagTitle>🏡 집에서 즐기는</TagTitle>
                <TagsWrapper>
                    {passiveHobbies.map((tag) => (
                        <TagButton
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            selected={formData.hobby?.includes(tag)}>
                            {tag}
                        </TagButton>
                    ))}
                </TagsWrapper>
            </Section>

            <SelectedText>
                선택된 취미: {formData.hobby?.join(", ")}
            </SelectedText>

            <NextButton disabled={formData.length === 0} onClick={handleNext}>
                다음
            </NextButton>
            {/* <NextButton
        disabled={selectedTags.length === 0}
        onClick={() => navigate("/summary")}
      >
        다음
      </NextButton> */}
        </Container>
    );
};

const Container = styled.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`;

const TagTag = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
    color: #444;
`;

const Section = styled.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
`;

const TagTitle = styled.div`
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    color: #444;
    text-align: left;
`;

const TagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    gap: 12px;
`;

const TagButton = styled.button`
    padding: 12px 0;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${(props) => (props.selected ? "#a6c1ee" : "#fff")};
    color: ${(props) => (props.selected ? "#fff" : "#333")};
    box-shadow: ${(props) =>
        props.selected
            ? "inset 3px 3px 6px rgba(0,0,0,0.2)"
            : "2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${(props) =>
            props.selected ? "#8aa9e6" : "#f7f7f7"};
    }
`;

const SelectedText = styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;

const NextButton = styled.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;

export default AccountHobby;
