import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD

createRoot(document.getElementById("root")).render();
=======
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
>>>>>>> c284355bedce6e73cd50a69c3eddd8293a73bd04
