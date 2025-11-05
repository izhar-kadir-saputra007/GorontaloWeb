import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom"; // Import Link

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          <span className="text-foreground">Gorontalo</span>
          <span className="text-primary">Web</span>
        </motion.div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mengapa Kami
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontak
            </button>
          </div>
          
          <ThemeToggle />
          
          {/* Tombol Mulai Project dengan Link ke Auth */}
          <Button asChild className="bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90 transition-opacity hidden md:flex">
            <Link to="/auth">
              Mulai Project
            </Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;