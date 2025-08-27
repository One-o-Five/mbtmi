import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";

const Chatting = () => {
  const messages = [
    { id: 1, name: "유지민", text: "안녕! 잘 지내?", type: "received" },
    { id: 2, name: "민주", text: "응, 너는?", type: "sent" },
    { id: 3, name: "유지민", text: "오늘 날씨 너무 좋다!", type: "received" },
    { id: 4, name: "민주", text: "맞아, 산책 가야겠다.", type: "sent" },
  ];

  return (
    <Container>
      {messages.map((msg) => (
        <ChatBlock key={msg.id} type={msg.type}>
          {msg.type === "received" && (
            <ProfileImage src={profileimage} alt={msg.name} />
          )}
          <Message type={msg.type}>
            <Text>{msg.text}</Text>
          </Message>
          {msg.type === "sent"}
        </ChatBlock>
      ))}
    </Container>
  );
};

/* ===== styled components ===== */

const Container = styled.div`
  min-height: 100dvh;
  width: 100%;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  box-sizing: border-box;
  gap: 10px;
  overflow-y: hidden;
`;

const ChatBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  justify-content: ${(props) =>
    props.type === "sent" ? "flex-end" : "flex-start"};
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`;

const Message = styled.div`
  max-width: 60%;
  background: ${(props) => (props.type === "sent" ? "#a6c1ee" : "#ffffffa6")};
  color: ${(props) => (props.type === "sent" ? "#fff" : "#333")};
  padding: 8px 12px;
  border-radius: 15px;
  border-top-left-radius: ${(props) => (props.type === "sent" ? "15px" : "0")};
  border-top-right-radius: ${(props) => (props.type === "sent" ? "0" : "15px")};
  word-wrap: break-word;
`;

const Text = styled.span`
  font-size: 10pt;
`;

export default Chatting;
