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

          {/* Formulaire */}

          <ContactForm />

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