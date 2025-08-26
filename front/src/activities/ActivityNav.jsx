import styled from "styled-components";

const ActivityNav = () => {
  const like = {
    name: "Like💜",
  };

  const activityGiveTake = {
    btn: ["보낸 내역", "받은 내역"],
  };

  return (
    <Nav>
      <Name>{like.name}</Name>
      <Btns>
        {activityGiveTake.btn.map((btn, index) => (
          <Btnb key={index}>{btn}</Btnb>
        ))}
      </Btns>
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

const Btns = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Btnb = styled.button`
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  opacity: 80%;
`;

export default ActivityNav;
