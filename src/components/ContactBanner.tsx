import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ContactBannerProps = {
  fixed?: boolean;
};
export default function ContactBanner({ fixed = true }: ContactBannerProps) {
  return (
    <section
      id="contact"
      className={`${fixed ? "fixed bottom-0 left-0 right-0 z-50" : "relative"} isolate flex h-auto lg:h-16 flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-5 bg-[#080808] border-t border-[#A8A9AD] px-5 sm:px-8 xl:px-12 py-0 overflow-hidden min-h-0`}
    >
      {/* Texture damier */}
      <div className="absolute inset-0 -z-10 checkered-accent opacity-20 pointer-events-none" />

      {/* Partie gauche */}
      <div className="flex items-center gap-5 shrink-0">
        <div className="hidden sm:flex gap-1 -skew-x-[25deg]">
          <span className="w-2 h-12 bg-[#C9A227]" />
          <span className="w-2 h-12 bg-[#C9A227]" />
          <span className="w-2 h-12 bg-[#C9A227]" />
        </div>

        <div>
          <h2 className="font-racing font-bold italic text-2xl xl:text-3xl text-white whitespace-nowrap">
            UN PROJET ?
          </h2>

          <p className="font-racing text-xs xl:text-sm text-[#A8A9AD] tracking-wide whitespace-nowrap">
            ENTRETIEN
            <span className="text-[#C9A227] mx-2">•</span>
            FORMATION
            <span className="text-[#C9A227] mx-2">•</span>
            PRÉPARATION
            <span className="text-[#C9A227] mx-2">•</span>
            RESTAURATION
          </p>
        </div>
      </div>

      {/* Séparateur */}
      <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-[#C9A227] to-transparent" />

      {/* Bouton contact */}
      <Link
        to="/contact"
        className="group relative inline-flex items-center justify-center gap-4 border-2 border-[#C9A227] text-white font-racing font-bold text-sm xl:text-base tracking-wider px-8 xl:px-12 py-4 transition-all duration-300 hover:bg-[#C9A227] hover:text-black shrink-0"
        style={{ clipPath: "polygon(7% 0,100% 0,93% 100%,0 100%)" }}
      >
        <Mail className="w-6 h-6" />
        NOUS CONTACTER
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
      </Link>
    </section>
  );
}
