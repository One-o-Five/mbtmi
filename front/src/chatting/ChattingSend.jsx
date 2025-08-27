import React, { useState } from "react";
import styled from "styled-components";

const ChattingSend = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, id: Date.now() }]);
    setInput("");
  };

  return (
    <ChatContainer>
      <Messages>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </Messages>
      <InputBar>
        <Input
          placeholder="메시지..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <SendButton onClick={sendMessage}>전송</SendButton>
      </InputBar>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Messages = styled.div`
  overflow-y: auto;
`;

const InputBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background: #fff;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background-color: #4f9cff;
  color: white;
  cursor: pointer;
`;

export default ChattingSend;
