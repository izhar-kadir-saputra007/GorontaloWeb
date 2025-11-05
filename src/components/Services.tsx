import { motion } from "framer-motion";
import { Code, Palette, Zap, Shield, Smartphone, TrendingUp } from "lucide-react";
import SpotlightCard from './reactbits/SpotlightCard'; // Import SpotlightCard

const services = [
  {
    icon: Code,
    title: "Website Custom",
    description: "Pengembangan website sesuai kebutuhan bisnis Anda dengan fitur lengkap dan modern.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan mudah digunakan untuk pengalaman pengguna terbaik.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Website yang tampil sempurna di semua perangkat, dari desktop hingga mobile.",
  },
  {
    icon: Zap,
    title: "Performa Cepat",
    description: "Optimasi kecepatan loading untuk meningkatkan konversi dan pengalaman pengguna.",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Implementasi standar keamanan terkini untuk melindungi data bisnis Anda.",
  },
  {
    icon: TrendingUp,
    title: "SEO Friendly",
    description: "Website yang dioptimasi untuk mesin pencari agar mudah ditemukan pelanggan.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Layanan <span className="text-primary">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi digital lengkap dengan teknologi terkini untuk bisnis masa depan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard 
                className="p-8 bg-card border-border group h-full backdrop-blur-sm"
                spotlightColor="rgba(255, 65, 108, 0.7)" // Warna primary Anda
              >
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;