import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <HeroPage
        surTitre="INFORMATIONS"
        titre="MENTIONS"
        titreGold="LÉGALES"
        image="/images/hero.png"
      />

      <main className="max-w-5xl mx-auto px-6 py-24">

        <div className="space-y-16 text-[#CFCFCF] leading-8">

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Éditeur du site
            </h2>

            <p>
              <strong>Performance & Prestige Academy</strong><br />
              Entreprise Individuelle (EI)<br />
              Jérémy Schoenenberger<br />
              2115 Route de Brignoles<br />
              83860 Nans-les-Pins – France
            </p>

            <p className="mt-4">
              SIRET : 107 262 669 00016<br />
              TVA non applicable – article 293 B du CGI
            </p>

            <p className="mt-4">
              performanceprestigeacademy@gmail.com<br />
              +33 6 83 87 26 31
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Directeur de la publication
            </h2>

            <p>
              Jérémy Schoenenberger
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Hébergement
            </h2>

            <p>
              Vercel Inc.<br />
              440 N Barranca Avenue #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>

            <p className="mt-4">
              https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Propriété intellectuelle
            </h2>

            <p>
              L'ensemble des contenus présents sur ce site (textes,
              photographies, illustrations, éléments graphiques, logos,
              documents et créations visuelles) est protégé par le Code de la
              propriété intellectuelle.
            </p>

            <p className="mt-4">
              Toute reproduction, représentation, diffusion ou exploitation,
              totale ou partielle, sans autorisation écrite préalable est
              interdite.
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Responsabilité
            </h2>

            <p>
              Performance & Prestige Academy s'efforce d'assurer l'exactitude
              des informations publiées sur ce site. Toutefois, aucune garantie
              n'est donnée quant à leur exhaustivité ou leur actualisation.
            </p>
          </section>

          <section>
            <h2 className="font-racing text-2xl text-[#C9A227] mb-6">
              Droit applicable
            </h2>

            <p>
              Le présent site est soumis au droit français.
              Tout litige relève de la compétence des juridictions françaises.
            </p>
          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
}