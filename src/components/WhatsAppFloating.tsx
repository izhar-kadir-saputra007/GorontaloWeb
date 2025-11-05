import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "6282290316560"; // Ganti dengan nomor WhatsApp Anda
  const message = "Halo, saya tertarik dengan jasa pembuatan website Anda!";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center relative group"
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 180, scale: 0 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Ping Animation */}
          <motion.div
            className="absolute inset-0 border-2 border-green-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm whitespace-nowrap"
        >
          Butuh Bantuan?
        </motion.div>
      </motion.div>

      {/* Popup Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 bg-card border border-border rounded-2xl shadow-2xl p-6 w-80 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Hubungi Kami</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Konsultasi gratis via WhatsApp
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-green-500 hover:bg-green-600 text-white h-12"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat via WhatsApp
                </a>
              </Button>

              
            </div>

            {/* Business Hours */}
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                🕒 Senin - Jumat: 09:00 - 17:00
                <br />
                📍 Responsif 24/7 via WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloating;