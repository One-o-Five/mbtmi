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
const clientId = import.meta.env.GOOGLE_CLIENT_ID;
console.log(clientId);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AccountMain />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
