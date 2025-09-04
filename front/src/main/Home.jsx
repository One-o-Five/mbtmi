import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import logoimage from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
  padding-top: 60px;
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
  box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff; /* 뉴모피즘 음각 효과 */
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
  box-shadow: 4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff;
  transition: all 0.2s ease;

  &:active {
    box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff; /* 눌림 효과 */
    transform: scale(0.95);
  }
`;
const CardWrapper = styled.div`
  overflow: hidden; // 화면 밖 카드 숨김
`;

const CardSlide = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => -props.index * 100}%);
`;

const CardItem = styled.div`
  width: 100%; // 부모 폭에 맞춤
  flex-shrink: 0; // 카드가 줄어들지 않음
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [randomUsers, setRandomUsers] = useState([]); // 랜덤 유저 50명 배열
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 카드 인덱스

  const profile = {
    btn: ["❤️", "❌"],
  };

  useEffect(() => {
    // 1️⃣ 현재 로그인한 유저 정보 가져오기
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get("/api/check-session");
        if (res.data.loggedIn) {
          setCurrentUser(res.data.user); // currentUser 세팅
        }
      } catch (err) {
        console.error("세션 체크 실패:", err);
      }
    };

    fetchCurrentUser();
  }, []);

  // 랜덤 유저 50명 가져오기
  const fetchRandomUsers = async () => {
    if (!currentUser) return;
    try {
      const res = await axios.get(`/api/users/random/${currentUser.user_id}`);
      setRandomUsers(res.data);
      setCurrentIndex(0);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (currentUser) fetchRandomUsers();
  }, [currentUser]);

  //단일카드용 이었음
  // const currentRandomUser = randomUsers[currentIndex];

  const handleNext = async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= randomUsers.length) {
      try {
        const res = await axios.get(`/api/users/random/${currentUser.user_id}`);
        setRandomUsers(res.data);
        setCurrentIndex(0); // 새 데이터 첫 카드부터 시작
      } catch (err) {
        console.error(err);
      }
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <Container>
      <LogoImage
        src={logoimage}
        alt=""
        style={{ userSelect: "none", WebkitUserDrag: "none" }}
      />
      <CardWrapper>
        <CardSlide index={currentIndex}>
          {randomUsers.map((user) => (
            <CardItem key={user.user_id}>
              <Card>
                <div>
                  <ProfileImage src={user.photo_url} alt="profile" />
                  <Name>이름: {user.name}</Name>
                  <p>MBTI: {user.mbti}</p>
                  <p>자기소개: {user.self_intro}</p>
                </div>
                {/* // 백엔드에서 받아온 태그 중 SELF 타입만 필터링 */}
                <TagList>
                  {user.tags
                    .filter((tag) => tag.type === "SELF") // SELF 타입만
                    .map((tag) => (
                      <Tag key={tag.tag_id}>#{tag.tag_name}</Tag>
                    ))}
                </TagList>
                {/* <Btn onClick={handleNext}>Next</Btn> */}
                <Btns onClick={handleNext}>
                  {profile.btn.map((btn, index) => (
                    <Btn key={index}>{btn}</Btn>
                  ))}
                </Btns>
              </Card>
            </CardItem>
          ))}
        </CardSlide>
      </CardWrapper>

      {/* ✅ 하단 네비 */}
      <BottomNav>
        <NavBtn>🏠</NavBtn>
        <NavBtn>🔍</NavBtn>
        <NavBtn>❤️</NavBtn>
        <NavBtn>➕</NavBtn>
        <NavBtn onClick={() => navigate("/mypage")}>🔔</NavBtn>
      </BottomNav>
    </Container>
  );
};

export default Home;
