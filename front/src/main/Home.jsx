import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import logoimage from "../assets/img/mbtmi.jpg";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  overflow-y: hidden;

  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const LogoImage = styled.img`
  position: absolute;
  top: 0px;
  left: 30px;
  object-fit: cover;
  width: 150px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border-radius: 20px;

  /* 투명 유리 효과 */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);

  /* 은은한 테두리 */
  border: 1px solid rgba(255, 255, 255, 0.4);

  /* 유리 위에 빛 반사 느낌 */
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );

  /* 그림자 (유리의 입체감) */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 80%;
  border-radius: 20px;
  object-fit: cover;
`;

const Name = styled.h2`
  font-size: 1.5rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Tag = styled.span`
  background: #fbc2eb;
  color: #333;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
`;

const Btns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Btn = styled.span`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 30px;
`;

const Home = () => {
  const profile = {
    name: "유지민",
    age: 26,
    mbti: "ENFP",
    tags: [
      "집순이_집돌이",
      "여행_좋아함",
      "반려동물",
      "책읽기_취미",
      "운동하는_사람",
      "아침형인간",
    ],
    btn: ["❤️", "❌"],
  };

  return (
    <Container>
      <LogoImage
        src={logoimage}
        alt=""
        style={{ userSelect: "none", WebkitUserDrag: "none" }}
      />
      <Card>
        {/* <ProfileImage src={profile.imageUrl} /> */}
        <ProfileImage
          src={profileimage}
          alt=""
          style={{ userSelect: "none", WebkitUserDrag: "none" }}
        />
        <Name>
          {profile.name} ({profile.age}) / {profile.mbti}
        </Name>
        <TagList>
          {profile.tags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </TagList>
        <Btns>
          {profile.btn.map((btn, index) => (
            <Btn key={index}>{btn}</Btn>
          ))}
        </Btns>
      </Card>
    </Container>
  );
};

export default Home;
