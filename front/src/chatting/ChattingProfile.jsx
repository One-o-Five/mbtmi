import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import blockicon from "../assets/img/ban.png";
import closeicon from "../assets/img/offpage.png";
import complainicon from "../assets/img/alert.png";

const ChattingProfile = () => {
  const profile = {
    name: "유지민",
    message: "안녕하세요",
    btn: "채팅하기",
  };

  return (
    <Container>
      <Card>
        {/* 우측 상단 아이콘 버튼 영역 */}
        <TopRight>
          <IconButton>
            <IconImg src={blockicon} alt="차단" />
          </IconButton>
          <IconButton>
            <IconImg src={closeicon} alt="닫기" />
          </IconButton>
        </TopRight>

        <ProfileImage
          src={profileimage}
          alt=""
          style={{ userSelect: "none", WebkitUserDrag: "none" }}
        />

        <NameRow>
          <Name>{profile.name}</Name>
          <IconButton>
            <IconImg src={complainicon} alt="신고" />
          </IconButton>
        </NameRow>

        <Message>{profile.message}</Message>
        <Btns>
          <Btn>{profile.btn}</Btn>
        </Btns>
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
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Message = styled.div`
  font-size: 20px;
`;

const Btns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Btn = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
`;

const Card = styled.div`
  width: 220px;
  padding: 30px;
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
  gap: 10px;
`;

const TopRight = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.25);
  border: none;
  border-radius: 50%;
  padding: ${(props) => (props.small ? "4px" : "6px")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
`;

const IconImg = styled.img`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  object-fit: cover;
`;

export default ChattingProfile;
