import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import FormationPage from "./Pages/FormationPage";
import MaintenancePage from "./Pages/MaintenancePage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/formation" element={<FormationPage />} />

        <Route path="/maintenance" element={<MaintenancePage />} />

      </Routes>

    </BrowserRouter>
  );
}