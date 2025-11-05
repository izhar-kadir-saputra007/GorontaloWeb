import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CreditCard,
  QrCode,
  Landmark,
  Smartphone,
  CheckCircle,
  ArrowLeft,
  Shield,
  User,
  Mail,
  Phone,
  Package,
  Calendar,
  MessageCircle,
  AlertTriangle,
  Star,
  Clock,
  ShieldCheck,
  FileText,
} from "lucide-react";

// Data metode pembayaran dengan fee
const paymentMethods = [
  {
    id: "qris",
    name: "QRIS",
    icon: QrCode,
    description: "Bayar dengan scan QR",
    feeRate: 0.007, // 0.7%
    note: "Support semua e-wallet & mobile banking",
  },
  {
    id: "bank_transfer",
    name: "Transfer Bank",
    icon: Landmark,
    description: "Transfer antar bank",
    feeRate: 4000, // Flat fee
    note: "BCA, BNI, BRI, Mandiri",
  },
  {
    id: "ewallet",
    name: "E-Wallet",
    icon: Smartphone,
    description: "Gopay, OVO, Dana",
    feeRate: 2000, // Flat fee
    note: "Pembayaran instan",
  },
  {
    id: "credit_card",
    name: "Kartu Kredit",
    icon: CreditCard,
    description: "Visa, Mastercard",
    feeRate: 0.018, // 1.8%
    note: "3D Secure protection",
  },
];

// Data timeline berdasarkan paket
const packageTimelines = {
  Basic: "3-5 hari",
  Standard: "7-10 hari",
  Professional: "10-14 hari",
  "E-Commerce": "14-21 hari",
};

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("qris");
  const [projectData, setProjectData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    const storedProjectData = localStorage.getItem("projectData");
    if (storedProjectData) {
      setProjectData(JSON.parse(storedProjectData));
    } else {
      navigate("/pricing");
    }
  }, [navigate]);

  // Calculate payment details
  const calculatePayment = () => {
    if (!projectData) return null;

    const subtotal = projectData.planPrice;
    const downPayment = Math.floor(subtotal * 0.5); // 50% DP

    // Calculate fee based on selected method
    const method = paymentMethods.find((m) => m.id === selectedMethod);
    let fee = 0;

    if (method) {
      if (method.feeRate < 1) {
        // Percentage fee
        fee = Math.floor(downPayment * method.feeRate);
      } else {
        // Flat fee
        fee = method.feeRate;
      }
    }

    const total = downPayment + fee;

    return {
      subtotal,
      downPayment,
      fee,
      total,
      remaining: subtotal - downPayment,
    };
  };

  const handleConsultation = () => {
    const message = `Halo GorontaloWeb! Saya tertarik dengan paket ${projectData.selectedPlan} dan ingin konsultasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6282290316560?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePaymentConfirmation = () => {
    if (!agreeToTerms) {
      alert("Harap setujui Syarat & Ketentuan sebelum melanjutkan pembayaran.");
      return;
    }
    setShowConfirmation(true);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    setShowConfirmation(false);

    try {
      // Simpan data pembayaran
      const paymentData = {
        projectData,
        paymentSummary: calculatePayment(),
        paymentMethod: selectedMethod,
        status: "pending",
        paymentDate: new Date().toISOString(),
        orderId: `GW-${Date.now().toString().slice(-6)}`, // GW untuk GorontaloWeb
        agreedToTerms: agreeToTerms,
      };

      localStorage.setItem("paymentData", JSON.stringify(paymentData));

      // Simulasi proses pembayaran
      setTimeout(() => {
        navigate("/payment/success");
      }, 2000);
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Memuat data...</h2>
        </div>
      </div>
    );
  }

  const paymentSummary = calculatePayment();
  const timeline = packageTimelines[projectData.selectedPlan] || "7-10 hari";

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            Pembayaran <span className="text-primary">Down Payment</span>
          </h1>
          <p className="text-muted-foreground">
            Bayar 50% untuk memulai pengerjaan project
          </p>
        </motion.div>

        {/* Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6 bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Masih Ragu atau Butuh Konsultasi?
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Konsultasi gratis via WhatsApp dengan tim GorontaloWeb
                  </p>
                </div>
              </div>
              <Button
                onClick={handleConsultation}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Konsultasi Sekarang
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Data Diri & Layanan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Data Diri */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Data Diri
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{projectData.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Nama Lengkap
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{projectData.email}</p>
                    <p className="text-xs text-muted-foreground">Email</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{projectData.phone}</p>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Detail Layanan */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Detail Layanan
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    {projectData.selectedPlan}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Paket {projectData.selectedPlan} - Pembayaran one-time
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Estimasi Pengerjaan:
                    </span>
                    <span className="font-semibold text-primary">
                      {timeline}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Harga Paket:
                    </span>
                    <span className="font-semibold">
                      Rp {paymentSummary.subtotal.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold mb-2">
                      Deskripsi Project:
                    </p>
                    <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                      {projectData.projectDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Metode Pembayaran</h3>

              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const IconComponent = method.icon;
                  const fee =
                    method.feeRate < 1
                      ? `${(method.feeRate * 100).toFixed(1)}%`
                      : `Rp ${method.feeRate.toLocaleString("id-ID")}`;

                  return (
                    <div
                      key={method.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            selectedMethod === method.id
                              ? "bg-primary/20"
                              : "bg-muted"
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 ${
                              selectedMethod === method.id
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold">{method.name}</h4>
                            <span className="text-sm text-muted-foreground">
                              fee: {fee}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      {selectedMethod === method.id && (
                        <div className="mt-3 p-2 bg-blue-500/10 rounded">
                          <p className="text-xs text-blue-600">{method.note}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
            {/* Security Info */}
            // Security Info dengan penekanan pada Midtrans
            <Card className="p-6 bg-green-500/5 border-green-500/20">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-green-600">
                      Pembayaran Aman
                    </h4>
                   
                  </div>
                  <p className="text-sm text-green-600/80">
                    Transaksi diproses oleh <strong>Midtrans</strong> - Payment
                    gateway terpercaya 
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">
                Ringkasan Pembayaran
              </h3>

              <div className="space-y-4">
                {/* Payment Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span>
                      Rp {paymentSummary.subtotal.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Down Payment (50%):</span>
                    <span>
                      Rp {paymentSummary.downPayment.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Biaya Admin:</span>
                    <span>Rp {paymentSummary.fee.toLocaleString("id-ID")}</span>
                  </div>

                  <div className="flex justify-between font-semibold border-t pt-3">
                    <span>Total Bayar:</span>
                    <span className="text-primary text-lg">
                      Rp {paymentSummary.total.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="text-xs text-muted-foreground text-center bg-secondary/30 p-2 rounded">
                    *Sisa Rp {paymentSummary.remaining.toLocaleString("id-ID")}{" "}
                    dibayar setelah project selesai
                  </div>
                </div>

                {/* Timeline Info */}
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-blue-600">
                      Timeline Project
                    </span>
                  </div>
                  <p className="text-sm text-blue-600/80">
                    Pengerjaan dimulai dalam <strong>1x24 jam</strong> setelah
                    pembayaran
                  </p>
                  <p className="text-sm text-blue-600/80 mt-1">
                    Estimasi selesai: <strong>{timeline}</strong>
                  </p>
                </div>

                {/* Agreement Checkbox */}
                <Card className="p-4 bg-secondary/20 border-border">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={agreeToTerms}
                      onCheckedChange={() => setAgreeToTerms(!agreeToTerms)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-tight cursor-pointer flex-1"
                    >
                      Saya setuju dengan{" "}
                      <NavLink
                        to="/terms"
                        className="text-primary hover:underline font-medium"
                        target="_blank"
                      >
                        Syarat & Ketentuan
                      </NavLink>{" "}
                      yang berlaku termasuk kebijakan pembayaran 50% DP dan
                      kebijakan privasi GorontaloWeb
                    </label>
                  </div>
                </Card>

                {/* Pay Button */}
                <Button
                  onClick={handlePaymentConfirmation}
                  disabled={isProcessing || !agreeToTerms}
                  className="w-full mt-4"
                  size="lg"
                >
                  {isProcessing ? (
                    "Memproses Pembayaran..."
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {agreeToTerms
                        ? "Bayar Sekarang"
                        : "Setujui Syarat & Ketentuan"}
                    </>
                  )}
                </Button>

                {!agreeToTerms && (
                  <p className="text-xs text-amber-600 text-center mt-2">
                    Harap setujui Syarat & Ketentuan sebelum melanjutkan
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background p-6 rounded-lg max-w-md w-full"
          >
            <div className="text-center mb-4">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Konfirmasi Pembayaran
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Anda akan melakukan pembayaran sebesar{" "}
                <strong>
                  Rp {paymentSummary.total.toLocaleString("id-ID")}
                </strong>
                untuk paket <strong>{projectData.selectedPlan}</strong> di
                GorontaloWeb
              </p>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span>Metode Pembayaran:</span>
                <span className="font-medium capitalize">
                  {selectedMethod.replace("_", " ")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Down Payment:</span>
                <span className="font-medium">
                  Rp {paymentSummary.downPayment.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Admin:</span>
                <span className="font-medium">
                  Rp {paymentSummary.fee.toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                className="flex-1"
              >
                Batal
              </Button>
              <Button onClick={handlePayment} className="flex-1">
                <CheckCircle className="w-4 h-4 mr-2" />
                Ya, Lanjutkan
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PaymentPage;
