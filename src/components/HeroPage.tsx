import { ChevronDown } from "lucide-react";

type HeroPageProps = {
  surTitre: string;
  titre: string;
  titreGold: string;
  image: string;
};

export default function HeroPage({
  surTitre,
  titre,
  titreGold,
  image,
}: HeroPageProps) {
  console.log("HeroPage chargé");
  return (
   <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

  <div className="absolute inset-0">
    <img
      src={image}
      alt="Hero background"
      className="w-full h-full object-cover object-center opacity-40"
    />
    <div className="hero-overlay absolute inset-0" />
<div className="absolute inset-0 checkered-accent opacity-20" />
  </div>
    

      {/* Contenu */}
      <div className="relative z-10 text-center">

        <p className="font-racing tracking-[0.5em] text-[#C9A227] mb-5">
          {surTitre}
        </p>

        <h1 className="font-racing text-6xl">
          {titre}
          <br />
          <span className="gold-gradient">
            {titreGold}
          </span>
        </h1>

      </div>

       <a
       href="#formations"
       className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A227] animate-bounce"
       >
       <ChevronDown className="w-8 h-8" />
       </a>

    </section>
  );
}