import mbtmi from "../assets/img/mbtmi.jpg";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../main/AuthContext";
const AccountLogin = () => {
  const [idVal, setIdVal] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [pwVal, setPwVal] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    const val = e.target.value;
    setIdVal(val);
    setIdValid(val.length > 0);
  };
  const handlePwChange = (e) => {
    const val = e.target.value;
    setPwVal(val);
    setPwValid(val.length > 0);
  };

  const canSubmit = idValid && pwValid;

  const handleSubmit = async () => {
    try {
      const success = await login(idVal, pwVal);
      if (success) {
        console.log("로그인 성공"); // ✅ 로그인 성공 콘솔 출력
        navigate("/home"); // 로그인 성공 시 메인 페이지로 이동
      } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (err) {
      console.error("로그인 실패:", err);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <Mbtmi src={mbtmi} alt="MBTI Logo" />

      <LoginTitle>로그인</LoginTitle>
      <LoginInput
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={handleIdChange}
        value={idVal}
      />
      <LoginInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={handlePwChange}
        value={pwVal}
      />
      <ButtonNeumorphism disabled={!canSubmit} onClick={handleSubmit}>
        로그인
      </ButtonNeumorphism>
      <Divider>------------------- 또는 -------------------</Divider>
    </Container>
  );
};

const Container = styled.div`
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 로그인 제목
const LoginTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
`;

// 입력창 스타일
const LoginInput = styled.input`
  width: 300px;
  padding: 12px 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #a6c1ee;
    box-shadow: 0 0 8px rgba(166, 193, 238, 0.5);
  }
`;

// 구분 텍스트
const Divider = styled.div`
  margin: 20px 0;
  font-weight: bold;
  color: #666;
`;

const Mbtmi = styled.img`
  width: 200px;
  height: auto;
  margin-top: 10px;
`;

const ButtonNeumorphism = styled.button`
  width: 320px;
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

export default AccountLogin;
