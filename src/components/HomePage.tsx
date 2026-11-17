
import { Mail, ArrowRight } from 'lucide-react';
import Navbar from "./Navbar";
import SEO from "../components/SEO.tsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ContactBanner from "../components/ContactBanner";

const SERVICES = [
  {
    id: 'maintenance',
    href: '/maintenance',
    image: '/images/accueil/accueilmaintenance.png',
    number: '01',
    title: 'MAINTENANCE',
    description: 'Entretien, diagnostic,\nréparation',
  },
  {
    id: 'formation',
    href: '/formation',
    image: '/images/accueil/accueilformation.png',
    number: '02',
    title: 'FORMATION',
    description: 'Particuliers, professionnels,\napprentis, CFA',
  },
  {
    id: 'preparation',
    href: '/preparation-developpement',
    image: '/images/accueil/accueilpreparation.png',
    number: '03',
    title: 'PRÉPARATION &\nDÉVELOPPEMENT',
    description: 'Performance, mise au point,\ncompétition',
  },
  {
    id: 'restauration',
    href: '/maintenance',
    image: '/images/accueil/accueilrestauration.png',
    number: '04',
    title: 'RESTAURATION',
    description: 'Véhicules anciens\net de caractère',
  },
];

const PANEL_CLIPS = [
  'lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]',
  'lg:[clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]',
  'lg:[clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]',
  'lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]',
];

function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate flex items-center justify-center overflow-hidden min-h-[420px] lg:min-h-0 lg:h-full"
    >
      {/* Image originale conservée */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero/hero.png"
          alt="Performance & Prestige Academy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Assombrissement */}
      <div className="absolute inset-0 -z-10 hero-overlay" />

      <div className="relative z-10 w-full text-center px-4 py-12 lg:py-4">

        <p className="font-racing text-xs sm:text-sm tracking-[0.5em] text-[#C9A227] mb-4">
          PERFORMANCE &amp; PRESTIGE ACADEMY
        </p>

        <h1 className="font-racing font-bold leading-[1.02]">
          <span className="block gold-gradient text-4xl sm:text-5xl xl:text-6xl mb-1">
            L'ART DE LA
          </span>
          <span className="block text-white text-4xl sm:text-5xl xl:text-6xl">
            MÉCANIQUE AUTO &amp; MOTO
          </span>
          <span className="block text-[#A8A9AD] text-3xl sm:text-4xl xl:text-5xl mt-2">
            DANS LE VAR
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#C9A227]" />
          <div className="flex gap-1 -skew-x-[25deg]">
            <span className="w-2 h-7 bg-[#C9A227]" />
            <span className="w-2 h-7 bg-[#C9A227]" />
            <span className="w-2 h-7 bg-[#C9A227]" />
          </div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#C9A227]" />
        </div>
      </div>
    </section>
  );
}

function ServicePanels() {
  return (
    <section
      id="services"
      className="relative isolate grid grid-cols-1 sm:grid-cols-2 lg:flex overflow-hidden bg-black border-y border-[#C9A227]"
    >

      {SERVICES.map((service, index) => (
        <div
          key={service.id}
          className={`relative min-h-[340px] lg:min-h-0 lg:flex-[0_0_28%] lg:-ml-[4%] ${
            index === 0 ? 'lg:ml-0' : ''
          }`}
          style={{ zIndex: index + 1 }}
        >

          <Link
            to={service.href}
            aria-label={`Découvrir ${service.title.replace('\n', ' ')}`}
            className={`group relative isolate flex h-full min-h-[340px] lg:min-h-0 flex-col justify-end overflow-hidden ${PANEL_CLIPS[index]}`}
          >

            {/* Photographie */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
              <img
                src={service.image}
                alt=""
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Dégradé de lecture */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/85 via-45% to-black/10" />

            {/* Reflet au survol */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C9A227]/0 via-transparent to-[#C9A227]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Contenu */}
            <div className={`relative z-10 pb-6 pt-12 xl:pb-7 ${index === 0? "px-6 xl:px-8": "pl-20 pr-6 xl:pl-24 2xl:pl-28"}`}>

              <div className="flex items-center gap-3 mb-3">

                <span className="font-racing font-bold text-2xl text-[#D6A92B]"> {service.number} </span>

                <div className="h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent" />

              </div>

              <h2 className="font-racing font-bold text-white text-xl xl:text-2xl 2xl:text-3xl leading-tight whitespace-pre-line mb-3">
                {service.title}
              </h2>

              <p className="text-[#E5E5E5] text-sm xl:text-base leading-snug whitespace-pre-line">
                {service.description}
              </p>

              {/* Bouton */}
              <div className="mt-6 flex justify-start">

                <span
                  className="inline-flex items-center justify-center gap-3 border-2 border-[#C9A227] text-white font-racing font-bold 
                  text-xs xl:text-sm tracking-wide px-5 xl:px-6 py-3 transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-black"
                  style={{clipPath: 'polygon(8% 0,100% 0,92% 100%,0 100%)'}}>
                    EN SAVOIR PLUS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>

              </div>

            </div>

          </Link>

          {/* Séparation lumineuse indépendante du cadrage */}
          {index < 3 && (
            <div className="hidden lg:block absolute pointer-events-none right-0 top-[-5%] h-[110%] w-[3px] bg-gradient-to-b from-[#F7D66B] 
            via-[#C9A227] to-[#78530A] -skew-x-[12deg] shadow-[0_0_12px_rgba(201,162,39,0.6)]" />)}

        </div>
      ))}

    </section>
  );
}

<ContactBanner />

export default function App() {
  return (
    <>
      <SEO
        title="Mécanique Auto & Moto | Performance & Prestige Academy"
        description="Maintenance, diagnostic, restauration, formation et préparation auto & moto. Performance & Prestige Academy accompagne particuliers, professionnels et compétiteurs."
        keywords="préparation moteur, garage performance, maintenance automobile, diagnostic automobile, cartographie moteur, formation mécanique, Nans-les-Pins, Var, Performance & Prestige Academy"
      />

      <Navbar />

      <main className="lg:h-[calc(100svh-56px)] lg:min-h-[596px] lg:grid lg:grid-rows-[55%_minmax(0,1fr)_64px] lg:overflow-hidden"
              >
        <Hero />
        <ServicePanels />
        <ContactBanner />
        
      </main>
      <Footer />
    </>
  );
}

