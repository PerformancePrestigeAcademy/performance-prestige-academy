import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import DevelopmentCarousel from "../components/DevelopmentCarousel";

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

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
            À L’ATELIER !
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
            À L’ATELIER !
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
            À L’ATELIER !
          </a>
        </div>
      </ServiceCard>

    </div>

  </div>
</section>











                    {/* Conception & Developpement */}



<section
  id="developpement-pieces"
  className="scroll-mt-32 py-24 bg-[#0A0A0A]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        SOLUTIONS SUR MESURE
      </p>

      <h2 className="font-racing text-5xl mb-6">
        CONCEPTION
        <br />
        <span className="gold-gradient">
          & DÉVELOPPEMENT
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        En compétition, les solutions standards ne répondent pas toujours aux
        contraintes du véhicule, de l’équipe ou du paddock. Chaque besoin est
        étudié afin de concevoir une nouvelle solution ou de développer une
        pièce existante pour l’adapter aux exigences réelles du terrain.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <ServiceCard
        number="01"
        title="Étude"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Analyse de la réglementation</li>
          <li>✔ Définition du cahier des charges</li>
          <li>✔ Prise de mesures</li>
          <li>✔ Étude de faisabilité du projet</li>
          <li>✔ Solutions pour le véhicule, le technicien ou le paddock</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            CREONS ENSEMBLE !
          </a>
        </div>
      </ServiceCard>

      {/* Carte 2 */}

      <ServiceCard
        number="02"
        title="CAO & prototypage"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Modélisation et plans 3D</li>
          <li>✔ Modification de composants existants</li>
          <li>✔ Création de composants spécifiques</li>
          <li>✔ Prototypage par impression 3D</li>
          <li>✔ Ajustements avant fabrication</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            CREONS ENSEMBLE !
          </a>
        </div>
      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard
        number="03"
        title="Fabrication & validation"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Fabrication et ajustage manuel</li>
          <li>✔ Développement d’outillages</li>
          <li>✔ Assemblage, soudure ou sous-traitance spécialisée</li>
          <li>✔ Montage sur le véhicule ou l’équipement</li>
          <li>✔ Validation en conditions réelles</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            CREONS ENSEMBLE !
          </a>
        </div>
      </ServiceCard>

    </div>

  </div>
  <div className="mt-24">

  <div className="text-center mb-12">

    <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
      EXEMPLES DE RÉALISATIONS
    </p>

    <h3 className="font-racing text-4xl md:text-5xl mb-6">
      DE L’IDÉE
      <br />
      <span className="gold-gradient">
        À LA RÉALITÉ
      </span>
    </h3>

    <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
      Découvrez quelques exemples de pièces, d’outillages et de solutions
      techniques développés pour le véhicule, le technicien et le paddock.
    </p>

  </div>

  <DevelopmentCarousel />

</div>
</section>












                    {/* Acquisition & analyse de données */}



<section
  id="acquisition-donnees"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        TÉLÉMÉTRIE & PERFORMANCE
      </p>

      <h2 className="font-racing text-5xl mb-6">
        ACQUISITION
        <br />
        <span className="gold-gradient">
          & ANALYSE DE DONNÉES
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Les données télémétriques permettent de comprendre précisément le
        fonctionnement du véhicule et son comportement en piste. Spécialisée
        dans l’analyse appliquée à la moto de compétition, Performance &
        Prestige Academy intervient également dans le domaine automobile,
        depuis l’installation des capteurs jusqu’à l’exploitation des données
        recueillies.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <ServiceCard
        number="01"
        title="Instrumentation & acquisition"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Définition des données à mesurer</li>
          <li>✔ Choix et implantation des capteurs</li>
          <li>✔ Installation et raccordement</li>
          <li>✔ Configuration du système d’acquisition</li>
          <li>✔ Enregistrement des données en roulage</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            ANALYSONS !
          </a>
        </div>
      </ServiceCard>

      {/* Carte 2 */}

      <ServiceCard
        number="02"
        title="Analyse télémétrique"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Lecture et interprétation des courbes</li>
          <li>✔ Identification des bons réglages</li>
          <li>✔ Mise en relation des différents canaux</li>
          <li>✔ Identification des anomalies</li>
          <li>✔ Comparaison des tours et des sessions</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            ANALYSONS !
          </a>
        </div>
      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard
        number="03"
        title="Exploitation & optimisation"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Identification des axes d’amélioration</li>
          <li>✔ Recommandations de réglages</li>
          <li>✔ Corrections mécaniques ou électroniques</li>
          <li>✔ Comparaison des différentes configurations</li>
          <li>✔ Validation lors de nouveaux essais</li>
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="/contact"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
          >
            ANALYSONS !
          </a>
        </div>
      </ServiceCard>

    </div>

  </div>
</section>











                    {/* Assistance compétition */}

<section
  id="assistance-competition"
  className="scroll-mt-32 py-24 bg-[#0A0A0A]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        ACCOMPAGNEMENT SUR CIRCUIT
      </p>

      <h2 className="font-racing text-5xl mb-6">
        ASSISTANCE
        <br />
        <span className="gold-gradient">
          COMPÉTITION
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        De la préparation du véhicule avant l’épreuve jusqu’au suivi technique
        sur circuit, Performance & Prestige Academy accompagne les pilotes et
        les équipes afin de garantir la fiabilité du matériel, d’adapter les
        réglages aux conditions de roulage et d’exploiter chaque séance pour
        progresser.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <ServiceCard
        number="01"
        title="Préparation avant épreuve"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Contrôle général du véhicule</li>
          <li>✔ Vérification des éléments de sécurité</li>
          <li>✔ Préparation des pièces, consommables et outillages</li>
          <li>✔ Réglages de base selon le circuit</li>
          <li>✔ Organisation technique de l’intervention</li>
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
        title="Assistance sur circuit"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Assistance mécanique dans le paddock ou les stands</li>
          <li>✔ Contrôles entre les séances</li>
          <li>✔ Entretien et réparations rapides</li>
          <li>✔ Ajustement des réglages</li>
          <li>✔ Accompagnement technique de l’équipe et du pilote</li>
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
        title="Suivi & exploitation"
      >
        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Analyse des retours du pilote</li>
          <li>✔ Exploitation des données recueillies</li>
          <li>✔ Identification des anomalies</li>
          <li>✔ Bilan technique après roulage</li>
          <li>✔ Préconisations pour les prochaines séances</li>
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




      <Footer />
    </div>
  );
}