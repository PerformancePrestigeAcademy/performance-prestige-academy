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

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

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
        throw new Error("Erreur d'envoi");
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Erreur lors de l'envoi du message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0D0D0D]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

      <div>

        <h3 className="font-racing font-bold text-3xl text-white mb-4">
          Parlons de votre projet
        </h3>

        <p className="text-[#A8A9AD] leading-relaxed mb-10">
          Une question, un devis ou un projet ?
          Nous sommes à votre écoute pour vous accompagner.
        </p>

        <div className="space-y-6 mb-10">

          {[
            {
              icon: <Phone className="w-5 h-5" />,
              label: "Téléphone",
              value: "+33 (0)X XX XX XX XX",
            },
            {
              icon: <Mail className="w-5 h-5" />,
              label: "Email",
              value: "performanceprestigeacademy@gmail.com",
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              label: "Adresse",
              value: "Nans-les-Pins • 83860 • France",
            },
            {
              icon: <BookOpen className="w-5 h-5" />,
              label: "Disponibilités",
              value: "Lundi au vendredi • 9h00 - 18h00",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="flex items-start gap-4"
            >

              <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.4)] flex items-center justify-center text-[#C9A227] flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-[#A8A9AD] text-xs tracking-wider mb-1">
                  {item.label}
                </p>

                <p className="text-white">
                  {item.value}
                </p>
              </div>

            </div>

          ))}

        </div>

        <div className="space-y-3 mb-10">

          <div className="flex items-center gap-3 text-sm text-[#E5E5E5]">
            <CheckCircle className="w-4 h-4 text-[#C9A227]" />
            Réponse sous 24 à 48 heures
          </div>

          <div className="flex items-center gap-3 text-sm text-[#E5E5E5]">
            <CheckCircle className="w-4 h-4 text-[#C9A227]" />
            Devis gratuit
          </div>

          <div className="flex items-center gap-3 text-sm text-[#E5E5E5]">
            <CheckCircle className="w-4 h-4 text-[#C9A227]" />
            Premier échange sans engagement
          </div>

        </div>

        <div>

          <p className="font-racing text-xs tracking-widest text-[#A8A9AD] mb-4">
            SUIVEZ-NOUS
          </p>

          <div className="flex gap-3">

            <a
              href="https://www.instagram.com/performance_prestige_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.4)] flex items-center justify-center text-[#C9A227] hover:bg-[rgba(201,162,39,0.1)] transition"
            >
              <Instagram className="w-5 h-5"/>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61592134912462"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.4)] flex items-center justify-center text-[#C9A227] hover:bg-[rgba(201,162,39,0.1)] transition"
            >
              <Facebook className="w-5 h-5"/>
            </a>

          </div>

        </div>

      </div>

            <div>

        {sent ? (

          <div className="flex flex-col items-center justify-center h-full text-center py-16 gold-border rounded-2xl bg-dark-card">

            <CheckCircle className="w-16 h-16 text-[#C9A227] mb-6 icon-gold"/>

            <h3 className="font-racing text-2xl text-white mb-3">
              Message envoyé !
            </h3>

            <p className="text-[#A8A9AD]">
              Nous vous répondrons dans les plus brefs délais.
            </p>

            <button
              onClick={() => {
                setSent(false);

                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                });
              }}
              className="mt-8 btn-outline-gold px-8 py-3 rounded"
            >
              NOUVEAU MESSAGE
            </button>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="bg-dark-card gold-border rounded-2xl p-8 space-y-5 h-full flex flex-col"
          >

            <div className="grid sm:grid-cols-2 gap-5">

              <div>

                <label className="block text-xs font-racing tracking-widest text-[#A8A9AD] mb-2">
                  NOM COMPLET *
                </label>

                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e)=>setForm({...form,name:e.target.value})}
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
                  onChange={(e)=>setForm({...form,phone:e.target.value})}
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
                onChange={(e)=>setForm({...form,email:e.target.value})}
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
                onChange={(e)=>setForm({...form,subject:e.target.value})}
                className="contact-input w-full px-4 py-3 rounded-lg text-sm"
              >

                <option value="">
                  Sélectionnez un sujet
                </option>

                {SUBJECTS.map((subject)=>(
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
                value={form.message}
                onChange={(e)=>setForm({...form,message:e.target.value})}
                placeholder="Décrivez votre projet..."
                className="contact-input w-full flex-1 px-4 py-3 rounded-lg text-sm resize-none"
              />

            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-gold text-black font-racing font-bold tracking-widest w-full py-4 rounded-lg disabled:opacity-70 flex items-center justify-center gap-2"
            >

              {sending ? (

                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"/>
                  ENVOI EN COURS...
                </>

              ) : (

                <>
                  ENVOYER LE MESSAGE
                  <ArrowRight className="w-4 h-4"/>
                </>

              )}

            </button>

          </form>

        )}

      </div>

          </div>

  </div>

</section>

  );
}