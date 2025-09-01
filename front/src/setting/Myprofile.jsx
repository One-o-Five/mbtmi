import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth } from "../main/AuthContext";
import profileimage from "../assets/img/kar.jpg";
import { useNavigate } from "react-router-dom";

const Myprofile = () => {
  const { user, updateUser } = useAuth(); // updateUser 가져오기
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  // 유저 정보가 로드되면 form 상태에 넣기
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        username: user.username || "",
        password: user.password || "",
        email: user.email || "",
      });
    }
  }, [user]);

  // input 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 수정 버튼 클릭 시
  const handleUpdate = async () => {
    const success = await updateUser(form); // 서버, 세션, 전역 상태 갱신
    if (success) {
      alert("프로필이 업데이트되었습니다!");
    } else {
      alert("업데이트에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Card>
        <ProfileSection>
          <ProfileImage src={profileimage} alt="프로필 이미지" draggable="false" />

          <Label>
            이름:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Label>

          <Label>
            ID:
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </Label>

          <Label>
            PW:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </Label>

          <Label>
            이메일:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Label>

          <ActionButton onClick={handleUpdate}>수정하기</ActionButton>
        </ProfileSection>
      </Card>
    </Container>
  );
};

// Label 컴포넌트 추가 (스타일링)
const Label = styled.div`
  font-size: 14pt;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
  input {
    margin-left: 10px;
    padding: 5px 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 12pt;
    width: 180px;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  width: 100vw;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #a6c1ee, #fbc2eb);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

export default Myprofile;
