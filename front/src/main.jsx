import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ChattingProfile from "./chatting/ChattingProfile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChattingProfile />
  </StrictMode>
);
