import { useState } from "react";
import { ArrowLeft, ArrowRight, Wrench, Gauge, Flag, GraduationCap, Handshake, School, BookOpen, ClipboardCheck, Award, Building2, Target, Rocket, Users,} from "lucide-react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage.tsx";
import Footer from "../components/Footer.tsx";
import SEO from "../components/SEO.tsx";
import ServiceCard from "../components/ServiceCard";
import FormationModal from "../components/FormationModal";
import {initiationMecaniqueFormation, mecaniqueAuFemininFormation, perfectionnementMecaniqueFormation, 
    preparationEntreeCAPFormation, preparationEntreeBacProFormation, preparationEntreeBTSFormation,
    preparationExamensCAPFormation, preparationExamensBacProFormation, preparationExamensBTSFormation,
    } from "../data/formations";
import CFAModal from "../components/CFAModal";
import ContactBanner from "../components/ContactBanner";

const FORMATION_OBJECTIVES = [
  { id: "debuter",href: "#formation-mecanique",image: "/images/formation/formationdebuter.png",title: "DÉBUTER\nLA MÉCANIQUE",},
  { id: "preparation",href: "#preparation",image: "/images/formation/formationdecouvrir.png",title: "PRÉPARATION À\n L’ENTRÉE EN FORMATION",},
  { id: "examens",href: "#examens",image: "/images/formation/formationpreparer.png",title: "PRÉPARATION\nAUX EXAMENS",},
  { id: "perfectionnement",href: "#perfectionnement",image: "/images/formation/formationperfection.png",title: "PERFECTIONNEMENT\nPROFESSIONNEL",},
  { id: "cfa",href: "#cfa",image: "/images/formation/formationcfa.png",title: "CFA &\nÉTABLISSEMENTS",},];
const FORMATION_PANEL_CLIPS = [
  "lg:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]",
  "lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]",];
export default function FormationPage() {
    const [isFormationModalOpen, setIsFormationModalOpen] = useState(false);
    const [selectedFormation, setSelectedFormation] = useState(initiationMecaniqueFormation );
    const [isCFAModalOpen, setIsCFAModalOpen] = useState(false);
return (<div className="min-h-screen pb-14 bg-[#0A0A0A] text-white">

  <Navbar />

  <SEO
    title="Formation Mécanique Auto & Moto | Performance & Prestige Academy"
    description="Formations mécaniques pour particuliers, apprentis, professionnels et CFA : initiation, diagnostic, perfectionnement et accompagnement pratique." 
    keywords="formation mécanique auto,formation mécanique moto,formation automobile,formation CFA,cours mécanique,diagnostic automobile,
    maintenance automobile,Nans-les-Pins,Var,Performance & Prestige Academy"/>

  {/* Premier écran : Hero + navigation + bandeau légal */}
  <main className="lg:h-[100svh] lg:min-h-[636px] lg:grid lg:grid-rows-[55%_minmax(0,1fr)] lg:overflow-hidden">
    <div className="min-h-0 overflow-hidden [&>section]:!h-full [&>section]:!min-h-0 [&>section]:!max-h-full">
      <HeroPage
        surTitre="FORMATIONS"
        titre="TRANSMETTRE"
        titreGold="L'EXCELLENCE"
        image="/images/hero/heroformation.png"
      />
    </div>




  {/* Choisissez votre parcours */}

  <section id="objectif"
    className="scroll-mt-32 py-20 bg-[#0A0A0A] lg:py-0 lg:min-h-0 lg:flex lg:items-stretch lg:overflow-hidden">
    
    <div className="w-full h-full px-0">

      <div className="relative isolate grid grid-cols-1 sm:grid-cols-2 lg:flex h-full min-h-0 overflow-hidden bg-black border-y border-[#C9A227] w-full">

        {FORMATION_OBJECTIVES.map((objective, index) => (
          <div
            key={objective.id}
            className={`relative min-h-[300px] sm:min-h-[320px] lg:min-h-0 lg:flex-[0_0_22%] lg:-ml-[2.5%] ${index === 0 ? "lg:ml-0" : ""}`}
            style={{ zIndex: index + 1 }}>

            <a href={objective.href}
              aria-label={`Accéder à la section ${objective.title.replace(/\n/g, " ")}`}
              className={`group relative isolate flex h-full min-h-[300px] sm:min-h-[320px] lg:min-h-[460px] flex-col justify-end overflow-hidden ${FORMATION_PANEL_CLIPS[index]}`}>

              {/* Photographie */}
              <div className="absolute inset-0 -z-20 overflow-hidden">
                <img
                  src={objective.image}
                  alt=""
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Dégradé noir */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/85 via-45% to-black/10" />

              {/* Reflet doré au survol */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C9A227]/0 via-transparent to-[#C9A227]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Titre */}
              <div className="relative z-10 px-4 pb-8 pt-12 xl:px-6">
                <h3 className="font-racing font-bold text-white text-lg xl:text-xl 2xl:text-2xl leading-tight whitespace-pre-line transition-colors duration-300 group-hover:text-[#F2D477]">
                  {objective.title}
                </h3>
              </div>

            </a>

            {/* Séparation lumineuse dorée */}
            {index < 4 && (
              <div className="hidden lg:block absolute pointer-events-none right-0 top-[-5%] h-[110%] w-[3px] bg-gradient-to-b 
              from-[#F7D66B] via-[#C9A227] to-[#78530A] -skew-x-[12deg] shadow-[0_0_12px_rgba(201,162,39,0.6)]" 
              />)}

          </div>
        ))}
      </div>
    </div>
  </section>
</main>




{/* Formation mécanique */}





<section
  id="formation-mecanique"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        FORMATIONS MÉCANIQUES
      </p>

      <h2 className="font-racing text-5xl mb-6">
        APPRENDRE,
        <br />
        <span className="gold-gradient">
        PROGRESSER, PERFORMER
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Des formations conçues pour tous les profils, du passionné qui souhaite
        découvrir la mécanique jusqu'au professionnel désirant développer son
        expertise ou se spécialiser dans le sport automobile.
      </p>

    </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">


  {/* DÉBUTANT */}

  <ServiceCard number="01" subtitle="DÉBUTANT" title="Découvrir la mécanique">

    <ul className="space-y-3 text-[#A8A9AD]">
      <li>✔ Entretien courant</li>
      <li>✔ Fonctionnement d'un moteur</li>
      <li>✔ Contrôles essentiels</li>
      <li>✔ Utilisation de l'outillage</li>
      <li>✔ Premières interventions</li>
    </ul>

    <div className="mt-auto pt-8 w-full flex justify-center">
      <button type="button"onClick={() => {setSelectedFormation(initiationMecaniqueFormation);setIsFormationModalOpen(true);}}
        className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
        [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

        {/* 1. Reflet brillant supérieur */}
        <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

        {/* 2. Dégradé métallique */}
        <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

        {/* 3. Trois bandes dorées à gauche */}
        <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
        <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

        {/* 4. Texte centré */}
        <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
          Découvrir
        </span>

        {/* 5. Flèche à droite */}
        <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
          <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
        </span>

      </button>
    </div>
  </ServiceCard>


  {/* AU FÉMININ */}

  <ServiceCard number="02" subtitle="AU FÉMININ" title="Comprendre & se protéger">

    <ul className="space-y-3 text-[#A8A9AD]">
      <li>✔ Comprendre son véhicule</li>
      <li>✔ Décrypter devis & factures</li>
      <li>✔ Identifier les pratiques abusives</li>
      <li>✔ Poser les bonnes questions</li>
      <li>✔ Défendre ses intérêts</li>
    </ul>

    <div className="mt-auto pt-8 w-full flex justify-center">
      <button type="button" onClick={() => {setSelectedFormation(mecaniqueAuFemininFormation); setIsFormationModalOpen(true);}} 
        className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
        [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

        {/* 1. Reflet brillant supérieur */}
        <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

        {/* 2. Dégradé métallique */}
        <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

        {/* 3. Trois bandes dorées à gauche */}
        <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
        <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

        {/* 4. Texte centré */}
        <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
          Découvrir
        </span>

        {/* 5. Flèche à droite */}
        <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
        </span>

      </button>
    </div>
  </ServiceCard>

  {/* INITIÉ */}

  <ServiceCard number="03" subtitle="INITIÉ" title="Développer son expertise">

    <ul className="space-y-3 text-[#A8A9AD]">
      <li>✔ Diagnostic avancé</li>
      <li>✔ Méthodes constructeur</li>
      <li>✔ Électronique embarquée</li>
      <li>✔ Organisation d'atelier</li>
      <li>✔ Perfectionnement technique</li>
    </ul>

    <div className="mt-auto pt-8 w-full flex justify-center">

      <button type="button" onClick={() => {setSelectedFormation(perfectionnementMecaniqueFormation); setIsFormationModalOpen(true);}} 
       className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
       [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

        {/* 1. Reflet brillant supérieur */}
        <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

        {/* 2. Dégradé métallique */}
        <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

        {/* 3. Trois bandes dorées à gauche */}
        <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
        <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

        {/* 4. Texte centré */}
        <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
          Découvrir
        </span>

        {/* 5. Flèche à droite */}
        <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
          <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
        </span>

      </button>
    </div>
  </ServiceCard>

  {/* COMPÉTITION */}

  <ServiceCard number="04" subtitle="EXPERT" title="Performance & préparation">

    <ul className="space-y-3 text-[#A8A9AD]">
      <li>✔ Préparation moteur</li>
      <li>✔ Châssis & suspensions</li>
      <li>✔ Acquisition de données</li>
      <li>✔ Assistance circuit</li>
      <li>✔ Méthodes de compétition</li>
    </ul>

    <div className="mt-auto pt-8 w-full flex justify-center">
      <span className="relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-[#D6C49A] 
       border border-[#8D7138]/60 bg-gradient-to-b from-[#40351F] via-[#282116] to-[#17130D] shadow-[0_3px_8px_rgba(0,0,0,0.55),
       inset_0_1px_2px_rgba(255,255,255,0.12), inset_0_-3px_5px_rgba(0,0,0,0.5)] cursor-default opacity-85">

        {/* 1. Reflet supérieur discret */}
        <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none" />

        {/* 2. Trois bandes dorées à gauche */}
        <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#806020] via-[#E0C47B] to-[#8B6725] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />

        {/* 3. Texte */}
        <span className="relative z-10 font-bold tracking-[0.18em] text-sm uppercase">
          À venir
        </span>

      </span>
    </div>

  </ServiceCard>
     
     </div>

  </div>

</section>





{/* Préparation aux formations */}





<section id="preparation" className="scroll-mt-32 py-24 bg-[#0A0A0A]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        ACCOMPAGNEMENT
      </p>

      <h2 className="font-racing text-5xl mb-6">
          PRÉPARATION À
        <br />
        <span className="gold-gradient">
          L'ENTRÉE EN FORMATION
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Vous souhaitez intégrer une formation en mécanique mais vous manquez
        de bases ou de confiance ?
        Nous proposons une remise à niveau adaptée avant votre entrée en CAP,
        Bac Professionnel ou BTS.
      </p>

    </div>
  </div>

  {/* Préparation à l'entrée en formation */}

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-3 gap-8">

      {/* ENTREE EN FORMATION CAP */}
        
      <ServiceCard number="01" subtitle="CAP" title="Découvrir les fondamentaux">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>• Entretien courant des véhicules</li>
          <li>• Contrôles et diagnostics simples</li>
          <li>• Remplacement des organes d'usure</li>
          <li>• Méthodes de travail en atelier</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <button type="button" onClick={() => {setSelectedFormation(preparationEntreeCAPFormation); setIsFormationModalOpen(true);}} 
           className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans 
           text-black border border-[#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),
           0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

            {/* 1. Reflet brillant supérieur */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

            {/* 2. Dégradé métallique */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

            {/* 3. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

            {/* 4. Texte centré */}
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
              Découvrir
            </span>

            {/* 5. Flèche à droite */}
            <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </button>
        </div>

      </ServiceCard>

      {/* ENTREE EN FORMATION BAC PRO */}

      <ServiceCard number="02" subtitle="BAC PRO" title="Développer son autonomie">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>• Diagnostic des systèmes</li>
          <li>• Maintenance corrective</li>
          <li>• Contrôles et réglages</li>
          <li>• Recherche de panne</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <button type="button" onClick={() => {setSelectedFormation(preparationEntreeBacProFormation); setIsFormationModalOpen(true);}} 
           className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
           [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),
           inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

            {/* 1. Reflet brillant supérieur */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

            {/* 2. Dégradé métallique */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

            {/* 3. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

            {/* 4. Texte centré */}
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
              Découvrir
            </span>

            {/* 5. Flèche à droite */}
            <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </button>
        </div>

      </ServiceCard>

      {/* ENTREE EN FORMATION BTS */}
    
      <ServiceCard number="03" subtitle="BTS" title="Approfondir son expertise">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>• Analyse des systèmes complexes</li>
          <li>• Diagnostic avancé</li>
          <li>• Organisation des interventions</li>
          <li>• Documentation constructeur</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <button type="button" onClick={() => {setSelectedFormation(preparationEntreeBTSFormation); setIsFormationModalOpen(true);}} 
            className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
            [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),
            inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

            {/* 1. Reflet brillant supérieur */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

            {/* 2. Dégradé métallique */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

            {/* 3. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

            {/* 4. Texte centré */}
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
              Découvrir
            </span>

            {/* 5. Flèche à droite */}
            <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </button>
        </div>

      </ServiceCard>


    </div>

  </div>

</section>





{/* Préparation aux examens */}





<section id="examens"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        CONSOLIDER SES ACQUIS
      </p>

      <h2 className="font-racing text-5xl mb-6">
        PRÉPARATION
        <br />
        <span className="gold-gradient">
          AUX EXAMENS
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Des séances ciblées pour préparer efficacement les épreuves du CAP,
        du Bac Professionnel et du BTS Maintenance des Véhicules.
        Les contenus sont construits à partir des référentiels officiels afin
        de renforcer les compétences attendues le jour de l'examen.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* CAP */}

      <ServiceCard number="01" subtitle="CAP" title="Révisions ciblées">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Technologie professionnelle</li>
          <li>✔ Diagnostic de premier niveau</li>
          <li>✔ Méthodologie d'intervention</li>
          <li>✔ Analyse de pannes simples</li>
          <li>✔ Préparation aux épreuves</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <button type="button" onClick={() => {setSelectedFormation(preparationExamensCAPFormation); setIsFormationModalOpen(true);}} 
            className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
            [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),
            inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

            {/* 1. Reflet brillant supérieur */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

            {/* 2. Dégradé métallique */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

            {/* 3. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

            {/* 4. Texte centré */}
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
              Découvrir
            </span>

            {/* 5. Flèche à droite */}
            <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </button>
        </div>

      </ServiceCard>

        {/* BAC PROFESSIONNEL */}

      <ServiceCard number="02" subtitle="BAC PRO" title="Révisions techniques">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Diagnostic approfondi</li>
          <li>✔ Électricité embarquée</li>
          <li>✔ Procédures constructeur</li>
          <li>✔ Organisation d'intervention</li>
          <li>✔ Préparation aux épreuves</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <button type="button" onClick={() => {setSelectedFormation(preparationExamensBacProFormation); setIsFormationModalOpen(true);}} 
           className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-black border border-
           [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),
           inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

            {/* 1. Reflet brillant supérieur */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

            {/* 2. Dégradé métallique */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

            {/* 3. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

            {/* 4. Texte centré */}
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
              Découvrir
            </span>

            {/* 5. Flèche à droite */}
            <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </button>
        </div>

      </ServiceCard>

          {/* BTS */}

      <ServiceCard number="03" subtitle="BTS" title="Accompagnement BTS">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Analyse technique</li>
          <li>✔ Diagnostic avancé</li>
          <li>✔ Gestion d'atelier</li>
          <li>✔ Technologies innovantes</li>
          <li>✔ Préparation aux examens</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <button type="button" onClick={() => {setSelectedFormation(preparationExamensBTSFormation); setIsFormationModalOpen(true);}} 
           className="group relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans 
           text-black border border-[#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),
           0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

            {/* 1. Reflet brillant supérieur */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

            {/* 2. Dégradé métallique */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

            {/* 3. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

            {/* 4. Texte centré */}
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base uppercase">
              Découvrir
            </span>

            {/* 5. Flèche à droite */}
            <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <ArrowRight className="w-[25px] h-[25px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
            </span>

          </button>
        </div>

      </ServiceCard>

    </div>
  </div>

  <div className="h-12"></div>

</section>





{/* PERFECTIONNEMENT PROFESSIONNEL */}





<section id="perfectionnement"
  className="scroll-mt-32 py-24 bg-[#0A0A0A]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        PERFECTIONNEMENT
      </p>

      <h2 className="font-racing text-5xl mb-6">
        DÉVELOPPER
        <br />
        <span className="gold-gradient">
          SON EXPERTISE
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Destinées aux professionnels comme aux passionnés exigeants,
        nos formations permettent d'acquérir des compétences avancées
        en diagnostic, préparation, électronique et méthodes
        d'intervention issues des pratiques d'atelier et du sport automobile.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Diagnostic */}

      <ServiceCard number="01" subtitle="DIAGNOSTIC" title="Diagnostic avancé">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Diagnostic constructeur</li>
          <li>✔ Lecture calculateurs</li>
          <li>✔ Recherche de panne</li>
          <li>✔ Méthodes professionnelles</li>
          <li>✔ Outils spécialisés</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <span className="relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-[#D6C49A] border border-
           [#8D7138]/60 bg-gradient-to-b from-[#40351F] via-[#282116] to-[#17130D] shadow-[0_3px_8px_rgba(0,0,0,0.55),inset_0_1px_2px_rgba(255,255,255,0.12),inset_0_-3px_5px_rgba(0,0,0,0.5)] cursor-default opacity-85">

            {/* 1. Reflet supérieur discret */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none" />

            {/* 2. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#806020] via-[#E0C47B] to-[#8B6725] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />

            {/* 3. Texte */}
            <span className="relative z-10 font-bold tracking-[0.18em] text-sm uppercase">
              À venir
            </span>

          </span>
        </div>

      </ServiceCard>

      {/* Performance */}

      <ServiceCard number="02" subtitle="PERFORMANCE" title="Optimisation moteur">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Cartographie moteur</li>
          <li>✔ Admission</li>
          <li>✔ Échappement</li>
          <li>✔ Optimisation des performances</li>
          <li>✔ Fiabilisation</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <span className="relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-[#D6C49A] border border-
           [#8D7138]/60 bg-gradient-to-b from-[#40351F] via-[#282116] to-[#17130D] shadow-[0_3px_8px_rgba(0,0,0,0.55),inset_0_1px_2px_rgba(255,255,255,0.12),inset_0_-3px_5px_rgba(0,0,0,0.5)] cursor-default opacity-85">

            {/* 1. Reflet supérieur discret */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none" />

            {/* 2. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#806020] via-[#E0C47B] to-[#8B6725] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />

            {/* 3. Texte */}
            <span className="relative z-10 font-bold tracking-[0.18em] text-sm uppercase">
              À venir
            </span>

          </span>
        </div>

      </ServiceCard>

      {/* Compétition */}

      <ServiceCard number="03" subtitle="COMPÉTITION" title="Châssis & préparation">

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Géométrie</li>
          <li>✔ Suspensions</li>
          <li>✔ Freinage</li>
          <li>✔ Préparation circuit</li>
          <li>✔ Assistance compétition</li>
        </ul>

        <div className="mt-auto pt-8 w-full flex justify-center">
          <span className="relative overflow-hidden inline-flex items-center justify-center w-full max-w-[260px] h-[60px] rounded-2xl font-sans text-[#D6C49A] border border-
           [#8D7138]/60 bg-gradient-to-b from-[#40351F] via-[#282116] to-[#17130D] shadow-[0_3px_8px_rgba(0,0,0,0.55),inset_0_1px_2px_rgba(255,255,255,0.12),inset_0_-3px_5px_rgba(0,0,0,0.5)] cursor-default opacity-85">

            {/* 1. Reflet supérieur discret */}
            <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none" />

            {/* 2. Trois bandes dorées à gauche */}
            <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[12%] w-[5px] bg-gradient-to-r from-[#806020] via-[#E0C47B] to-[#8B6725] -skew-x-[25deg] z-10" />
            <span className="absolute -top-2 -bottom-2 left-[16%] w-[5px] bg-gradient-to-r from-[#6D4B13] via-[#C9A85B] to-[#806020] -skew-x-[25deg] z-10" />

            {/* 3. Texte */}
            <span className="relative z-10 font-bold tracking-[0.18em] text-sm uppercase">
              À venir
            </span>

          </span>
        </div>

      </ServiceCard>

    </div>

  </div>

</section>




{/* CFA & ÉTABLISSEMENTS */}





<section id="cfa"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        PARTENARIATS
      </p>

      <h2 className="font-racing text-5xl mb-6">
        CFA &
        <br />
        <span className="gold-gradient">
          ÉTABLISSEMENTS
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Performance & Prestige Academy accompagne les établissements de formation,
        CFA et lycées professionnels dans le développement de leurs parcours
        pédagogiques grâce à des interventions techniques, des formations
        spécialisées et des projets sur mesure.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <p className="text-7xl font-black text-[#C9A22720] mb-6">
          01
        </p>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
          FORMATIONS
        </p>

        <h3 className="font-racing text-3xl mb-6">
          Sur site
        </h3>

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Intervention dans vos locaux</li>
          <li>✔ Modules personnalisés</li>
          <li>✔ Ateliers pratiques</li>
          <li>✔ Formations techniques</li>
          <li>✔ Adaptées à vos besoins</li>
        </ul>

      </div>

      {/* Carte 2 */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <p className="text-7xl font-black text-[#C9A22720] mb-6">
          02
        </p>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
          PARTENARIATS
        </p>

        <h3 className="font-racing text-3xl mb-6">
          Pédagogiques
        </h3>

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Création de contenus</li>
          <li>✔ Accompagnement pédagogique</li>
          <li>✔ Développement des compétences</li>
          <li>✔ Projets communs</li>
          <li>✔ Suivi des apprenants</li>
        </ul>

      </div>

      {/* Carte 3 */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <p className="text-7xl font-black text-[#C9A22720] mb-6">
          03
        </p>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
          PROJETS
        </p>

        <h3 className="font-racing text-3xl mb-6">
          Sur mesure
        </h3>

        <ul className="space-y-3 text-[#A8A9AD]">
          <li>✔ Sport automobile</li>
          <li>✔ Véhicules de compétition</li>
          <li>✔ Technologies récentes</li>
          <li>✔ Interventions spécifiques</li>
          <li>✔ Prestations personnalisées</li>
        </ul>

      </div>
    </div>

    <div className="text-center mt-20">
      <button type="button" onClick={() => setIsCFAModalOpen(true)} 
       className="group relative overflow-hidden inline-flex items-center justify-between w-full sm:w-auto min-w-[360px] h-[72px] px-7 rounded-2xl font-sans text-black border border-
       [#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),
       inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

        {/* 1. Reflet brillant supérieur */}
        <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

        {/* 2. Dégradé métallique */}
        <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

        {/* 3. Trois bandes dorées à gauche */}
        <span className="absolute -top-2 -bottom-2 left-[5%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
        <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[11%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

        {/* 4. Contenu centré : icône et texte */}
        <span className="absolute inset-0 z-10 flex items-center justify-center gap-4">
          <span className="text-left font-bold tracking-wider text-sm sm:text-base leading-tight">
            DÉCOUVRIR NOS
            <br />
            INTERVENTIONS
          </span>
        </span>

        {/* 5. Flèche à droite */}
        <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <ArrowRight className="w-[28px] h-[28px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
        </span>

      </button>
    </div>


    {/* Appel à l'action */}
    <div className="text-center mt-20">

      <h3 className="font-racing text-4xl mb-6">
        Vous représentez un établissement ?
      </h3>

      <p className="max-w-2xl mx-auto text-[#A8A9AD] mb-10 leading-relaxed">
        Vous souhaitez développer une offre de formation en mécanique,
        organiser des interventions techniques ou mettre en place un partenariat
        pédagogique ? Échangeons ensemble sur votre projet.
      </p>

      <a href="/contact" className="group relative overflow-hidden inline-flex items-center justify-between w-full sm:w-auto min-w-[360px] h-[72px] px-7 rounded-2xl font-sans text-black border border-[#E8B83E] bg-gradient-to-b from-[#FFF0A6] via-[#E8AC22] to-[#98600A] shadow-[0_3px_8px_rgba(0,0,0,0.65),0_0_14px_rgba(218,158,25,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(83,43,0,0.65)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]">

        {/* 1. Reflet brillant supérieur */}
        <span className="absolute inset-x-1 top-[2px] h-[38%] rounded-t-xl bg-gradient-to-b from-white/65 via-white/20 to-transparent pointer-events-none" />

        {/* 2. Dégradé métallique */}
        <span className="absolute inset-0 bg-gradient-to-b from-[#FFE99A]/30 via-transparent to-[#6E4000]/35 pointer-events-none" />

        {/* 3. Trois bandes dorées à gauche */}
        <span className="absolute -top-2 -bottom-2 left-[5%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFF0A0] to-[#C17B08] -skew-x-[25deg] z-10 shadow-[1px_0_2px_rgba(0,0,0,0.35)]" />
        <span className="absolute -top-2 -bottom-2 left-[8%] w-[5px] bg-gradient-to-r from-[#9A5C00] via-[#FFF4B8] to-[#D18B0B] -skew-x-[25deg] z-10" />
        <span className="absolute -top-2 -bottom-2 left-[11%] w-[5px] bg-gradient-to-r from-[#8B5100] via-[#FFEBA0] to-[#C17B08] -skew-x-[25deg] z-10" />

        {/* 4. Contenu centré : icône et texte */}
        <span className="absolute inset-0 z-10 flex items-center justify-center gap-4">
          <span className="text-left font-bold tracking-wider text-sm sm:text-base leading-tight">
            ÉCHANGER SUR
            <br />
            VOTRE PROJET
          </span>
        </span>

        {/* 5. Flèche à droite */}
        <span className="absolute right-[9%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <ArrowRight className="w-[28px] h-[28px] text-black stroke-[2.25] transition-transform duration-300 group-hover:translate-x-1.5"/>
        </span>

      </a>

    </div>

  </div>

</section>

    <ContactBanner />

    <Footer />


    <FormationModal
      formation={selectedFormation}
      isOpen={isFormationModalOpen}
      onClose={() => setIsFormationModalOpen(false)}
      onRequestInformation={() => {setIsFormationModalOpen(false); window.location.href = "/contact";}}
    />
    <CFAModal
      isOpen={isCFAModalOpen}
      onClose={() => setIsCFAModalOpen(false)}
      onContact={() => { setIsCFAModalOpen(false); window.location.href = "/contact";}}
    />

    </div>

  );

}
