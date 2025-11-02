import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    price: "500000",
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
    timeline: "3-5 hari",
  },
  {
    name: "Standard",
    price: "1000000",
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
    timeline: "7-10 hari",
  },
  {
    name: "Professional",
    price: "2000000",
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
    timeline: "10-14 hari",
  },
  {
    name: "E-Commerce",
    price: "3000000",
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
    timeline: "14-21 hari",
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