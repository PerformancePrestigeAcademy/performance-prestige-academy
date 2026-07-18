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




{/* Hero maintenance */}





<section className="py-20 bg-[#0A0A0A]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      <a
        href="#entretien"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Entretien
          <br />
          courant
        </h3>
      </a>

      <a
        href="#revision"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Révision
          <br />
          constructeur
        </h3>
      </a>

      <a
        href="#diagnostic"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Diagnostic
        </h3>
      </a>

      <a
        href="#preparation"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Préparation
          <br />
          & Optimisation
        </h3>
      </a>

      <a
        href="#competition"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Sport
          <br />
          automobile
        </h3>
      </a>

    </div>

  </div>

</section>





    </div>
  );
}

