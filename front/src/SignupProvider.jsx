import { createContext, useContext, useState } from "react";

const SignupContext = createContext();
export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    mbti: {
      EI: "",
      SN: "",
      TF: "",
      JP: "",
    },
    introTags: [],
    hobby: [],
    introduce: "",
    // 나중에 더 추가 가능
  });

  const [returnToSummary, setReturnToSummary] = useState(false);

  return (
    <SignupContext.Provider
      value={{ formData, setFormData, returnToSummary, setReturnToSummary }}
    >
      {children}
    </SignupContext.Provider>
  );
};
