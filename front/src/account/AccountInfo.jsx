import { useState } from "react";
import styled from "styled-components";
import mbtmi from "../assets/img/mbtmi.jpg";
import AccountYear from "./AccountYear";
import { useNavigate } from "react-router-dom";

const AccountInfo = () => {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkPassWord, setCheckPassWord] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const [year, setYear] = useState(String(currentYear));
  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1");
  const [gender, setGender] = useState("남");

  const IdCheckHandle = () => {
    if (id === "test") {
      alert("이미 사용 중인 아이디입니다.");
    } else {
      alert("사용 가능한 아이디입니다!");
    }
  };

  const checkPassWordBoth = () => {
    if (passWord !== checkPassWord) {
      alert("비밀번호가 다릅니다.");
      return false; // ❌ 불일치 → 실패
    }
    return true; // ✅ 일치 → 성공
  };

  const allCheck = () => {
    if (!id || !passWord || !name) {
      alert("빈칸이 있어요!");
      return false; // ❌ 실패
    }
    return true; // ✅ 성공
  };

  const Loging = () => {
    const pwOk = checkPassWordBoth(); // true/false
    const allOk = allCheck(); // true/false

    if (pwOk && allOk) {
      navigate("/AccountSelMbti"); // 조건 통과 시 이동
    }
  };

  return (
    <Container>
      <LogoWrapper>
        <Mbtmi src={mbtmi} alt="MBTI Logo" />
      </LogoWrapper>

      <TitleWrapper>회원가입</TitleWrapper>

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

      <ButtonWrapper>
        <BtnLarge onClick={Loging}>다음으로</BtnLarge>
      </ButtonWrapper>

      <ButtonWrapper></ButtonWrapper>
    </Container>
  );
};

/* =================== Styled Components =================== */
const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  font-size: 10pt;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 30px;

  color: #000000;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Mbtmi = styled.img`
  width: 200px;
  height: auto;
  margin-top: 10px;
`;

const SideLeft = styled.div`
  padding: 0 20px;
`;

const BtnSmall = styled.button`
  margin: 15px auto 20px auto; /* 좌우 margin auto */
  display: block; /* block 요소여야 auto가 적용됨 */
  width: 220px;
  height: 50px; /* 높이 지정해서 버튼 크기 통일 */
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.3s ease;

  /* 텍스트 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`;

const BtnLarge = styled.button`
  width: 220px;
  height: 50px; /* 높이 지정해서 버튼 크기 통일 */
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.3s ease;

  /* 텍스트 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
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

const Year = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
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
  border-radius: 6px;
  border: 2px solid #a6c1ee;
  cursor: pointer;
  font-weight: bold;
  background-color: #fff;
  color: black;
  transition: all 0.2s;

  input {
    display: none;
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
  }

  input:checked + span {
    background-color: #a6c1ee;
    color: white;
  }

  &:hover span {
    background-color: #d0b9f5;
  }
`;

export default AccountInfo;
