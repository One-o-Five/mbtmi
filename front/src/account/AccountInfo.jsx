import { useState } from "react";
import styled from "styled-components";
import mbtmi from "../assets/img/mbtmi.jpg";
import AccountYear from "./AccountYear";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../SignupProvider";

const AccountInfo = () => {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkPassWord, setCheckPassWord] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { formData, setFormData } = useSignup();

  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 20; // 20살 이상만 가능
  const minYear = currentYear - 80; // 80년 전까지 허용
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) =>
    String(maxYear - i)
  );
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const [year, setYear] = useState(String(maxYear));
  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1");
  const [gender, setGender] = useState("남");

  const calculateAge = (year, month, day) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();
    const d = today.getDate() - birthDate.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
      age--;
    }

    return age;
  };

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
  //사진추가용
  // 📌 프로필 이미지 상태
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const preview = reader.result;

      // 로컬 state (현재 화면 미리보기용)
      setProfileImage(file);
      setPreviewUrl(preview);

      // 전역 상태 (다음 페이지에서도 사용)
      setFormData((prev) => ({
        ...prev,
        profile: { file, preview },
      }));
    };
    reader.readAsDataURL(file);
  };

  console.log(year);
  console.log(month);
  console.log(day);

  return (
    <Container>
      <Card>
        <LogoWrapper>
          <Mbtmi src={mbtmi} alt="MBTI Logo" />
        </LogoWrapper>

        <TitleWrapper>회원가입</TitleWrapper>
      </Card>
      <Card>
        <SideLeft>
          <h2>아이디 입력</h2>
          <Input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력해주세요"
          />
          <BtnSmall onClick={IdCheckHandle}>중복체크</BtnSmall>
        </SideLeft>
      </Card>
      <Card>
        <SideLeft>
          <h2>비밀번호 입력</h2>
          <Input
            type="text"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
          />
        </SideLeft>

        <SideLeft>
          <h2>비밀번호 재입력</h2>
          <Input
            type="text"
            value={checkPassWord}
            onChange={(e) => setCheckPassWord(e.target.value)}
            placeholder="비밀번호를 다시한번 입력해주세요"
          />
        </SideLeft>
      </Card>
      <Card>
        <SideLeft>
          <h2>프로필사진 선택</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: "10px" }}
            />
            {previewUrl && <PreviewImage src={previewUrl} alt="미리보기" />}
          </div>
        </SideLeft>
      </Card>
      <Card>
        <SideLeft>
          <h2>이름 입력</h2>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
          />
        </SideLeft>
      </Card>
      <Card>
        <SideLeft>
          <h2>생년월일</h2>
          <Year>
            <AccountYear options={years} value={year} onChange={setYear} />
            <AccountYear options={months} value={month} onChange={setMonth} />
            <AccountYear options={days} value={day} onChange={setDay} />
          </Year>

          <div>
            <h2 style={{ marginTop: "30px" }}>성별</h2>
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
      </Card>
      <Card>
        <ButtonWrapper>
          <BtnLarge
            onClick={() => {
              const age = calculateAge(year, month, day); // ✅ 나이 계산

              setFormData((prev) => ({
                ...prev,
                name: name,
                age: age, // ✅ 나이만 저장
                gender: gender,
              }));

              navigate("/selmbti");
            }}
          >
            다음으로
          </BtnLarge>
        </ButtonWrapper>
      </Card>
      <ButtonWrapper></ButtonWrapper>
    </Container>
  );
};
/* =================== Styled Components =================== */
const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 10px;
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
  margin-bottom: 40px;
`;
const Container = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  font-size: 10pt;
  justify-content: center; /* 세로 중앙 */
  align-items: center; /* 가로 중앙 */
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

//사진 관련
const PreviewImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #a6c1ee;
  margin-top: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 30px;
  color: #000000;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Mbtmi = styled.img`
  width: 200px;
  height: auto;
`;

const SideLeft = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
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
  font-size: 20px;
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
  margin-bottom: 10px;
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
