import { useSignup } from "../SignupProvider";
import styled from "styled-components";

const Summary = () => {
  const { formData } = useSignup();

  const handleSubmit = async () => {
    await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("회원가입 완료!");
  };

  return (
    <Container>
      <Title>입력 확인</Title>
      <Info>
        <p>
          MBTI: {formData.mbti.EI}
          {formData.mbti.SN}
          {formData.mbti.TF}
          {formData.mbti.JP}
        </p>
        <p>자기소개 태그: {formData.introTags.join(", ")}</p>
        <p>취미: {formData.hobby}</p>
      </Info>

      <SubmitButton onClick={handleSubmit}>최종 제출</SubmitButton>
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
  color: #333; /* 글자색 */
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff; /* 타이틀 글자색 */
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const Info = styled.div`
  font-size: 18px;
  color: #fff; /* 본문 글자색 */
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.6;
  text-shadow: 0.5px 0.5px 2px rgba(0,0,0,0.4);
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #a6c1ee;
  color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: #6b90d9;
  }
`;

export default Summary;
