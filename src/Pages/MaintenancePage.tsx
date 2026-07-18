import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <HeroPage
        surTitre="MAINTENANCE"
        titre="PRENDRE SOIN"
        titreGold="DE VOTRE PASSION"
        image="/images/hero.png"
      />

    </div>
  );
}