import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const developments = [
  {
    title: "Outil pour faisceaux électriques",
    category: "OUTILLAGE SPÉCIFIQUE",
    image: "/images/prep-dev/wiring-twister-plan.png",
    alt: "Plan technique d’un outil circulaire pour faisceaux électriques",
    description:
      "Conception et mise en plan d’un outil spécifique destiné à faciliter la réalisation de faisceaux électriques.",
  },
  {
    title: "Support de relais",
    category: "CAO & PROTOTYPAGE",
    image: "/images/prep-dev/support-relais-3d.png",
    alt: "Modélisation 3D d’un support de relais pour moto",
    description:
      "Modélisation et développement d’un support de relais adapté à son implantation sur une moto spécifique.",
  },
  {
    title: "Platine de support",
    category: "ÉTUDE & MISE EN PLAN",
    image: "/images/prep-dev/platine-support-plan.png",
    alt: "Plan technique d’une platine de support",
    description:
      "Étude, prise de mesures et mise en plan d’une platine répondant aux contraintes mécaniques et d’intégration.",
  },
  {
    title: "Application sur moto d’endurance",
    category: "COMPÉTITION EWC",
    image: "/images/prep-dev/ewc-roue-avant.png",
    alt: "Roue avant d’une moto de course engagée en endurance",
    description:
      "Développement et intégration de solutions techniques adaptées aux exigences d’une moto de compétition.",
  },
  {
    title: "Cabine de chauffe",
    category: "SOLUTION PADDOCK",
    image: "/images/prep-dev/cabine-chauffe.png",
    alt: "Cabine de chauffe fabriquée pour le paddock",
    description:
      "Conception et fabrication d’une solution de paddock destinée à améliorer l’organisation et la préparation du matériel.",
  },
];

export default function DevelopmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardAngle = 360 / developments.length;

  const previousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? developments.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === developments.length - 1 ? 0 : currentIndex + 1
    );
  };

  const getCircularDistance = (index: number) => {
    const directDistance = Math.abs(index - activeIndex);
    return Math.min(
      directDistance,
      developments.length - directDistance
    );
  };

  const activeDevelopment = developments[activeIndex];

  return (
    <div className="w-full">
      <style>
        {`
          .development-wheel {
            --dev-card-width: 520px;
            --dev-card-height: 340px;
            --dev-radius: 470px;

            position: relative;
            height: 420px;
            perspective: 1500px;
            overflow: hidden;
          }

          .development-wheel-ring {
            position: absolute;
            inset: 25px 0 0;
            transform-style: preserve-3d;
            transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .development-wheel-card {
            position: absolute;
            top: 0;
            left: 50%;
            width: var(--dev-card-width);
            height: var(--dev-card-height);
            margin-left: calc(var(--dev-card-width) / -2);
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transition:
              opacity 700ms ease,
              filter 700ms ease;
          }

          @media (max-width: 1024px) {
            .development-wheel {
              --dev-card-width: 420px;
              --dev-card-height: 290px;
              --dev-radius: 360px;

              height: 370px;
            }
          }

          @media (max-width: 640px) {
            .development-wheel {
              --dev-card-width: 78vw;
              --dev-card-height: 235px;
              --dev-radius: 245px;

              height: 310px;
              perspective: 1000px;
            }

            .development-wheel-ring {
              inset: 20px 0 0;
            }
          }
        `}
      </style>

      <div className="development-wheel">
        <div
          className="development-wheel-ring"
          style={{
            transform: `rotateY(${-activeIndex * cardAngle}deg)`,
          }}
        >
          {developments.map((development, index) => {
            const distance = getCircularDistance(index);
            const isActive = index === activeIndex;

            return (
              <button
                key={development.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="development-wheel-card overflow-hidden rounded-2xl border border-[#C9A227]/60 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                style={{
                  transform: `rotateY(${index * cardAngle}deg) translateZ(var(--dev-radius))`,
                  opacity: distance <= 1 ? 1 : 0,
                  filter: isActive
                    ? "brightness(1)"
                    : "brightness(0.42)",
                  pointerEvents: distance <= 1 ? "auto" : "none",
                }}
                aria-label={`Afficher la réalisation : ${development.title}`}
                aria-current={isActive ? "true" : undefined}
              >
                <img
                  src={development.image}
                  alt={development.alt}
                  className="h-full w-full object-contain p-3"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-6 pb-5 pt-16 text-left">
                  <p className="font-racing text-xs tracking-[0.25em] text-[#C9A227]">
                    {development.category}
                  </p>

                  <h4 className="mt-2 font-racing text-xl text-white">
                    {development.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-4xl items-center justify-center gap-6 px-4">
        <button
          type="button"
          onClick={previousSlide}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A227] text-[#C9A227] transition-all duration-300 hover:bg-[#C9A227] hover:text-black"
          aria-label="Réalisation précédente"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="min-h-32 flex-1 text-center">
          <p className="font-racing text-sm tracking-[0.3em] text-[#C9A227]">
            {activeDevelopment.category}
          </p>

          <h4 className="mt-3 font-racing text-2xl md:text-3xl">
            {activeDevelopment.title}
          </h4>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#A8A9AD]">
            {activeDevelopment.description}
          </p>
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A227] text-[#C9A227] transition-all duration-300 hover:bg-[#C9A227] hover:text-black"
          aria-label="Réalisation suivante"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {developments.map((development, index) => (
          <button
            key={development.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-9 bg-[#C9A227]"
                : "w-2.5 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Afficher ${development.title}`}
          />
        ))}
      </div>
    </div>
  );
}