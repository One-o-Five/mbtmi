import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodayPost from "./today's_post/TodayPost";
import Account from "./account/account01";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TodayPost/> */}
    <Account/>
  </StrictMode>,
)
