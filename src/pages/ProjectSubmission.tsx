import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Mail, 
  Phone, 
  FileText,
  ArrowRight
} from "lucide-react";

interface ProjectFormData {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
}

const ProjectSubmission = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<ProjectFormData>({
    name: "",
    email: "",
    phone: "",
    projectDescription: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get data dari state navigation
  const { plan, price } = location.state || {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simpan data project
      const projectData = {
        ...formData,
        selectedPlan: plan,
        planPrice: parseInt(price),
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('projectData', JSON.stringify(projectData));
      
      // Navigate ke halaman payment
      navigate('/payment');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!plan || !price) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Data tidak lengkap</h2>
          <Button onClick={() => navigate('/pricing')}>
            Kembali ke Harga
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            Detail <span className="text-primary">Project</span>
          </h1>
          <p className="text-muted-foreground">
            Isi data project untuk paket <strong>{plan}</strong>
          </p>
        </motion.div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama lengkap Anda"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="62xxx"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Deskripsi Project</h3>
              
              <div className="space-y-2">
                <Label htmlFor="projectDescription">
                  Ceritakan tentang website yang Anda inginkan *
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Contoh: Saya butuh website company profile dengan 5 halaman termasuk Home, About, Services, Portfolio, dan Contact. Warna brand biru dan orange. Butuh integrasi WhatsApp dan form kontak..."
                  rows={6}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Memproses..." : "Lanjut ke Pembayaran"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProjectSubmission;