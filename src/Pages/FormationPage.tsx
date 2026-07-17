import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage.tsx";

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

        <Navbar />

             {/* Hero */}
        <HeroPage
         surTitre="FORMATIONS"
         titre="TRANSMETTRE"
         titreGold="L'EXCELLENCE"
         image="/images/hero.png"
         />





                                                             {/* FUN DU HERO */}





            {/* Choisissez votre parcours */}

<section id="objectif" className="scroll-mt-32 py-20 bg-[#0A0A0A]">

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-14">

         <p className="font-racing tracking-[0.4em] text-[#C9A227] mb-4">
         VOTRE OBJECTIF
         </p>

         <h2 className="font-racing text-5xl">
         TROUVEZ LA
         <br />
         <span className="gold-gradient">
          FORMATION ADAPTÉE
         </span>
         </h2>

         </div>

         
         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

         <a
         href="#entree"
         className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
         >
         <h3 className="font-racing text-xl">
         Préparation
         <br />
         à l'entrée
         <br />
         en formation
         </h3>
         </a>

         <a
         href="#examens"
         className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
         >
         <h3 className="font-racing text-xl">
         Préparation
         <br />
         aux examens
         </h3>
         </a>

         <a
         href="#debutants"
         className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
         >
         <h3 className="font-racing text-xl">
         Débuter
         <br />
         la mécanique
         </h3>
         </a>

         <a
         href="#professionnels"
         className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
         >
         <h3 className="font-racing text-xl">
         Perfectionnement
         <br />
         professionnel
         </h3>
         </a>

         <a
         href="#cfa"
         className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
         >
         <h3 className="font-racing text-xl">
          CFA &
          <br />
          Établissements
         </h3>
          </a>

         </div>

     </div>

</section>






                {/* Nos formations */}

<section
  id="formations"
  className="py-24 bg-[#0D0D0D]"
>

<div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

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

<section className="-mt-6 pb-24 bg-[#0D0D0D]">

 <div className="max-w-7xl mx-auto px-6">

     <div className="grid lg:grid-cols-3 gap-8">

         {/* Débutants */}

         <div className="bg-dark-card gold-border rounded-2xl service-card">

                 <div className="p-8">
                    
                     <p className="text-7xl font-black text-[#C9A22720] mb-6">
                     01
                     </p>

                     <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
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

                 <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
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

                 <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
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






<section id="preparation" className="py-24 bg-[#0A0A0A]">

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

{/* Préparation à l'entrée en formation */}

     <div className="max-w-7xl mx-auto px-6">

         <div className="grid lg:grid-cols-3 gap-8">

            {/* ENTREE EN FORMATION CAP */}
        
             <div className="bg-dark-card gold-border rounded-2xl service-card">

                 <div className="p-8">

                 <p className="text-7xl font-black text-[#C9A22720] mb-6">
                 01
                 </p>

                 <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
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

                 <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
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

                 <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
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





{/* Préparation aux examens */}





<section
  id="examens"
  className="pt-24 bg-[#0D0D0D]"
>

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

         <p className="font-racing tracking-[0.4em] text-[#C9A227] mb-4">
            PRÉPARATION AUX EXAMENS
         </p>

         <h2 className="font-racing text-5xl mb-6">
            CONSOLIDER
            <br />
            <span className="gold-gradient">
                SES ACQUIS
            </span>
         </h2>

         <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
            Des séances ciblées pour préparer efficacement les épreuves du CAP,
            du Bac Professionnel et du BTS Maintenance des Véhicules.
            Les contenus sont construits à partir des référentiels officiels afin
            de renforcer les compétences attendues le jour de l'examen.
         </p>

         </div>

     <div className="grid lg:grid-cols-3 gap-8">

     {/* CAP */}

         <div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full">

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
            CAP
         </p>

         <h3 className="font-racing text-3xl mb-6">
            Révisions ciblées
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Technologie professionnelle</li>
         <li>✔ Diagnostic de premier niveau</li>
         <li>✔ Méthodologie d'intervention</li>
         <li>✔ Analyse de pannes simples</li>
         <li>✔ Préparation aux épreuves</li>

         </ul>

         <a
            href="#"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
            >
            Découvrir
         </a>

         </div>

     {/* BAC PROFESSIONNEL */}

         <div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full">

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
            BAC PRO      </p>

         <h3 className="font-racing text-3xl mb-6">
            Révisions techniques
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Diagnostic approfondi</li>
         <li>✔ Électricité embarquée</li>
         <li>✔ Procédures constructeur</li>
         <li>✔ Organisation d'intervention</li>
         <li>✔ Préparation aux épreuves</li>

         </ul>

         <a
            href="#"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
            >
            Découvrir
         </a>

         </div>

      {/* BTS */}

        <div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full">

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
            BTS
         </p>

         <h3 className="font-racing text-3xl mb-6">
            Accompagnement BTS
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Analyse technique</li>
         <li>✔ Diagnostic avancé</li>
         <li>✔ Gestion d'atelier</li>
         <li>✔ Technologies innovantes</li>
         <li>✔ Préparation aux examens</li>

         </ul>

         <a
            href="#"
            className="btn-outline-gold inline-block px-6 py-3 rounded"
            >
            Découvrir
         </a>

         </div>

    </div>

</div>

</section>





{/* Formation mécanique */}





<section
  id="formation-mecanique"
  className="py-24 bg-[#0A0A0A]"
>

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

         <p className="font-racing tracking-[0.4em] text-[#C9A227] mb-4">
            FORMATIONS MÉCANIQUES
         </p>

         <h2 className="font-racing text-5xl mb-6">
            APPRENDRE,
            <br />
            <span className="gold-gradient">
                PROGRESSER, PERFORMER
            </span>
         </h2>

         <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
            Des formations conçues pour tous les profils, du passionné qui souhaite
            découvrir la mécanique jusqu'au professionnel désirant développer son
            expertise ou se spécialiser dans le sport automobile.
         </p>

         </div>

     <div className="grid lg:grid-cols-3 gap-8">

     {/* DÉBUTANT */}
         <div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full">

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
            DÉBUTANT
         </p>

         <h3 className="font-racing text-3xl mb-6">
            Découvrir la mécanique
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Entretien courant</li>

         <li>✔ Fonctionnement d'un moteur</li>
         <li>✔ Contrôles essentiels</li>
         <li>✔ Utilisation de l'outillage</li>
         <li>✔ Premières interventions</li>

         </ul>

         <a href="#" className="btn-outline-gold inline-block px-6 py-3 rounded">
            Découvrir
         </a>

         </div>

     {/* INITIE */}
         <div className="bg-dark-card gold-border rounded-2xl p-8 service-card">

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
INITIE
         </p>

         <h3 className="font-racing text-3xl mb-6">
            Développer son expertise
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Diagnostic avancé</li>

         <li>✔ Méthodes constructeur</li>

         <li>✔ Électronique embarquée</li>

         <li>✔ Organisation d'atelier</li>

         <li>✔ Perfectionnement technique</li>

         </ul>

         <a href="#" className="btn-outline-gold inline-block px-6 py-3 rounded">
            Découvrir
         </a>

         </div>

     {/* COMPETITION */}
         <div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full">

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3">
            COMPÉTITION
         </p>

         <h3 className="font-racing text-3xl mb-6">
            Performance & préparation
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Préparation moteur</li>

         <li>✔ Châssis & suspensions</li>

         <li>✔ Acquisition de données</li>

         <li>✔ Assistance circuit</li>

         <li>✔ Méthodes de compétition</li>

         </ul>

         <a href="#" className="btn-outline-gold inline-block px-6 py-3 rounded">
            Découvrir
         </a>

         </div>
     
     </div>

    </div>

</section>



     </div>

  );
}
