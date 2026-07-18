export default function Footer() {

  return (
    <footer className="bg-black border-t border-[rgba(201,162,39,0.2)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-ecusson-transparent.png"
                alt="Performance & Prestige Academy"
                className="h-18 w-18 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="font-racing text-sm font-bold gold-gradient tracking-widest">PERFORMANCE</div>
                <div className="font-racing text-xs tracking-[0.25em] text-[#A8A9AD]">&amp; PRESTIGE ACADEMY</div>
              </div>
            </div>
            <p className="text-[#A8A9AD] text-sm leading-relaxed">
              L'excellence mécanique au service de la performance et de la passion.
            </p>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm tracking-widest text-[#C9A227] mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {['Préparation & Développement', 'Formation Professionnelle', 'Maintenance Véhicules', 'Cartographie ECU', 'Développement Compétition'].map((s) => (
                <li key={s}>
                  <a href="#maintenance" className="text-[#A8A9AD] text-sm hover:text-[#C9A227] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm tracking-widest text-[#C9A227] mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#A8A9AD] text-sm hover:text-[#C9A227] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#A8A9AD] text-xs">
          <p>&copy; {new Date().getFullYear()} Performance & Prestige Academy. Tous droits réservés.</p>
          <p className="font-racing tracking-widest">PERFORMANCE · FIABILITÉ · COMPÉTITION</p>
        </div>
      </div>
    </footer>
  );
}