import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { X } from "lucide-react";

const PHONE = "34662076656";
const MESSAGE = encodeURIComponent(
  "Hola Aram! M'agradaria reservar una cita a Bottey Barber. Podries dir-me quan tens lloc disponible?"
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {hovered && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-3 shadow-lg max-w-[220px]"
          >
            <span>Escriu-nos per WhatsApp</span>
            <button
              onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
              className="text-white/40 hover:text-white transition-colors flex-shrink-0"
              aria-label="Tancar"
              data-testid="wa-dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacta per WhatsApp"
        data-testid="whatsapp-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="w-14 h-14 bg-black text-white flex items-center justify-center shadow-xl"
      >
        <SiWhatsapp className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
