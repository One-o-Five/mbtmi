import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AccountMain from "./account/AccountMain";
import { AuthProvider } from "./main/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AccountMain />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
