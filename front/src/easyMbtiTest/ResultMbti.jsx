import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMbti } from "./MbtiContext";
import { useSignup } from "../SignupProvider"; // ✅ Context 불러오기

const ResultMbti = () => {
  const { scores } = useMbti();
  const navigate = useNavigate();
  const { setFormData, setReturnToSummary } = useSignup();

  // 좌측을 우선(I, S, T, J)으로 하는 간단한 동점 처리
  const pick = (aKey, bKey) => {
    const a = scores[aKey] ?? 0;
    const b = scores[bKey] ?? 0;
    return a >= b ? aKey : bKey;
  };

  const result =
    pick("I", "E") + pick("S", "N") + pick("T", "F") + pick("J", "P");

  const handleNext = () => {
    // 🔥 결과를 formData.mbti에 저장
    const [EI, SN, TF, JP] = result.split("");

    setFormData((prev) => ({
      ...prev,
      mbti: { EI, SN, TF, JP },
    }));

    navigate("/intro"); // 저장 후 요약 화면으로 이동
  };

  return (
    <Container>
      <Card>
        <div>
          <h1 style={{ marginTop: "50px" }}>MBT(M)I를 알려주세요!</h1>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h1>당신의 MBT(M)I는</h1>
        </div>
        <Question>
          <Result>
            <h1>{result}</h1>
          </Result>

          {/* <Small>
            I:{scores.I ?? 0} / E:{scores.E ?? 0} | S:{scores.S ?? 0} / N:
            {scores.N ?? 0} | T:{scores.T ?? 0} / F:{scores.F ?? 0} | J:
            {scores.J ?? 0} / P:{scores.P ?? 0}
          </Small> */}
        </Question>
        <div>
          <ButtonLink onClick={handleNext}>다음으로</ButtonLink>
        </div>
      </Card>
    </Container>
  );
};
const Result = styled.div`
  font-size: clamp(28px, 6vw, 40px);
  margin: 10px 0 8px;
`;

// const Small = styled.p`
//   color: #374151;
//   margin: 8px 0 0;
// `;

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
  margin-bottom: 10px;
`;

const ButtonLink = styled.button`
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
export default ResultMbti;
