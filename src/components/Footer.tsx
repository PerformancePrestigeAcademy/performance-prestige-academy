
import { NAV_LINKS } from "../data/navigation";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(201,162,39,0.15)] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">

          {/* Partie gauche */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-6 mb-8">

              <img
                src="/images/logo-ecusson-transparent.png"
                alt="Performance & Prestige Academy"
                className="w-32 h-32 object-contain"
              />

              <div>

                <h3 className="font-racing text-3xl gold-gradient tracking-[0.15em]">
                  PERFORMANCE
                </h3>

                <p className="font-racing text-sm tracking-[0.30em] text-white">
                  & PRESTIGE ACADEMY
                </p>

              </div>

            </div>

            <p className="text-[#C9A227] font-racing tracking-[0.18em] text-sm mb-5">
              Préparation • Formation • Maintenance
            </p>

            <p className="text-[#A8A9AD] italic text-lg max-w-xl leading-relaxed">
              « L'excellence n'est pas une option.
              <br />
              C'est notre standard. »
            </p>

          </div>

          {/* Partie droite */}
         <div className="w-72 flex-shrink-0 flex flex-col items-end text-right gap-12">  

            <div>

              <h4 className="font-racing text-sm tracking-[0.30em] text-[#C9A227] mb-4">
                NOUS SUIVRE
              </h4>

              <div className="flex justify-end gap-4">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/10 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61592134912462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/10 transition"
                >
                  <Facebook className="w-5 h-5" />
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