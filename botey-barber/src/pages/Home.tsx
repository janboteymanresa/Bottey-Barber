import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesBooking } from "@/components/ServicesBooking";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      <Navigation />

      <main>
        <Hero />
        <ServicesBooking />
        <About />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
