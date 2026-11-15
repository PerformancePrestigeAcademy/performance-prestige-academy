
import { Mail, ArrowRight } from 'lucide-react';
import Navbar from "./Navbar";
import SEO from "../components/SEO.tsx";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: 'maintenance',
    href: '/maintenance',
    image: '/images/maintenance.png',
    number: '01',
    title: 'MAINTENANCE',
    description: 'Entretien, diagnostic,\nréparation',
  },
  {
    id: 'formation',
    href: '/formation',
    image: '/images/formation.png',
    number: '02',
    title: 'FORMATION',
    description: 'Particuliers, professionnels,\napprentis, CFA',
  },
  {
    id: 'preparation',
    href: '/preparation-developpement',
    image: '/images/preparation.png',
    number: '03',
    title: 'PRÉPARATION &\nDÉVELOPPEMENT',
    description: 'Performance, mise au point,\ncompétition',
  },
  {
    id: 'restauration',
    href: '/maintenance',
    image: '/images/restauration.png',
    number: '04',
    title: 'RESTAURATION',
    description: 'Véhicules anciens\net de caractère',
  },
];

function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex items-center justify-center overflow-hidden min-h-[65svh] lg:min-h-0"
    >
      {/* Image de fond existante */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Performance & Prestige Academy - Automobile et motocycle"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 checkered-accent opacity-10" />
      </div>

      {/* Titre principal */}
      <div className="relative z-10 w-full px-4 text-center py-16 lg:py-6">

        <p className="font-racing text-xs sm:text-sm tracking-[0.5em] text-[#C9A227] mb-5">
          PERFORMANCE &amp; PRESTIGE ACADEMY
        </p>

        <h1 className="font-racing font-bold leading-[1.05]">
          <span className="block gold-gradient text-4xl sm:text-5xl lg:text-5xl xl:text-6xl mb-2">
            L'ART DE LA
          </span>

          <span className="block text-white text-4xl sm:text-5xl lg:text-5xl xl:text-6xl">
            MÉCANIQUE AUTO &amp; MOTO
          </span>

          <span className="block text-[#A8A9AD] text-3xl sm:text-4xl lg:text-4xl xl:text-5xl mt-2">
            DANS LE VAR
          </span>
        </h1>

        {/* Plus de texte descriptif ni de boutons */}
      </div>
    </section>
  );
}

function ServicePanels() {
  return (
    <section
      id="services"
      className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-black overflow-hidden"
    >
      {SERVICES.map((service, index) => (
        <Link
          key={service.id}
          to={service.href}
          aria-label={`Découvrir ${service.title.replace('\n', ' ')}`}
          className="group relative isolate min-h-[340px] lg:min-h-0 overflow-hidden flex flex-col justify-end border-b lg:border-b-0 border-[#C9A227]/50"
          style={{
            clipPath:
              window.innerWidth >= 1024
                ? 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
                : undefined,
          }}
        >
          {/* Photographie */}
          <div className="absolute inset-0 -z-20">
            <img
              src={service.image}
              alt=""
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Voile sombre */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/15 group-hover:from-black/95 group-hover:via-black/65 transition-all duration-500" />

          {/* Décoration dorée */}
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#C9A227] via-[#F4D36B] to-[#8C6810] opacity-80" />

          {/* Contenu */}
          <div className="relative z-10 p-6 sm:p-7 xl:p-8">

            <div className="flex items-center gap-3 mb-3">
              <span className="font-racing font-bold text-xl sm:text-2xl text-[#D6A92B]">
                {service.number}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#C9A227] to-transparent" />
            </div>

            <h2 className="font-racing font-bold text-white text-xl sm:text-2xl xl:text-[1.65rem] leading-tight whitespace-pre-line mb-3">
              {service.title}
            </h2>

            <p className="text-[#E5E5E5] text-sm sm:text-base leading-snug whitespace-pre-line min-h-[42px]">
              {service.description}
            </p>

            {/* Bouton angulaire */}
            <div className="mt-6 flex justify-end">
              <span
                className="inline-flex items-center justify-center gap-3 border border-[#C9A227] text-white font-racing font-bold text-xs tracking-wider px-5 py-3 transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-black"
                style={{
                  clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)',
                }}
              >
                EN SAVOIR PLUS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

function ContactBanner() {
  return (
    <section
      id="contact"
      className="relative bg-[#080808] border-t border-[#C9A227]/60 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 checkered-accent opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-10 py-5 lg:py-0 flex flex-col sm:flex-row items-center justify-between gap-5">

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex gap-1 -skew-x-[25deg]">
            <span className="w-2 h-12 bg-[#C9A227]" />
            <span className="w-2 h-12 bg-[#C9A227]" />
            <span className="w-2 h-12 bg-[#C9A227]" />
          </div>

          <div>
            <h2 className="font-racing font-bold text-2xl sm:text-3xl text-white italic">
              UN PROJET ?
            </h2>

            <p className="font-racing text-xs sm:text-sm text-[#A8A9AD] tracking-wide">
              ENTRETIEN <span className="text-[#C9A227]">•</span>
              &nbsp; FORMATION <span className="text-[#C9A227]">•</span>
              &nbsp; PRÉPARATION <span className="text-[#C9A227]">•</span>
              &nbsp; RESTAURATION
            </p>
          </div>
        </div>

        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-4 border-2 border-[#C9A227] text-white font-racing font-bold text-sm sm:text-base tracking-wider px-8 py-4 transition-all duration-300 hover:bg-[#C9A227] hover:text-black"
          style={{
            clipPath: 'polygon(7% 0, 100% 0, 93% 100%, 0 100%)',
          }}
        >
          <Mail className="w-6 h-6" />
          NOUS CONTACTER
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <SEO
        title="Mécanique Auto & Moto | Performance & Prestige Academy"
        description="Maintenance, diagnostic, restauration, formation et préparation auto & moto. Performance & Prestige Academy accompagne particuliers, professionnels et compétiteurs."
        keywords="préparation moteur, garage performance, maintenance automobile, diagnostic automobile, cartographie moteur, formation mécanique, Nans-les-Pins, Var, Performance & Prestige Academy"
      />

      <Navbar />

      <main className="lg:h-[calc(100svh-68px)] lg:min-h-[620px] lg:grid lg:grid-rows-[minmax(0,0.95fr)_minmax(0,1fr)_78px] lg:overflow-hidden">
        <Hero />
        <ServicePanels />
        <ContactBanner />
      </main>
    </>
  );
}
