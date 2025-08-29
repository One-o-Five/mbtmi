import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AccountMain from "./account/AccountMain";
import { AuthProvider } from "./main/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google"; // 추가
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE"> {/* 여기에 발급받은 클라이언트ID */}
          <AccountMain />
        </GoogleOAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
