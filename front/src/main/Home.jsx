import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import logoimage from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */

  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative; /* 🔥 하단 네비 절대위치 기준 */
  padding-top: 60px
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
  max-width: 350px;
  padding: 24px;
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
    margin-bottom: 80px; 
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

/* ✅ 하단 네비게이션 */
const BottomNav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ecf0f3; /* 밝은 회색톤 */
  padding: 12px 0 calc(env(safe-area-inset-bottom, 0) + 12px);

  display: flex;
  justify-content: space-evenly;

  border-radius: 20px 20px 0 0; /* 위쪽만 둥글게 */
  box-shadow: inset 4px 4px 8px #d1d9e6,
              inset -4px -4px 8px #ffffff; /* 뉴모피즘 음각 효과 */
`;

const NavBtn = styled.button`
  appearance: none;
  border: none;
  background: #ecf0f3;
  font-size: 24px;
  padding: 10px;
  border-radius: 16px;
  cursor: pointer;

  /* 뉴모피즘 버튼 */
  box-shadow: 4px 4px 8px #d1d9e6,
              -4px -4px 8px #ffffff;
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset 4px 4px 8px #d1d9e6,
                inset -4px -4px 8px #ffffff; /* 눌림 효과 */
    transform: scale(0.95);
  }
`;

const Home = () => {
  const navigate = useNavigate();
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

      {/* ✅ 하단 네비 */}
      <BottomNav>
        <NavBtn>🏠</NavBtn>
        <NavBtn>🔍</NavBtn>
        <NavBtn>❤️</NavBtn>
        <NavBtn>➕</NavBtn>
        <NavBtn onClick={() => navigate("/mypage")} >🔔</NavBtn>
      </BottomNav>
    </Container>
  );
};

export default Home;
