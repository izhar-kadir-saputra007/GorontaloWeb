import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Lottie from "react-lottie";
import ContactAnimation from "@/assets/contact us.json";

const contactMethods = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "+62 82290316560",
    href: "https://wa.me/6282290316560",
  },
  {
    icon: Mail,
    title: "Email",
    value: "izharkadirsaputra@gmail.com",
    href: "mailto:izharkadirsaputra@gmail.com",
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Jl Arief rachman hakim, Dulalowo Tim., Kec. Kota Tengah, Kota Gorontalo, Gorontalo ",
    href: null,
  },
];

const Contact = () => {
  // Koordinat lokasi studio
  const studioCoordinates = {
    lat: 0.5569356583552609,
    lng: 123.05887201905645
  };

  // URL embed Google Maps dengan zoom level yang pas (15 = street level)
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15957.258407837378!2d${studioCoordinates.lng}!3d${studioCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1690000000000`;

  // Alternatif dengan parameter zoom yang lebih spesifik
  const mapsWithMarker = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.258407837378!2d${studioCoordinates.lng}!3d${studioCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzMnMjQuOSJOIDEyM8KwMDMnMzEuOSJF!5e0!3m2!1sen!2sid!4v1690000000000&z=15`;

  // URL untuk membuka di Google Maps app
  const googleMapsUrl = `https://www.google.com/maps?q=${studioCoordinates.lat},${studioCoordinates.lng}&z=16`;

  // Konfigurasi Lottie untuk animasi contact
  const contactAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siap membantu mewujudkan website impian Anda. Konsultasi gratis!
          </p>
        </motion.div>

        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <method.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{method.value}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Section Maps dengan Marker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="mx-auto p-6 bg-card border-border">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-foreground">Lokasi Kami</h3>
              </div>
              
              {/* Informasi Koordinat */}
              <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground mt-1">
                  Klik pada peta untuk melihat detail lokasi di Google Maps
                </p>
              </div>

              <div className="rounded-lg overflow-hidden border border-border">
                {/* Embed Google Maps - TANPA custom marker yang loncat-loncat */}
                <iframe
                  src={mapsWithMarker}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi GorontaloWeb"
                  className="w-full h-[200px]"
                />
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="text-xs"
                >
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Buka di Google Maps
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section dengan Animasi Lottie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-[hsl(338,100%,50%)]/10 border-primary/20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Animasi Lottie - SEKARANG TAMPIL DI MOBILE JUGA */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative" // ← HAPUS "hidden lg:block"
                >
                  {/* Container utama dengan shadow yang mengikuti bentuk */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Shadow yang mengikuti bentuk animasi */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.02, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/40 to-[hsl(338,100%,50%)]/40 rounded-full blur-xl"
                      style={{
                        width: '280px',
                        height: '280px',
                        margin: 'auto',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                    
                    {/* Inner glow shadow */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bg-gradient-to-br from-primary/30 to-[hsl(338,100%,50%)]/30 rounded-full blur-lg"
                      style={{
                        width: '260px',
                        height: '260px',
                        margin: 'auto',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />

                    {/* Outer glow effect */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute bg-gradient-to-br from-primary/20 to-[hsl(338,100%,50%)]/20 rounded-full blur-2xl"
                      style={{
                        width: '320px',
                        height: '320px',
                        margin: 'auto',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />

                    {/* Container untuk animasi Lottie */}
                    <div className="relative z-20">
                      {/* Drop shadow untuk detail yang lebih halus */}
                      <div 
                        className="relative"
                        style={{
                          filter: "drop-shadow(0 8px 25px rgba(255, 65, 108, 0.4)) drop-shadow(0 4px 12px rgba(255, 65, 108, 0.3))"
                        }}
                      >
                        {/* Ukuran responsif untuk mobile */}
                        <div className="hidden lg:block">
                          <Lottie 
                            options={contactAnimationOptions}
                            height={300}
                            width={300}
                          />
                        </div>
                        {/* Ukuran lebih kecil untuk mobile */}
                        <div className="lg:hidden">
                          <Lottie 
                            options={contactAnimationOptions}
                            height={250}
                            width={250}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Floating particles */}
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-40"
                    />
                    <motion.div
                      animate={{ 
                        y: [0, 15, 0],
                        rotate: [0, -180, -360]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute -bottom-3 -right-3 w-3 h-3 bg-[hsl(338,100%,50%)] rounded-full opacity-40"
                    />
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        x: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute top-8 -right-4 w-2 h-2 bg-accent rounded-full opacity-40"
                    />
                  </div>
                </motion.div>

                {/* Konten CTA di Kanan */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <MessageCircle className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Mulai Project Anda Sekarang!
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Klik tombol di bawah untuk langsung chat dengan tim kami via WhatsApp. 
                    Kami akan merespon dalam waktu kurang dari 30 menit!
                  </p>
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90 transition-opacity text-lg px-8 py-6 animate-glow-pulse group"
                  >
                    <a
                      href="https://wa.me/6282290316560?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Chat via WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;