import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ITEM_HEIGHT = 60;
const VISIBLE_COUNT = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT;

const mbtiTypes = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
];

const AccountMbti = () => {
    const nevigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <Page>
            <Title>원하는 상대방의</Title>
            <Title>MBTI를 선택해주세요!</Title>
            <Title1></Title1>

            <Picker>
                {mbtiTypes.map((type, idx) => (
                    <Item
                        key={type}
                        active={idx === activeIndex}
                        onClick={() => setActiveIndex(idx)}>
                        {type}
                    </Item>
                ))}
            </Picker>

            <Selected>
                선택:{" "}
                {activeIndex !== null ? mbtiTypes[activeIndex] : "선택 없음"}
            </Selected>
            <NextButton onClick={() => nevigate("/wantedintro")}>
                다음으로
            </NextButton>
        </Page>
    );
};

export default AccountMbti;

/* --- 스타일 --- */
const Page = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Title = styled.h1`
    margin-bottom: 0px;
    color: #333;
    font-size: 20px;
`;
const Title1 = styled.h1`
    margin-bottom: 10px;
    color: #333;
    font-size: 20px;
`;

const Picker = styled.div`
    width: 160px;
    height: ${CONTAINER_HEIGHT}px;
    overflow-y: auto;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Item = styled.div`
    height: ${ITEM_HEIGHT}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${({ active }) =>
        active
            ? `
    transform: scale(1.1);
    font-size: 1.25rem;
    color: #fff;
    background-color: #a6c1ee;
    box-shadow: 0 4px 12px rgba(166, 193, 238, 0.6);
  `
            : `
    color: #333;
    background-color: transparent;
    transform: scale(1);
    font-size: 1rem;

    &:hover {
      background-color: rgba(166,193,238,0.2);
    }
  `}
`;

const Selected = styled.div`
    margin-top: 14px;
    font-size: 16px;
    color: #333;
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
        /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
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
