import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const url = "http://127.0.0.1:8080";

  const login = async (id, password) => {
    try {
      const res = await axios.post(
        url + "/api/login",
        { username: id, password },
        { withCredentials: true }
      );

      if (res.data) {
        setLoggedIn(true);
        setUser(res.data);
        console.log("로그인 성공", res.data);
        return true;
      } else {
        setLoggedIn(false);
        setUser(null);
        return false;
      }
    } catch (err) {
      console.error("로그인 실패:", err);
      setLoggedIn(false);
      setUser(null);
      return false;
    }
  };

  const logout = async () => {
    await axios.get(url + "/api/logout", { withCredentials: true });
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
