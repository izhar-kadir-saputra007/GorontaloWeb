import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Lottie from "react-lottie";
import developerAnimation from "@/assets/Developer.json";
import { useState, useEffect } from "react";
import RotatingText from './reactbits/RotatingText';
import Particles from './reactbits/Particles'; 

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Konfigurasi Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // Komponen untuk animasi perhitungan
  const AnimatedCounter = ({ target, label }: { target: number; label: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 3000; // 3 detik total
      const increment = target / (duration / 50); // Increment per frame (50ms)
      
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4); // Easing function untuk slow down di akhir
      
      const timer = setInterval(() => {
        const progress = Math.min(start / target, 1); // Progress 0-1
        const easedProgress = easeOutQuart(progress);
        const currentCount = Math.min(Math.floor(easedProgress * target), target);
        
        setCount(currentCount);
        
        if (start < target) {
          start += increment;
        } else {
          setCount(target);
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="text-center"
      >
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {count}+
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Background */}
      {/* Particles Background */}
<div className="absolute inset-0">
<Particles
  particleColors={['#FF416C', '#FF4B2B', '#FFC107']}
  particleCount={80}
  particleSpread={5}
  speed={0.1}
  particleBaseSize={200}
  moveParticlesOnHover={true}
  particleHoverFactor={2}
  alphaParticles={false}
/>
</div>
      
      {/* Overlay gradient untuk readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-card/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformasi Digital{" "}
              <span className="block mt-2">
                <RotatingText
                  texts={[
                    'Website Premium',
                    'E-Commerce Eksklusif', 
                    'Company Profile Elite',
                    'Landing Page Konversi Tinggi',
                    'Web App Berkualitas'
                  ]}
                  mainClassName="inline-flex px-6 py-3 bg-primary/15 rounded-2xl border border-primary/30 overflow-hidden backdrop-blur-sm shadow-lg"
                  staggerFrom={"last"}
                  initial={{ y: "120%", rotateX: -90 }}
                  animate={{ y: 0, rotateX: 0 }}
                  exit={{ y: "-130%", rotateX: 90 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                  rotationInterval={3200}
                  elementLevelClassName="bg-gradient-to-r from-primary via-[hsl(338,100%,50%)] to-[hsl(328,100%,50%)] text-transparent bg-clip-text font-extrabold tracking-tight"
                />
              </span>
              {" "}Untuk Bisnis Anda
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Jasa pembuatan website modern, responsif, dan SEO friendly dengan harga terjangkau. 
              Tingkatkan bisnis Anda dengan kehadiran online yang profesional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90 transition-opacity text-lg px-8 py-6 animate-glow-pulse group backdrop-blur-sm border border-primary/30"
              >
                Lihat Paket Harga
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-border hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 backdrop-blur-sm"
              >
                Konsultasi Gratis
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6"
            >
              <AnimatedCounter target={100} label="Project Selesai" />
              <AnimatedCounter target={50} label="Klien Puas" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Container utama untuk animasi */}
            <div className="relative">
              {/* Multiple shadow layers untuk efek yang lebih natural */}
              
              {/* Layer 1: Soft diffuse shadow */}
              <div 
                className="absolute inset-0 opacity-20 blur-3xl scale-110"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(348, 100%, 60%) 0%, transparent 70%)",
                  transform: "scale(1.1) translateY(10px)"
                }}
              />
              
              {/* Layer 2: Medium shadow */}
              <div 
                className="absolute inset-0 opacity-25 blur-2xl scale-105"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(338, 100%, 50%) 0%, transparent 60%)",
                  transform: "scale(1.05) translateY(5px)"
                }}
              />
              
              {/* Layer 3: Sharp shadow */}
              <div 
                className="absolute inset-0 opacity-30 blur-xl"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(328, 100%, 50%) 0%, transparent 50%)"
                }}
              />
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 opacity-15 blur-2xl animate-pulse"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(348, 100%, 70%) 0%, transparent 70%)",
                  animation: "pulse 4s ease-in-out infinite"
                }}
              />

              {/* Animasi Lottie dengan filter drop-shadow */}
              <div 
                className="relative z-20"
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(255, 65, 108, 0.3)) drop-shadow(0 5px 15px rgba(255, 65, 108, 0.4))"
                }}
              >
                <Lottie 
                  options={defaultOptions}
                  height={500}
                  width={500}
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-[hsl(338,100%,50%)] rounded-full opacity-15 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-accent to-[hsl(38,100%,50%)] rounded-full opacity-15 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;