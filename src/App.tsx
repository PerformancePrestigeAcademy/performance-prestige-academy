import { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Wrench, Gauge, BookOpen, Trophy, Shield, Zap,
  CheckCircle, ArrowRight, Instagram, Facebook
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Formation', href: '#formation' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
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
      const sections = ['accueil', 'services', 'formation', 'apropos', 'contact'];
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
          <span className="text-white">MÉCANIQUE</span>
          <br />
          <span className="text-[#A8A9AD]">D'EXCELLENCE</span>
        </h1>

        <p className="text-[#A8A9AD] text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up animate-delay-300">
          Préparation performance, formation professionnelle et maintenance de précision
          pour véhicules 2 et 4 roues. Parce que la passion mérite l'excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <a href="#services" className="btn-gold text-black font-racing font-bold text-sm tracking-widest px-10 py-4 rounded">
            DÉCOUVRIR NOS SERVICES
          </a>
          <a href="#contact" className="btn-outline-gold text-white font-racing font-bold text-sm tracking-widest px-10 py-4 rounded">
            NOUS CONTACTER
          </a>
        </div>

      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A227] animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

function ServiceCard({ service, reversed }: { service: typeof SERVICES[0]; reversed: boolean }) {
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
        <p className="text-[#A8A9AD] leading-relaxed mb-8">{service.description}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#E5E5E5]">
              <CheckCircle className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[#C9A227] font-racing font-semibold text-sm tracking-widest hover:gap-4 transition-all duration-200 group"
        >
          DEMANDER UN DEVIS
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <p className="font-racing text-xs tracking-[0.5em] text-[#C9A227] mb-4">NOS EXPERTISES</p>
          <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            TROIS PILIERS
            <span className="gold-gradient"> D'EXCELLENCE</span>
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#A8A9AD] max-w-2xl mx-auto leading-relaxed">
            De la préparation compétition à la formation professionnelle, en passant par la maintenance de précision,
            nous couvrons l'intégralité de vos besoins mécaniques.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Formation() {
  const PROGRAMS = [
    {
      level: 'DÉBUTANT',
      title: 'Initiation Mécanique',
      audience: 'Particuliers',
      modules: ['Bases de la mécanique', 'Entretien courant', 'Lecture diagnostic', 'Sécurité atelier'],
    },
    {
      level: 'INTERMÉDIAIRE',
      title: 'Mécanique courante',
      audience: 'Apprentis & Pro',
      modules: ['Diagnostic avancé', 'Moteur & Distribution', 'Électronique embarquée', 'Méthodologie pro'],
    },
    {
      level: 'AVANCÉ',
      title: 'Technicien préparateur',
      audience: 'Professionnels',
      modules: ['Cartographie ECU', 'Préparation moteur', 'Châssis compétition', 'Développement circuit'],
    },
  ];

  return (
    <section id="formation" className="py-24 sm:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-divider mb-24" />

        <div className="text-center mb-20">
          <p className="font-racing text-xs tracking-[0.5em] text-[#C9A227] mb-4">FORMATIONS PPA</p>
          <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            ON APPREND AVEC
            <span className="gold-gradient"> UN PROFESSIONNEL</span>
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#A8A9AD] max-w-2xl mx-auto leading-relaxed">
            Nos programmes de formation sont construits par des professionnels du sport automobile,
            adaptés à tous les niveaux pour un apprentissage concret et immédiat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              className={`relative rounded-2xl overflow-hidden gold-border service-card ${
                i === 1 ? 'md:-mt-6 md:mb-6' : ''
              }`}
            >
              {i === 1 && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9B7A1A] via-[#E8C55A] to-[#9B7A1A]" />
              )}
              <div className="bg-dark-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-racing text-xs font-bold tracking-widest px-3 py-1 rounded ${
                    i === 1 ? 'bg-[#C9A227] text-black' : 'border border-[rgba(201,162,39,0.4)] text-[#C9A227]'
                  }`}>
                    {p.level}
                  </span>
                </div>

                <h3 className="font-racing font-bold text-2xl text-white mb-2">{p.title}</h3>
                <p className="text-[#C9A227] text-xs tracking-wider mb-6">{p.audience}</p>

                <ul className="space-y-3 mb-8">
                  {p.modules.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-[#A8A9AD]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center font-racing font-bold text-sm tracking-widest py-3 rounded transition-all duration-200 ${
                    i === 1
                      ? 'btn-gold text-black'
                      : 'btn-outline-gold text-[#C9A227]'
                  }`}
                >
                  S'INSCRIRE
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-dark-card gold-border flex flex-col sm:flex-row items-center">
          <div className="sm:w-2/5 flex justify-center p-8 sm:p-12">
            <img
              src="/images/logo-transparent.png"
              alt="PPA Logo"
              className="h-50 w-50 sm:h-56 sm:w-56 object-contain"
            />
          </div>
          <div className="sm:w-3/5 p-8 sm:pr-12">
            <p className="font-racing text-xs tracking-[0.4em] text-[#C9A227] mb-3">NOTRE PHILOSOPHIE</p>
            <h3 className="font-racing font-bold text-3xl sm:text-4xl text-white mb-4">
              L'expertise se transmet par la pratique
            </h3>
            <p className="text-[#A8A9AD] leading-relaxed mb-6">
              Chaque formation est dispensée directement en atelier, sur véhicules réels, avec des formateurs
              issus du monde de la compétition.
            </p>
            <a href="#contact" className="btn-gold text-black font-racing font-bold text-sm tracking-widest px-8 py-3 rounded inline-block">
              RENSEIGNEMENTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="apropos" className="py-24 sm:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-divider mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="font-racing text-xs tracking-[0.5em] text-[#C9A227] mb-4">À PROPOS DE PPA</p>
            <h2 className="font-racing font-bold text-4xl sm:text-5xl text-white mb-6">
              LA PASSION,
              <br />
              <span className="gold-gradient">ÉLEVÉE AU RANG</span>
              <br />
              D'ART
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-[#A8A9AD] leading-relaxed mb-6">
              Performance & Prestige Academy est née d'une conviction simple : la mécanique haute performance
              mérite des mains expertes et une transmission du savoir irréprochable. Fondée par des passionnés
              issus du monde de la compétition automobile et moto, PPA réunit sous un même toit trois pôles
              d'excellence complémentaires.
            </p>
            <p className="text-[#A8A9AD] leading-relaxed">
              Notre atelier est équipé des dernières technologies de diagnostic et de cartographie ECU,
              permettant d'intervenir sur les véhicules les plus modernes comme sur les préparations
              compétition les plus exigeantes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl border border-[rgba(201,162,39,0.15)]" />
            <img
              src="/images/hero.png"
              alt="Atelier PPA"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden gold-border">
              <img
                src="/images/logo.png"
                alt="PPA Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-dark-card rounded-2xl p-8 gold-border service-card text-center">
              <div className="text-[#C9A227] icon-gold flex justify-center mb-4">{v.icon}</div>
              <h3 className="font-racing font-bold text-2xl text-white mb-3">{v.title}</h3>
              <p className="text-[#A8A9AD] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const SUBJECTS = [
    'Préparation & Développement',
    'Formation',
    'Maintenance Véhicule',
    'Autre demande',
  ];

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSending(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Erreur d'envoi");
    }

    setSent(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    alert("Erreur lors de l'envoi du message.");
  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-divider mb-24" />

        <div className="text-center mb-20">
          <p className="font-racing text-xs tracking-[0.5em] text-[#C9A227] mb-4">CONTACTEZ-NOUS</p>
          <h2 className="font-racing font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            PARLONS DE
            <span className="gold-gradient"> VOTRE PROJET</span>
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="font-racing font-bold text-2xl text-white mb-8">Informations de contact</h3>

            <div className="space-y-6 mb-10">
              {[
                { icon: <Phone className="w-5 h-5" />, label: 'Téléphone', value: '+33 (0)X XX XX XX XX' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'contact@ppa-academy.fr' },
                { icon: <MapPin className="w-5 h-5" />, label: 'Adresse', value: 'France' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.4)] flex items-center justify-center text-[#C9A227] flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[#A8A9AD] text-xs tracking-wider mb-0.5">{c.label}</p>
                    <p className="text-white">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="font-racing text-xs tracking-widest text-[#A8A9AD] mb-4">SUIVEZ-NOUS</p>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.4)] flex items-center justify-center text-[#C9A227] hover:bg-[rgba(201,162,39,0.1)] hover:border-[#C9A227] transition-all duration-200"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-xl overflow-hidden gold-border">
              <img
                src="/images/competition.png"
                alt="PPA Compétition"
                className="w-full h-48 object-cover object-center"
              />
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gold-border rounded-2xl bg-dark-card">
                <CheckCircle className="w-16 h-16 text-[#C9A227] mb-6 icon-gold" />
                <h3 className="font-racing font-bold text-2xl text-white mb-3">Message envoyé !</h3>
                <p className="text-[#A8A9AD]">Nous vous répondrons dans les plus brefs délais.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="mt-8 btn-outline-gold text-[#C9A227] font-racing font-bold text-sm tracking-widest px-8 py-3 rounded"
                >
                  NOUVEAU MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-dark-card gold-border rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">NOM COMPLET *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="contact-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">TÉLÉPHONE</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+33 6 00 00 00 00"
                      className="contact-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">EMAIL *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jean@exemple.fr"
                    className="contact-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">SUJET *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="contact-input w-full px-4 py-3 rounded-lg text-sm appearance-none"
                  >
                    <option value="" className="bg-[#1A1A1A]">Sélectionnez un sujet</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s} className="bg-[#1A1A1A]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="contact-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold text-black font-racing font-bold text-sm tracking-widest w-full py-4 rounded-lg disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ENVOI EN COURS...
                    </>
                  ) : (
                    <>ENVOYER LE MESSAGE <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(201,162,39,0.2)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-ecusson-transparent.png"
                alt="Performance & Prestige Academy"
                className="h-18 w-18 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="font-racing text-sm font-bold gold-gradient tracking-widest">PERFORMANCE</div>
                <div className="font-racing text-xs tracking-[0.25em] text-[#A8A9AD]">&amp; PRESTIGE ACADEMY</div>
              </div>
            </div>
            <p className="text-[#A8A9AD] text-sm leading-relaxed">
              L'excellence mécanique au service de la performance et de la passion.
            </p>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm tracking-widest text-[#C9A227] mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {['Préparation & Développement', 'Formation Professionnelle', 'Maintenance Véhicules', 'Cartographie ECU', 'Développement Compétition'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#A8A9AD] text-sm hover:text-[#C9A227] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm tracking-widest text-[#C9A227] mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#A8A9AD] text-sm hover:text-[#C9A227] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#A8A9AD] text-xs">
          <p>&copy; {new Date().getFullYear()} Performance & Prestige Academy. Tous droits réservés.</p>
          <p className="font-racing tracking-widest">PERFORMANCE · FIABILITÉ · COMPÉTITION</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
 <>
 <Navbar />
      <main>
        <Hero />
        <Services />
        <Formation />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
