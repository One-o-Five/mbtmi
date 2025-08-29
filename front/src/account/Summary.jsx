
import { useSignup } from "../SignupProvider";

const Summary = () => {
  const { formData } = useSignup();

  const handleSubmit = async () => {
    await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("회원가입 완료!");
  };

  return (
    <div>
      <h2>입력 확인</h2>
      <p>
        MBTI: {formData.mbti.EI}
        {formData.mbti.SN}
        {formData.mbti.TF}
        {formData.mbti.JP}
      </p>
      <p>자기소개 태그: {formData.introTags.join(", ")}</p>
      <p>취미: {formData.hobby}</p>

      <button onClick={handleSubmit}>최종 제출</button>
    </div>
  );
};

export default Summary;
