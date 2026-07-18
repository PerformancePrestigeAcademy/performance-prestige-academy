import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <HeroPage
        surTitre="MAINTENANCE"
        titre="PRENDRE SOIN"
        titreGold="DE VOTRE PASSION"
        image="/images/hero.png"
      />




{/* Hero maintenance */}





<section className="py-20 bg-[#0A0A0A]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      <a
        href="#entretien"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Entretien
          <br />
          courant
        </h3>
      </a>

      <a
        href="#revision"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Révision
          <br />
          constructeur
        </h3>
      </a>

      <a
        href="#diagnostic"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Diagnostic
        </h3>
      </a>

      <a
        href="#preparation"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Préparation
          <br />
          & Optimisation
        </h3>
      </a>

      <a
        href="#competition"
        className="bg-dark-card service-card gold-border rounded-2xl h-56 p-8 flex items-center justify-center text-center hover:-translate-y-2 transition-all duration-300"
      >
        <h3 className="font-racing text-xl">
          Sport
          <br />
          automobile
        </h3>
      </a>

    </div>

  </div>

</section>





{/* Entretien courant */}





<section id="entretien"
  className="scroll-mt-32 py-24 bg-[#0A0A0A]">

     <div className="max-w-7xl mx-auto px-6">

         <div className="text-center mb-20">

         <p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
            ENTRETIEN
         </p>

         <h2 className="font-racing text-5xl mb-6">
            ENTRETIEN
         <br />
         <span className="gold-gradient">
            COURANT
         </span>
         </h2>

         <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
            Un entretien régulier est la meilleure garantie de fiabilité, de sécurité
            et de longévité de votre véhicule. Chaque intervention est réalisée selon
            les préconisations constructeur avec des pièces et consommables de qualité.
         </p>

         </div>

     <div className="grid lg:grid-cols-3 gap-8">

    {/* Carte */}

         <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

         <p className="text-7xl font-black text-[#C9A22720] mb-6">
             01
             </p>

         <h3 className="font-racing text-3xl mb-6 text-center">
            Révisions
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Vidange moteur</li>
         <li>✔ Remplacement des filtres</li>
         <li>✔ Contrôle des niveaux</li>
         <li>✔ Vérification batterie</li>
         <li>✔ Contrôle visuel complet</li>

         </ul>

         <a href="#" className="btn-outline-gold inline-block px-6 py-3 rounded">
            En savoir plus
         </a>

         </div>

    {/* Carte */}

         <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

         <p className="text-7xl font-black text-[#C9A22720] mb-6">
             02
             </p>

         <h3 className="font-racing text-3xl mb-6 text-center">
            Freinage
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Plaquettes</li>
         <li>✔ Disques</li>
         <li>✔ Liquide de frein</li>
         <li>✔ Purge complète</li>
         <li>✔ Contrôle sécurité</li>

         </ul>

         <a href="#" className="btn-outline-gold inline-block px-6 py-3 rounded">
            En savoir plus
         </a>

         </div>

    {/* Carte */}

         <div className="bg-dark-card gold-border rounded-2xl service-card p-8">

         <p className="text-7xl font-black text-[#C9A22720] mb-6">
             03
             </p>

         <h3 className="font-racing text-3xl mb-6 text-center">
            Liaisons au sol
         </h3>

         <ul className="space-y-3 text-[#A8A9AD] mb-8">

         <li>✔ Pneumatiques</li>
         <li>✔ Géométrie</li>
         <li>✔ Suspension</li>
         <li>✔ Direction</li>
         <li>✔ Contrôle roulage</li>

         </ul>

         <a href="#" className="btn-outline-gold inline-block px-6 py-3 rounded">
            En savoir plus
         </a>

         </div>

     </div>

 </div>

</section>




{/* ===========================
    ENTRETIEN COURANT
=========================== */}

<section
  id="entretien"
  className="scroll-mt-32 py-24 bg-[#0A0A0A]"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
ENTRETIEN
</p>

<h2 className="font-racing text-5xl mb-6">
ENTRETIEN
<br />
<span className="gold-gradient">
COURANT
</span>
</h2>

<p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
Chez Performance & Prestige Academy, l'entretien ne consiste pas uniquement à remplacer des pièces.
Chaque intervention est réalisée avec la même exigence que sur un véhicule de compétition :
contrôle, prévention et fiabilité avant tout.
</p>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{/* ================= Carte 01 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
     04
 </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Révision & entretien
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Vidange moteur</li>
<li>✔ Remplacement des filtres</li>
<li>✔ Contrôle des niveaux</li>
<li>✔ Contrôle sécurité</li>
<li>✔ Révision périodique</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Un entretien régulier permet de préserver les performances,
la fiabilité et la longévité de votre véhicule.
</p>

</div>

{/* ================= Carte 02 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
     05
 </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Freinage & sécurité
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Plaquettes & disques</li>
<li>✔ Liquide de frein</li>
<li>✔ Purge complète</li>
<li>✔ Contrôle hydraulique</li>
<li>✔ Vérification du système</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Parce que la sécurité n'est jamais une option,
chaque élément est contrôlé avec la plus grande rigueur.
</p>

</div>

{/* ================= Carte 03 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             06
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Trains roulants
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Suspension</li>
<li>✔ Direction</li>
<li>✔ Pneumatiques</li>
<li>✔ Géométrie</li>
<li>✔ Contrôle du châssis</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Des liaisons au sol parfaitement réglées garantissent
précision de conduite, stabilité et confort.
</p>

</div>

</div>

</div>

</section>




{/* ===========================
    RÉVISION CONSTRUCTEUR
=========================== */}

<section
id="revision"
className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
RÉVISION
</p>

<h2 className="font-racing text-5xl mb-6">
RÉVISION
<br />
<span className="gold-gradient">
CONSTRUCTEUR
</span>
</h2>

<p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
Chaque constructeur définit des procédures précises pour garantir la
fiabilité, la sécurité et les performances de votre véhicule.
Nous appliquons ces préconisations avec rigueur afin de préserver votre
automobile dans les meilleures conditions.
</p>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{/* ================= Carte 04 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             07
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Carnet d'entretien
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Respect des échéances</li>
<li>✔ Suivi constructeur</li>
<li>✔ Historique d'entretien</li>
<li>✔ Contrôles réglementaires</li>
<li>✔ Préservation de la valeur</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Un suivi rigoureux permet de conserver un véhicule fiable et valorisé
dans le temps.
</p>

</div>

{/* ================= Carte 05 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             08
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Pièces & consommables
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Pièces constructeur</li>
<li>✔ Pièces OEM</li>
<li>✔ Lubrifiants adaptés</li>
<li>✔ Consommables de qualité</li>
<li>✔ Montage conforme</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Chaque composant est sélectionné afin de respecter les exigences du
constructeur et la fiabilité du véhicule.
</p>

</div>

{/* ================= Carte 06 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             09
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Contrôle complet
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Organes de sécurité</li>
<li>✔ Contrôle moteur</li>
<li>✔ Contrôle transmission</li>
<li>✔ Vérifications électroniques</li>
<li>✔ Essai dynamique</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Chaque intervention se termine par une série de contrôles garantissant
le bon fonctionnement de l'ensemble du véhicule.
</p>

</div>

</div>

</div>

</section>




{/* ===========================
    DIAGNOSTIC
=========================== */}

<section
id="diagnostic"
className="scroll-mt-32 py-24 bg-[#0A0A0A]"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
DIAGNOSTIC
</p>

<h2 className="font-racing text-5xl mb-6">
RECHERCHE
<br />
<span className="gold-gradient">
DE PANNE
</span>
</h2>

<p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
Un diagnostic précis constitue la première étape d'une réparation réussie.
Grâce à des outils professionnels et une méthodologie rigoureuse,
nous identifions l'origine réelle du dysfonctionnement avant toute intervention.
</p>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{/* ================= Carte 07 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             10
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Diagnostic électronique
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Lecture calculateurs</li>
<li>✔ Analyse des défauts</li>
<li>✔ Paramètres en temps réel</li>
<li>✔ Effacement & validation</li>
<li>✔ Diagnostic multimarques</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Les outils de diagnostic permettent d'obtenir une vision précise de
l'état électronique du véhicule.
</p>

</div>

{/* ================= Carte 08 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             11
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Recherche de panne
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Analyse méthodique</li>
<li>✔ Contrôles ciblés</li>
<li>✔ Mesures techniques</li>
<li>✔ Vérification des organes</li>
<li>✔ Identification de la cause</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Chaque panne est étudiée afin d'identifier son origine réelle avant toute réparation.
</p>

</div>

{/* ================= Carte 09 ================= */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             12
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Validation des réparations
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Contrôles après intervention</li>
<li>✔ Essais dynamiques</li>
<li>✔ Vérification des valeurs</li>
<li>✔ Contrôle final</li>
<li>✔ Restitution du véhicule</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Chaque réparation est contrôlée afin de garantir un fonctionnement optimal avant restitution.
</p>

</div>

</div>

</div>

</section>




{/* ===========================
    PERFORMANCE & COMPÉTITION
=========================== */}

<section
id="performance"
className="scroll-mt-32 py-24 bg-[#0D0D0D]"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
PERFORMANCE
</p>

<h2 className="font-racing text-5xl mb-6">
PERFORMANCE
<br />
<span className="gold-gradient">
& COMPÉTITION
</span>
</h2>

<p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
Chaque véhicule possède un potentiel inexploité.
Notre rôle est de le développer avec méthode, fiabilité et précision,
qu'il s'agisse d'une utilisation routière exigeante ou d'une préparation
destinée à la compétition.
</p>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{/* Carte 10 */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             13
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Développement moteur
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Optimisation moteur</li>
<li>✔ Recherche de performance</li>
<li>✔ Fiabilisation</li>
<li>✔ Développement personnalisé</li>
<li>✔ Validation technique</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Chaque préparation est développée selon vos objectifs et votre utilisation.
</p>

</div>

{/* Carte 11 */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             14
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Mise au point
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Châssis</li>
<li>✔ Suspensions</li>
<li>✔ Géométrie</li>
<li>✔ Équilibre dynamique</li>
<li>✔ Réglages personnalisés</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Chaque réglage vise à exploiter pleinement le potentiel du véhicule.
</p>

</div>

{/* Carte 12 */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             15
             </p>

<h3 className="font-racing text-3xl mb-6 text-center">
Sport automobile
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Préparation compétition</li>
<li>✔ Assistance circuit</li>
<li>✔ Développement technique</li>
<li>✔ Fiabilisation endurance</li>
<li>✔ Accompagnement pilote</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] leading-relaxed text-center">
Notre expérience du terrain nous permet d'accompagner les projets les plus ambitieux.
</p>

</div>

</div>

</div>

</section>




{/* ===========================
    LA MÉTHODE PPA
=========================== */}

<section
id="methode"
className="scroll-mt-32 py-24 bg-[#0A0A0A]"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">

<p className="font-racing text-xl tracking-[0.4em] text-[#C9A227] mb-4">
NOTRE MÉTHODE
</p>

<h2 className="font-racing text-5xl mb-6">
LA MÉTHODE
<br />
<span className="gold-gradient">
PERFORMANCE & PRESTIGE
</span>
</h2>

<p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
Chaque intervention suit une méthodologie rigoureuse.
Notre objectif n'est pas seulement de réparer un véhicule, mais de comprendre son fonctionnement, d'assurer sa fiabilité et de garantir des performances durables.
</p>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{/* Carte */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             01
             </p>

<h3 className="font-racing text-3xl text-center mb-6">
Analyse
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Écoute du client</li>
<li>✔ Analyse des symptômes</li>
<li>✔ Contrôles préliminaires</li>
<li>✔ Définition des besoins</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] text-center">
Chaque intervention débute par une analyse complète afin d'orienter le diagnostic et les travaux à réaliser.
</p>

</div>

{/* Carte */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             02
             </p>

<h3 className="font-racing text-3xl text-center mb-6">
Intervention
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Méthodes professionnelles</li>
<li>✔ Respect constructeur</li>
<li>✔ Pièces adaptées</li>
<li>✔ Travail de précision</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] text-center">
Chaque opération est réalisée dans le respect des procédures afin de garantir qualité et fiabilité.
</p>

</div>

{/* Carte */}

<div className="bg-dark-card gold-border rounded-2xl service-card p-8 h-full flex flex-col">

<p className="text-7xl font-black text-[#C9A22720] mb-6">
             03
             </p>

<h3 className="font-racing text-3xl text-center mb-6">
Validation
</h3>

<ul className="space-y-3 text-[#A8A9AD] mb-8">

<li>✔ Contrôle qualité</li>
<li>✔ Essais</li>
<li>✔ Vérifications finales</li>
<li>✔ Restitution du véhicule</li>

</ul>

<p className="mt-auto text-sm text-[#A8A9AD] text-center">
Le véhicule est systématiquement contrôlé avant sa restitution afin de garantir un résultat conforme à nos exigences.
</p>

</div>

</div>

</div>

</section>




{/* ===========================
        CTA FINAL
=========================== */}

<section className="py-28 bg-[#0D0D0D]">

<div className="max-w-6xl mx-auto px-6">

<div className="bg-dark-card gold-border rounded-3xl overflow-hidden">

<div className="grid lg:grid-cols-2 items-center">

{/* Logo */}

<div className="flex justify-center items-center p-12">

<img
src="/images/logo-transparent.png"
alt="Performance & Prestige Academy"
className="
w-[360px]
h-[360px]
object-contain
drop-shadow-[0_0_35px_rgba(201,162,39,0.25)]
"
/>

</div>

{/* Texte */}

<div className="p-10 lg:p-14">

<p className="font-racing text-xl tracking-[0.35em] text-[#C9A227] mb-4">

UN PROJET ?

</p>

<h2 className="font-racing text-5xl mb-8">

CONFIEZ-NOUS

<br />

<span className="gold-gradient">

VOTRE VÉHICULE

</span>

</h2>

<p className="text-[#A8A9AD] leading-relaxed mb-8">

Entretien, réparation, préparation moteur ou accompagnement en compétition.

Chaque projet bénéficie de la même exigence, de la même rigueur et de la même passion qui font l'identité de Performance & Prestige Academy.

</p>

<div className="flex flex-col sm:flex-row gap-4">

<a
href="#contact"
className="btn-gold text-black font-racing font-bold text-sm tracking-widest px-10 py-4 rounded text-center"
>

DEMANDER UN DEVIS

</a>

<a
href="tel:+33600000000"
className="btn-outline-gold text-white font-racing font-bold text-sm tracking-widest px-10 py-4 rounded text-center"
>

NOUS APPELER

</a>

</div>

</div>

</div>

</div>

</div>

</section>

<Footer />

    </div>
  );
}

