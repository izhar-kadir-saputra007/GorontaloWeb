import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    price: "299000",
    period: "One-time",
    description: "Solusi ekonomis untuk mahasiswa, portfolio pribadi, atau UMKM yang baru memulai",
    features: [
      "1 Halaman Website (Landing Page)",
      "Desain Responsif Mobile Friendly",
      "Template Modern Pilihan",
      "Integrasi WhatsApp Business",
      "Optimasi SEO Dasar",
      "Upload ke Hosting (BYO Hosting)",
      "1x Revisi Desain",
      "Support 1 Minggu",
      "Sertifikat SSL",
      "Backup Manual"
    ],
    popular: false,
    timeline: "3-4 hari",
    type: "Landing Page",
    bestFor: ["Mahasiswa", "Freelancer", "UMKM Micro"]
  },
  {
    name: "Company Profile",
    price: "799000",
    period: "One-time",
    description: "Website company profile profesional untuk bisnis kecil dan menengah",
    features: [
      "5 Halaman Website (Home, About, Services, Portfolio, Contact)",
      "Desain Custom Responsif",
      "Domain .com/.id Gratis 1 Tahun",
      "Hosting 1 GB / 1 Tahun",
      "Form Kontak & WhatsApp Integration",
      "Google Maps Integration",
      "SEO Optimization",
      "SSL Certificate",
      "Google Analytics Setup",
      "3x Revisi Gratis",
      "Support 1 Bulan",
      "Social Media Integration"
    ],
    popular: true,
    timeline: "7-10 hari",
    type: "Company Profile",
    bestFor: ["UMKM", "Startup", "Bisnis Lokal", "Jasa Profesional"]
  },
  {
    name: "Business Plus",
    price: "1499000",
    period: "One-time",
    description: "Paket lengkap untuk bisnis yang membutuhkan website dengan fitur advanced",
    features: [
      "Hingga 8 Halaman Custom",
      "Desain Premium & Unique",
      "Domain Premium + Hosting 2 GB / 1 Tahun",
      "CMS Sederhana untuk Update Konten",
      "Blog/News Section",
      "Advanced SEO Optimization",
      "Google Business Profile Integration",
      "WhatsApp API Integration",
      "Multiple Contact Forms",
      "Image Gallery/Slider",
      "Speed Optimization",
      "Unlimited Revisi (dalam scope)",
      "Support 3 Bulan",
      "Training Basic Website Management"
    ],
    popular: false,
    timeline: "10-14 hari",
    type: "Business Website",
    bestFor: ["Perusahaan Kecil", "Agency", "Restoran", "Hotel Kecil"]
  },
  {
    name: "E-Commerce Basic",
    price: "2499000",
    period: "One-time",
    description: "Toko online sederhana untuk memulai penjualan produk digital/fisik",
    features: [
      "Website E-Commerce Sederhana",
      "Hingga 50 Produk",
      "Manajemen Produk & Kategori",
      "Shopping Cart & Checkout System",
      "Integrasi Pembayaran (Transfer Bank)",
      "Domain + Hosting 3 GB / 1 Tahun",
      "SSL Premium Certificate",
      "Order Management System",
      "Customer Management",
      "Basic Inventory System",
      "WhatsApp Order Notification",
      "SEO E-Commerce Optimization",
      "Unlimited Revisi",
      "Support 6 Bulan",
      "Training Management Produk"
    ],
    popular: false,
    timeline: "14-21 hari",
    type: "E-Commerce",
    bestFor: ["Online Shop", "Retail Kecil", "Produsen Lokal", "Distributor"]
  },
  
];

const Pricing = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (plan) => {
    // Navigate ke project submission dengan state
    navigate('/project-submission', {
      state: {
        plan: plan.name,
        price: plan.price
      }
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(parseInt(price));
  };

  const calculateDownPayment = (price) => {
    const downPayment = Math.floor(parseInt(price) * 0.5);
    return new Intl.NumberFormat('id-ID').format(downPayment);
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
          
          {/* Payment Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-primary mb-1">Sistem Pembayaran Fleksibel</h3>
                <p className="text-sm text-muted-foreground">
                  Bayar 50% di awal, 50% setelah project selesai
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-primary">DP 50%</div>
                  <div className="text-xs text-muted-foreground">Di Awal</div>
                </div>
                <div className="w-8 h-px bg-border"></div>
                <div className="text-center">
                  <div className="font-semibold text-primary">50%</div>
                  <div className="text-xs text-muted-foreground">Setelah Selesai</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? "lg:-mt-4" : ""}
            >
              <Card
                className={`p-6 bg-card border-border h-full flex flex-col relative ${
                  plan.popular
                    ? "border-primary shadow-[0_0_30px_hsl(348,100%,60%,0.3)] scale-105"
                    : "hover:border-primary/50 hover:shadow-lg"
                } transition-all duration-300 group`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  {/* Pricing Section */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-sm text-muted-foreground">Rp</span>
                      <span className="text-3xl font-bold text-primary">{formatPrice(plan.price)}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>

                  {/* Down Payment Info */}
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">Down Payment</div>
                      <div className="text-lg font-semibold text-foreground">
                        Rp {calculateDownPayment(plan.price)}
                      </div>
                      <div className="text-xs text-muted-foreground">50% di awal</div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Estimasi Pengerjaan</div>
                    <div className="text-sm font-semibold text-primary">{plan.timeline}</div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handlePackageSelect(plan)}
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Konsultasi Gratis</h4>
              <p className="text-sm text-muted-foreground">
                Konsultasi kebutuhan website secara gratis sebelum order
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Garansi Kepuasan</h4>
              <p className="text-sm text-muted-foreground">
                Revisi hingga Anda puas dengan hasil website
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Support Berlanjut</h4>
              <p className="text-sm text-muted-foreground">
                Support technical setelah website live
              </p>
            </div>
          </div>

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