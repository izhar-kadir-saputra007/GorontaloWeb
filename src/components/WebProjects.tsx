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

// Data dummy projects - ganti dengan project asli Anda
const webProjects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description:
      "Website e-commerce modern dengan integrasi payment gateway dan admin dashboard yang powerful.",
    image: "/projects/fashion-store.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    category: "E-Commerce",
    liveUrl: "https://fashion-store.demo",
    githubUrl: "https://github.com/username/fashion-store",
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description:
      "Sistem manajemen restoran lengkap dengan POS, inventory, dan analytics.",
    image: "/projects/restaurant-system.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    category: "Web App",
    liveUrl: "https://restaurant.demo",
    githubUrl: "https://github.com/username/restaurant-system",
    featured: true,
    status: "Completed",
  },
  {
    id: 3,
    title: "Portfolio Company Profile",
    description:
      "Website company profile modern dengan animasi smooth dan SEO optimized.",
    image: "/projects/company-profile.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    category: "Company Profile",
    liveUrl: "https://company.demo",
    githubUrl: "https://github.com/username/company-profile",
    featured: false,
    status: "Completed",
  },
  {
    id: 4,
    title: "Learning Management System",
    description:
      "Platform e-learning dengan video streaming, quiz, dan progress tracking.",
    image: "/projects/lms.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "Redis"],
    category: "Web App",
    liveUrl: "https://lms.demo",
    githubUrl: "https://github.com/username/lms",
    featured: true,
    status: "Completed",
  },
  {
    id: 5,
    title: "Travel Booking Platform",
    description:
      "Platform booking travel dengan integrasi multiple payment methods dan real-time notifications.",
    image: "/projects/travel-booking.jpg",
    technologies: ["React", "Python Django", "PostgreSQL", "Redis", "Docker"],
    category: "Booking System",
    liveUrl: "https://travel.demo",
    githubUrl: "https://github.com/username/travel-booking",
    featured: false,
    status: "Completed",
  },
  {
    id: 6,
    title: "Healthcare Telemedicine",
    description:
      "Aplikasi telemedicine dengan video consultation, e-prescription, dan medical records.",
    image: "/projects/telemedicine.jpg",
    technologies: ["Next.js", "Firebase", "WebRTC", "Stripe", "Twilio"],
    category: "Healthcare",
    liveUrl: "https://telemedicine.demo",
    githubUrl: "https://github.com/username/telemedicine",
    featured: true,
    status: "Completed",
  },
];

const categories = [
  "All",
  "E-Commerce",
  "Web App",
  "Company Profile",
  "Booking System",
  "Healthcare",
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
        staggerChildren: 0.15, // Increased stagger for better visual effect
        delayChildren: 0.1,
      },
    },
  };

  // Animasi untuk setiap card - muncul dari bawah
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60, // Start from further down
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
                  <div className="relative overflow-hidden bg-background h-48">
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
              

                    {/* Placeholder untuk gambar - ganti dengan gambar actual */}
                    <div className="w-full h-full flex items-center justify-center bg-muted/30">
                      <div className="text-4xl">🌐</div>
                    </div>
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
