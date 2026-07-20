
import { NAV_LINKS } from "../data/navigation";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(201,162,39,0.15)] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-32">

          {/* Partie gauche */}
          <div className="max-w-2xl text-center lg:text-left">

            <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">

              <img
                src="/images/logo-transparent.png"
                alt="Performance & Prestige Academy"
                className="w-48 h-48 lg:w-72 lg:h-72"
              />

              <div>

                 <h3 className="font-racing font-black text-5xl tracking-[0.18em] gold-gradient">
                    PERFORMANCE
                 </h3>

                 <p className="font-racing text-xl tracking-[0.32em] text-white">
                    & PRESTIGE ACADEMY
                 </p>

              

              </div>

            </div>

            <p className="text-[#C9A227] font-racing tracking-[0.18em] text-sm mb-5">
              Préparation • Formation • Maintenance
            </p>

            <p className="text-[#A8A9AD] italic text-lg max-w-3xl leading-relaxed">
              « L'excellence n'est pas une option.
              <br />
              C'est notre standard. »
            </p>

          </div>

          {/* Partie droite */}
         <div className="w-full lg:w-72 flex flex-col items-center lg:items-end text-center lg:text-right gap-10 pt-0 lg:pt-[205px]">

            <div>

              <h4 className="font-racing text-sm tracking-[0.30em] text-[#C9A227] mb-4">
                NOUS SUIVRE
              </h4>

              <div className="flex justify-center lg:justify-end gap-4">

                <a
                  href="https://www.instagram.com/performance_prestige_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/10 transition"
                >
                  <Instagram className="w-10 h-10" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61592134912462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/10 hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-10 h-10" />
                </a>

              </div>

            </div>

            <div>

              <h4 className="font-racing text-sm tracking-[0.30em] text-[#C9A227] mb-4">
                INFORMATIONS
              </h4>

              <div className="flex flex-col gap-2 text-sm">

                <a
                  href="/mentions-legales"
                  className="text-[#A8A9AD] hover:text-[#C9A227] transition-colors"
                >
                  Mentions légales
                </a>

                <a
                  href="/politique-confidentialite"
                  className="text-[#A8A9AD] hover:text-[#C9A227] transition-colors"
                >
                  Politique de confidentialité
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Ligne */}
        <div className="border-t border-[rgba(201,162,39,0.20)] my-10" />

        {/* Bas */}
        <div className="text-center">

          <p className="text-[#A8A9AD] text-sm mb-3">
            © {new Date().getFullYear()} Performance & Prestige Academy
          </p>

          <p className="font-racing tracking-[0.35em] text-[#C9A227] text-xs">
            PERFORMANCE • FIABILITÉ • COMPÉTITION
          </p>

        </div>

      </div>
    </footer>
  );
}