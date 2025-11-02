import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@webcraftstudio.id",
    href: "mailto:info@webcraftstudio.id",
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Jakarta, Indonesia",
    href: null,
  },
];

const Contact = () => {
  // Koordinat lokasi studio (contoh: Jakarta Pusat)
  const studioCoordinates = {
    lat: -6.2088,
    lng: 106.8456
  };

  // URL embed Google Maps dengan marker
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135000001!3d-6.194741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e83956a7cc74!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1633033220019!5m2!1sen!2sid`;

  // Alternatif: URL dengan marker custom menggunakan parameter
  const mapsWithMarker = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d${studioCoordinates.lng}!3d${studioCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e83956a7cc74!2sWebCraft%20Studio!5e0!3m2!1sen!2sid!4v1633033220019`;

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

        <div className="max-w-5xl mx-auto">
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
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-foreground">Lokasi Kami</h3>
              </div>
              
              {/* Informasi Koordinat */}
              <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Koordinat:</strong> {studioCoordinates.lat}, {studioCoordinates.lng}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Klik pada peta untuk melihat detail lokasi di Google Maps
                </p>
              </div>

              <div className="rounded-lg overflow-hidden border border-border relative">
                {/* Custom Marker Overlay (Optional) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="animate-bounce">
                    <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" />
                  </div>
                </div>

                {/* Embed Google Maps */}
                <iframe
                  src={mapsWithMarker}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi WebCraft Studio"
                  className="w-full h-[400px] relative z-0"
                />
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Alamat Detail:</strong> Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="text-xs"
                >
                  <a
                    href={`https://www.google.com/maps?q=${studioCoordinates.lat},${studioCoordinates.lng}`}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-[hsl(338,100%,50%)]/10 border-primary/20">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Mulai Project Anda Sekarang!
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Klik tombol di bawah untuk langsung chat dengan tim kami via WhatsApp. 
                Kami akan merespon dalam waktu kurang dari 30 menit!
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90 transition-opacity text-lg px-8 py-6 animate-glow-pulse"
              >
                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat via WhatsApp
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;