import { createContext, useContext, useEffect, useState } from "react";
const SignupContext = createContext(null);
const KEY = "signup-draft-v1";

const initialForm = {
    id: "",
    password: "",
    name: "",
    birth: { year: "", month: "", day: "" },
    gender: "M", // "M" | "F"
    // 나중에 필요한 값들 추가
};

export function SignupProvider({ children }) {
    const [form, setForm] = useState(() => {
        const saved = sessionStorage.getItem(KEY);
        return saved ? JSON.parse(saved) : initialForm;
    });
    useEffect(() => {
        sessionStorage.setItem(KEY, JSON.stringify(form));
    }, [form]);
    const resetForm = () => {
        sessionStorage.removeItem(KEY);
        setForm(initialForm);
    };
    return (
        <SignupContext.Provider value={{ form, setForm, resetForm }}>
            {children}
        </SignupContext.Provider>
    );
}
export function useSignup() {
    const ctx = useContext(SignupContext);
    if (!ctx) throw new Error("useSignup must be used within <SignupProvider>");
    return ctx;
}
