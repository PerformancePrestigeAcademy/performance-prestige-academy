import { useEffect, useId, useRef } from "react";
import type { Formation } from "../data/formations";

type FormationModalProps = {
  formation: Formation;
  isOpen: boolean;
  onClose: () => void;
  onRequestInformation?: (formation: Formation) => void;
  onRegister?: (formation: Formation) => void;
};

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-current">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m5 12 4 4L19 6" />
  </svg>
);

const ChevronIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m6 9 6 6 6-6" />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" d="M6 6l12 12M18 6 6 18" />
  </svg>
);

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-300 sm:text-[15px]">
          <span className="text-amber-400"><CheckIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
          {eyebrow}
        </p>
      )}
      <h3 className="font-['Aptos_Display',Aptos,sans-serif] text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </h3>
      {description && (
        <p className="mt-3 max-w-3xl text-justify text-sm leading-7 text-zinc-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function FormationModal({
  formation,
  isOpen,
  onClose,
  onRequestInformation,
  onRegister,
}: FormationModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), details > summary, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-0 backdrop-blur-md sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70 sm:h-[92vh] sm:rounded-3xl"
      >
        <header className="relative shrink-0 overflow-hidden border-b border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer la présentation de la formation"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/30 text-zinc-300 transition hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 sm:right-6 sm:top-6"
          >
            <CloseIcon />
          </button>

          <div className="relative pr-12">
            <div className="mb-4 flex flex-wrap gap-2">
              {[formation.level, formation.vehicles, formation.format].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Formation · Réf. {formation.reference}
            </p>
            <h2
              id={titleId}
              className="max-w-4xl font-['Aptos_Display',Aptos,sans-serif] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {formation.title}
            </h2>
            <p id={descriptionId} className="mt-3 max-w-3xl text-lg text-zinc-300 sm:text-xl">
              {formation.subtitle}
            </p>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <main className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <section className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                <p className="text-justify text-base leading-8 text-zinc-300">
                  {formation.audience}
                </p>
                <div className="mt-6 border-l-2 border-amber-400 pl-4">
                  <p className="text-justify text-sm leading-7 text-zinc-400">
                    {formation.nature}
                  </p>
                </div>
              </div>

              <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Prérequis
                  </p>
                  <div className="mt-4">
                    <BulletList items={formation.prerequisites} />
                  </div>
                </div>
                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Informations pratiques
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {formation.practicalInformation}
                  </p>
                </div>
              </aside>
            </section>

            <section className="mt-14">
              <SectionTitle
                eyebrow="Finalité"
                title="Objectif de la formation"
                description={formation.generalObjective}
              />
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-5 sm:p-7">
                <BulletList items={formation.operationalObjectives} />
              </div>
            </section>

            <section className="mt-14">
              <SectionTitle
                eyebrow="Parcours pédagogique"
                title="Programme détaillé"
                description="Les sept modules associent compréhension théorique, observation et mise en application progressive."
              />
              <div className="space-y-3">
                {formation.modules.map((module, index) => (
                  <details
                    key={module.title}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 open:border-amber-400/25 open:bg-zinc-900"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left marker:content-none sm:px-6">
                      <div>
                        <h4 className="font-['Aptos_Display',Aptos,sans-serif] text-base font-semibold text-white sm:text-lg">
                          {module.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">{module.description}</p>
                      </div>
                      <span className="text-amber-400"><ChevronIcon /></span>
                    </summary>
                    <div className="border-t border-white/10 px-5 py-5 sm:px-6">
                      <BulletList items={module.topics} />
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                <SectionTitle eyebrow="Pédagogie" title="Méthodes utilisées" />
                <BulletList items={formation.methods} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                <SectionTitle eyebrow="Équipement" title="Moyens mobilisés" />
                <BulletList items={formation.resources} />
              </div>
            </section>

            <section className="mt-14 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.08] to-transparent p-5 sm:p-7">
              <SectionTitle eyebrow="Encadrement" title={formation.trainer.name} />
              <p className="max-w-4xl text-justify text-sm leading-7 text-zinc-300 sm:text-base">
                {formation.trainer.qualification}
              </p>
            </section>

            <section className="mt-14">
              <SectionTitle
                eyebrow="Validation"
                title="Suivi et évaluation des acquis"
                description="La validation associe connaissances théoriques, identification des composants et comportement en situation pratique."
              />

              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <h4 className="font-semibold text-white">Suivi</h4>
                  <div className="mt-4"><BulletList items={formation.tracking} /></div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                  <h4 className="font-semibold text-white">Évaluation</h4>
                  <div className="mt-4"><BulletList items={formation.evaluation} /></div>
                </div>
                <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-5">
                  <h4 className="font-semibold text-white">Critères de réussite</h4>
                  <div className="mt-4"><BulletList items={formation.successCriteria} /></div>
                </div>
              </div>
            </section>

            <section className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                <SectionTitle eyebrow="Documents remis" title="À l’issue de la formation" />
                <BulletList items={formation.certification} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                <SectionTitle eyebrow="Accessibilité" title="Adaptation aux besoins" />
                <p className="text-justify text-sm leading-7 text-zinc-300 sm:text-base">
                  {formation.accessibility}
                </p>
              </div>
            </section>

            <section className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-xs leading-6 text-zinc-500">
                {formation.legalNotice}
              </p>
            </section>
          </main>
        </div>

        <footer className="shrink-0 border-t border-white/10 bg-zinc-950/95 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="hidden text-sm text-zinc-500 lg:block">
              Une question sur le programme ou les prochaines sessions ?
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={() => onRequestInformation?.(formation)}
                className="min-h-12 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-amber-400/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Demander des informations
              </button>
              <button
                type="button"
                onClick={() => onRegister?.(formation)}
                className="min-h-12 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                S’inscrire à la formation (à venir)
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
