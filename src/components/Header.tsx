import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import dushyantPortrait from "@/assets/dushyant-portrait.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? "#" : "/", label: "Home", isAnchor: !isHomePage ? false : true },
    { href: isHomePage ? "#about" : "/#about", label: "About", isAnchor: isHomePage },
    { href: isHomePage ? "#work" : "/#work", label: "Projects", isAnchor: isHomePage },
    { href: isHomePage ? "#testimonials" : "/#testimonials", label: "Clients", isAnchor: isHomePage },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6">
      <div className="flex justify-center px-4">
        {/* Desktop Navigation - Full nav or "Available for work" based on scroll */}
        <nav className="hidden lg:flex items-center gap-3 bg-secondary/80 backdrop-blur-md rounded-full px-3 py-3 transition-all duration-500">
          {/* Profile Picture */}
          <div className="w-12 h-10 rounded-full overflow-hidden border-2 border-primary/30">
            <img 
              src={dushyantPortrait} 
              alt="Dushyant" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nav Links - Hidden when scrolled */}
          <div className={`flex items-center gap-2 px-2 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-w-0 opacity-0 px-0' : 'max-w-[600px] opacity-100'}`}>
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-5 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* "Available for work" text - Shown when scrolled */}
          <div className={`flex items-center gap-2 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-w-[200px] opacity-100 pr-2' : 'max-w-0 opacity-0'}`}>
            <span className="text-base font-medium text-foreground whitespace-nowrap">Available for work</span>
            <span className="w-2.5 h-2.5 bg-primary rounded-full flex-shrink-0 animate-pulse"></span>
          </div>

          {/* Contact Button - Hidden when scrolled */}
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            className={`inline-flex items-center justify-center px-7 py-2.5 text-base font-medium bg-white text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 whitespace-nowrap ${isScrolled ? 'max-w-0 opacity-0 px-0 overflow-hidden' : 'max-w-[200px] opacity-100'}`}
          >
            Contact
          </a>
        </nav>

        {/* Tablet/Mobile Navigation - "Available for work" pill */}
        <div className="lg:hidden flex items-center justify-center">
          <div className="flex items-center gap-3 bg-secondary/80 backdrop-blur-md rounded-full px-3 py-3">
            {/* Profile Picture */}
            <div className="w-12 h-10 rounded-full overflow-hidden border-2 border-primary/30">
              <img 
                src={dushyantPortrait} 
                alt="Dushyant" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Available for work text with green dot */}
            <div className="flex items-center gap-2 pr-2">
              <span className="text-base font-medium text-foreground">Available for work</span>
              <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground rounded-full"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 mx-4 bg-secondary/95 backdrop-blur-md rounded-2xl">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <a
              href={isHomePage ? "#contact" : "/#contact"}
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
