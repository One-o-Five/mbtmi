import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mbtmi from "../assets/img/mbtmi.jpg";

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

// 로그인 박스
const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.15); /* 반투명 흰색, 더 투명하게 */
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); /* 은은한 그림자 */
  backdrop-filter: blur(10px); /* 배경 흐림 효과 */
  -webkit-backdrop-filter: blur(10px); /* 사파리 호환 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 살짝 테두리 */
  display: flex;
  flex-direction: column;
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

// 버튼 스타일
const Button = styled.button`
  width: 320px;
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.8); /* 하얀 테두리 */
  border-radius: 12px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1); /* 반투명 배경 */
  color: #fff; /* 글자 색 흰색 */
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2); /* hover 시 배경 살짝 밝게 */
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3); /* 은은한 빛 효과 */
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

const AccountLogin = () => {
  const [showClouds, setShowClouds] = useState(true);

  return (
    <Container>
      <Mbtmi src={mbtmi} alt="MBTI Logo" />
      {/* <LoginBox> */}
      <LoginTitle>로그인</LoginTitle>
      <LoginInput type="text" placeholder="아이디를 입력하세요" />
      <LoginInput type="password" placeholder="비밀번호를 입력하세요" />
      <ButtonNeumorphism>시작하기</ButtonNeumorphism>
      <Divider>------------------- 또는 -------------------</Divider>
      <ButtonNeumorphism>카카오톡 계정으로 로그인</ButtonNeumorphism>

      {/* </LoginBox> */}
    </Container>
  );
};

export default AccountLogin;
