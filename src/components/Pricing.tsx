import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    price: "500.000",
    period: "One-time",
    description: "Cocok untuk personal, toko kecil, atau UMKM baru mulai online",
    features: [
      "Template Desain Responsif",
      "1–2 Halaman (Home & Kontak)",
      "Integrasi WhatsApp / Sosial Media",
      "Upload ke Hosting Klien",
      "1x Revisi Gratis",
      "Support 1 Minggu",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "1.500.000",
    period: "One-time",
    description: "Ideal untuk bisnis lokal atau profil usaha sederhana",
    features: [
      "Desain Menarik & Responsif",
      "3–5 Halaman (Home, Tentang, Layanan, Galeri, Kontak)",
      "Domain .my.id Gratis 1 Tahun",
      "Hosting 1 Tahun",
      "Form Kontak & WhatsApp Button",
      "SEO Dasar",
      "SSL Certificate",
      "Support 1 Bulan",
      "2x Revisi",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "2.000.000",
    period: "One-time",
    description: "Cocok untuk perusahaan kecil atau startup dengan fitur tambahan",
    features: [
      "Desain Premium & Responsif",
      "Hingga 10 Halaman",
      "Domain + Hosting 1 Tahun",
      "SEO Optimization",
      "SSL Certificate",
      "Dashboard Admin Sederhana (Opsional)",
      "Integrasi Google Maps & Form Kontak",
      "Support 3 Bulan",
      "Revisi Unlimited (minor)",
    ],
    popular: false,
  },
  {
    name: "E-Commerce",
    price: "3.000.000",
    period: "One-time",
    description: "Solusi lengkap untuk bisnis online dan toko digital",
    features: [
      "Desain Custom & Mobile Friendly",
      "Manajemen Produk & Transaksi",
      "Dashboard Admin",
      "Integrasi Pembayaran (Payment Gateway)",
      "Laporan Penjualan",
      "Domain + Hosting 1 Tahun",
      "SSL Certificate",
      "Support 6 Bulan",
      "Revisi Unlimited",
    ],
    popular: false,
  },
];


const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Paket <span className="text-primary">Harga</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <Card
                className={`p-8 bg-card border-border h-full flex flex-col relative ${
                  plan.popular
                    ? "border-primary shadow-[0_0_30px_hsl(348,100%,60%,0.3)] scale-105"
                    : "hover:border-primary/50"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">IDR</span>
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={
                    plan.popular
                      ? "w-full bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90"
                      : "w-full bg-secondary hover:bg-secondary/80"
                  }
                >
                  Pilih Paket
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Semua paket sudah termasuk{" "}
            <span className="text-primary font-semibold">konsultasi gratis</span> dan{" "}
            <span className="text-primary font-semibold">garansi kepuasan</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
