import { ArrowLeft } from "lucide-react";

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#C9A22720]">
        <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/logo-ecusson-transparent.png"
              className="h-16"
            />

            <div>
              <div className="font-racing text-lg gold-gradient">
                PERFORMANCE
              </div>

              <div className="font-racing text-xs tracking-[0.3em] text-white/80">
                & PRESTIGE ACADEMY
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-10 font-racing text-sm tracking-[0.25em] uppercase">

            <a href="#formations" className="hover:text-[#C9A227] transition">
              Formations
            </a>

            <a href="#examens" className="hover:text-[#C9A227] transition">
              Examens
            </a>

            <a href="#ecoles" className="hover:text-[#C9A227] transition">
              CFA & Écoles
            </a>

            <a href="#contact" className="hover:text-[#C9A227] transition">
              Contact
            </a>

          </nav>

          {/* Retour */}
          <a
            href="/"
            className="btn-outline-gold px-6 py-3 rounded flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Accueil
          </a>

        </div>
      </header>

      {/* Hero */}
      <section className="h-[70vh] flex items-center justify-center">

        <div className="text-center">

          <p className="font-racing tracking-[0.5em] text-[#C9A227] mb-5">
            FORMATIONS
          </p>

          <h1 className="font-racing text-6xl">
            TRANSMETTRE
            <br />
            <span className="gold-gradient">
              L'EXCELLENCE
            </span>
          </h1>
          <a
            href="#formations"
            className="btn-gold inline-block mt-10 px-10 py-4 rounded font-racing tracking-widest"
            >  
             DÉCOUVRIR LES FORMATIONS
          </a>

        </div>

      </section>



                                                     {/* FUN DU HERO */}




                {/* Nos formations */}

<section
  id="formations"
  className="py-24 bg-[#0D0D0D]"
>

<div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

        <p className="font-racing tracking-[0.4em] text-[#C9A227] mb-4">
            NOS FORMATIONS
        </p>

        <h2 className="font-racing text-5xl mb-6">
            UNE FORMATION
            <br />
            <span className="gold-gradient">
                POUR CHAQUE PARCOURS
            </span>
        </h2>

        <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
            Que vous découvriez la mécanique ou que vous souhaitiez perfectionner
            votre expertise professionnelle, Performance & Prestige Academy
            propose des formations adaptées à chaque niveau.
        </p>

    </div>

</div>

</section>

                    {/* Les parcours */}

<section className="py-24 bg-[#0A0A0A]">

 <div className="max-w-7xl mx-auto px-6">

     <div className="grid lg:grid-cols-3 gap-8">

         {/* Débutants */}

         <div className="bg-dark-card gold-border rounded-2xl service-card">

                 <div className="p-8">
                    
                     <p className="text-7xl font-black text-[#C9A22720] mb-6">
                     01
                     </p>

                     <p className="font-racing text-xs tracking-[0.35em] text-[#C9A227] mb-3">
                     DÉBUTANTS
                     </p>

                     <h3 className="font-racing text-3xl mb-5">
                     Découvrir la mécanique
                     </h3>

                     <p className="text-[#A8A9AD] leading-relaxed mb-8">
                     Une approche progressive destinée aux passionnés qui souhaitent comprendre,
                     entretenir et intervenir eux-mêmes sur leur véhicule.
                     </p>

                     <a
                     href="#"
                     className="btn-outline-gold inline-block px-6 py-3 rounded"
                     >
                     Découvrir
                    </a>

                 </div>

             </div>

        {/* Professionnels */}

         <div className="bg-dark-card gold-border rounded-2xl service-card">

             <div className="p-8">

                 <p className="text-7xl font-black text-[#C9A22720] mb-6">
                 02
                 </p>

                 <p className="font-racing text-xs tracking-[0.35em] text-[#C9A227] mb-3">
                 PROFESSIONNELS
                 </p>

                 <h3 className="font-racing text-3xl mb-5">
                 Développer son expertise
                 </h3>

                 <p className="text-[#A8A9AD] leading-relaxed mb-8">
                 Des formations destinées aux apprentis, mécaniciens et techniciens souhaitant
                 approfondir leurs compétences et leurs méthodes de travail.
                 </p>

                 <a
                 href="#"
                 className="btn-outline-gold inline-block px-6 py-3 rounded"
                 >
                 Découvrir
                 </a>

             </div>

         </div>

         {/* Compétition */}

         <div className="bg-dark-card gold-border rounded-2xl service-card">

             <div className="p-8">

                 <p className="text-7xl font-black text-[#C9A22720] mb-6">
                 03
                 </p>

                 <p className="font-racing text-xs tracking-[0.35em] text-[#C9A227] mb-3">
                 COMPÉTITION
                 </p>

                 <h3 className="font-racing text-3xl mb-5">
                 Performance & préparation
                 </h3>

                 <p className="text-[#A8A9AD] leading-relaxed mb-8">
                 Préparation moteur, mise au point châssis, électronique embarquée et méthodes
                 utilisées dans le sport automobile et moto.
                 </p>

                 <a
                 href="#"
                 className="btn-outline-gold inline-block px-6 py-3 rounded"
                 >
                 Découvrir
                 </a>

             </div>

         </div>

     </div>

</div>

</section>
{/* Préparation aux formations */}

<section id="preparation" className="py-24 bg-[#0D0D0D]">

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

             <p className="font-racing tracking-[0.4em] text-[#C9A227] mb-4">
             ACCOMPAGNEMENT
             </p>

             <h2 className="font-racing text-5xl mb-6">
             PRÉPARATION À
             <br />
             <span className="gold-gradient">
             L'ENTRÉE EN FORMATION
             </span>
             </h2>

             <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
             Vous souhaitez intégrer une formation en mécanique mais vous manquez
             de bases ou de confiance ?
             Nous proposons une remise à niveau adaptée avant votre entrée en CAP,
             Bac Professionnel ou BTS.
             </p>

         </div>

     </div>

</section>

{/* Préparation à l'entrée en formation */}

<section className="py-24 bg-[#0A0A0A]">

     <div className="max-w-7xl mx-auto px-6">

         <div className="grid lg:grid-cols-3 gap-8">

            {/* ENTREE EN FORMATION CAP */}
        
             <div className="bg-dark-card gold-border rounded-2xl service-card">

                 <div className="p-8">

                 <p className="text-7xl font-black text-[#C9A22720] mb-6">
                 01
                 </p>

                 <p className="font-racing text-xs tracking-[0.35em] text-[#C9A227] mb-3">
                 CAP
                 </p>

                 <h3 className="font-racing text-3xl mb-5">
                 Découvrir les fondamentaux
                 </h3>

                 <ul className="space-y-3 text-[#A8A9AD] mb-8">

                 <li>• Entretien courant des véhicules</li>
                 <li>• Contrôles et diagnostics simples</li>
                 <li>• Remplacement des organes d'usure</li>
                 <li>• Méthodes de travail en atelier</li>

                 </ul>

                 <a
                 href="#"
                 className="btn-outline-gold inline-block px-6 py-3 rounded"
                 >
                 DÉCOUVRIR
                 </a>

                 </div>

             </div>
      
            {/* ENTREE EN FORMATION BAC PRO */}

             <div className="bg-dark-card gold-border rounded-2xl service-card">

                 <div className="p-8">

                 <p className="text-7xl font-black text-[#C9A22720] mb-6">
                 02
                 </p>

                 <p className="font-racing text-xs tracking-[0.35em] text-[#C9A227] mb-3">
                 BAC PRO
                 </p>

                 <h3 className="font-racing text-3xl mb-5">
                 Développer son autonomie
                 </h3>

                 <ul className="space-y-3 text-[#A8A9AD] mb-8">

                 <li>• Diagnostic des systèmes</li>
                 <li>• Maintenance corrective</li>
                 <li>• Contrôles et réglages</li>
                 <li>• Recherche de panne</li>

                 </ul>

                 <a
                 href="#"
                 className="btn-outline-gold inline-block px-6 py-3 rounded"
                 >
                 DÉCOUVRIR
                 </a>

                 </div>

             </div>

            {/* ENTREE EN FORMATION BTS */}
             <div className="bg-dark-card gold-border rounded-2xl service-card">

                 <div className="p-8">

                 <p className="text-7xl font-black text-[#C9A22720] mb-6">
                 03
                 </p>

                 <p className="font-racing text-xs tracking-[0.35em] text-[#C9A227] mb-3">
                 BTS
                 </p>

                 <h3 className="font-racing text-3xl mb-5">
                 Approfondir son expertise
                 </h3>

                 <ul className="space-y-3 text-[#A8A9AD] mb-8">

                 <li>• Analyse des systèmes complexes</li>
                 <li>• Diagnostic avancé</li>
                 <li>• Organisation des interventions</li>
                 <li>• Documentation constructeur</li>

                 </ul>

                 <a
                 href="#"
                 className="btn-outline-gold inline-block px-6 py-3 rounded"
                 >
                 DÉCOUVRIR
                 </a>

                 </div>

             </div>

         </div>

     </div>

</section>

         </div>

  );
}
