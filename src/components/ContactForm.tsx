export default function ContactForm() {
  return (
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
  );
}