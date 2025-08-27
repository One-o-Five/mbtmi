import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"; // <-- 반드시 localhost로 통일
axios.defaults.withCredentials = true; // 쿠키 자동 포함

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkSession = async () => {
    try {
      const res = await axios.get("/api/check-session"); // 상대 경로 사용
      console.log("checkSession response:", res.data);
      if (res.data?.loggedIn) {
        setLoggedIn(true);
        setUser(res.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      console.error("checkSession error:", err);
      setLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const login = async (id, password) => {
    try {
      const res = await axios.post("/api/login", { username: id, password }, { withCredentials: true });
      console.log("login response:", res);
      if (res.data) {
        setLoggedIn(true);
        setUser(res.data);
        return true;
      } else {
        setLoggedIn(false);
        setUser(null);
        return false;
      }
    } catch (err) {
      console.error("login error:", err);
      setLoggedIn(false);
      setUser(null);
      return false;
    }
  };

  const logout = async () => {
    await axios.get("/api/logout", { withCredentials: true });
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
