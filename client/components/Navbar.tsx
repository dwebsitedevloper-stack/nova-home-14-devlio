import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "Programs", href: "#programs", id: "programs" },
    { name: "Trainers", href: "#trainers", id: "trainers" },
    { name: "Membership", href: "#membership", id: "membership" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (isHome && link.id !== "home") {
      e.preventDefault();
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else if (link.id === "home") {
      setIsOpen(false);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "X" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-forest-green/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-forest-green rounded-lg group-hover:bg-forest-green/90 transition-colors">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-forest-green hidden sm:block">
              NatureGym
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-foreground hover:text-forest-green transition-colors font-medium text-sm cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-foreground hover:text-forest-green transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-soft-beige rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-forest-green" />
            ) : (
              <Menu className="w-6 h-6 text-forest-green" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-forest-green/10">
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-4 py-2 text-foreground hover:bg-soft-beige rounded-lg transition-colors font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 px-4 py-4 border-t border-forest-green/10 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-foreground hover:text-forest-green transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
