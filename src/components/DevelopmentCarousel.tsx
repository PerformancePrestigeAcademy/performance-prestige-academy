import {
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const developments = [
  {
    title: "Outil pour faisceaux électriques",
    image: "/images/prep-dev/wiring-twister-plan.png",
    alt: "Plan technique d’un outil circulaire pour faisceaux électriques",
  },
  {
    title: "Support de relais",
    image: "/images/prep-dev/support-relais-3d.png",
    alt: "Modélisation 3D d’un support de relais pour moto",
  },
  {
    title: "Platine de support",
    image: "/images/prep-dev/platine-support-plan.png",
    alt: "Plan technique d’une platine de support",
  },
  {
    title: "Application sur moto d’endurance",
    image: "/images/prep-dev/ewc-roue-avant.png",
    alt: "Roue avant d’une moto de compétition d’endurance",
  },
  {
    title: "Cabine de chauffe",
    image: "/images/prep-dev/cabine-chauffe.png",
    alt: "Cabine de chauffe fabriquée pour le paddock",
  },
];

export default function DevelopmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const previousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? developments.length - 1
        : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === developments.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  const getRelativePosition = (index: number) => {
    let position = index - activeIndex;
    const total = developments.length;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  const handlePointerDown = (
  event: PointerEvent<HTMLDivElement>
) => {
  pointerStartX.current = event.clientX;
};

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (pointerStartX.current === null) {
      return;
    }

    const movement = event.clientX - pointerStartX.current;

    if (movement < -50) {
      nextSlide();
    }

    if (movement > 50) {
      previousSlide();
    }

    pointerStartX.current = null;
  };

  return (
    <div className="w-full">
      <style>
        {`
          .development-coverflow {
            --card-width: min(46vw, 600px);
            --card-height: 420px;

            position: relative;
            height: 500px;
            overflow: hidden;
            perspective: 1400px;
            touch-action: pan-y;
            user-select: none;
          }

          .development-coverflow-card {
            position: absolute;
            top: 20px;
            left: 50%;

            width: var(--card-width);
            height: var(--card-height);
            margin-left: calc(var(--card-width) / -2);

            overflow: hidden;
            border-radius: 16px;
            border: 1px solid rgba(201, 162, 39, 0.65);
            background: #111111;

            transform-style: preserve-3d;
            transform-origin: center center;

            transition:
              transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 650ms ease,
              filter 650ms ease;
          }

          .development-coverflow-card[data-position="0"] {
            z-index: 10;
            opacity: 1;
            filter: none;
            transform:
              translateX(0)
              translateZ(80px)
              rotateY(0deg)
              scale(1);
          }

          .development-coverflow-card[data-position="-1"] {
            z-index: 8;
            opacity: 0.82;
            filter: brightness(0.58) blur(0.8px);
            transform:
              translateX(-76%)
              translateZ(-90px)
              rotateY(18deg)
              scale(0.88);
          }

          .development-coverflow-card[data-position="1"] {
            z-index: 8;
            opacity: 0.82;
            filter: brightness(0.58) blur(0.8px);
            transform:
              translateX(76%)
              translateZ(-90px)
              rotateY(-18deg)
              scale(0.88);
          }

          .development-coverflow-card[data-position="-2"] {
            z-index: 6;
            opacity: 0.55;
            filter: brightness(0.38) blur(1.2px);
            transform:
              translateX(-138%)
              translateZ(-190px)
              rotateY(26deg)
              scale(0.72);
          }

          .development-coverflow-card[data-position="2"] {
            z-index: 6;
            opacity: 0.55;
            filter: brightness(0.38) blur(1.2px);
            transform:
              translateX(138%)
              translateZ(-190px)
              rotateY(-26deg)
              scale(0.72);
          }

          .development-coverflow-card[data-position="hidden"] {
            z-index: 0;
            opacity: 0;
            pointer-events: none;
            filter: brightness(0.2) blur(2px);
            transform:
              translateX(0)
              translateZ(-300px)
              scale(0.55);
          }

          @media (max-width: 900px) {
            .development-coverflow {
              --card-width: min(62vw, 360px);
              --card-height: 260px;

              height: 325px;
            }

            .development-coverflow-card[data-position="-1"] {
              transform:
                translateX(-62%)
                translateZ(-80px)
                rotateY(16deg)
                scale(0.82);
            }

            .development-coverflow-card[data-position="1"] {
              transform:
                translateX(62%)
                translateZ(-80px)
                rotateY(-16deg)
                scale(0.82);
            }

            .development-coverflow-card[data-position="-2"],
            .development-coverflow-card[data-position="2"] {
              opacity: 0.22;
            }
          }

          @media (max-width: 640px) {
            .development-coverflow {
              --card-width: 76vw;
              --card-height: 225px;

              height: 290px;
            }

            .development-coverflow-card[data-position="-2"],
            .development-coverflow-card[data-position="2"] {
              opacity: 0;
              pointer-events: none;
            }
          }
        `}
      </style>

      <div
        className="development-coverflow cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
      >
        {developments.map((development, index) => {
          const position = getRelativePosition(index);
          const isVisible = Math.abs(position) <= 2;
          const isActive = position === 0;

          return (
            <button
              key={development.image}
              type="button"
              data-position={
                isVisible ? String(position) : "hidden"
              }
              onClick={() => setActiveIndex(index)}
              className="development-coverflow-card"
              aria-label={`Afficher ${development.title}`}
              aria-current={isActive ? "true" : undefined}
            >
              <img
                src={development.image}
                alt={development.alt}
                draggable={false}
                className="h-full w-full object-contain"
              />

              {isActive && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-5 pb-4 pt-14">
                  <h4 className="text-center font-racing text-base md:text-lg text-white">
                    {development.title}
                  </h4>
                </div>
              )}
            </button>
          );
        })}

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227] bg-black/80 text-[#C9A227] transition-colors hover:bg-[#C9A227] hover:text-black"
          aria-label="Réalisation précédente"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227] bg-black/80 text-[#C9A227] transition-colors hover:bg-[#C9A227] hover:text-black"
          aria-label="Réalisation suivante"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}