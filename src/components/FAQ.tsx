import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Lottie from "react-lottie";
import FAQAnimation from "@/assets/FAQ.json";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  // Konfigurasi Lottie untuk FAQ
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FAQAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const faqData = [
    {
      question: "Berapa lama proses pembuatan website?",
      answer: "Waktu pengerjaan bervariasi tergantung paket yang dipilih. Paket Basic 3-5 hari, Standard 7-10 hari, Professional 10-14 hari, dan E-Commerce 14-21 hari. Timeline dapat disesuaikan dengan kompleksitas proyek."
    },
    {
      question: "Apakah harga sudah termasuk domain dan hosting?",
      answer: "Ya, paket Standard, Professional, dan E-Commerce sudah termasuk domain .my.id gratis 1 tahun dan hosting 1 tahun. Untuk paket Basic, klien menyediakan hosting sendiri."
    },
    {
      question: "Berapa kali revisi yang diperbolehkan?",
      answer: "Paket Basic 1x revisi, Standard 2x revisi, Professional unlimited revisi minor, dan E-Commerce unlimited revisi. Kami fleksibel dan mengutamakan kepuasan klien."
    },
    {
      question: "Apakah website sudah optimasi SEO?",
      answer: "Ya, semua paket sudah termasuk optimasi SEO dasar. Untuk paket Professional dan E-Commerce, kami melakukan optimasi SEO yang lebih comprehensive termasuk meta tags, sitemap, dan struktur HTML yang SEO-friendly."
    },
    {
      question: "Bagaimana dengan keamanan website?",
      answer: "Kami implementasikan standar keamanan terkini termasuk SSL certificate, sanitasi input data, proteksi terhadap SQL injection, dan regular security updates. Semua paket sudah termasuk SSL certificate."
    },
    {
      question: "Apakah bisa request fitur custom?",
      answer: "Tentu! Kami terbuka untuk diskusi fitur custom tambahan. Untuk kebutuhan khusus di luar paket, kami akan berikan quotation terpisah setelah memahami kebutuhan Anda."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar jasa pembuatan website kami.
          </p>
        </motion.div>

        {/* Content Grid - FAQ dan Animation */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`group cursor-pointer transition-all duration-300 ${
                    openItems.includes(index)
                      ? "bg-primary/5 border-primary shadow-sm"
                      : "bg-card hover:bg-accent/5 hover:shadow-sm border-border"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="p-6">
                      {/* Question Row */}
                      <div 
                        className="flex justify-between items-start gap-4"
                        onClick={() => toggleItem(index)}
                      >
                        <h3 className={`text-lg font-semibold transition-colors flex-1 ${
                          openItems.includes(index) ? "text-primary" : "text-foreground group-hover:text-primary"
                        }`}>
                          {faq.question}
                        </h3>
                        
                        <motion.div
                          animate={{ 
                            rotate: openItems.includes(index) ? 180 : 0,
                            scale: openItems.includes(index) ? 1.1 : 1
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                            openItems.includes(index)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted group-hover:bg-primary/10 group-hover:text-primary"
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>

                      {/* Answer Section */}
                      <AnimatePresence>
                        {openItems.includes(index) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="pt-4 mt-4 border-t border-border/50"
                            >
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Lottie Animation - SEKARANG TAMPIL DI MOBILE JUGA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center" // ← HAPUS "hidden lg:flex" dan "sticky top-24"
          >
            <div className="relative">
              {/* Background Glow Effect - menggunakan primary color */}
              <div 
                className="absolute inset-0 opacity-10 blur-xl scale-105"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(348, 95%, 55%) 0%, transparent 70%)",
                  transform: "scale(1.05) translateY(5px)"
                }}
              />
              
              {/* Medium shadow - menggunakan accent color */}
              <div 
                className="absolute inset-0 opacity-15 blur-lg"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(48, 95%, 55%) 0%, transparent 60%)"
                }}
              />

              {/* Lottie Animation dengan ukuran responsif */}
              <div 
                className="relative z-20"
                style={{
                  filter: "drop-shadow(0 5px 15px rgba(348, 95%, 55%, 0.2)) drop-shadow(0 2px 8px rgba(348, 95%, 55%, 0.3))"
                }}
              >
                {/* Ukuran desktop */}
                <div className="hidden lg:block">
                  <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                  />
                </div>
                {/* Ukuran mobile */}
                <div className="lg:hidden">
                  <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={300}
                  />
                </div>
              </div>

              {/* Floating decorative elements - sembunyikan di mobile */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-5 blur-xl hidden lg:block"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-full opacity-5 blur-xl hidden lg:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;