import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Formation", href: "/formation" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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

function useScrollSpy() {
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const handler = () => {
      const sections = [
        "accueil",
        "services",
        "formation",
        "apropos",
        "contact",
      ];

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}