import { useState } from "react";
import styled from "styled-components";
import mbtmi from "../assets/img/mbtmi.jpg";
import AccountYear from "./AccountYear";

const AccountInfo = () => {
  const [id, setId] = useState(""); // 아이디
  const [passWord, setPassWord] = useState(""); //첫번째 비번
  const [checkPassWord, setCheckPassWord] = useState(""); //두번째 비번
  const [name, setName] = useState(""); //이름

  //생년월일 용입니다.
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  //생년월일 용입니다.
  const [year, setYear] = useState(String(currentYear));
  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1");
  //성별 용입니다.
  const [gender, setGender] = useState("남");

  // ID 중복체크할때 쓰려고 만든 기능입니당 (현재 테스트용)
  const IdCheckHandle = () => {
    if (id === "test") {
      alert("이미 사용 중인 아이디입니다.");
    } else {
      alert("사용 가능한 아이디입니다!");
    }
  };

  // 비밀번호 2번 체크용임
  const checkPassWordBoth = () => {
    if (passWord !== checkPassWord) {
      alert("비밀번호가 다릅니다.");
      return;
    }
  };
  // 화면에 빈칸 있는지? (아이디, 비번, 이름, 생년월일, 성별) (생년-, 성별 일단 보류- 디자인 잡고 가겠습니다.)
  const allCheck = () => {
    if (!id || !passWord || !name) {
      alert("빈칸이 있어요!");
    }
  };
  const Loging = () => {
    checkPassWordBoth();
    allCheck();
  };
  //사진추가용
  // 📌 프로필 이미지 상태
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);

      // 미리보기
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container>
      <CreateAcc>
        <Mbtmi src={mbtmi} alt="MBTI Logo" />
      </CreateAcc>
      <CreateAcc>계정만들기</CreateAcc>
      <SideLeft>
        <h3>아이디 입력</h3>
        <Input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력해주세요"
        />
        <BtnSmall onClick={IdCheckHandle}>중복체크</BtnSmall>
      </SideLeft>
      <SideLeft>
        <h3>비밀번호 입력</h3>
        <Input
          type="text"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
      </SideLeft>
      <SideLeft>
        <h3>비밀번호 재입력</h3>
        <Input
          type="text"
          value={checkPassWord}
          onChange={(e) => setCheckPassWord(e.target.value)}
          placeholder="비밀번호를 다시한번 입력해주세요"
        />
      </SideLeft>
      <SideLeft>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>프로필 사진</h3>
          {previewUrl && <PreviewImage src={previewUrl} alt="미리보기" />}
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </SideLeft>
      <SideLeft>
        <h3>이름 입력</h3>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
        />
      </SideLeft>
      <SideLeft>
        <h3>생년월일</h3>
        <Year>
          <AccountYear options={years} value={year} onChange={setYear} />
          <AccountYear options={months} value={month} onChange={setMonth} />
          <AccountYear options={days} value={day} onChange={setDay} />
        </Year>
        <div>
          <h3>성별</h3>
          <GenderWrapper>
            <GenderLabel>
              <input
                type="radio"
                name="gender"
                value="M"
                checked={gender === "M"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>남</span>
            </GenderLabel>
            <GenderLabel>
              <input
                type="radio"
                name="gender"
                value="F"
                checked={gender === "F"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>여</span>
            </GenderLabel>
          </GenderWrapper>
        </div>
      </SideLeft>
      <CreateAcc>
        <BtnLarge onClick={Loging}>다음으로</BtnLarge>
      </CreateAcc>
    </Container>
  );
};
const FileInput = styled.input`
  margin: 10px 0;
  width: 200px;
  margin-left: 50px;
`;

const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 10px;
  border: 2px solid #a6c1ee;
`;
const GenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const GenderLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 6px; /* 아주 살짝 둥글게 */
  border: 2px solid #a6c1ee; /* 기본 외곽선 색 */
  cursor: pointer;
  font-weight: bold;
  background-color: #fff; /* 기본 배경 */
  color: black; /* 기본 글자 색 */
  transition: all 0.2s;

  input {
    display: none; /* 실제 라디오 숨기기 */
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
  }

  /* 체크되었을 때 배경색과 글자색 변경 */
  input:checked + span {
    background-color: #a6c1ee; /* 선택 시 배경 */
    color: white; /* 글자 색 */
  }

  /* 마우스 호버 시 살짝 강조 */
  &:hover span {
    background-color: #d0b9f5;
  }
`;
// Container for the whole screen
const Year = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
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
const CreateAcc = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center; /* 세로 중앙 */
  margin-bottom: 10px;
`;
const Mbtmi = styled.img`
  width: 200px;
  height: auto;
  margin-top: 10px;
`;
// 사이드 래프트는 각 입력하는애들 옆으로 민것 뿐이에요
const SideLeft = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
const BtnSmall = styled.button`
  // margin-top: 10px;
  // margin-left: 20px;
  margin-bottom: 20px;
  // padding-left: 20px;
  width: 100%;
  hight: 5px;
`;

const BtnLarge = styled.button`
  margin-top: 30px;
  width: 200px;
`;
const Input = styled.input`
  width: 320px;
  padding: 12px 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #a6c1ee;
    box-shadow: 0 0 8px rgba(166, 193, 238, 0.5);
  }
`;
export default AccountInfo;
