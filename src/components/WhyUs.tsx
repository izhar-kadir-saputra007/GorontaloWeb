import { motion } from "framer-motion";
import { Star, Users, Clock, Award, Gift, Zap } from "lucide-react";

const reasons = [
  {
    icon: Star,
    title: "Kualitas Premium",
    description: "Setiap project dikerjakan dengan standar tertinggi menggunakan teknologi terkini.",
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Didukung oleh tim developer dan designer profesional dengan pengalaman 5+ tahun.",
  },
  {
    icon: Clock,
    title: "Pengerjaan Tepat Waktu",
    description: "Kami berkomitmen menyelesaikan project sesuai timeline yang telah disepakati.",
  },
  {
    icon: Award,
    title: "Garansi & Support",
    description: "Dapatkan garansi dan dukungan teknis untuk memastikan website selalu optimal.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mengapa Memilih <span className="text-primary">Kami?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan klien adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-[hsl(338,100%,50%)]/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-[hsl(338,100%,50%)] flex items-center justify-center animate-glow-pulse">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Promo Spesial untuk 10 Klien Pertama!
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Dapatkan diskon hingga <span className="text-primary font-bold">20%</span> dan bonus maintenance gratis 6 bulan
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/20 border border-accent">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Limited Time Offer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
