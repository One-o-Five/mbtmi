import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../main/AuthContext";
import { useSignup } from "../SignupProvider";
import axios from "axios";

/* ======================== 공통 스타일 ======================== */

const Container = styled.div`
  min-height: 100dvh;
  width: 100%;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
`;

const TagTitle = styled.div`
  font-size: 18px;
  margin: 20px 0 10px;
  font-weight: bold;
  color: #444;
  text-align: center;
`;

const TagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 600px;
  width: 100%;
`;

const TagButton = styled.button`
  padding: 12px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => (props.selected ? "#a6c1ee" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  box-shadow: ${(props) =>
    props.selected
      ? "inset 3px 3px 6px rgba(0,0,0,0.2)"
      : "2px 2px 8px rgba(0,0,0,0.15)"};
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => (props.selected ? "#8aa9e6" : "#f7f7f7")};
  }
`;

const NextButton = styled.button`
  width: 220px;
  padding: 12px;
  margin-top: 20px;
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
  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`;

const SelectedText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

const Mbti = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// MBTI 버튼 스타일
const MbtiIn = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${(props) => (props.selected ? "#a6c1ee" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.selected ? "#a6c1ee" : "#e0e0e0")};
  }
`;

const Input = styled.input`
  text-align: center;
  width: 100px;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 20px;
  margin-right: 10px;
`;

const PersonMBTI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  input,
  button {
    height: 50px; /* 높이를 동일하게 */
    font-size: 18px; /* 글자 크기 맞춤 */
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0 15px; /* 내부 여백 */
    box-sizing: border-box;
  }

  button {
    margin-left: 10px;
    cursor: pointer;
    background-color: #a6c1ee;
    color: white;
    transition: background-color 0.3s;
    &:hover {
      background-color: #6b90d9;
    }
  }
`;
/* ======================== Step 1: 상대 MBTI ======================== */
const StepMbti = ({ onNext, onPrev, selectedMbti, setSelectedMbti }) => {
  const { user } = useAuth();
  const [mbti, setMbti] = useState({
    EI: "",
    SN: "",
    TF: "",
    JP: "",
  });

  // ✅ 기존 선택값 불러오기 (뒤로 갔다가 다시 올 때 유지되도록)
  useEffect(() => {
    // selectedMbti가 있으면 우선 적용

    // selectedMbti 없으면 user.desired_mbti 적용
    user?.desired_mbti;
    const [EI, SN, TF, JP] = user.desired_mbti.split("");
    setMbti({ EI, SN, TF, JP });
    // 상위 state에도 세팅해주고 싶으면
    setSelectedMbti(user.desired_mbti);
  }, [selectedMbti, user]);

  // ✅ 선택 핸들러
  const handleMbtiSelect = (category, value) => {
    setMbti((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }));
  };

  // ✅ 다음 버튼 클릭 시 상위 state에 저장
  const handleNext = () => {
    const newMbti = `${mbti.EI}${mbti.SN}${mbti.TF}${mbti.JP}`;
    if (newMbti.length !== 4) {
      alert("MBTI 4글자를 모두 선택해주세요!");
      return;
    }
    setSelectedMbti(newMbti);
    onNext();
  };

  return (
    <Container>
      <Title>원하는 상대방의 MBTI</Title>

      {/* E / I */}
      <Mbti>
        <MbtiIn
          selected={mbti.EI === "E"}
          onClick={() => handleMbtiSelect("EI", "E")}
        >
          E
        </MbtiIn>
        <MbtiIn
          selected={mbti.EI === "I"}
          onClick={() => handleMbtiSelect("EI", "I")}
        >
          I
        </MbtiIn>
      </Mbti>

      {/* S / N */}
      <Mbti>
        <MbtiIn
          selected={mbti.SN === "S"}
          onClick={() => handleMbtiSelect("SN", "S")}
        >
          S
        </MbtiIn>
        <MbtiIn
          selected={mbti.SN === "N"}
          onClick={() => handleMbtiSelect("SN", "N")}
        >
          N
        </MbtiIn>
      </Mbti>

      {/* T / F */}
      <Mbti>
        <MbtiIn
          selected={mbti.TF === "T"}
          onClick={() => handleMbtiSelect("TF", "T")}
        >
          T
        </MbtiIn>
        <MbtiIn
          selected={mbti.TF === "F"}
          onClick={() => handleMbtiSelect("TF", "F")}
        >
          F
        </MbtiIn>
      </Mbti>

      {/* J / P */}
      <Mbti>
        <MbtiIn
          selected={mbti.JP === "J"}
          onClick={() => handleMbtiSelect("JP", "J")}
        >
          J
        </MbtiIn>
        <MbtiIn
          selected={mbti.JP === "P"}
          onClick={() => handleMbtiSelect("JP", "P")}
        >
          P
        </MbtiIn>
      </Mbti>

      {/* <SelectedText>
        <Input
          type="text"
          value={`${mbti.EI}${mbti.SN}${mbti.TF}${mbti.JP}`} // 순서대로 합치기
          readOnly // 사용자가 직접 수정하지 못하도록
        />
      </SelectedText> */}

      <PersonMBTI>
        <Input
          type="text"
          value={`${mbti.EI}${mbti.SN}${mbti.TF}${mbti.JP}`} // 순서대로 합치기
          readOnly // 사용자가 직접 수정하지 못하도록
        />
        {/* <button onClick={handleNext}>수정하기</button> */}
      </PersonMBTI>

      <NextButton onClick={handleNext}>다음</NextButton>
      <NextButton onClick={onPrev}>이전</NextButton>
    </Container>
  );
};

/* ======================== Step 2: 원하는 성격 ======================== */
const tagsPersonality = [
  "#활발한",
  "#차분한",
  "#진지한",
  "#유머러스한",
  "#논리적인",
  "#즉흥적인",
  "#내향적인",
  "#외향적인",
  "#열정적인",
];
const tagsEmotion = [
  "#감정적인",
  "#솔직한",
  "#애교많은",
  "#쿨한",
  "#신중한",
  "#허세없는",
  "#다정한",
  "#따뜻한",
  "#센스있는",
];
const tagsUnique = [
  "#엉뚱한",
  "#창의적인",
  "#독립적인",
  "#낙천적인",
  "#분석적인",
  "#모험적인",
  "#츤데레",
  "#얀데레",
  "#자유로운",
];

const StepWantedIntro = ({ onNext, onPrev, selectedTags, setSelectedTags }) => {
  const { formData, setFormData } = useSignup();

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 6) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      alert("최대 6개까지만 선택할 수 있어요!");
    }
  };

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get("api/wanted/tags?type=DESIRED", {
          withCredentials: true,
        });
        console.log("React -> 서버 응답 확인:", res.data);
        if (res.data) {
          // 서버에서 받은 태그 이름만 배열로 저장
          const tagNames = res.data.map((tag) => tag.tag_name);
          setFormData((prev) => ({
            ...prev,
            introTags: tagNames,
          }));
        }
      } catch (err) {
        console.error("DESIRED tags 불러오기 실패:", err);
      }
    };
    fetchTags();
  }, [setFormData]);

  return (
    <Container>
      <Title>당신이 원하는 상대는?</Title>
      <TagTitle>성격 · 태도</TagTitle>
      <TagsWrapper>
        {tagsPersonality.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedTags.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <TagTitle>감정 · 표현</TagTitle>
      <TagsWrapper>
        {tagsEmotion.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedTags.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <TagTitle>독특한 매력</TagTitle>
      <TagsWrapper>
        {tagsUnique.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedTags.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <SelectedText>선택된 태그: {selectedTags.join(", ")}</SelectedText>
      <NextButton onClick={onNext}>다음</NextButton>
      <NextButton onClick={onPrev}>이전</NextButton>
    </Container>
  );
};

/* ======================== Step 3: 원하는 취미 ======================== */
const activeHobbies = [
  "#등산",
  "#여행",
  "#자전거",
  "#러닝",
  "#댄스",
  "#수영",
  "#헬스",
  "#볼링",
  "#스포츠관람",
  "#캠핑",
  "#서핑",
  "#클라이밍",
  "#농구",
  "#축구",
  "#방탈출",
];
const passiveHobbies = [
  "#영화보기",
  "#드라마",
  "#넷플릭스",
  "#유튜브",
  "#독서",
  "#요리하기",
  "#베이킹",
  "#악기연주",
  "#사진찍기",
  "#보드게임",
  "#명상",
  "#그림그리기",
  "#수다",
  "#멍때리기",
  "#산책하기",
];

const StepWantedHobby = ({
  onNext,
  onPrev,
  selectedHobbies,
  setSelectedHobbies,
}) => {
  const toggleTag = (tag) => {
    if (selectedHobbies.includes(tag)) {
      setSelectedHobbies(selectedHobbies.filter((t) => t !== tag));
    } else if (selectedHobbies.length < 6) {
      setSelectedHobbies([...selectedHobbies, tag]);
    } else {
      alert("최대 6개까지만 선택할 수 있어요!");
    }
  };

  return (
    <Container>
      <Title>상대의 이런 취미를 원해요!</Title>
      <TagTitle>밖에서 즐기는</TagTitle>
      <TagsWrapper>
        {activeHobbies.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedHobbies.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <TagTitle>집에서 즐기는</TagTitle>
      <TagsWrapper>
        {passiveHobbies.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedHobbies.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <SelectedText>선택된 취미: {selectedHobbies.join(", ")}</SelectedText>
      <NextButton onClick={onNext}>완료</NextButton>
      <NextButton onClick={onPrev}>이전</NextButton>
    </Container>
  );
};

/* ======================== 최상위 Flow ======================== */
const WantedInfor = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // 최상위 state
  const [wantedMbti, setWantedMbti] = useState(null);
  const [wantedTags, setWantedTags] = useState([]);
  const [wantedHobbies, setWantedHobbies] = useState([]);

  const goNext = () => {
    if (step === 3) {
      console.log("최종 데이터:", { wantedMbti, wantedTags, wantedHobbies });
      navigate("/mypage");
    } else {
      setStep(step + 1);
    }
  };

  const goPrev = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      {step === 1 && (
        <StepMbti
          onNext={goNext}
          onPrev={goPrev}
          selectedMbti={wantedMbti} // ✅ 전달
          setSelectedMbti={setWantedMbti} // ✅ 전달
        />
      )}
      {step === 2 && (
        <StepWantedIntro
          onNext={goNext}
          onPrev={goPrev}
          selectedTags={wantedTags} // ✅ 연결
          setSelectedTags={setWantedTags} // ✅ 연결
        />
      )}
      {step === 3 && (
        <StepWantedHobby
          onNext={goNext}
          onPrev={goPrev}
          selectedHobbies={wantedHobbies} // ✅ 연결
          setSelectedHobbies={setWantedHobbies} // ✅ 연결
        />
      )}
    </>
  );
};

export default WantedInfor;
