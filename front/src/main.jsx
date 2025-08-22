import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Activity from "./activities/ActivityGive";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Activity />
  </StrictMode>
);
