import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";

const Activity = () => {
  const profile = {
    name: "유지민",
    activity: "유지민님께 하트를 보냈습니다.",
    btn: "하트 보내기",
  };

  return (
    <Container>
      <ProfileBlock>
        <ProfileImage
          src={profileimage}
          alt=""
          style={{ userSelect: "none", WebkitUserDrag: "none" }}
        />
        <Give>
          {profile.name} <br /> {profile.activity}
        </Give>
        <Btn>{profile.btn}</Btn>
      </ProfileBlock>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  position: relative;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`;

const Give = styled.h2`
  margin-left: 10px;
  font-size: 10pt;
`;

const ProfileImage = styled.img`
  padding: 0px 15px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

const Btn = styled.button`
  margin-left: 20px;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  opacity: 80%;
`;

export default Activity;
