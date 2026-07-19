import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
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


  return (
    <>
      CONTACT FORM
    </>
  );
}