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


function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>

      <GoogleAnalyticsTracker />

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

        <Route path="/apropos" element={<AProposPage />} />

      </Routes>

    </BrowserRouter>
  );
}