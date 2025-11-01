import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">Web</span>
              <span className="text-primary">Craft</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Jasa pembuatan website profesional untuk mengembangkan bisnis Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Website Custom</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+62 812-3456-7890</li>
              <li>info@webcraftstudio.id</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WebCraft Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
