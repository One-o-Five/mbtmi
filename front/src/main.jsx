import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Home from "./main/home";
import TodayPost from "./today's_post/TodayPost";
// import Account from "./account/account01";
// import TopNav from "./today's_post/TopNav";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <Home /> */}

        <TodayPost />

        {/* <Account /> */}
    </StrictMode>
);
