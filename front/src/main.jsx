import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodayPost from "./today's_post/TodayPost";
import TodayTmi from "./today's_tmi/TodayTmi";
import Map from "./map/Map";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <TodayPost /> */}
        {/* <TodayTmi /> */}
        <Map />
    </StrictMode>
);
