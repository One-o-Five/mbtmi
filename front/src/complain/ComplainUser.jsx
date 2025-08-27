import styled from "styled-components";

const ComplainUser = () => {
  const complainpage = {
    name: "관리자 페이지",
    list: "⚠신고자 목록",
  };

  const userpage = [
    { user: "슬픈증후군", email: "sad@gmail.com" },
    { user: "짜파게티쿠다사이", email: "zzapa@gmail.com" },
    { user: "곽여름", email: "summer@gmail.com" },
    { user: "kwak", email: "king@gmail.com" },
    { user: "min", email: "queen@gmail.com" },
    { user: "ju", email: "wow@gmail.com" },
  ];

  return (
    <Container>
      <ListBox>
        <Name>{complainpage.name}</Name>
        <List>{complainpage.list}</List>
      </ListBox>
      <User>
        {userpage.map((item, index) => (
          <UserButton key={index}>
            <NameText>{item.user}</NameText>
            <Email>{item.email}</Email>
          </UserButton>
        ))}
      </User>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; /* 화면 정가운데 */
  overflow-y: hidden;
  width: 100vw;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const ListBox = styled.div`
  padding-top: 10%;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column; /* 세로 배치 */
  align-items: center;
  gap: 10px;
`;

const NameText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Email = styled.span`
  flex: 0.6;
  text-align: center; /* 중간 정렬 */
  font-size: 14px;
  color: #444;
`;

const Name = styled.div`
  font-size: 20pt;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3); /* 아래 구분선 */
`;

const List = styled.div`
  font-size: 15pt;
  color: #625f5c;
`;

const User = styled.div`
  font-size: 10pt;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.3); /* 위 구분선 */
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양 끝으로 배치 */
  width: 300px; /* 버튼 크기 고정 (원하는 크기로 조절 가능) */
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  background-color: #ffffffaa;
  cursor: pointer;
  font-size: 10pt;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.05);
  }
`;

export default ComplainUser;
