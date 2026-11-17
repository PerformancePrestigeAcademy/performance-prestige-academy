
export default function Footer() {
  
  return (

    <footer className="fixed bottom-0 left-0 right-0 z-40 h-9 bg-[#050505]/95 border-t border-[rgba(201,162,39,0.30)] backdrop-blur-md flex items-center justify-center px-4">
      
      <div className="max-w-7xl w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[10px] text-[#A8A9AD]">
        
        <span>
          © {new Date().getFullYear()} Performance & Prestige Academy
        </span>

        <a
          href="/mentions-legales"
          className="hover:text-[#C9A227] transition-colors"
        >
          Mentions légales
        </a>

        <a href="/politique-confidentialite"
         className="hover:text-[#C9A227] transition-colors">
           Politique de confidentialité
        </a>

      </div>

    </footer>

  );

}
