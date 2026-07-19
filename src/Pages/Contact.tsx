import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <SEO
        title="Contact | Performance & Prestige Academy"
        description="Contactez Performance & Prestige Academy pour toute demande concernant les formations ou les prestations automobiles."
      />

      <Navbar />

      <HeroPage
        surTitre="CONTACT"
        titre="PARLONS"
        titreGold="DE VOTRE PROJET"
        image="/images/hero.png"
      />

      {/* Présentation */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="font-racing text-xl tracking-[0.35em] text-[#C9A227] mb-4">
              RESTONS EN CONTACT
            </p>

            <h2 className="font-racing text-5xl mb-6">
              UNE QUESTION ?
              <br />
              <span className="gold-gradient">
                UN PROJET ?
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
              Notre équipe vous accompagne pour toute demande concernant
              les formations, les prestations automobiles ou un projet personnalisé.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-5 mb-20">

            <div className="gold-border rounded-xl px-6 py-4 bg-dark-card">
              ✔ Réponse sous 24h
            </div>

            <div className="gold-border rounded-xl px-6 py-4 bg-dark-card">
              ✔ Devis gratuit
            </div>

            <div className="gold-border rounded-xl px-6 py-4 bg-dark-card">
              ✔ Sans engagement
            </div>

          </div>

          {/* Formulaire */}

          <div className="grid lg:grid-cols-2 gap-16">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Nom"
                  className="bg-dark-card border border-[#C9A22730] rounded-xl p-4 w-full"
                />

                <input
                  type="text"
                  placeholder="Prénom"
                  className="bg-dark-card border border-[#C9A22730] rounded-xl p-4 w-full"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-dark-card border border-[#C9A22730] rounded-xl p-4 w-full"
                />

                <input
                  type="text"
                  placeholder="Téléphone"
                  className="bg-dark-card border border-[#C9A22730] rounded-xl p-4 w-full"
                />

              </div>

              <input
                type="text"
                placeholder="Objet"
                className="bg-dark-card border border-[#C9A22730] rounded-xl p-4 w-full"
              />

              <textarea
                rows={8}
                placeholder="Votre message..."
                className="bg-dark-card border border-[#C9A22730] rounded-xl p-4 w-full"
              />

              <button
                className="btn-gold px-8 py-4 rounded font-racing tracking-widest text-black"
              >
                ENVOYER MA DEMANDE
              </button>

            </form>

            {/* Infos */}

            <div className="space-y-8">

              <div className="gold-border rounded-2xl bg-dark-card p-8">

                <h3 className="font-racing text-3xl mb-8">
                  PERFORMANCE & PRESTIGE ACADEMY
                </h3>

                <div className="space-y-5 text-[#A8A9AD]">

                  <div className="flex items-center gap-4">
                    <Phone className="text-[#C9A227]" />
                    06 XX XX XX XX
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-[#C9A227]" />
                    contact@performance-prestige-academy.fr
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-[#C9A227]" />
                    Var - France
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="text-[#C9A227]" />
                    Sur rendez-vous
                  </div>

                </div>

              </div>

              <div className="gold-border rounded-2xl bg-dark-card p-8">

                <h3 className="font-racing text-2xl mb-8">
                  SUIVEZ-NOUS
                </h3>

                <div className="flex gap-8">

                  <Instagram className="text-[#C9A227] w-8 h-8 cursor-pointer" />
                  <Facebook className="text-[#C9A227] w-8 h-8 cursor-pointer" />
                  {/* <Linkedin className="text-[#C9A227] w-8 h-8 cursor-pointer" /> */}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Google Maps */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="font-racing text-5xl text-center mb-12">
            NOUS TROUVER
          </h2>

          <div className="rounded-2xl overflow-hidden gold-border">

            <iframe
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="500"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}