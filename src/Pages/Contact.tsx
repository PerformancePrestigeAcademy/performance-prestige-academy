import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import ContactForm from "../components/ContactForm";

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
        scrollTarget="contact"
      />

      {/* Présentation */}

      <section id="contact" className="py-24 scroll-mt-28">

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

          <ContactForm />

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
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35882.87861448096!2d5.783552!3d43.384831999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1784538184299!5m2!1sfr!2sfr"
  width="100%"
  height="500"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
/>


          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
}