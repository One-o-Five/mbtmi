import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import mainLogo from "../assets/img/mainLogo.jpg";
import mbtmi from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";

const Account01 = () => {
  const [showClouds, setShowClouds] = useState(true);
  const [cloudsVisible, setCloudsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setCloudsVisible(false), 2250); // 애니메이션 끝나면 사라짐
    const timer2 = setTimeout(() => setShowClouds(false), 2250); // DOM 제거
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Container>
      {showClouds && (
        <CloudOverlay style={{ display: cloudsVisible ? "block" : "none" }}>
          <Cloud />
          <Cloud />
          <Cloud />
          <Cloud />
        </CloudOverlay>
      )}

      <MainContent $visible={!showClouds}>
        <Logo src={mainLogo} alt="Main Logo" />
        <Mbtmi src={mbtmi} alt="MBTI Logo" />
        <ButtonLogin onClick={() => navigate("/login")}>로그인</ButtonLogin>
        <ButtonAccount onClick={() => navigate("/info")}>
          회원가입
        </ButtonAccount>
      </MainContent>
    </Container>
  );
};

const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-50px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

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

const CloudOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  animation: ${fadeOut} 3s ease-in-out forwards;
`;

const Cloud = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.4),
    0 0 20px rgba(173, 216, 230, 0.2);
  backdrop-filter: blur(3px);
  animation: ${fadeOut} 3s ease-in-out forwards;

  &:nth-child(1) {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 5%;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    width: 120px;
    height: 120px;
    bottom: 15%;
    left: 25%;
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    width: 90px;
    height: 90px;
    top: 40%;
    left: 50%;
    animation-delay: 0.4s;
  }
`;

const MainContent = styled.div`
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  animation: ${(props) => (props.$visible ? fadeIn : "none")} 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Logo = styled.img`
  width: 200px;
  margin-top: 60px;
  border-radius: 12px;
`;

const Mbtmi = styled.img`
  width: 200px;
  margin-top: 10px;
`;

const ButtonLogin = styled.div`
  width: 220px;
  height: 30px;
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
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

const ButtonAccount = styled(ButtonLogin)``;

export default Account01;
