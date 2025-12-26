const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a 
            href="#" 
            className="text-xl font-heading font-bold text-foreground hover:text-primary transition-colors duration-300"
          >
            .motion
          </a>
          
          <p className="text-sm text-muted-foreground font-body">
            © {currentYear} All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Work
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
