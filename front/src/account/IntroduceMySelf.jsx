import React, { use } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSignup } from "../SignupProvider"; // ✅ Context 불러오기

const IntroduceMySelf = () => {
    const navigate = useNavigate();
    const { formData, setFormData } = useSignup(); // 전역 상태 가져오기

    const handleChange = (e) => {
        setFormData({
            ...formData,
            introduce: e.target.value, // 자기소개 글 저장
        });
    };

    return (
        <Container>
            <Card>
                <div>
                    <h1 style={{ marginTop: "30px" }}>자기소개</h1>
                </div>
                {/* <hr
        style={{
          width: "70%",
          height: "3px",
          backgroundColor: "#a6c1ee",
          border: "none",
          margin: "5px 0",
        }}
      /> */}
                <Selfinput
                    placeholder="자기소개를 적어주세요 (최대 300자)"
                    maxLength={300}
                    value={formData.introduce} // context 값 연결
                    onChange={handleChange} // 입력 이벤트 처리
                />
                <NextButton onClick={() => navigate("/summary")}>
                    작성완료
                </NextButton>
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
const NextButton = styled.button`
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 12px;
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
        backdrop-filter: blur(12px);
    }

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

const Selfinput = styled.textarea`
    width: 90%;
    height: 230px; // 초기 높이
    max-height: 300px; // 최대 높이 제한
    margin-top: 50px;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #000000;
    backdrop-filter: blur(6px);
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    resize: none; // 사용자가 크기 조절 불가
    overflow-y: auto; // 내용이 많으면 스크롤
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
export default IntroduceMySelf;
