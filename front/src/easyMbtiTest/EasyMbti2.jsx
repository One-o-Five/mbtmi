import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMbti } from "../easyMbtiTest/MbtiContext";

const EasyMbti2 = () => {
    const { setAnswerAt } = useMbti();
    const pageIndex = 1;

    const handleSelect = (letter) => {
        setAnswerAt(pageIndex, letter); // 예: "I" 또는 "E"
    };
    return (
        <Container>
            <Card>
                <div>
                    <h2 style={{ marginTop: "20px" }}>2/12</h2>
                </div>
                <div>
                    <h1 style={{ marginTop: "30px" }}>MBT(M)I를 알려주세요!</h1>
                </div>
                <div style={{ marginTop: "30px", marginBottom: "5px" }}>
                    <h1>2/12</h1>
                </div>
                <Question>
                    <h1 style={{ marginBottom: "60px" }}>
                        주말 데이트 코스 고르기!
                    </h1>
                </Question>
                <div>
                    <ButtonLink
                        to="/EasyMbti3"
                        onClick={() => handleSelect("E")}>
                        시끌벅적 핫플 카페 → 전시회 → 노래방 콤보
                    </ButtonLink>
                    <ButtonLink
                        to="/EasyMbti3"
                        onClick={() => handleSelect("I")}
                        style={{ marginTop: "15px" }}>
                        조용히 둘이서 영화 보고, 산책하면서 대화
                    </ButtonLink>
                </div>
            </Card>
        </Container>
    );
};
const Card = styled.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Question = styled.div`
    margin-top: 5px;
    margin-bottom: 30px;
`;

const ButtonLink = styled(Link)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
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

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;

const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`;
export default EasyMbti2;
