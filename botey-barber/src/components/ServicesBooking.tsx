import { motion } from "framer-motion";

const services = [
  { id: "tisores", name: "Tall amb tisores", price: "5 €", desc: "Tall precís a mà amb tisores professionals." },
  { id: "maquina", name: "Tall amb màquina", price: "5 €", desc: "Tall net i ràpid amb màquina de barberia." },
  { id: "barba", name: "Tall + barba", price: "8 €", desc: "Tall de cabell i arranjament de barba." },
];

export function ServicesBooking() {
  return (
    <section id="services" className="py-32 px-6 bg-white text-black relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-4">Serveis i Reserves</h2>
          <div className="w-16 h-px bg-black/30 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Services list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl mb-10 border-b border-black/20 pb-6">Menú de serveis</h3>
            <div className="space-y-8">
              {services.map((service) => (
                <div key={service.id} className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xl font-bold uppercase tracking-wider">{service.name}</span>
                    <div className="flex-grow border-b border-dotted border-black/30 mx-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xl font-serif">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-500 text-sm leading-relaxed">
              Selecciona el servei i l'hora que millor t'escaigui directament al calendari de reserves.
            </p>
          </motion.div>

          {/* Calendly embed */}
          <motion.div
            id="booking"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl mb-10 border-b border-black/20 pb-6">Reserva la teva cita</h3>
            <div
              className="border border-black/20 overflow-hidden"
              style={{ height: "700px" }}
              data-testid="calendly-embed-wrapper"
            >
              <iframe
                src="https://calendly.com/aram-botey/barberia?embed_domain=botteybarber&embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=000000"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Reserva a Bottey Barber"
                data-testid="calendly-iframe"
                allow="fullscreen"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
