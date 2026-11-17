import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import DevelopmentCarousel from "../components/DevelopmentCarousel";
import { ArrowRight } from "lucide-react";
import ContactBanner from "../components/ContactBanner";

const PREPDEV_OBJECTIVES = [
  { id: "mecanique", href: "#preparation-mecanique", image: "/images/prep-dev/mecanique.png", title: "PRÉPARATION\nMÉCANIQUE" },
  { id: "developpement", href: "#developpement-pieces", image: "/images/prep-dev/developpement.png", title: "DÉVELOPPEMENT\nDE PIÈCES" },
  { id: "acquisition", href: "#acquisition-donnees", image: "/images/prep-dev/acquisition.png", title: "ACQUISITION\n& ANALYSE DE DONNÉES" },
  { id: "assistance", href: "#assistance-competition", image: "/images/prep-dev/assistance.png", title: "ASSISTANCE\nCOMPÉTITION" },
];

const PREPDEV_PANEL_CLIPS = [
  "lg:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]",
];

export default function PrepDevPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <SEO
      title="Préparation Auto & Moto Compétition | Performance & Prestige Academy"
      description="Préparation moteur, châssis, développement de pièces, réglages et acquisition de données pour projets auto et moto de compétition."
      keywords="préparation compétition, préparation moteur, préparation châssis, développement mécanique, développement de pièces, réglages moteur, acquisition de données, assistance compétition, automobile, moto, Var"
      />

      <Navbar />

      

{/* PREMIER ÉCRAN : HERO + NAVIGATION */}

<main className="lg:h-[calc(100svh-100px)] lg:min-h-0 lg:grid lg:grid-rows-[55%_minmax(0,1fr)] lg:overflow-hidden">

  {/* HERO */}
  <div className="min-h-0 overflow-hidden [&>section]:!h-full [&>section]:!min-h-0 [&>section]:!max-h-full">
    <HeroPage
      surTitre="PRÉPARATION & DÉVELOPPEMENT"
      titre="L'EXIGENCE DE LA"
      titreGold="PERFORMANCE"
      image="/images/hero/heropreparation.png"
      scrollTarget="preparation-developpement"
    />
  </div>

  {/* CARTES DE NAVIGATION */}
  <section
    id="preparation-developpement"
    className="scroll-mt-32 py-20 bg-[#0A0A0A] lg:py-0 lg:min-h-0 lg:flex lg:items-stretch lg:overflow-hidden">

    <div className="w-full h-full px-0">

      <div className="relative isolate grid grid-cols-1 sm:grid-cols-2 lg:flex h-full min-h-0 overflow-hidden bg-black border-y border-[#C9A227] w-full">

        {PREPDEV_OBJECTIVES.map((objective, index) => (
          <div key={objective.id}
            className={`relative min-h-[300px] sm:min-h-[320px] lg:min-h-0 lg:flex-[0_0_27%] lg:-ml-[2.5%] ${ index === 0 ? "lg:ml-0" : ""}`}
            style={{ zIndex: index + 1 }}>

            <a href={objective.href}
              aria-label={`Accéder à la section ${objective.title.replace(/\n/g, " ")}`}
              className={`group relative isolate flex h-full min-h-[300px] sm:min-h-[320px] lg:min-h-[460px] flex-col justify-end overflow-hidden ${PREPDEV_PANEL_CLIPS[index]}`}>

              {/* PHOTOGRAPHIE */}
              <div className="absolute inset-0 -z-20 overflow-hidden">
                <img
                  src={objective.image}
                  alt=""
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* DÉGRADÉ NOIR */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/85 via-45% to-black/10" />

              {/* REFLET DORÉ AU SURVOL */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C9A227]/0 via-transparent to-[#C9A227]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* TITRE */}
              <div className="relative z-10 px-4 pb-8 pt-12 xl:px-6">
                <h3 className="font-racing font-bold text-white text-lg xl:text-xl 2xl:text-2xl leading-tight whitespace-pre-line transition-colors duration-300 group-hover:text-[#F2D477]">
                  {objective.title}
                </h3>
              </div>

            </a>
          </div>
        ))}

      </div>
    </div>
  </section>

</main>













    {/* Preparation mecanique */}





<section id="preparation-mecanique"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]">

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

      <ServiceCard number="01" title="Moteur">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Assemblage</li>
          <li>✔ Fiabilisation</li>
          <li>✔ Transmission</li>
          <li>✔ Optimisation mécanique et électronique</li>
          <li>✔ Étude du règlement</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          
          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl font-sans text-white
            border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 group-hover:from-[#F0E7CF]
            group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,rgba(255,255,255,0.45)_1px,
            transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)]
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)]
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

      {/* Carte 2 */}

      <ServiceCard number="02" title="Châssis / Partie-cycle">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Géométrie</li>
          <li>✔ Suspensions</li>
          <li>✔ Direction</li>
          <li>✔ Ergonomie</li>
          <li>✔ Comportement dynamique</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
            className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl
            font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300
              group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)]
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px]  bg-[#D6B34B]  opacity-0  shadow-[0_0_3px_rgba(201,162,39,0.45)]
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300  group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard number="03" title="Alimentation / Accessoires">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Faisceaux électriques</li>
          <li>✔ Circuit carburant</li>
          <li>✔ Système de freinage</li>
          <li>✔ Poste de pilotage</li>
          <li>✔ Reporting Set-up</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
            className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl
            font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)]
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] transition-colors duration-300
            group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] group-hover:opacity-100
              transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

    </div>

  </div>
</section>











                    {/* Conception & Developpement */}



<section id="developpement-pieces"
 className="scroll-mt-32 py-24 bg-[#0A0A0A]">
  
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

      <ServiceCard number="01" title="Étude">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Analyse de la réglementation</li>
          <li>✔ Définition du cahier des charges</li>
          <li>✔ Prise de mesures</li>
          <li>✔ Étude de faisabilité du projet</li>
          <li>✔ Solutions pour le véhicule, le technicien ou le paddock</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl font-sans text-white
           border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)]
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)]
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

      {/* Carte 2 */}

      <ServiceCard number="02" title="CAO & prototypage">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Modélisation et plans 3D</li>
          <li>✔ Modification de composants existants</li>
          <li>✔ Création de composants spécifiques</li>
          <li>✔ Prototypage par impression 3D</li>
          <li>✔ Ajustements avant fabrication</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl font-sans text-white
           border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)]
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] transition-colors 
            duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] transition-colors 
            duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)]
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard number="03" title="Fabrication & validation">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Fabrication et ajustage manuel</li>
          <li>✔ Développement d’outillages</li>
          <li>✔ Assemblage, soudure ou sous-traitance spécialisée</li>
          <li>✔ Montage sur le véhicule ou l’équipement</li>
          <li>✔ Validation en conditions réelles</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
            className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl
            font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)]
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B]
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)]
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

    </div>

  </div>

  <div className="mt-16">

  <DevelopmentCarousel />

  </div>
</section>











{/* Acquisition & analyse de données */}

<section id="acquisition-donnees"
 className="scroll-mt-32 py-24 bg-[#0D0D0D]">

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
        dans l'analyse appliquée à la moto de compétition, Performance &
        Prestige Academy intervient également dans le domaine automobile,
        depuis l'installation des capteurs jusqu'à l'exploitation des données
        recueillies.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <ServiceCard number="01"
        title="Instrumentation & acquisition">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Définition des données à mesurer</li>
          <li>✔ Choix et implantation des capteurs</li>
          <li>✔ Installation et raccordement</li>
          <li>✔ Configuration du système d’acquisition</li>
          <li>✔ Enregistrement des données en roulage</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl 
           font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)] 
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>

        </div>

      </ServiceCard>

      {/* Carte 2 */}

      <ServiceCard number="02" title="Analyse télémétrique">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Lecture et interprétation des courbes</li>
          <li>✔ Identification des bons réglages</li>
          <li>✔ Mise en relation des différents canaux</li>
          <li>✔ Identification des anomalies</li>
          <li>✔ Comparaison des tours et des sessions</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          
          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl 
           font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 g
            roup-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)] 
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
            EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard number="03" title="Exploitation & optimisation">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Identification des axes d'amélioration</li>
          <li>✔ Recommandations de réglages</li>
          <li>✔ Corrections mécaniques ou électroniques</li>
          <li>✔ Comparaison des différentes configurations</li>
          <li>✔ Validation lors de nouveaux essais</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 
           rounded-2xl font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)] 
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
            EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </a>

        </div>

      </ServiceCard>

    </div>

  </div>

</section>





      {/* Assistance compétition */}





<section id="assistance-competition"
 className="scroll-mt-32 py-24 bg-[#0A0A0A]">

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

      <ServiceCard number="01"
       title="Préparation avant épreuve">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Contrôle général du véhicule</li>
          <li>✔ Vérification des éléments de sécurité</li>
          <li>✔ Préparation des pièces, consommables et outillages</li>
          <li>✔ Réglages de base selon le circuit</li>
          <li>✔ Organisation technique de l'intervention</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl 
           font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)] 
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
            EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>
          </a>
        </div>
      </ServiceCard>

      {/* Carte 2 */}
      <ServiceCard number="02"
      title="Assistance sur circuit">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Assistance mécanique dans le paddock ou les stands</li>
          <li>✔ Contrôles entre les séances</li>
          <li>✔ Entretien et réparations rapides</li>
          <li>✔ Ajustement des réglages</li>
          <li>✔ Accompagnement technique de l’équipe et du pilote</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl 
           font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 
            group-hover:from-[#F0E7CF] group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)] 
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
             EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}

            <span className="relative z-10 flex items-center justify-center">
             <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </a>

        </div>

      </ServiceCard>

      {/* Carte 3 */}

      <ServiceCard number="03"
       title="Suivi & exploitation">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Analyse des retours du pilote</li>
          <li>✔ Exploitation des données recueillies</li>
          <li>✔ Identification des anomalies</li>
          <li>✔ Bilan technique après roulage</li>
          <li>✔ Préconisations pour les prochaines séances</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">

          <a href="/contact"
           className="group relative overflow-hidden inline-flex items-center justify-start gap-4 w-full max-w-[260px] h-[60px] px-6 rounded-2xl 
           font-sans text-white border border-transparent bg-transparent shadow-none transition-all duration-300 active:scale-[0.99]">

            {/* 1. Fond aluminium brossé */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#E5E6E6] via-[#AEB2B5] to-[#55595D] transition-all duration-300 group-hover:from-[#F0E7CF] 
            group-hover:via-[#B9B8B2] group-hover:to-[#625C4F]"/>

            {/* 2. Texture métallique horizontale */}
            <span className="absolute inset-0 pointer-events-none opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0px,
            rgba(255,255,255,0.45)_1px,transparent_2px,transparent_4px)]"/>

            {/* 3. Reflet supérieur métallique */}
            <span className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-transparent"/>

            {/* 4. Bordure métallique */}
            <span className="absolute inset-0 border border-[#777B7D] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.4)] 
            pointer-events-none group-hover:border-[#B99A4B] transition-colors duration-300"/>

            {/* 5. Trois bandes obliques */}
            <span className="absolute -top-2 -bottom-2 left-[7%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[11%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>
            <span className="absolute -top-2 -bottom-2 left-[15%] w-2 -skew-x-[25deg] bg-gradient-to-b from-[#73787C] via-[#F1F2F2] to-[#62676B] 
            transition-colors duration-300 group-hover:from-[#B58A22] group-hover:via-[#F0D47A] group-hover:to-[#876016]"/>

            {/* 6. Fine ligne dorée au survol */}
            <span className="absolute bottom-0 left-[8%] right-[8%] h-[2px] bg-[#D6B34B] opacity-0 shadow-[0_0_3px_rgba(201,162,39,0.45)] 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            {/* 7. Texte */}
            <span className="relative z-10 ml-8 font-bold tracking-wider text-sm sm:text-base uppercase text-[#101010]">
              EN SAVOIR PLUS
            </span>

            {/* 8. Flèche */}
            <span className="relative z-10 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#101010] stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </a>

        </div>

      </ServiceCard>

    </div>

  </div>

</section>
    
    <ContactBanner />

      <Footer />

     </div>

  );

}