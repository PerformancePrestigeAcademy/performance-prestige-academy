import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import HomePage from "./components/HomePage";
import FormationPage from "./Pages/FormationPage";
import MaintenancePage from "./Pages/MaintenancePage";
import PrepDevPage from "./Pages/PrepDevPage";
import MentionsLegales from "./Pages/MentionsLegales";
import PolitiqueConfidentialite from "./Pages/PolitiqueConfidentialite";
import ContactPage from "./Pages/Contact";
import AProposPage from "./Pages/APropos";



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/formation" element={<FormationPage />} />

        <Route path="/maintenance" element={<MaintenancePage />} />

        <Route
          path="/preparation-developpement"
          element={<PrepDevPage />}
        />

        <Route
          path="/mentions-legales"
          element={<MentionsLegales />}
        />

        <Route
          path="/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/a-propos" element={<AProposPage />} />

      </Routes>

    </BrowserRouter>
  );
}