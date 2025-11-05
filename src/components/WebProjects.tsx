import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Smartphone,
  Palette,
  Zap,
  Search,
  Filter,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import agrikultur_usaha_tani_nilam from "@/assets/portofolio/agrikultur_usaha_tani_nilam.png";
import herbalife_Marathon from "@/assets/portofolio/herbalife_Marathon.png";
import jasa_peminjaman_kamera from "@/assets/portofolio/jasa_peminjaman kamera.png";
import layanan_olah_data_bansos from "@/assets/portofolio/layanan_olah_data_bansos_terintegrasi_AI.png";
import Toko_makanan_kucing from "@/assets/portofolio/Toko_makanan_kucing.png";
import web_rekrutmen from "@/assets/portofolio/Web_rekrutmen dengan_machine_learning.png";

// Data real projects dengan gambar yang sudah diimport
const webProjects = [
  {
    id: 1,
    title: "Sistem Agrikultur Tani Nilam",
    description:
      "Website untuk usaha tani nilam dengan fitur monitoring pertumbuhan tanaman dan manajemen hasil panen.",
    image: agrikultur_usaha_tani_nilam,
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Leaflet"],
    category: "Web App",
    liveUrl: "https://fe-agrikultur-nilam.vercel.app/",
    githubUrl: "https://fe-agrikultur-nilam.vercel.app/",
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    title: "Herbalife Marathon Event",
    description:
      "Website event marathon dengan sistem pendaftaran online, tracking peserta, dan live results.",
    image: herbalife_Marathon,
    technologies: ["Next.js", "TypeScript", "Stripe", "Firebase", "Tailwind"],
    category: "Event Website",
    liveUrl: "https://indonesiarun.my.id/",
    githubUrl: "https://indonesiarun.my.id/",
    featured: true,
    status: "Completed",
  },
  {
    id: 3,
    title: "Jasa Peminjaman Kamera",
    description:
      "Platform peminjaman kamera profesional dengan sistem booking, inventory, dan payment gateway.",
    image: jasa_peminjaman_kamera,
    technologies: ["Vue.js", "Laravel", "MySQL", "Midtrans", "Redis"],
    category: "E-Commerce",
    liveUrl: "https://cam-smooth-show.vercel.app/",
    githubUrl: "https://cam-smooth-show.vercel.app/",
    featured: false,
    status: "Completed",
  },
  {
    id: 4,
    title: "Sistem Olah Data Bansos AI",
    description:
      "Aplikasi pengolahan data bantuan sosial terintegrasi AI untuk analisis dan distribusi yang tepat sasaran.",
    image: layanan_olah_data_bansos,
    technologies: ["Python", "Django", "PostgreSQL", "TensorFlow", "Docker"],
    category: "Web App",
    liveUrl: "https://landingpage-pemogramanweb.vercel.app/",
    githubUrl: "https://landingpage-pemogramanweb.vercel.app/",
    featured: true,
    status: "Completed",
  },
  {
    id: 5,
    title: "Toko Makanan Kucing Online",
    description:
      "E-commerce khusus produk makanan kucing dengan kategori breed-specific dan subscription box.",
    image: Toko_makanan_kucing,
    technologies: ["Next.js", "Strapi", "PostgreSQL", "Razorpay", "AWS S3"],
    category: "E-Commerce",
    liveUrl: "https://toko-makanan-kucing-9a41.vercel.app/",
    githubUrl: "https://toko-makanan-kucing-9a41.vercel.app/",
    featured: false,
    status: "Completed",
  },
  {
    id: 6,
    title: "Web Rekrutmen Machine Learning",
    description:
      "Sistem rekrutmen cerdas dengan fitur screening CV otomatis menggunakan machine learning.",
    image: web_rekrutmen,
    technologies: ["React", "FastAPI", "MongoDB", "Scikit-learn", "NLP"],
    category: "Web App",
    liveUrl: "https://fronend-cvision.vercel.app/",
    githubUrl: "https://fronend-cvision.vercel.app/",
    featured: true,
    status: "Completed",
  },
];

const categories = [
  "All",
  "E-Commerce",
  "Web App",
  "Event Website",
  "Company Profile",
];

const WebProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter projects berdasarkan category dan search
  const filteredProjects = webProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Animasi container untuk grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animasi untuk setiap card - muncul dari bawah
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Animasi hover untuk card
  const hoverVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
        duration: 0.3,
      },
    },
  };

  // Animasi untuk header section
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Animasi untuk badge technologies
  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 10,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 100,
              delay: 0.1,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Web <span className="text-primary">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Koleksi project website yang telah saya kembangkan dengan teknologi
            modern dan design yang user-friendly.
          </motion.p>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto"
          >
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari project atau teknologi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Button
                    onClick={() => setSelectedCategory(category)}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <motion.div variants={hoverVariants} className="h-full">
                <Card className="h-full bg-card border-border overflow-hidden group-hover:shadow-2xl group-hover:border-primary/30 transition-all duration-500 hover:bg-card/95">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-background h-56 md:h-64 lg:h-72">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-4 left-4 z-20"
                      >
                        <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Featured
                        </Badge>
                      </motion.div>
                    )}

                    {/* Status Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-600 border-green-500/30"
                            : "bg-blue-500/20 text-blue-600 border-blue-500/30"
                        }
                      >
                        {project.status}
                      </Badge>
                    </motion.div>

                    {/* Hover Overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/20 z-10 flex items-center justify-center gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-background/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-background/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    </motion.div>

                    {/* Gambar Actual */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                      >
                        {project.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground mb-4 line-clamp-2"
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          variants={badgeVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={techIndex}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.span>
                      ))}
                    </div>

                    {/* Category */}
                    <div className="flex items-center justify-between">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-sm text-muted-foreground flex items-center gap-1"
                      >
                        <Palette className="w-3 h-3" />
                        {project.category}
                      </motion.span>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-2"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Project tidak ditemukan</h3>
            <p className="text-muted-foreground mb-6">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              variant="outline"
            >
              <Filter className="w-4 h-4 mr-2" />
              Reset Filter
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WebProjects;