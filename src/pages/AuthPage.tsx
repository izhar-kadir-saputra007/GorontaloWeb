import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Smartphone,
  Palette,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const AuthPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log("Login attempt:", loginData);
      setIsLoading(false);
    }, 2000);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log("Register attempt:", registerData);
      setIsLoading(false);
    }, 2000);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const features = [
    "Akses ke semua template",
    "Support 24/7",
    "Update gratis",
    "Backup otomatis"
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6"
          >
            <Palette className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Mulai Perjalanan
            <span className="block bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] text-transparent bg-clip-text">
              Digital Anda
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Bergabung dengan ribuan klien yang telah mempercayai layanan website profesional kami.
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center text-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Project Selesai</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl shadow-2xl p-8"
        >
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="w-full">
            {/* Tab Headers */}
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-2xl">
              <TabsTrigger 
                value="login" 
                className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
              >
                Masuk
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
              >
                Daftar
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-6 mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">
                      Selamat Datang Kembali
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Masuk ke akun Anda untuk melanjutkan
                    </p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-5">
                    {/* Email Input */}
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-sm font-medium">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="login-email"
                          name="email"
                          type="email"
                          placeholder="email@example.com"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          required
                          className="pl-10 pr-4 py-6 bg-background/50 border-border focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="login-password" className="text-sm font-medium">
                          Password
                        </Label>
                        <button
                          type="button"
                          className="text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                          Lupa password?
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="login-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Masukkan password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required
                          className="pl-10 pr-12 py-6 bg-background/50 border-border focus:border-primary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                          Ingat saya
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90 transition-opacity py-6 text-lg font-medium group"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Memproses...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Masuk
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Social Login */}
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-card px-2 text-muted-foreground">Atau lanjutkan dengan</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <Button
                        variant="outline"
                        className="py-5 border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Smartphone className="w-5 h-5 mr-2" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="py-5 border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Smartphone className="w-5 h-5 mr-2" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register" className="space-y-6 mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key="register"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3"
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Buat Akun Baru
                    </h2>
                   
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-5">
                    {/* Full Name Input */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Nama Lengkap
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Nama lengkap Anda"
                          value={registerData.fullName}
                          onChange={handleRegisterChange}
                          required
                          className="pl-10 pr-4 py-6 bg-background/50 border-border focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-sm font-medium">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="register-email"
                          name="email"
                          type="email"
                          placeholder="email@example.com"
                          value={registerData.email}
                          onChange={handleRegisterChange}
                          required
                          className="pl-10 pr-4 py-6 bg-background/50 border-border focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-sm font-medium">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="register-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Buat password yang kuat"
                          value={registerData.password}
                          onChange={handleRegisterChange}
                          required
                          className="pl-10 pr-12 py-6 bg-background/50 border-border focus:border-primary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium">
                        Konfirmasi Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Konfirmasi password Anda"
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                          className="pl-10 pr-12 py-6 bg-background/50 border-border focus:border-primary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreeTerms}
                        onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                        Saya setuju dengan{" "}
                         <button 
        type="button"
        className="text-primary hover:underline font-medium transition-colors"
        onClick={() => navigate('/terms')}
      >
        Syarat & Ketentuan
      </button>
      {" "}dan{" "}
      <button 
        type="button"
        className="text-primary hover:underline font-medium transition-colors"
        onClick={() => navigate('/terms')}
      >
        Kebijakan Privasi
      </button>
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading || !agreeTerms}
                      className="w-full bg-gradient-to-r from-primary to-[hsl(338,100%,50%)] hover:opacity-90 transition-opacity py-6 text-lg font-medium group"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Membuat Akun...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Daftar Sekarang
                          <Sparkles className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;