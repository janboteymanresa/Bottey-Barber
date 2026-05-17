import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-12 text-black">On trobar-nos</h2>

          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-black" />
              <div>
                <h3 className="uppercase tracking-widest font-bold text-sm mb-2 text-black">Adreça</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-3">
                  Pista poliesportiva de Rupià<br />
                  Catalunya. CP 17131
                </p>
                <a
                  href="https://maps.app.goo.gl/vZNLM9WW8rMPJReM7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b border-black/30 hover:border-black transition-colors pb-1 text-black"
                  data-testid="contact-map-link"
                >
                  Obrir al mapa
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <Clock className="w-6 h-6 mt-1 flex-shrink-0 text-black" />
              <div>
                <h3 className="uppercase tracking-widest font-bold text-sm mb-2 text-black">Horaris</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Horaris variables
                </p>
                <p className="text-black/40 text-sm mt-2 italic">
                  Consulta la disponibilitat al calendari de reserves o contacta'ns directament.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-black" />
              <div>
                <h3 className="uppercase tracking-widest font-bold text-sm mb-2 text-black">Telèfon</h3>
                <a
                  href="tel:+34662076656"
                  className="text-gray-600 text-lg hover:text-black transition-colors"
                  data-testid="contact-phone"
                >
                  (+34) 662 076 656
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full min-h-[400px] border border-black/20 relative overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps?q=Pista+poliesportiva+de+Ropi%C3%A0,+17131+Ropi%C3%A0,+Girona&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", filter: "grayscale(100%) contrast(90%)" }}
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicació Bottey Barber"
            data-testid="contact-map-embed"
          />
          <a
            href="https://maps.app.goo.gl/vZNLM9WW8rMPJReM7"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-black text-xs uppercase tracking-widest font-bold px-4 py-2 border border-black/30 hover:bg-black hover:text-white transition-colors flex items-center gap-2"
            data-testid="contact-map-open"
          >
            <ExternalLink className="w-3 h-3" />
            Obrir mapa
          </a>
        </motion.div>

      </div>
    </section>
  );
}
