import { Routes, Route, Navigate } from "react-router-dom";
import Account01 from "./account01";
import Home from "../main/Home";
import AccountLogin from "./AccountLogin";
import { useAuth } from "../main/AuthContext";

const AccountMain = () => {
  const { loggedIn } = useAuth(); // Context 기반 체크

  return (
    <Routes>
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
