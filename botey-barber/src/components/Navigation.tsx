import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Serveis", id: "services" },
  { label: "El Barber", id: "about" },
  { label: "Galeria", id: "gallery" },
  { label: "Contacte", id: "contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="font-serif text-3xl cursor-pointer text-black"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            data-testid="nav-logo"
          >
            Bottey Barber
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium uppercase tracking-widest text-black hover:text-gray-500 transition-colors"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-black text-white hover:bg-gray-800 rounded-none uppercase tracking-widest text-xs font-bold px-6 py-5"
              data-testid="nav-book-now"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tancar menú" : "Obrir menú"}
            data-testid="nav-hamburger"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                onClick={() => scrollToSection(item.id)}
                className="font-serif text-5xl text-black hover:text-gray-400 transition-colors"
                data-testid={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.07 + 0.05, duration: 0.3 }}
            >
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-black text-white hover:bg-gray-800 rounded-none uppercase tracking-[0.2em] text-sm font-bold px-10 py-6 mt-4"
                data-testid="mobile-nav-book"
              >
                Reserva la teva cita
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
