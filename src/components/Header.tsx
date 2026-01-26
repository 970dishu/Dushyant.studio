import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-lg font-heading font-bold text-foreground tracking-tight"
          >
            dushyant
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-body font-medium bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <ul className="flex flex-col p-6 gap-4">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;