import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')] bg-repeat" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-7xl md:text-9xl leading-none mb-6 text-black">
            Bottey Barber
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-black/30 mb-8" />
          <p className="text-lg md:text-xl font-medium tracking-[0.15em] uppercase mb-4 max-w-2xl mx-auto text-black">
            Fresh cuts a tocar de la Costa Brava
          </p>
          <div className="w-px h-8 bg-black/20 mb-10" />
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-black text-white hover:bg-gray-800 rounded-none uppercase tracking-[0.2em] text-sm font-bold px-12 py-8 transition-transform hover:scale-105"
            data-testid="hero-book-now"
          >
            Reserva la teva cita
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-black to-black" />
    </section>
  );
}
