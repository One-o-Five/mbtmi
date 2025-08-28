import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;
=======
import { BrowserRouter } from "react-router-dom";
import AccountMain from "./account/AccountMain";
import { AuthProvider } from "./main/AuthContext";
import axios from "axios";
>>>>>>> 0ad1475065c30ef04e554eea9e8f642d3397ee56

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AccountMain />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
