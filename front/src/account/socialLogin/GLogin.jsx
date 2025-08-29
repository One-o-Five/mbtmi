// Login.jsx

import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../main/AuthContext";
import axios from "axios";

const GLogin = () => {
  const [user, setUserLocal] = useState(null); // 로컬 state
  const { setUser } = useAuth(); // Context 연동 가능
  const navigate = useNavigate(); // 페이지 이동

  return (
    <div>
      {user ? (
        <div>
          <h3>환영합니다, {user.name}님!</h3>
          <img src={user.picture} alt="프로필" width="50" />
          <button
            onClick={() => {
              googleLogout();
              setUser(null);
              setUserLocal(null);
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("로그인 성공:", decoded);
            setUserLocal(decoded); // 로컬 state
            setUser(decoded); // AuthContext 상태
            navigate("/SelMbti"); // 페이지 이동
          }}
          onError={() => {
            console.log("로그인 실패");
          }}
        />
      )}
    </div>
  );
};

export default GLogin;
