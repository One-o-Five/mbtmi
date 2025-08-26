import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";

const ChattingMain = () => {
  const chatting = {
    name: "유지민",
    content: "안녕하세요!",
    date: "1일전",
  };

  return (
    <Container>
      <ProfileBlock>
        <ProfileImage
          src={profileimage}
          alt=""
          style={{ userSelect: "none", WebkitUserDrag: "none" }}
        />
        <Chat>
          <Name>{chatting.name}</Name>
          <Content>{chatting.content}</Content>
          <Date>{chatting.date}</Date>
        </Chat>
      </ProfileBlock>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  overflow-y: hidden;
  width: 100vw;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`;

const Chat = styled.h2`
  font-size: 10pt;
`;

const Name = styled.div`
  font-size: 10pt;
`;

const Content = styled.div`
  opacity: 80%;
`;

const Date = styled.div`
  font-size: 5pt;
`;

const ProfileImage = styled.img`
  padding: 0px 15px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

export default ChattingMain;
