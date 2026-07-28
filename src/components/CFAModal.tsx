import { useEffect } from "react";
import { X } from "lucide-react";

type CFAModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
};

const interventions = [
  {
    number: "01",
    title: "Construire une méthode de diagnostic efficace",
    items: [
      "Recueillir et analyser les symptômes",
      "Organiser ses contrôles",
      "Formuler et vérifier des hypothèses",
      "Exploiter la documentation technique",
      "Éviter le remplacement de pièces au hasard",
      "Justifier clairement son diagnostic",
    ],
  },
  {
    number: "02",
    title: "Comprendre, réparer et fabriquer un faisceau électrique",
    items: [
      "Lire et exploiter un schéma électrique",
      "Utiliser correctement le multimètre",
      "Rechercher une coupure ou un court-circuit",
      "Identifier une résistance parasite",
      "Réparer une connexion et réaliser un sertissage fiable",
      "Concevoir et fabriquer un faisceau simple",
    ],
  },
  {
    number: "03",
    title: "Comprendre les réglages du châssis et des suspensions",
    items: [
      "Comprendre le rôle de chaque réglage",
      "Différencier précharge, compression et détente",
      "Identifier les conséquences d’un mauvais réglage",
      "Relier les symptômes au comportement du véhicule",
      "Construire une méthode de contrôle",
      "Appliquer une démarche de réglage cohérente",
    ],
  },
  {
    number: "04",
    title: "Préparer les épreuves pratiques",
    items: [
      "Analyser précisément la consigne",
      "Organiser son poste de travail",
      "Construire une méthode d’intervention",
      "Respecter le temps imparti",
      "Présenter ses contrôles et ses résultats",
      "Travailler sur des situations proches de l’examen",
    ],
  },
  {
    number: "05",
    title: "Préparer les épreuves orales",
    items: [
      "Structurer sa présentation",
      "Expliquer une intervention technique",
      "Justifier ses choix",
      "Employer un vocabulaire professionnel",
      "Répondre aux questions du jury",
      "Gagner en aisance et en confiance",
    ],
  },
  {
    number: "06",
    title: "Exploiter efficacement la documentation technique",
    items: [
      "Rechercher une procédure constructeur",
      "Lire une vue éclatée",
      "Comprendre un schéma électrique",
      "Identifier les valeurs de contrôle",
      "Exploiter les couples de serrage",
      "Préparer une intervention à partir des données disponibles",
    ],
  },
];

export default function CFAModal({
  isOpen,
  onClose,
  onContact,
}: CFAModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cfa-modal-title"
        className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-[#C9A227]/60 bg-[#0D0D0D] shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/60 bg-black/70 text-[#C9A227] transition-colors hover:bg-[#C9A227] hover:text-black"
          aria-label="Fermer la fenêtre"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="px-6 py-12 md:px-12">
          <div className="mb-14 text-center">
            <p className="mb-4 font-racing text-sm tracking-[0.4em] text-[#C9A227] md:text-xl">
              INTERVENTIONS EN CFA
            </p>

            <h2
              id="cfa-modal-title"
              className="mb-6 font-racing text-4xl md:text-5xl"
            >
              ALLER PLUS LOIN
              <br />
              <span className="gold-gradient">
                PAR LA PRATIQUE
              </span>
            </h2>

            <p className="mx-auto max-w-3xl leading-relaxed text-[#A8A9AD]">
              Des interventions complémentaires peuvent être construites avec
              l’équipe pédagogique afin d’approfondir les méthodes de travail,
              la compréhension technique et la préparation des apprentis aux
              situations professionnelles et aux examens.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {interventions.map((intervention) => (
              <details
                key={intervention.number}
                className="group rounded-2xl border border-[#C9A227]/35 bg-[#131313] p-6"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4">
                  <span className="font-racing text-4xl text-[#C9A227]/25">
                    {intervention.number}
                  </span>

                  <span className="flex-1 pt-1 font-racing text-lg leading-relaxed text-white">
                    {intervention.title}
                  </span>

                  <span className="pt-1 text-xl text-[#C9A227] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-[#A8A9AD]">
                  {intervention.items.map((item) => (
                    <li key={item}>
                      <span className="mr-2 text-[#C9A227]">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#C9A227]/65 bg-[#17140B] p-7 md:p-10">
            <p className="mb-3 font-racing tracking-[0.3em] text-[#C9A227]">
              CONTINUITÉ PÉDAGOGIQUE
            </p>

            <h3 className="mb-5 font-racing text-2xl md:text-3xl">
              REMPLACEMENT PONCTUEL EN CFA
            </h3>

            <p className="leading-relaxed text-[#A8A9AD]">
              En cas d’absence imprévue, d’arrêt maladie, de vacance temporaire
              ou de besoin de renfort, Performance & Prestige Academy peut
              intervenir ponctuellement afin d’assurer la continuité des
              enseignements techniques et pratiques.
            </p>

            <p className="mt-4 leading-relaxed text-[#A8A9AD]">
              L’intervention est adaptée au diplôme préparé, à la progression
              engagée par l’équipe pédagogique et aux équipements disponibles
              dans l’établissement. Les déplacements peuvent être envisagés
              partout en France, selon les besoins et les disponibilités.
            </p>

            <div className="mt-7 grid gap-3 text-[#A8A9AD] sm:grid-cols-2">
              <p>✔ Remplacement ponctuel d’un formateur absent</p>
              <p>✔ Cours théoriques et travaux pratiques</p>
              <p>✔ Continuité de la progression pédagogique</p>
              <p>✔ Intervention possible dans toute la France</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-[#A8A9AD]">
              Les contenus, la durée et le niveau d’approfondissement sont
              adaptés au diplôme préparé, aux besoins identifiés par l’équipe
              pédagogique et aux moyens disponibles dans l’établissement.
            </p>

            <button
              type="button"
              onClick={onContact}
              className="btn-gold rounded px-8 py-4 font-racing font-bold tracking-widest text-black"
            >
              ÉCHANGER SUR VOS BESOINS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}