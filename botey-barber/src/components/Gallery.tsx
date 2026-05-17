import { motion } from "framer-motion";
import img1 from "@assets/image_1779041637462.png";
import img2 from "@assets/image_1779041669843.png";
import img3 from "@assets/image_1779041779230.png";
import img4 from "@assets/image_1779041858743.png";
import img5 from "@assets/image_1779041918810.png";
import img6 from "@assets/image_1779041947612.png";

const images = [img1, img2, img3, img4, img5, img6];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-12"
      >
        <h2 className="font-serif text-5xl md:text-7xl text-black">Galeria</h2>
        <div className="w-16 h-px bg-black/30 mt-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 px-1 md:px-2"
      >
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square overflow-hidden bg-black/5" data-testid={`gallery-img-${index}`}>
            <img
              src={src}
              alt={`Bottey Barber — treball ${index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
