import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Shield, 
  CreditCard, 
  Clock, 
  RefreshCw, 
  Code, 
  Server, 
  MessageCircle,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Zap,
  Banknote,
  Smartphone,
  Landmark,
  QrCode
} from "lucide-react";

// Data fee dari Midtrans (termasuk QRIS)
const midtransFees = {
  bankTransfer: {
    bca: 4000,
    bni: 4000,
    bri: 4000,
    mandiri: 4000,
    permata: 4000,
    other: 4500
  },
  eWallet: {
    gopay: 2000,
    ovo: 2000,
    dana: 2000,
    shopeepay: 2000,
    linkaja: 2000
  },
  virtualAccount: {
    bca: 4000,
    bni: 4000,
    bri: 4000,
    mandiri: 4000,
    permata: 4000,
    cimb: 4000
  },
  creditCard: {
    visa: 1.8,
    mastercard: 1.8,
    jcb: 2.2,
    amex: 2.5
  },
  qris: {
    standard: 0.7, // 0.7% untuk QRIS
    premium: 0.7
  },
  convenienceStore: {
    indomaret: 5000,
    alfamart: 5000
  }
};

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Penerimaan Syarat dan Ketentuan",
      content: "Dengan menggunakan layanan WebCraft Studio dan melakukan pembayaran melalui sistem kami, Anda secara otomatis menyetujui semua syarat dan ketentuan yang tercantum di halaman ini. Transaksi yang dilakukan mengikat secara hukum."
    },
    {
      icon: CreditCard,
      title: "2. Sistem Pembayaran Midtrans",
      content: "Kami menggunakan Midtrans sebagai payment gateway resmi. Semua transaksi diproses melalui sistem terenkripsi PCI DSS compliant. Pembayaran dapat dilakukan melalui berbagai channel termasuk QRIS dengan biaya administrasi sesuai ketentuan Midtrans."
    },
    {
      icon: Shield,
      title: "3. Keamanan Transaksi",
      content: "Midtrans menggunakan enkripsi SSL 128-bit dan sistem 3D Secure untuk transaksi kartu kredit. Data sensitif seperti informasi kartu kredit tidak disimpan di server kami. Semua transaksi tunduk pada verifikasi dan validasi oleh sistem Midtrans."
    },
    {
      icon: Clock,
      title: "4. Konfirmasi dan Status Pembayaran",
      content: "Setelah pembayaran berhasil, Anda akan menerima email konfirmasi otomatis dari Midtrans. Status project akan berubah menjadi 'Paid' dan pengerjaan dimulai dalam 1x24 jam. Pembayaran via QRIS biasanya diproses secara instan (1-2 menit)."
    },
    {
      icon: AlertCircle,
      title: "5. Kebijakan Pembatalan dan Refund",
      content: "Pembayaran yang sudah diproses tidak dapat dibatalkan secara sepihak. Refund hanya dapat dilakukan melalui permintaan tertulis dan dikenakan biaya administrasi 10%. Proses refund memerlukan waktu 7-14 hari kerja tergantung metode pembayaran."
    },
    {
      icon: RefreshCw,
      title: "6. Kebijakan Revisi",
      content: "Basic: 1x revisi gratis • Standard: 2x revisi gratis • Professional: Revisi unlimited (minor) • E-Commerce: Revisi unlimited. Revisi major atau perubahan design dikenakan biaya tambahan. Revisi harus diajukan maksimal 14 hari setelah preview dikirim."
    },
    {
      icon: Zap,
      title: "7. Timeline Pengerjaan",
      content: "Estimasi pengerjaan: Basic 3-5 hari • Standard 7-10 hari • Professional 10-14 hari • E-Commerce 14-21 hari. Timeline mulai berjalan setelah pembayaran dikonfirmasi oleh Midtrans. Keterlambatan dari klien dalam memberikan konten dapat mempengaruhi timeline."
    },
    {
      icon: Code,
      title: "8. Kepemilikan dan Hak Cipta",
      content: "Setelah pembayaran lunas, hak penggunaan website sepenuhnya menjadi milik klien. Kami berhak menampilkan project dalam portfolio. Source code framework dan library proprietary tetap menjadi hak milik developer."
    },
    {
      icon: Server,
      title: "9. Hosting dan Domain",
      content: "Paket Standard ke atas termasuk domain .my.id dan hosting 1 tahun. Setelah tahun pertama, renewall menjadi tanggung jawab klien. Migrasi hosting dapat dilakukan dengan biaya tambahan. Uptime server dijamin 99.9%."
    },
    {
      icon: MessageCircle,
      title: "10. Support dan Maintenance",
      content: "Support termasuk dalam setiap paket: Basic 1 minggu • Standard 1 bulan • Professional 3 bulan • E-Commerce 6 bulan. Support mencakup bantuan teknis dan bug fixing. Penambahan fitur baru dikenakan biaya tambahan berdasarkan kompleksitas."
    },
    {
      icon: HelpCircle,
      title: "11. Penyelesaian Masalah Teknis",
      content: "Untuk masalah teknis setelah delivery, silakan buka tiket support melalui dashboard customer. Response time: 2-8 jam pada hari kerja. Emergency support tersedia untuk paket Professional dan E-Commerce dengan response time 1-2 jam."
    },
    {
      icon: CheckCircle,
      title: "12. Garansi Layanan",
      content: "Kami memberikan garansi 30 hari untuk perbaikan bug critical. Garansi tidak mencakup masalah yang disebabkan oleh modifikasi pihak ketiga, human error, atau force majeure. Klaim garansi harus disertai bukti dan deskripsi masalah yang jelas."
    }
  ];

  const PaymentMethodCard = ({ icon: Icon, title, fees, items, note }) => (
    <div className="p-4 bg-secondary/30 rounded-lg border border-border">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{fees}</p>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{item.name}</span>
            <span className="font-medium text-foreground">{item.fee}</span>
          </div>
        ))}
      </div>
      {note && (
        <div className="mt-3 p-2 bg-blue-500/10 rounded">
          <p className="text-xs text-blue-600">{note}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Ketentuan penggunaan layanan dan sistem pembayaran WebCraft Studio
            </p>
            <div className="bg-card border border-border rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Penting:</strong> Dengan melakukan pembayaran melalui sistem Midtrans, Anda menyetujui semua syarat dan ketentuan di bawah ini. Mohon baca dengan seksama sebelum melanjutkan transaksi.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Payment Info Card */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Biaya Transaksi Midtrans
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Biaya administrasi sesuai ketentuan Midtrans
                </p>
                
                <div className="space-y-4">
                  {/* QRIS - Ditambahkan di paling atas karena populer */}
                  <PaymentMethodCard
                    icon={QrCode}
                    title="QRIS"
                    fees="Biaya: 0.7%"
                    items={[
                      { name: "Semua Bank & E-Wallet", fee: "0.7%" },
                      { name: "Gopay, OVO, Dana, dll", fee: "0.7%" },
                      { name: "Mobile Banking", fee: "0.7%" }
                    ]}
                    note="Dapat digunakan oleh semua aplikasi pembayaran Indonesia"
                  />

                  <PaymentMethodCard
                    icon={Landmark}
                    title="Transfer Bank"
                    fees="Biaya: Rp 4.000 - 4.500"
                    items={[
                      { name: "BCA", fee: "Rp 4.000" },
                      { name: "BNI", fee: "Rp 4.000" },
                      { name: "BRI", fee: "Rp 4.000" },
                      { name: "Mandiri", fee: "Rp 4.000" },
                      { name: "Bank Lain", fee: "Rp 4.500" }
                    ]}
                  />

                  <PaymentMethodCard
                    icon={Smartphone}
                    title="E-Wallet"
                    fees="Biaya: Rp 2.000"
                    items={[
                      { name: "Gopay", fee: "Rp 2.000" },
                      { name: "OVO", fee: "Rp 2.000" },
                      { name: "Dana", fee: "Rp 2.000" },
                      { name: "ShopeePay", fee: "Rp 2.000" }
                    ]}
                  />

                  <PaymentMethodCard
                    icon={Banknote}
                    title="Virtual Account"
                    fees="Biaya: Rp 4.000"
                    items={[
                      { name: "BCA VA", fee: "Rp 4.000" },
                      { name: "BNI VA", fee: "Rp 4.000" },
                      { name: "BRI VA", fee: "Rp 4.000" },
                      { name: "Mandiri VA", fee: "Rp 4.000" }
                    ]}
                  />

                  <PaymentMethodCard
                    icon={CreditCard}
                    title="Kartu Kredit"
                    fees="Biaya: 1.8% - 2.5%"
                    items={[
                      { name: "Visa/Mastercard", fee: "1.8%" },
                      { name: "JCB", fee: "2.2%" },
                      { name: "American Express", fee: "2.5%" }
                    ]}
                  />
                </div>

                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-xs text-green-600">
                    <strong>Note:</strong> Semua biaya sudah termasuk dalam total yang ditampilkan saat checkout
                  </p>
                </div>
              </Card>

              {/* QRIS Info Card */}
              <Card className="p-6 bg-card border-border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-blue-600" />
                  Cara Bayar dengan QRIS
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <span className="text-muted-foreground">Pilih QRIS di halaman checkout</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <span className="text-muted-foreground">Scan QR code dengan aplikasi pembayaran</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                    <span className="text-muted-foreground">Konfirmasi pembayaran di aplikasi</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-blue-600">4</span>
                    </div>
                    <span className="text-muted-foreground">Pembayaran selesai secara instan</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-500/10 rounded">
                  <p className="text-xs text-blue-600">
                    <strong>Kompatible dengan:</strong> Gopay, OVO, Dana, LinkAja, Mobile Banking, dan semua aplikasi pembayaran QRIS
                  </p>
                </div>
              </Card>

              {/* Support Card */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Butuh Bantuan?
                </h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:support@webcraftstudio.id" 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm">Email Support</span>
                  </a>
                  <a 
                    href="https://wa.me/6281234567890" 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                  <p className="text-xs text-blue-600">
                    Untuk masalah pembayaran, hubungi Midtrans: 1500-366
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Siap Memulai Project Anda?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Pilih paket yang sesuai dengan kebutuhan bisnis Anda dan lakukan pembayaran dengan aman melalui Midtrans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/pricing" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  Lihat Paket & Harga
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Konsultasi Gratis
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p>Dokumen ini terakhir diperbarui pada {new Date().toLocaleDateString("id-ID", { 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}</p>
            <p className="mt-2">WebCraft Studio • Payment powered by Midtrans</p>
           
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;