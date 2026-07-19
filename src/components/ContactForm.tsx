import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

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


  return (
    <>
      CONTACT FORM
    </>
  );
}