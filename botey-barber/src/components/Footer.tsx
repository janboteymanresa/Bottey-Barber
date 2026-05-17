import { SiInstagram, SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-6xl mb-6 text-black">Bottey Barber</h2>
        <p className="uppercase tracking-[0.3em] text-xs font-bold text-gray-500 mb-12">
          Fresh · Cut · Style
        </p>

        <div className="flex space-x-8 mb-16">
          <a
            href="https://www.instagram.com/bottey._barber/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black hover:text-gray-500 transition-colors uppercase tracking-widest text-sm font-bold"
            data-testid="footer-social-ig"
            aria-label="Instagram"
          >
            <SiInstagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@boteybarber_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black hover:text-gray-500 transition-colors uppercase tracking-widest text-sm font-bold"
            data-testid="footer-social-tiktok"
            aria-label="TikTok"
          >
            <SiTiktok className="w-5 h-5" />
            <span>TikTok</span>
          </a>
        </div>

        <div className="w-full border-t border-black/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Bottey Barber. Tots els drets reservats.</p>
          <a
            href="/admin"
            className="mt-4 md:mt-0 text-gray-300 hover:text-gray-500 transition-colors"
            data-testid="footer-admin-link"
          >
            Accés administrador
          </a>
        </div>
      </div>
    </footer>
  );
}
