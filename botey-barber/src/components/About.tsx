import { motion } from "framer-motion";
import aramPhoto from "@assets/image_1779042052474.png";

const barber = {
  name: "Aram Botey",
  title: "Barber",
  bio: "L'Aram és qui dona vida a Bottey Barber. Especialista amb la màquina, perquè el futbol no li donarà ni un duro. Fes-te un piti, tria el teu servei, vine i disfruta",
  image: aramPhoto,
};

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-6">El Barber</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg uppercase tracking-widest">
            El teu barber de confiança.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto group"
        >
          <div className="relative mb-8 overflow-hidden aspect-square border border-black/20">
            <img
              src={barber.image}
              alt={barber.name}
              className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              data-testid="about-barber-photo"
            />
            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-700" />
          </div>
          <div className="text-center">
            <h3 className="font-serif text-4xl mb-2 text-black">{barber.name}</h3>
            <p className="font-bold uppercase tracking-wider text-sm mb-6 text-gray-500">{barber.title}</p>
            <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto">{barber.bio}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
