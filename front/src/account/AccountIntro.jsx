import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../SignupProvider"; // ✅ Context 불러오기

const AccountIntro = () => {
  const navigate = useNavigate();
  const { formData, setFormData, returnToSummary, setReturnToSummary } =
    useSignup(); // 전역 상태 가져오기

  const handleNext = () => {
    if (returnToSummary) {
      setReturnToSummary(false);
      navigate("/summary");
    } else {
      navigate("/hobby");
    }
  };

  const tags = [
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
  const tags1 = [
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
  const tags2 = [
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

  const toggleTag = (tag) => {
    const selectedTags = formData.introTags || [];
    if (selectedTags.includes(tag)) {
      setFormData({
        ...formData,
        introTags: selectedTags.filter((t) => t !== tag),
      });
    } else {
      if (selectedTags.length < 6) {
        setFormData({
          ...formData,
          introTags: [...selectedTags, tag],
        });
      } else {
        alert("최대 6개까지만 선택할 수 있어요!");
      }
    }
  };

  const selectedTags = formData.introTags || [];

  return (
    <Container>
      <Title>당신을 소개해주세요!</Title>
      <TagTag>최대 6개 선택 가능합니다.</TagTag>

      <TagTitle>---------- 성격 · 태도 ----------</TagTitle>
      <TagsWrapper>
        {tags.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedTags.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <TagTitle>---------- 감정 · 표현 ----------</TagTitle>
      <TagsWrapper>
        {tags1.map((tag) => (
          <TagButton
            key={tag}
            onClick={() => toggleTag(tag)}
            selected={selectedTags.includes(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsWrapper>

      <TagTitle>---------- 독특한 매력 ----------</TagTitle>
      <TagsWrapper>
        {tags2.map((tag) => (
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

      {/* ✅ 선택 최소 1개 이상이어야 다음으로 가능 */}
      <NextButton disabled={selectedTags.length === 0} onClick={handleNext}>
        다음
      </NextButton>
      {/* <NextButton
        disabled={selectedTags.length === 0}
        onClick={() => navigate("/summary")}
      >
        다음
      </NextButton> */}
    </Container>
  );
};

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

const TagTag = styled.div`
  font-size: 15px;
  margin-bottom: 0px;
`;

const TagTitle = styled.div`
  font-size: 18px;
  margin: 20px 0 10px;
  font-weight: bold;
  color: #444;
`;

const TagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 */
  gap: 12px;
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
`;

const TagButton = styled.button`
  padding: 10px;
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

const SelectedText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
`;

const NextButton = styled.button`
  width: 220px;
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
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

export default AccountIntro;
