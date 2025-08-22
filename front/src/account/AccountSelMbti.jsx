import { useState } from "react";
import styled from "styled-components";
import AccountYear from "./AccountYear";

const AccountSelMbti = () => {
  return (
    <Container>
      <div>
        <Title>MBIT를 입력하세요</Title>
        <Mbti>
          <MbtiIn>E</MbtiIn>
          <MbtiIn>I</MbtiIn>
        </Mbti>
        <Mbti>
          <MbtiIn>S</MbtiIn>
          <MbtiIn>N</MbtiIn>
        </Mbti>
        <Mbti>
          <MbtiIn>T</MbtiIn>
          <MbtiIn>F</MbtiIn>
        </Mbti>
        <Mbti>
          <MbtiIn>J</MbtiIn>
          <MbtiIn>P</MbtiIn>
        </Mbti>
      </div>
      <LineText>
        <hr />
        <span>안녕하세요</span>
        <hr />
      </LineText>
      <div>a</div>
    </Container>
  );
};
const Title = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center; /* 세로 중앙 */
  margin-top: 20px;
  font-size: 25px; /* 글자 크기 */
`;
const Mbti = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center; /* 세로 중앙 */
`;
const MbtiIn = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center; /* 세로 중앙 */
  width: 50px; /* 각 MBTI 박스 크기 */
  height: 50px; /* 각 MBTI 박스 크기 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 5px; /* 둥근 모서리 */
  margin: 5px; /* 간격 */
  font-size: 20px; /* 글자 크기 */
  background-color: #f0f0f0; /* 배경색 */
  cursor: pointer; /* 마우스 커서 변경 */
  transition: background-color 0.3s; /* 배경색 변화 애니메이션 */
  &:hover {
    background-color: #e0e0e0; /* 호버 시 배경색 변화 */
  }
  &.selected {
    background-color: #a6c1ee; /* 선택된 상태의 배경색 */
    color: white; /* 선택된 상태의 글자색 */
  }
  &.disabled {
    background-color: #d0d0d0; /* 비활성화된 상태의 배경색 */
    color: #a0a0a0; /* 비활성화된 상태의 글자색 */
    cursor: not-allowed; /* 마우스 커서 변경 */
  }
`;

// 줄긋기
const LineText = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  hr {
    flex: 1;
    border: none;
    border-bottom: 1px solid #ccc;
  }

  span {
    margin: 0 10px;
    color: #555;
  }
`;
const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //   align-items: center;
  font-size: 10pt;
  padding-top: 20px;
`;

export default AccountSelMbti;
