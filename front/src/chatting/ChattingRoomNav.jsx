import styled from "styled-components";

const ChattingRoomNav = () => {
  const chat = {
    name: "Chatting",
  };

  return (
    <Nav>
      <Name>{chat.name}</Name>
    </Nav>
  );
};

const Nav = styled.div`
  margin: 20px 10px;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`;

const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 25pt;
`;

export default ChattingRoomNav;
