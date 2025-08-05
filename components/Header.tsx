import { Button } from "./ui/button";
import { Menu, X, Figma } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Ana Sayfa', href: 'hero' },
    { name: 'Hakkımda', href: 'about' },
    { name: 'Projeler', href: 'projects' },
    { name: 'İletişim', href: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-semibold">MC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-card border-2 border-background rounded-full flex items-center justify-center">
                <Figma className="w-2 h-2 text-primary" />
              </div>
            </div>
            <div className="ml-3 hidden sm:block">
              <span className="text-foreground font-semibold">Mustafa Coşgun</span>
              <div className="text-xs text-muted-foreground">UI/UX Designer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-border flex items-center gap-3">
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="gradient-primary hover:opacity-90 text-primary-foreground"
              >
                İşbirliği Yap
              </Button>
            </div>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-lg flex items-center justify-center transition-colors"
            >
              {isMenuOpen ? 
                <X className="w-5 h-5 text-foreground" /> : 
                <Menu className="w-5 h-5 text-foreground" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full gradient-primary hover:opacity-90 text-primary-foreground"
                >
                  İşbirliği Yap
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}