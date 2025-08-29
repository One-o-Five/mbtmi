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
    hobby: "",
    // 나중에 더 추가 가능
  });

  return (
    <SignupContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignupContext.Provider>
  );
};
