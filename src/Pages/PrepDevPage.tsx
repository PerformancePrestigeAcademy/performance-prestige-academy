import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function PrepDevPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <SEO
        title="Préparation & Développement Compétition | Performance & Prestige Academy"
        description="Préparation mécanique, développement de pièces, réglages, acquisition de données et assistance compétition automobile et motocycle dans le Var."
        keywords="préparation compétition, développement mécanique, développement de pièces, réglages moteur, acquisition de données, assistance circuit, automobile, motocycle"
      />

      <Navbar />

      <HeroPage
        surTitre="PRÉPARATION & DÉVELOPPEMENT"
        titre="L'EXIGENCE DE LA"
        titreGold="PERFORMANCE"
        image="/images/hero.png"
        scrollTarget="preparation-developpement"
      />

      <section
  id="preparation-developpement"
  className="py-20 bg-[#0A0A0A] scroll-mt-28"
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">

      <a
        href="#preparation-mecanique"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Préparation
          <br />
          mécanique
        </h3>
      </a>

      <a
        href="#reglages"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Réglages
          <br />
          & mise au point
        </h3>
      </a>

      <a
        href="#developpement-pieces"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Développement
          <br />
          de pièces
        </h3>
      </a>

      <a
        href="#acquisition-donnees"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Acquisition
          <br />
          & analyse de données
        </h3>
      </a>

      <a
        href="#assistance-competition"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Assistance
          <br />
          compétition
        </h3>
      </a>

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}