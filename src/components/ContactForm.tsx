import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Facebook,
  Instagram,
} from "lucide-react";

export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const SUBJECTS = [
    "Préparation & Développement",
    "Formation",
    "Maintenance Véhicule",
    "Autre demande",
  ];

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erreur");
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (err) {

      alert("Erreur lors de l'envoi.");

    } finally {

      setSending(false);

    }
  };

  return (

    <section id="contact" className="py-24 bg-[#0D0D0D]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="font-racing text-xl tracking-[0.35em] text-[#C9A227] mb-4">
            CONTACTEZ-NOUS
          </p>

          <h2 className="font-racing text-5xl lg:text-6xl mb-6">
            PARLONS DE
            <br />
            <span className="gold-gradient">
              VOTRE PROJET
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-[#A8A9AD] leading-relaxed">
            Une question ? Un devis ? Une demande de formation ?
            Nous vous répondrons rapidement.
          </p>

        </div>

    {/* Les avantages */}

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">

  <div className="gold-border rounded-xl px-6 py-4 bg-dark-card text-center">
    ✔ Réponse sous 24 à 48h
  </div>

  <div className="gold-border rounded-xl px-6 py-4 bg-dark-card text-center">
    ✔ Devis gratuit
  </div>

  <div className="gold-border rounded-xl px-6 py-4 bg-dark-card text-center">
    ✔ Premier échange sans engagement
  </div>

</div>

{/* Deux colonnes */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

  <form
  onSubmit={handleSubmit}
  className="
bg-dark-card
gold-border
rounded-2xl
p-6
sm:p-8
space-y-5
flex
flex-col
w-full
"
>


{/* Colonne gauche */}

  <div className="grid sm:grid-cols-2 gap-5">

  <div>
    <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">
      NOM COMPLET *
    </label>

    <input
      required
      type="text"
      value={form.name}
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
      placeholder="Jean Dupont"
      className="contact-input w-full px-4 py-3 rounded-lg text-sm"
    />
  </div>

  <div>
    <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">
      TÉLÉPHONE
    </label>

    <input
      type="tel"
      value={form.phone}
      onChange={(e) =>
        setForm({ ...form, phone: e.target.value })
      }
      placeholder="+33 6 00 00 00 00"
      className="contact-input w-full px-4 py-3 rounded-lg text-sm"
    />
  </div>

</div>

<div>

  <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">
    EMAIL *
  </label>

  <input
    required
    type="email"
    value={form.email}
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
    placeholder="jean@exemple.fr"
    className="contact-input w-full px-4 py-3 rounded-lg text-sm"
  />

</div>

<div>

  <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">
    SUJET *
  </label>

  <select
    required
    value={form.subject}
    onChange={(e) =>
      setForm({ ...form, subject: e.target.value })
    }
    className="contact-input w-full px-4 py-3 rounded-lg text-sm"
  >

    <option value="">
      Sélectionnez un sujet
    </option>

    {SUBJECTS.map((subject) => (
      <option
        key={subject}
        value={subject}
      >
        {subject}
      </option>
    ))}

  </select>

</div>

<div className="flex-1 flex flex-col">

  <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">
    MESSAGE *
  </label>

  <textarea
    required
    rows={7}
    value={form.message}
    onChange={(e) =>
      setForm({ ...form, message: e.target.value })
    }
    placeholder="Décrivez votre projet..."
    className="contact-input w-full px-4 py-3 rounded-lg text-sm resize-none"
  />

</div>

<button
  type="submit"
  disabled={sending}
  className="btn-gold text-black font-racing font-bold tracking-widest w-full py-4 rounded-lg disabled:opacity-70 flex items-center justify-center gap-2"
>

  {sending ? (
    <>
      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
      ENVOI EN COURS...
    </>
  ) : (
    <>
      ENVOYER LE MESSAGE
      <ArrowRight className="w-4 h-4" />
    </>
  )}

</button>

</form>

      {/* Colonne droite */}

<div className="space-y-8 w-full">

  <div className="gold-border rounded-2xl bg-dark-card p-6 sm:p-8 w-full">

    <h3 className="font-racing text-3xl text-white mb-8">
      PERFORMANCE & PRESTIGE ACADEMY
    </h3>

    <div className="space-y-6">

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center">
          <Phone className="w-5 h-5 text-[#C9A227]" />
        </div>

        <div className="flex-1">
          <p className="text-xs text-[#A8A9AD] uppercase tracking-wider">
            Téléphone
          </p>
          <p className="text-white leading-relaxed">
            06 83 87 26 31
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center">
          <Mail className="w-5 h-5 text-[#C9A227]" />
        </div>
        <div>
          <p className="text-xs text-[#A8A9AD] uppercase tracking-wider">
            Email
          </p>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            performanceprestigeacademy@gmail.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center">
          <MapPin className="w-5 h-5 text-[#C9A227]" />
        </div>
        <div>
          <p className="text-xs text-[#A8A9AD] uppercase tracking-wider">
            Adresse
          </p>
          <p className="text-white leading-relaxed">
            Nans-les-Pins • Var • France
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-[#C9A227]" />
        </div>
        <div>
          <p className="text-xs text-[#A8A9AD] uppercase tracking-wider">
            Disponibilités
          </p>
          <p className="text-white leading-relaxed">
            Lundi au vendredi • 9h00 - 18h00
          </p>
        </div>
      </div>

    </div>

  </div>

  <div className="gold-border rounded-2xl bg-dark-card p-6 sm:p-8 w-full">

    <h3 className="font-racing text-2xl text-white mb-8">
      SUIVEZ-NOUS
    </h3>

    <div className="flex justify-center sm:justify-start gap-5">

      <a
        href="https://www.instagram.com/performance_prestige_academy/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/10 transition"
      >
        <Instagram className="w-6 h-6" />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61592134912462"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/10 transition"
      >
        <Facebook className="w-6 h-6" />
      </a>

    </div>

  </div>

</div>

</div>

</div>


    </section>

  );

}