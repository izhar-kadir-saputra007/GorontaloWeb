import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import WebProjects from "@/components/WebProjects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <WebProjects />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Index;
