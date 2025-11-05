import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">Gorontalo</span>
              <span className="text-primary">Web</span>
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
              <li>+62 822 9031 6560</li>
              <li>izharkadirsaputra@gmail.com</li>
              <li>Jl Arief rachman hakim, Dulalowo Tim., Kec. Kota Tengah, Kota Gorontalo, Gorontalo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GorontaloWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
