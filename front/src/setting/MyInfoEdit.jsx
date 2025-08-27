import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";
import { useState } from "react";

const MyInfoEdit = () => {
  const myinfo = {
    page: "내 프로필 수정",
    name: "유지민",
    id: "ID : u_jimin",
    email: "e-mail : ujim@naver.com",
  };

  const btn = {
    edit: "수정 완료",
  };

  const [form, setForm] = useState({
    id: "u_jimin",
    pw: "********",
    photo: "",
    email: "ujim@naver.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container>
      <Info>
        <Page>{myinfo.page}</Page>
        <ProfileBlock>
          <Me>
            <ProfileImage
              src={profileimage}
              alt=""
              style={{ userSelect: "none", WebkitUserDrag: "none" }}
            />
            <Name>{myinfo.name}</Name>
            <Id>{myinfo.id}</Id>
            <Mail>{myinfo.email}</Mail>
          </Me>
          <Edit>
            <Label>아이디</Label>
            <Input
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
            />

            <Label>비밀번호</Label>
            <Input
              type="password"
              name="pw"
              value={form.pw}
              onChange={handleChange}
            />

            <Label>프로필 사진</Label>
            <Input
              type="file"
              name="photo"
              onChange={(e) =>
                setForm({ ...form, photo: e.target.files[0]?.name || "" })
              }
            />
            <Label>이메일</Label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Edit>
          <Button>{btn.edit}</Button>
        </ProfileBlock>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; /* 화면 정가운데 */
  overflow-y: hidden;
  width: 100vw;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배치 */
  align-items: center;
  gap: 20px;
`;

const Page = styled.div`
  font-size: 20pt;
  font-weight: bold;
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const Name = styled.div`
  font-size: 12pt;
  font-weight: bold;
`;

const Me = styled.div`
  font-size: 10pt;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3); /* 위 구분선 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3); /* 아래 구분선 */
`;

const Id = styled.div`
  opacity: 0.8;
`;

const Mail = styled.div`
  font-size: 9pt;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  background-color: #ffffffaa;
  cursor: pointer;
  font-size: 12pt;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.05);
  }
`;

const Edit = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  font-size: 12pt;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3); /* 아래 구분선 */
`;

const Label = styled.label`
  font-size: 10pt;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #aaa;
  font-size: 10pt;
`;

const ProfileImage = styled.img`
  padding: 0px 40px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
`;

export default MyInfoEdit;
