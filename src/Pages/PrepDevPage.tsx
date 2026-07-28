import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";

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
  className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        PRÉPARATION COMPÉTITION
      </p>

      <h2 className="font-racing text-5xl mb-6">
        PRÉPARATION
        <br />
        <span className="gold-gradient">
          MÉCANIQUE
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Chaque préparation est étudiée en fonction du véhicule, de son
        utilisation, du règlement applicable et des objectifs recherchés.
        L’objectif est d’obtenir un ensemble performant, fiable et cohérent,
        adapté aux contraintes de la compétition.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <ServiceCard
        number="01"
        title="Moteur"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Assemblage</li>
          <li>✔ Fiabilisation</li>
          <li>✔ Transmission</li>
          <li>✔ Optimisation mécanique et électronique</li>
          <li>✔ Étude du règlement</li>


        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            EN PISTE !
          </a>
        </div>
      </ServiceCard>

      {/* Carte 2 */}

      <ServiceCard
        number="02"
        title="Châssis / Partie-cycle"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Géométrie</li>
          <li>✔ Suspensions</li>
          <li>✔ Direction</li>
          <li>✔ Ergonomie</li>
          <li>✔ Comportement dynamique</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            EN PISTE !
          </a>
        </div>
      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard
        number="03"
        title="Alimentation / Accessoires"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Faisceaux électriques</li>
          <li>✔ Circuit carburant</li>
          <li>✔ Système de freinage</li>
          <li>✔ Poste de pilotage</li>
          <li>✔ Reporting Set-up</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            EN PISTE !
          </a>
        </div>
      </ServiceCard>

    </div>

  </div>
</section>











                    {/* titre */}


      <Footer />
    </div>
  );
}