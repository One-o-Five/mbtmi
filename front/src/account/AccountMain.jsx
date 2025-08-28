import { Routes, Route, Navigate } from "react-router-dom";
import Account01 from "./account01";
import Home from "../main/Home";
import AccountLogin from "./AccountLogin";
import { useAuth } from "../main/AuthContext";
import MyInfo from "../setting/MyInfo";

import AccountInfo from "./AccountInfo";
import AccountSelMbti from "./AccountSelMbti";
import AccountMbti from "./AccountMbti";
import AccountwantedIntro from "./AccountWantedIntro";
import AccountWantedHobby from "./AccountWantedHobby";
import IntroduceMySelf from "./IntroduceMySelf";
import AccountIntro from "./AccountIntro";

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
                    loggedIn ? (
                        <Navigate to="/home" replace />
                    ) : (
                        <Navigate to="/account01" replace />
                    )
                }
            />
            <Route path="/account01" element={<Account01 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<AccountLogin />} />
            <Route path="/mypage" element={<MyInfo />} />
            <Route path="/info" element={<AccountInfo />} />
            <Route path="/intro" element={<AccountIntro />} />
            <Route path="/selmbti" element={<AccountSelMbti />} />
            <Route path="/wantedmbti" element={<AccountMbti />} />
            <Route path="/wantedintro" element={<AccountwantedIntro />} />
            <Route path="/wantedhobby" element={<AccountWantedHobby />} />
            <Route path="/introduce" element={<IntroduceMySelf />} />
        </Routes>
    );
};

export default AccountMain;
