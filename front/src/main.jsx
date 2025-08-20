import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodayPost from "./today's_post/TodayPost.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <TodayPost />
    </StrictMode>
);
