import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth } from "../main/AuthContext";
import profileimage from "../assets/img/kar.jpg";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const [name, setName] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      try {
        await logout(); // AuthContext에 있는 logout 실행
        navigate("/account01", { replace: true }); // 로그인 페이지로 이동
      } catch (e) {
        console.error(e.message);
      }
    } else {
      console.log("로그아웃 취소됨");
    }
  };

  const editpage = {
    mbti: "나의 MBTI 수정하기",
    introduce: "나의 소개 수정하기",
    hobby: "나의 취미 수정하기",
    partner: "원하는 상대 정보 수정하기",
  };

  const btn = {
    edit: "프로필 수정",
    logout: "로그아웃",
    bye: "회원탈퇴",
  };

  return (
    <Container>
      <Card>
        <ProfileSection>
          <ProfileImage
            src={profileimage}
            alt="프로필 이미지"
            draggable="false"
          />
          <Name>이름: {user.name}</Name>
          <Id>아이디: {user.username}</Id>
          <Mail>이메일: {user.email || "이메일 미등록"}</Mail>
          <Mbti> MBTI: {user.mbti}</Mbti>
        </ProfileSection>

        <ButtonSection>
          <ActionButton onClick={() => navigate("/mypage/profile")}>{btn.edit}</ActionButton>
          <EditList>
            <EditButton onClick={() => navigate("/mypage/mymbti")}>
              {editpage.mbti}
            </EditButton>
            <EditButton onClick={() => navigate("/mypage/myintro")}>{editpage.introduce}</EditButton>
            <EditButton onClick={() => navigate("/mypage/myhobby")}>{editpage.hobby}</EditButton>
            <EditButton onClick={() => navigate("/mypage/wantedinfor")}>{editpage.partner}</EditButton>
          </EditList>
        </ButtonSection>

        <BottomActions>
          <DangerButton onClick={handleLogout}>{btn.logout}</DangerButton>
          <DangerButton>{btn.bye}</DangerButton>
        </BottomActions>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; /* 화면 정가운데 */
  overflow-y: hidden;
  width: 100vw;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//
const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(135deg, #fbc2eb, #a6c1ee);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 16pt;
  color: #000000;
  font-weight: bold;
`;

const Id = styled.div`
  font-size: 11pt;
  color: #000000;
`;

const Mail = styled.div`
  font-size: 10pt;
  color: #000000;
  opacity: 0.9;
`;

const Mbti = styled.div`
  font-size: 15.5pt;
  color: #000000;
  font-weight: bold;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin: 15px 0;
`;

const ActionButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #a6c1ee, #fbc2eb);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 11pt;

  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

const EditList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EditButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffffff55;
  background-color: #ffffff33;
  color: #fff;
  font-size: 11pt;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffffff66;
    transform: translateY(-2px);
  }

  
`;

const BottomActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
`;

const DangerButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  background: #ff6b6bcc;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff6b6b;
    transform: scale(1.05);
  }
`;

export default MyInfo;
