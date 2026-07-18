import {
  ArrowLeft,
  Wrench,
  Gauge,
  Flag,
  GraduationCap,
  Handshake,
  School,
  BookOpen,
  ClipboardCheck,
  Award,
  Building2,
  Target,
  Rocket,
} from "lucide-react";
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

         <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
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
         href="#formation-mecanique"
         className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
         >
         <h3 className="font-racing text-xl">
         Débuter
         <br />
         la mécanique
         </h3>
         </a>

         <a
         href="#preparation"
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
         href="#perfectionnement"
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





{/* Formation mécanique */}





<section
  id="formation-mecanique"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

         <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
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
             
             <div className="flex justify-center mb-6">
             <Wrench className="w-12 h-12 text-[#C9A227]" />
             </div>

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
            DÉBUTANT
         </p>

         <h3 className="font-racing text-3xl text-center mb-6">
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

             <div className="flex justify-center mb-6">
             <Target className="w-12 h-12 text-[#C9A227]" />
             </div>

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
            INITIE
         </p>

         <h3 className="font-racing text-3xl text-center mb-6">
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

             <div className="flex justify-center mb-6">
             <Flag className="w-12 h-12 text-[#C9A227]" />
             </div>

         <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
            COMPÉTITION
         </p>

         <h3 className="font-racing text-3xl text-center mb-6">
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





{/* Préparation aux formations */}






<section id="preparation" 
            className="scroll-mt-32 py-24 bg-[#0A0A0A]">

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

             <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
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

                 <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
                 CAP
                 </p>

                 <h3 className="font-racing text-3xl text-center mb-5">
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

                 <h3 className="font-racing text-3xl text-center mb-5">
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
  className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

         <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
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
<div className="h-12"></div>

</section>





{/* PERFECTIONNEMENT PROFESSIONNEL */}





<section
  id="perfectionnement"
  className="scroll-mt-32 py-24 bg-[#0A0A0A"
>

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        PERFECTIONNEMENT
      </p>

      <h2 className="font-racing text-5xl mb-6">
        DÉVELOPPER
        <br />
        <span className="gold-gradient">
          SON EXPERTISE
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Destinées aux professionnels comme aux passionnés exigeants,
        nos formations permettent d'acquérir des compétences avancées
        en diagnostic, préparation, électronique et méthodes
        d'intervention issues des pratiques d'atelier et du sport automobile.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Diagnostic */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <div className="flex justify-center mb-6">
          <Wrench className="w-12 h-12 text-[#C9A227]" />
        </div>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
          DIAGNOSTIC
        </p>

        <h3 className="font-racing text-3xl text-center mb-6">
          Diagnostic avancé
        </h3>

        <ul className="space-y-3 text-[#A8A9AD] mb-8">

          <li>✔ Diagnostic constructeur</li>
          <li>✔ Lecture calculateurs</li>
          <li>✔ Recherche de panne</li>
          <li>✔ Méthodes professionnelles</li>
          <li>✔ Outils spécialisés</li>

        </ul>

        <a
          href="#"
          className="btn-outline-gold inline-block px-6 py-3 rounded"
        >
          Découvrir
        </a>

      </div>

      {/* Performance */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <div className="flex justify-center mb-6">
          <Gauge className="w-12 h-12 text-[#C9A227]" />
        </div>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
          PERFORMANCE
        </p>

        <h3 className="font-racing text-3xl text-center mb-6">
          Optimisation moteur
        </h3>

        <ul className="space-y-3 text-[#A8A9AD] mb-8">

          <li>✔ Cartographie moteur</li>
          <li>✔ Admission</li>
          <li>✔ Échappement</li>
          <li>✔ Optimisation des performances</li>
          <li>✔ Fiabilisation</li>

        </ul>

        <a
          href="#"
          className="btn-outline-gold inline-block px-6 py-3 rounded"
        >
          Découvrir
        </a>

      </div>

      {/* Compétition */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <div className="flex justify-center mb-6">
          <Flag className="w-12 h-12 text-[#C9A227]" />
        </div>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
          COMPÉTITION
        </p>

        <h3 className="font-racing text-3xl text-center mb-6">
          Châssis & préparation
        </h3>

        <ul className="space-y-3 text-[#A8A9AD] mb-8">

          <li>✔ Géométrie</li>
          <li>✔ Suspensions</li>
          <li>✔ Freinage</li>
          <li>✔ Préparation circuit</li>
          <li>✔ Assistance compétition</li>

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




{/* CFA & ÉTABLISSEMENTS */}





<section
  id="cfa"
  className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
        PARTENARIATS
      </p>

      <h2 className="font-racing text-5xl mb-6">
        CFA &
        <br />
        <span className="gold-gradient">
          ÉTABLISSEMENTS
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
        Performance & Prestige Academy accompagne les établissements de formation,
        CFA et lycées professionnels dans le développement de leurs parcours
        pédagogiques grâce à des interventions techniques, des formations
        spécialisées et des projets sur mesure.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Carte 1 */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <div className="flex justify-center mb-6">
          <GraduationCap className="w-12 h-12 text-[#C9A227]" />
        </div>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
          FORMATIONS
        </p>

        <h3 className="font-racing text-3xl text-center mb-6">
          Sur site
        </h3>

        <ul className="space-y-3 text-[#A8A9AD]">

          <li>✔ Intervention dans vos locaux</li>
          <li>✔ Modules personnalisés</li>
          <li>✔ Ateliers pratiques</li>
          <li>✔ Formations techniques</li>
          <li>✔ Adaptées à vos besoins</li>

        </ul>

      </div>

      {/* Carte 2 */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <div className="flex justify-center mb-6">
          <Handshake className="w-12 h-12 text-[#C9A227]" />
        </div>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
          PARTENARIATS
        </p>

        <h3 className="font-racing text-3xl text-center mb-6">
          Pédagogiques
        </h3>

        <ul className="space-y-3 text-[#A8A9AD]">

          <li>✔ Création de contenus</li>
          <li>✔ Accompagnement pédagogique</li>
          <li>✔ Développement des compétences</li>
          <li>✔ Projets communs</li>
          <li>✔ Suivi des apprenants</li>

        </ul>

      </div>

      {/* Carte 3 */}

      <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

        <div className="flex justify-center mb-6">
          <School className="w-12 h-12 text-[#C9A227]" />
        </div>

        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] text-center mb-3">
          PROJETS
        </p>

        <h3 className="font-racing text-3xl text-center mb-6">
          Sur mesure
        </h3>

        <ul className="space-y-3 text-[#A8A9AD]">

          <li>✔ Sport automobile</li>
          <li>✔ Véhicules de compétition</li>
          <li>✔ Technologies récentes</li>
          <li>✔ Interventions spécifiques</li>
          <li>✔ Prestations personnalisées</li>

        </ul>

      </div>

    </div>

    {/* Appel à l'action */}

    <div className="text-center mt-20">

      <h3 className="font-racing text-4xl mb-6">
        Vous représentez un établissement ?
      </h3>

      <p className="max-w-2xl mx-auto text-[#A8A9AD] mb-10 leading-relaxed">
        Vous souhaitez développer une offre de formation en mécanique,
        organiser des interventions techniques ou mettre en place un partenariat
        pédagogique ? Échangeons ensemble sur votre projet.
      </p>

      <a
        href="#contact"
        className="btn-gold text-black font-racing font-bold text-sm tracking-widest px-10 py-4 rounded"
      >
        ÉCHANGER SUR VOTRE PROJET
      </a>

    </div>

  </div>

</section>



     </div>

  );
}
