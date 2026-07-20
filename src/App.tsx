import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import FormationPage from "./Pages/FormationPage";
import MaintenancePage from "./Pages/MaintenancePage";
import MentionsLegales from "./Pages/MentionsLegales";
import PolitiqueConfidentialite from "./Pages/PolitiqueConfidentialite";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/formation" element={<FormationPage />} />

        <Route path="/maintenance" element={<MaintenancePage />} />

        <Route path="/mentions-legales" element={<MentionsLegales />} />

        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/about" element={<AboutPage />} />

      </Routes>

    </BrowserRouter>
  );
}