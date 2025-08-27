import { Routes, Route, Navigate } from "react-router-dom";
import Account01 from "./account01";
import Home from "../main/Home";
import AccountLogin from "./AccountLogin";
import { useAuth } from "../main/AuthContext";


const AccountMain = () => {
  const { loggedIn, loading } = useAuth(); // loading 상태 추가

  // ✅ 세션 확인 완료 전에는 아무것도 렌더링하지 않음
  if (loading) {
    return null; // 원하면 로딩 스피너를 넣어도 됩니다
  }

  return (
    <Routes>
      {/* / 접속 시 로그인 여부에 따라 리다이렉트 */}
      <Route
        path="/"
        element={
          loggedIn ? <Navigate to="/home" replace /> : <Navigate to="/account01" replace />
        }
      />
      <Route path="/account01" element={<Account01 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<AccountLogin />} />
    </Routes>
  );
};

export default AccountMain;
