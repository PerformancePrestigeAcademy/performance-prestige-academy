import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <HeroPage
        surTitre="INFORMATIONS"
        titre="POLITIQUE"
        titreGold="DE CONFIDENTIALITÉ"
        image="/images/hero.png"
      />

      <main className="max-w-5xl mx-auto px-6 py-24">

        <div className="space-y-16 text-[#CFCFCF] leading-8">

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Responsable du traitement
            </h2>

            <p>
              Les données personnelles collectées sur ce site sont traitées par
              <strong> Performance & Prestige Academy</strong>, exploitée par
              Jérémy Schoenenberger, EI.
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Données collectées
            </h2>

            <p>
              Lorsque vous utilisez le formulaire de contact, nous pouvons
              collecter les informations suivantes :
            </p>

            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Objet de la demande</li>
              <li>Contenu de votre message</li>
            </ul>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Finalité du traitement
            </h2>

            <p>
              Ces données sont utilisées exclusivement afin de répondre à votre
              demande de contact, établir un devis ou échanger avec vous dans le
              cadre des activités de Performance & Prestige Academy.
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Durée de conservation
            </h2>

            <p>
              Les données sont conservées uniquement pendant la durée nécessaire
              au traitement de votre demande et conformément aux obligations
              légales applicables.
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Destinataires des données
            </h2>

            <p>
              Les informations transmises via le formulaire ne sont jamais
              vendues, louées ou communiquées à des tiers.
            </p>

            <p className="mt-4">
              Elles sont accessibles uniquement à Performance & Prestige Academy
              dans le cadre du traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Vos droits
            </h2>

            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>

            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
            </ul>

            <p className="mt-6">
              Vous pouvez exercer ces droits en écrivant à :
            </p>

            <p className="mt-4">
              performanceprestigeacademy@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Cookies
            </h2>

            <p>
              À ce jour, le site Performance & Prestige Academy n'utilise pas de
              cookies publicitaires ni de suivi statistique nécessitant un
              consentement préalable.
            </p>

            <p className="mt-4">
              Si cette situation venait à évoluer, cette politique serait mise à
              jour conformément à la réglementation en vigueur.
            </p>
          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
}