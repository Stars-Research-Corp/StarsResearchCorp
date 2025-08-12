import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import OfficerTeam from "./OfficerTeam";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/StarsResearchCorp/" element={<App />} />
        <Route
          path="/StarsResearchCorp/officer-team"
          element={<OfficerTeam />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
