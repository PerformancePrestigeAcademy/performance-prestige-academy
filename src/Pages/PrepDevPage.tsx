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
        className="min-h-screen bg-[#0A0A0A] py-20 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-racing text-4xl text-center">
            Préparation & Développement
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}