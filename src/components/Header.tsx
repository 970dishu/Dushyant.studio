import { useState } from "react";
import { Menu, X } from "lucide-react";
import dushyantPortrait from "@/assets/dushyant-portrait.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Projects" },
    { href: "#testimonials", label: "Blogs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6">
      <div className="flex justify-center px-4">
        {/* Desktop Pill Navigation */}
        <nav className="hidden md:flex items-center gap-2 bg-secondary/80 backdrop-blur-md rounded-full px-2 py-2">
          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
            <img 
              src={dushyantPortrait} 
              alt="Dushyant" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-1 px-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium bg-white text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
            <img 
              src={dushyantPortrait} 
              alt="Dushyant" 
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground bg-secondary/80 backdrop-blur-md rounded-full"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-4 bg-secondary/95 backdrop-blur-md rounded-2xl">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-medium bg-white text-background rounded-full"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
