import { Github, Linkedin, Twitter, Heart, Mail, ArrowUp, Figma, Coffee } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", url: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "https://twitter.com" },
    { icon: <Figma className="w-5 h-5" />, name: "Dribbble", url: "https://dribbble.com" }
  ];

  const quickLinks = [
    { name: 'Hakkımda', href: 'about' },
    { name: 'Projeler', href: 'projects' },
    { name: 'İletişim', href: 'contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/30 border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 design-grid opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">MC</span>
              </div>
              <div className="ml-3">
                <h3 className="text-foreground">Mustafa Coşgun</h3>
                <p className="text-sm text-muted-foreground">UI/UX Designer & Developer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Kullanıcı deneyimi odaklı tasarımlar ve modern web teknolojileri ile 
              fikirlerinizi hayata geçiriyorum. Her proje için özel çözümler üretiyorum.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Yeni projeler için müsait
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:mustafa.cosgun@email.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-3 h-3" />
                  Email Gönder
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-foreground mb-6">Bağlantı</h4>
            <div className="space-y-4 mb-6">
              <div className="text-sm text-muted-foreground">
                <p>mustafa.cosgun@email.com</p>
                <p>+90 555 123 45 67</p>
                <p>İstanbul, Türkiye</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-muted border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-effect rounded-2xl p-8 mb-12 text-center border border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-6 h-6 text-primary" />
            <h3 className="text-xl">Kahve İçelim?</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Projeniz hakkında konuşmak için 30 dakikalık ücretsiz bir görüşme planlayalım
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="gradient-primary hover:opacity-90 text-primary-foreground"
          >
            <Mail className="w-4 h-4 mr-2" />
            Hemen İletişime Geç
          </Button>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Mustafa Coşgun. Tüm hakları saklıdır.</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>ile tasarlandı ve kodlandı.</span>
          </div>
          
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-border hover:bg-muted group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Yukarı Çık
          </Button>
        </div>
      </div>
    </footer>
  );
}