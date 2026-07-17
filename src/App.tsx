import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import FormationPage from "./Pages/FormationPage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route
          path="/formation"
          element={<FormationPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}