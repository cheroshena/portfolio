import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";


const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header className={`${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} fixed top-0 left-0 transition-all duration-50 right-0 z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-light hover:text-primary">
          CHERA <span>.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glow-border rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface" href={link.href} key={index}>{link.label}</a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                href={link.href}
                key={index}
                onClick={()=>setMobileMenuOpen(false)}
                >{link.label}
                
              </a>
            ))}
            <Button size="sm">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  )
}