import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import mainLogo from "../assets/img/mainLogo.jpg";
import mbtmi from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";



const Account01 = () => {
  const [showClouds, setShowClouds] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClouds(false);
    }, 2000); // <-- Change this to 3000ms

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Container>
      {showClouds && (
        <CloudOverlay>
          <Cloud />
          <Cloud />
          <Cloud />
          <Cloud />
        </CloudOverlay>
      )}

      {!showClouds && (
        <>
          <div>
            <Logo src={mainLogo} alt="Main Logo" />
          </div>
          <div>
            <Mbtmi src={mbtmi} alt="MBTI Logo" />
          </div>
          <ButtonLogin>
            <button onClick={() => navigate("/login")}>로그인</button>
          </ButtonLogin>
          <ButtonAccount>
            <button>회원가입</button>
          </ButtonAccount>
        </>
      )}
    </Container>
  );
};

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
    display: none;
  }
`;

// Container for the whole screen
const Container = styled.div`
  height: 100dvh; /* min-height를 height로 변경 */
  width: 100vw;
  overflow: hidden; /* x축만이 아닌 모든 방향의 스크롤을 숨깁니다 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; /* flex-start -> center로 변경하여 수직 중앙 정렬 */
  align-items: center;
  /* padding-top: 50px; <-- 이 줄을 삭제합니다 */
`;

// Cloud component with animation
const CloudOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  animation: ${fadeOut} 3s ease-in-out forwards; /* <-- Change this to 3s */
`;

// Individual bubble styles
const Cloud = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3); /* 반투명 흰색 */
  border: 2px solid rgba(255, 255, 255, 0.6); /* 외곽선으로 비눗방울 느낌 */
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.4),
    0 0 20px rgba(173, 216, 230, 0.2); /* 은은한 광택 효과 */
  backdrop-filter: blur(3px); /* 배경 흐림 효과로 유리 느낌 */
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

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-top: 60px;
  border-radius: 12px;
  position: relative;
  display: block;
  overflow: hidden;
`;

const Mbtmi = styled.img`
  width: 200px;
  height: auto;
  margin-top: 10px;
`;

const ButtonLogin = styled.div`
  margin-top: 35px;
`;

const ButtonAccount = styled.div`
  margin-top: 30px;
`;

// Define the fade-out animation


export default Account01;
