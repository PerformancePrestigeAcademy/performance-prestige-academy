import { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Wrench, Gauge, BookOpen, Trophy, Shield, Zap, History,
  CheckCircle, ArrowRight, Instagram, Facebook
} from 'lucide-react';
import Navbar from "./Navbar";
import Footer from "../components/Footer.tsx";
import SEO from "../components/SEO.tsx";
import { NAV_LINKS } from "../data/navigation";
import ContactForm from "../components/ContactForm";


const MAINTENANCE = [
  {
    id: 'maintenance',
    image: '/images/maintenance.png',
    tag: 'Maintenance',
    title: 'Maintenance Véhicules',
    subtitle: 'VÉHICULES 2 ROUES & 4 ROUES',
    description:
      'Entretien, diagnostic et réparation pour tous vos véhicules. Notre atelier prend en charge autos et motos avec le même niveau d\'exigence et de précision.',
    features: ['Entretien & Révisions', 'Diagnostic Électronique', 'Réparation Complète', 'Contrôle & Vérification'],
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    id: 'formation',
    image: '/images/formation.png',
    tag: 'Formation',
    title: 'Formation mécanique et technique',
    subtitle: 'DÉBUTANTS · PARTICULIERS · PROFESSIONNELS',
    description:
      'Des bases de la mécanique pour les particuliers débutants jusqu\'aux compétences techniques poussées pour les professionnels, avec un accompagnement jusqu\'au passage du BTS. Chaque programme est construit par des praticiens du terrain.',
    features: ['Mécanique de base', 'Diagnostic Électronique', 'Technique avancée', 'Aide au BTS'],
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: 'preparation',
    image: '/images/preparation.png',
    tag: 'Performance',
    title: 'Préparation & Développement',
    subtitle: 'PERFORMANCE · FIABILITÉ · COMPÉTITION',
    description:
      'Nous poussons votre véhicule au-delà de ses limites d\'origine. De l\'optimisation moteur au développement compétition, notre expertise technique transforme chaque machine en outil de performance. Pour les compétiteurs, nous intervenons en restant en pleine conformité avec les règlements des catégories visées.',
    features: ['Optimisation Moteur', 'Châssis & Suspensions', 'Cartographie ECU', 'Conformité Règlements Compétition'],
    icon: <Gauge className="w-6 h-6" />,
  },
  {
  id: 'restauration',
  image: '/images/restauration.png',
  tag: 'Restauration',
  title: 'Restauration de véhicules anciens',
  subtitle: 'PRÉSERVER · RESTAURER · TRANSMETTRE',
  description:
    'Chaque véhicule ancien possède une histoire et des particularités qui méritent une attention spécifique. Du diagnostic initial à la remise en état, chaque intervention est réalisée avec méthode afin de préserver son authenticité, restaurer son fonctionnement et assurer sa fiabilité.',
  features: [ 'Mécanique', 'Faisceau électrique', 'Carrosserie', 'Intérieur', ],
  icon: <History className="w-6 h-6" />,
},
];

const VALUES = [
  { icon: <Trophy className="w-8 h-8" />, title: 'Excellence', desc: 'Chaque intervention est menée avec une précision et une rigueur de compétition.' },
  { icon: <Shield className="w-8 h-8" />, title: 'Fiabilité', desc: 'Nos préparations et formations reposent sur des méthodes éprouvées en conditions réelles.' },
  { icon: <Zap className="w-8 h-8" />, title: 'Performance', desc: 'Repousser les limites techniques est notre raison d\'être, sur route comme sur circuit.' },
];

function useScrollSpy() {
  const [active, setActive] = useState('accueil');
  useEffect(() => {
    const handler = () => {
      const sections = ['accueil', 'maintenance', 'formation', 'apropos', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return active;
}

<SEO
    title="Performance & Prestige Academy | Préparation, Formation & Maintenance Automobile"
    description="Performance & Prestige Academy est spécialisée dans la préparation moteur, la maintenance automobile, le diagnostic électronique et la formation professionnelle dans le Var."

    keywords="
préparation moteur,
garage performance,
maintenance automobile,
diagnostic automobile,
cartographie moteur,
formation mécanique,
Nans-les-Pins,
Var,
Performance & Prestige Academy
"
/>
/*
function Navbar() {
  const active = useScrollSpy();
  const [open, setOpen] = useState(false);
  
  return (
    <nav
  className="fixed top-0 left-0 right-0 z-50
             bg-gradient-to-b
             from-black/30
             via-black/18
             to-black/8
             backdrop-blur-2xl
             border-b border-[#C9A22720]
             shadow-[0_10px_40px_rgba(0,0,0,0.30)]
             transition-all duration-500 py-4"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src="/images/logo-ecusson-transparent.png"
            alt="Performance & Prestige Academy"
            className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-none">
            <div className="font-racing font-black text-xl tracking-[0.18em] gold-gradient">PERFORMANCE</div>
            <div className="font-racing text-sm tracking-[0.32em] text-white/90">&amp; PRESTIGE ACADEMY</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-racing font-extrabold text-sm tracking-[0.22em] uppercase transition-colors duration-200 ${
                  active === l.href.slice(1)
                    ? 'text-[#C9A227]'
                    : 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] hover:text-[#C9A227]'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:flex btn-gold text-black font-racing font-bold text-sm tracking-widest px-9 py-3.5 rounded shadow-[0_0_20px_rgba(201,162,39,0.35)]"
        >
          DEVIS GRATUIT
        </a>

        <button
          className="lg:hidden text-[#C9A227] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-[rgba(201,162,39,0.2)] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-racing text-sm tracking-widest uppercase text-[#A8A9AD] hover:text-[#C9A227] transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gold text-black font-racing font-bold text-sm tracking-widest px-6 py-3 rounded text-center mt-2"
          >
            DEVIS GRATUIT
          </a>
        </div>
      )}
    </nav>
  );
}
*/

function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
     
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Hero background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 checkered-accent opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-32">
        <p className="font-racing text-sm sm:text-base tracking-[0.5em] text-[#C9A227] mb-4 animate-fade-in-up animate-delay-100">
          PERFORMANCE &amp; PRESTIGE ACADEMY
        </p>

       <h1 className="font-racing font-bold text-5xl sm:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in-up animate-delay-200">
  <span className="gold-gradient">L'ART DE LA</span>
  <br />
  <span className="text-white">MÉCANIQUE AUTO &amp; MOTO</span>
  <br />
  <span className="text-[#A8A9AD]">DANS LE VAR</span>
</h1>
        <p className="text-[#A8A9AD] text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up animate-delay-300">
          Préparation performance, formation professionnelle et maintenance de précision
          pour véhicules 2 et 4 roues. Parce que la passion mérite l'excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <a href="#maintenance" className="btn-gold text-black font-racing font-bold text-sm tracking-widest px-10 py-4 rounded">
            DÉCOUVRIR NOS SERVICES
          </a>
          <a href="/contact" className="btn-outline-gold text-white font-racing font-bold text-sm tracking-widest px-10 py-4 rounded">
            NOUS CONTACTER
          </a>
        </div>

      </div>

      <a
        href="#maintenance"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A227] animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

function ServiceCard({ service, reversed }: { service: typeof MAINTENANCE[0]; reversed: boolean }) {
  return (
    <div
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 overflow-hidden rounded-2xl gold-border service-card`}
    >
      <div className="lg:w-1/2 relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-72 sm:h-96 lg:h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#C9A227] text-black font-racing text-xs font-bold tracking-widest px-3 py-1.5 rounded">
            {service.tag.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="lg:w-1/2 bg-dark-card p-8 sm:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[#C9A227] icon-gold">{service.icon}</div>
          <div className="gold-line" />
        </div>

        <p className="font-racing text-xs tracking-[0.3em] text-[#C9A227] mb-2">{service.subtitle}</p>
        <h3 className="font-racing font-bold text-3xl sm:text-4xl text-white mb-5">{service.title}</h3>
        <p className="text-[#A8A9AD] leading-relaxed mb-8"
        style={{ textAlign: "justify" }}
        >
          {service.description}
          </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#E5E5E5]">
              <CheckCircle className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-[#C9A227] font-racing font-semibold text-sm tracking-widest hover:gap-4 transition-all duration-200 group"
        >
          DEMANDER UN DEVIS
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

function Maintenance() {
  return (
    <section id="maintenance" className="py-24 sm:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <p className="font-racing text-xs tracking-[0.5em] text-[#C9A227] mb-4">NOS EXPERTISES</p>
          <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            QUATRE PILIERS
            <span className="gold-gradient"> D'EXCELLENCE</span>
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#A8A9AD] max-w-2xl mx-auto leading-relaxed">
            De la maintenance quotidienne à la restauration de véhicules anciens,
en passant par la formation et la préparation compétition, chaque projet
bénéficie de la même exigence, de la même précision et du même engagement.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {MAINTENANCE.map((s, i) => (
            <ServiceCard key={s.id} service={s} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}




export default function App() {
  return (
    <>
      <SEO
        title="Performance & Prestige Academy | Mécanique auto dans le Var"
        description="Maintenance automobile, diagnostic électronique, formation mécanique et préparation compétition dans le Var. Contactez Performance & Prestige Academy."
      />

      <Navbar />

      <main>
        <Hero />
        <Maintenance />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}