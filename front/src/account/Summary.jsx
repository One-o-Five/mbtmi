import { useSignup } from "../SignupProvider";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PreCardModal from "../account/PreCardModal";

const Summary = () => {
    const { formData, setReturnToSummary } = useSignup();
    const navigate = useNavigate();
    const [openPreview, setOpenPreview] = useState(false);

    const handleEditMbti = () => {
        setReturnToSummary(true);
        navigate("/selmbti");
    };

    const handleEditIntro = () => {
        setReturnToSummary(true);
        navigate("/intro");
    };

    const handleEditHobby = () => {
        setReturnToSummary(true);
        navigate("/hobby");
    };

    const handleEditIntroduce = () => {
        setReturnToSummary(true);
        navigate("/introduce");
    };

    const handleEditRegion = () => {
        setReturnToSummary(true);
        navigate("/region");
    };

    const handleSubmit = async () => {
        await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        alert("회원가입 완료!");
    };

    // formData.mbti에서 문자열 조합
    const mbti = Object.values(formData.mbti ?? {}).join("");

    return (
        <Container>
            <InfoCard>
                <Title>입력 확인</Title>
                <Info>
                    <Item>
                        <Left>MBTI</Left>
                        <Center>{mbti}</Center>
                        <Right>
                            <EditButton onClick={handleEditMbti}>
                                수정
                            </EditButton>
                        </Right>
                    </Item>

                    <Item>
                        <Left>거주지역</Left>
                        <Center
                            style={{
                                whiteSpace: "pre-wrap",
                                wordBreak: "keep-all",
                            }}>
                            {formData.location
                                .split(/\n/) // 엔터 기준으로 분리
                                .map((paragraph, i) => (
                                    <p key={i} style={{ margin: "8px 0" }}>
                                        {paragraph.trim()}
                                    </p>
                                ))}
                        </Center>
                        <Right>
                            <EditButton onClick={handleEditRegion}>
                                수정
                            </EditButton>
                        </Right>
                    </Item>

                    <Item>
                        <Left>성격</Left>
                        <Center
                            style={{
                                whiteSpace: "pre-wrap",
                                wordBreak: "keep-all",
                            }}>
                            {formData.introTags.map((tag, i) => (
                                <span key={i} style={{ marginRight: "6px" }}>
                                    {tag}
                                </span>
                            ))}
                        </Center>
                        <Right>
                            <EditButton onClick={handleEditIntro}>
                                수정
                            </EditButton>
                        </Right>
                    </Item>

                    <Item>
                        <Left>취미</Left>
                        <Center
                            style={{
                                whiteSpace: "pre-wrap",
                                wordBreak: "keep-all",
                            }}>
                            {formData.hobby.join("  ")}
                        </Center>
                        <Right>
                            <EditButton onClick={handleEditHobby}>
                                수정
                            </EditButton>
                        </Right>
                    </Item>

                    <Item>
                        <Left>자기소개</Left>
                        <Center
                            style={{
                                whiteSpace: "pre-wrap",
                                wordBreak: "keep-all",
                            }}>
                            {formData.introduce
                                .split(/\n/) // 엔터 기준으로 분리
                                .map((paragraph, i) => (
                                    <p key={i} style={{ margin: "8px 0" }}>
                                        {paragraph.trim()}
                                    </p>
                                ))}
                        </Center>
                        <Right>
                            <EditButton onClick={handleEditIntroduce}>
                                수정
                            </EditButton>
                        </Right>
                    </Item>
                </Info>
                <Btnzone>
                    <SubmitButton onClick={() => setOpenPreview(true)}>
                        내 카드 <br /> 미리보기
                    </SubmitButton>
                    <SubmitButton onClick={handleSubmit}>
                        작성 완료
                    </SubmitButton>
                </Btnzone>
                {openPreview && (
                    <PreCardModal onClose={() => setOpenPreview(false)} />
                )}
            </InfoCard>
        </Container>
    );
};

// 스타일
const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    color: #333;
    padding: 20px;
`;

const InfoCard = styled.div`
    width: 90%;
    max-width: 600px;
    padding: 30px 20px;
    border-radius: 20px;

    background-color: #ffffff1a;
    /* 카드 느낌의 그림자 */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Info = styled.div`
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 1.6;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.4);
`;

// 각 항목
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #aa80dd88;
    }
`;

const Left = styled.div`
    flex: 1;
    text-align: left;
    font-weight: bold;
`;

const Center = styled.div`
    flex: 2;
    color: #3d1756;
    font-size: 12px;
`;

const Right = styled.div`
    text-align: right;
`;

const EditButton = styled.button`
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.293);
    color: #fff;

    backdrop-filter: blur(6px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.575);
        transform: translateY(1px);
    }
`;

const Btnzone = styled.div`
    display: flex;
    justify-content: center;
`;

const SubmitButton = styled.button`
    width: 110px;
    height: 50px;
    padding: 12px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.36);
    color: #fff;

    backdrop-filter: blur(6px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;
export default Summary;
