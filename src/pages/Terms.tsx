import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      title: "1. Ketentuan Umum",
      content:
        "Dengan menggunakan layanan kami, Anda setuju untuk terikat dengan syarat dan ketentuan yang tercantum di halaman ini. Mohon baca dengan seksama sebelum memulai project.",
    },
    {
      title: "2. Layanan yang Disediakan",
      content:
        "WebCraft Studio menyediakan jasa pembuatan website, desain UI/UX, dan layanan terkait lainnya sesuai dengan paket yang dipilih. Spesifikasi layanan akan disepakati dalam kontrak terpisah.",
    },
    {
      title: "3. Pembayaran",
      content:
        "Pembayaran dilakukan dalam dua tahap: 50% di awal sebagai down payment dan 50% setelah project selesai. Semua harga dalam IDR (Rupiah Indonesia). Pembayaran harus dilakukan maksimal 7 hari kerja setelah invoice diterbitkan.",
    },
    {
      title: "4. Timeline Pengerjaan",
      content:
        "Estimasi waktu pengerjaan akan disesuaikan dengan kompleksitas project dan disepakati di awal. Keterlambatan dari pihak klien dalam memberikan konten atau feedback dapat mempengaruhi timeline pengerjaan.",
    },
    {
      title: "5. Revisi",
      content:
        "Jumlah revisi disesuaikan dengan paket yang dipilih. Revisi tambahan di luar paket akan dikenakan biaya tambahan. Revisi harus diajukan dalam waktu maksimal 14 hari setelah pengiriman preview.",
    },
    {
      title: "6. Hak Cipta dan Kepemilikan",
      content:
        "Setelah pembayaran lunas, klien memiliki hak penuh atas konten dan desain website. WebCraft Studio berhak menggunakan project sebagai portfolio. Source code tetap menjadi hak milik WebCraft Studio kecuali disepakati lain.",
    },
    {
      title: "7. Hosting dan Domain",
      content:
        "Hosting dan domain gratis berlaku untuk tahun pertama sesuai paket. Perpanjangan tahun berikutnya menjadi tanggung jawab klien dengan harga sesuai provider.",
    },
    {
      title: "8. Support dan Maintenance",
      content:
        "Support gratis diberikan sesuai durasi dalam paket. Setelah periode berakhir, klien dapat melanjutkan dengan paket maintenance berbayar. Support mencakup bug fixing, bukan penambahan fitur baru.",
    },
    {
      title: "9. Kebijakan Refund",
      content:
        "Refund hanya dapat dilakukan jika kami tidak dapat memenuhi kesepakatan yang telah dibuat. Down payment tidak dapat dikembalikan jika project dibatalkan oleh klien setelah pengerjaan dimulai.",
    },
    {
      title: "10. Pengembalian dan Pembatalan",
      content:
        "Pembatalan project harus diajukan secara tertulis. Pembatalan setelah desain disetujui akan dikenakan biaya 30% dari total project. Pembatalan setelah development dimulai tidak dapat dikembalikan.",
    },
    {
      title: "11. Tanggung Jawab Konten",
      content:
        "Klien bertanggung jawab penuh atas konten yang diberikan (teks, gambar, video). WebCraft Studio tidak bertanggung jawab atas pelanggaran hak cipta atau masalah hukum terkait konten klien.",
    },
    {
      title: "12. Keamanan",
      content:
        "Kami menerapkan standar keamanan terbaik dalam setiap project. Namun, keamanan website juga bergantung pada penggunaan dan maintenance setelah serah terima. Klien bertanggung jawab untuk menjaga kerahasiaan credentials.",
    },
    {
      title: "13. Perubahan Ketentuan",
      content:
        "WebCraft Studio berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui email atau website resmi kami.",
    },
    {
      title: "14. Penyelesaian Sengketa",
      content:
        "Setiap perselisihan akan diselesaikan secara kekeluargaan. Jika tidak tercapai kesepakatan, penyelesaian akan dilakukan sesuai hukum yang berlaku di Indonesia.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Syarat & <span className="text-primary">Ketentuan</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {sections.map((section, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-lg"
          >
            <p className="text-center text-muted-foreground">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami di{" "}
              <a href="mailto:info@webcraftstudio.id" className="text-primary hover:underline">
                info@webcraftstudio.id
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
