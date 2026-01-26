const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a 
            href="#" 
            className="text-lg font-heading font-bold text-foreground"
          >
            dushyant
          </a>
          
          <p className="text-sm text-muted-foreground font-body">
            © {currentYear} Dushyant Dubey. All rights reserved.
          </p>

          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;