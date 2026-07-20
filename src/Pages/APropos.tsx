import {
  BarChart3,
  BookOpen,
  Gauge,
  Heart,
  ShieldCheck,
  Trophy,
  Wrench,
} from "lucide-react";

import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <SEO
        title="À propos | Performance & Prestige Academy"
        description="Découvrez le parcours, l'expérience en compétition et la philosophie de Performance & Prestige Academy."
        keywords="Performance Prestige Academy, mécanique automobile, mécanique moto, compétition automobile, préparation moteur, formation mécanique, Nans-les-Pins"
      />

      <Navbar />

      <HeroPage
        surTitre="L'HISTOIRE"
        titre="À"
        titreGold="PROPOS"
        image="/images/about-hero.jpg"
        scrollTarget="histoire"
      />

      {/* Histoire */}

      <section
        id="histoire"
        className="scroll-mt-28 py-24 sm:py-32 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-[rgba(201,162,39,0.15)]" />

              <img
                src="/images/about-premiers-pas.jpg"
                alt="Les premiers pas dans la mécanique"
                className="relative w-full h-[420px] sm:h-[540px] object-cover rounded-2xl gold-border"
              />
            </div>

            <div>
              <p className="font-racing text-sm tracking-[0.4em] text-[#C9A227] mb-4">
                MON HISTOIRE
              </p>

              <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
                UNE PASSION
                <br />
                <span className="gold-gradient">DEVENUE MÉTIER</span>
              </h2>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                Depuis mon plus jeune âge, la mécanique occupe une place
                essentielle dans ma vie. Très tôt, je passe des heures à
                démonter, comprendre et réparer tout ce qui possède un moteur.
                Chaque panne devient une énigme, chaque remontage une nouvelle
                occasion d’apprendre.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                Cette curiosité a grandi avec moi jusqu’à devenir une véritable
                vocation. L’automobile, la moto, l’électronique, le diagnostic
                et la préparation sont autant de domaines qui alimentent encore
                aujourd’hui cette envie permanente de progresser.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Performance & Prestige Academy est née de cette philosophie :
                proposer une mécanique exigeante, moderne et rigoureuse, tout
                en transmettant un savoir construit par l’expérience et la
                pratique du terrain.
              </p>

              <div className="w-24 h-[2px] bg-[#C9A227] mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Compétition */}

      <section className="py-24 sm:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-racing text-sm tracking-[0.4em] text-[#C9A227] mb-4">
                L’EXPÉRIENCE
              </p>

              <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
                LA COMPÉTITION
                <br />
                <span className="gold-gradient">COMME ÉCOLE D’EXIGENCE</span>
              </h2>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                La compétition représente pour moi bien plus qu’une recherche
                de performance. Elle impose une rigueur permanente, une
                méthodologie irréprochable et la capacité de prendre les bonnes
                décisions sous pression.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                Chaque détail compte. Une préparation réussie ne se mesure pas
                uniquement à la puissance développée, mais aussi à la capacité
                de la machine à rester performante, fiable, sécurisée et
                conforme aux exigences de sa discipline.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Cette expérience acquise sur les paddocks influence aujourd’hui
                chacune des interventions réalisées chez Performance & Prestige
                Academy, qu’il s’agisse d’un véhicule de route ou d’une machine
                destinée à la compétition.
              </p>

              <div className="w-24 h-[2px] bg-[#C9A227] mt-10" />
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 rounded-2xl border border-[rgba(201,162,39,0.15)]" />

              <img
                src="/images/about-competition.jpg"
                alt="Expérience en compétition"
                className="relative w-full h-[420px] sm:h-[540px] object-cover rounded-2xl gold-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="bg-dark-card gold-border rounded-2xl p-8 service-card">
              <Trophy className="w-10 h-10 text-[#C9A227] mb-6" />

              <h3 className="font-racing text-2xl mb-4">
                Compétition
              </h3>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Le terrain constitue le meilleur laboratoire pour développer
                des solutions performantes, fiables et adaptées aux contraintes
                réelles.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 service-card">
              <Gauge className="w-10 h-10 text-[#C9A227] mb-6" />

              <h3 className="font-racing text-2xl mb-4">
                Développement
              </h3>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Chaque préparation est réfléchie, contrôlée et validée avec
                méthode pour trouver le meilleur équilibre entre performance et
                fiabilité.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 service-card">
              <BarChart3 className="w-10 h-10 text-[#C9A227] mb-6" />

              <h3 className="font-racing text-2xl mb-4">
                Analyse
              </h3>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Les données permettent de comprendre précisément le
                comportement d’une machine avant d’engager une modification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologie */}

      <section className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-[rgba(201,162,39,0.15)]" />

              <img
                src="/images/about-data.png"
                alt="Analyse de données et acquisition"
                className="relative w-full h-[420px] sm:h-[540px] object-cover rounded-2xl gold-border"
              />
            </div>

            <div>
              <p className="font-racing text-sm tracking-[0.4em] text-[#C9A227] mb-4">
                TECHNOLOGIE & EXPERTISE
              </p>

              <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
                LA DONNÉE
                <br />
                <span className="gold-gradient">AU SERVICE DU TERRAIN</span>
              </h2>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                La préparation moderne ne consiste plus simplement à remplacer
                des pièces. Elle repose sur une compréhension globale de la
                mécanique, de l’électronique et du comportement dynamique du
                véhicule.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                Diagnostic électronique, cartographie ECU, acquisition de
                données et analyse du fonctionnement permettent d’appuyer
                chaque décision sur des mesures objectives.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                À mes yeux, la technologie doit toujours servir la mécanique,
                jamais la remplacer. Elle permet de confirmer les sensations,
                d’identifier les limites et de fiabiliser les évolutions
                apportées.
              </p>

              <div className="w-24 h-[2px] bg-[#C9A227] mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Transmission */}

      <section className="py-24 sm:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-racing text-sm tracking-[0.4em] text-[#C9A227] mb-4">
                LA TRANSMISSION
              </p>

              <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
                APPRENDRE
                <br />
                <span className="gold-gradient">POUR MIEUX TRANSMETTRE</span>
              </h2>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                Après plusieurs années passées à apprendre, à pratiquer et à
                confronter les méthodes à la réalité du terrain, il est devenu
                naturel de transmettre à mon tour.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify mb-6">
                Performance & Prestige Academy a été créée pour proposer des
                formations concrètes, accessibles et directement applicables.
                Les connaissances sont transmises en atelier, au contact de
                véritables véhicules et de situations techniques réelles.
              </p>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Du passionné débutant au professionnel souhaitant approfondir
                ses compétences, chaque participant bénéficie d’un
                accompagnement fondé sur la pratique, l’échange et la
                compréhension.
              </p>

              <div className="w-24 h-[2px] bg-[#C9A227] mt-10" />
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 rounded-2xl border border-[rgba(201,162,39,0.15)]" />

              <img
                src="/images/about-moteur.jpg"
                alt="Transmission du savoir mécanique"
                className="relative w-full h-[420px] sm:h-[540px] object-cover rounded-2xl gold-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domaines */}

      <section className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="font-racing text-sm tracking-[0.4em] text-[#C9A227] mb-4">
              UNE EXPERTISE PLURIDISCIPLINAIRE
            </p>

            <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl">
              DES COMPÉTENCES
              <span className="gold-gradient"> COMPLÉMENTAIRES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <Wrench className="w-10 h-10 text-[#C9A227] mx-auto mb-5" />

              <h3 className="font-racing text-xl mb-3">
                Mécanique
              </h3>

              <p className="text-sm text-[#A8A9AD] leading-relaxed">
                Entretien, réparation, diagnostic et compréhension complète des
                systèmes mécaniques.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <Gauge className="w-10 h-10 text-[#C9A227] mx-auto mb-5" />

              <h3 className="font-racing text-xl mb-3">
                Performance
              </h3>

              <p className="text-sm text-[#A8A9AD] leading-relaxed">
                Optimisation moteur, châssis, fiabilisation et développement
                pour la route ou la compétition.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <BarChart3 className="w-10 h-10 text-[#C9A227] mx-auto mb-5" />

              <h3 className="font-racing text-xl mb-3">
                Électronique
              </h3>

              <p className="text-sm text-[#A8A9AD] leading-relaxed">
                Diagnostic, cartographie ECU, lecture des données et recherche
                méthodique des dysfonctionnements.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <BookOpen className="w-10 h-10 text-[#C9A227] mx-auto mb-5" />

              <h3 className="font-racing text-xl mb-3">
                Formation
              </h3>

              <p className="text-sm text-[#A8A9AD] leading-relaxed">
                Transmission de méthodes professionnelles adaptées aux
                débutants, passionnés et techniciens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}

      <section className="py-24 sm:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="font-racing text-sm tracking-[0.4em] text-[#C9A227] mb-4">
              MA PHILOSOPHIE
            </p>

            <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl">
              TROIS VALEURS
              <span className="gold-gradient"> ESSENTIELLES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <Heart className="w-12 h-12 text-[#C9A227] mx-auto mb-6" />

              <h3 className="font-racing text-2xl mb-4">
                Passion
              </h3>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                La mécanique n’est pas simplement mon métier. Elle nourrit
                chaque jour l’envie de découvrir, de comprendre et de
                progresser.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <ShieldCheck className="w-12 h-12 text-[#C9A227] mx-auto mb-6" />

              <h3 className="font-racing text-2xl mb-4">
                Rigueur
              </h3>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Chaque intervention repose sur des méthodes précises, des
                contrôles systématiques et une recherche constante de
                fiabilité.
              </p>
            </div>

            <div className="bg-dark-card gold-border rounded-2xl p-8 text-center service-card">
              <BookOpen className="w-12 h-12 text-[#C9A227] mx-auto mb-6" />

              <h3 className="font-racing text-2xl mb-4">
                Transmission
              </h3>

              <p className="text-[#A8A9AD] leading-relaxed text-justify">
                Partager les connaissances et l’expérience acquises constitue
                la meilleure manière de faire progresser durablement notre
                métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation finale */}

      <section className="relative min-h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-citation.jpg"
            alt="Une passion pour la mécanique et la compétition"
            className="w-full h-full object-cover object-center grayscale"
          />

          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[30rem] pb-20 text-center">
          <div className="gold-line mx-auto mb-10" />

          <blockquote className="font-racing text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-white">
            « La performance ne naît jamais du hasard.
            <br />
            Elle est le résultat de la méthode, de la passion
            <br className="hidden sm:block" />
            et de milliers d’heures passées à comprendre chaque détail. »
          </blockquote>

          <p className="font-racing text-[#C9A227] tracking-[0.35em] mt-10">
            PERFORMANCE & PRESTIGE ACADEMY
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}