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
        image="/images/prep.png"
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











                    {/* Preparation mecanique */}



<section
  id="preparation-mecanique"
  className="py-24 bg-[#111111] scroll-mt-28"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-4xl mb-14">
      <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
        Préparation compétition
      </p>

      <h2 className="font-racing text-4xl md:text-5xl mb-6">
        PRÉPARATION
        <span className="text-gold"> MÉCANIQUE</span>
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">
        Chaque préparation est étudiée en fonction du véhicule, de son
        utilisation, du règlement applicable et des objectifs recherchés.
        L’objectif est d’obtenir un ensemble performant, fiable et cohérent,
        adapté aux contraintes de la compétition.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="bg-dark-card gold-border rounded-2xl p-8">
        <h3 className="font-racing text-2xl mb-4">
          Moteur
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Préparation, optimisation, assemblage et fiabilisation des organes
          mécaniques selon le niveau de performance recherché.
        </p>
      </div>

      <div className="bg-dark-card gold-border rounded-2xl p-8">
        <h3 className="font-racing text-2xl mb-4">
          Châssis & partie-cycle
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Adaptation du comportement du véhicule afin d’améliorer sa stabilité,
          sa précision et son efficacité dynamique.
        </p>
      </div>

      <div className="bg-dark-card gold-border rounded-2xl p-8">
        <h3 className="font-racing text-2xl mb-4">
          Transmission & freinage
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Étude et adaptation des différents composants pour répondre aux
          contraintes d’utilisation et aux performances attendues.
        </p>
      </div>

      <div className="bg-dark-card gold-border rounded-2xl p-8">
        <h3 className="font-racing text-2xl mb-4">
          Fiabilisation
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Contrôle des points sensibles, amélioration de la résistance des
          composants et prévention des défaillances en utilisation intensive.
        </p>
      </div>

    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}