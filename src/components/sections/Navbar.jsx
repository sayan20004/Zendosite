import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'Why Us', href: '#why-choose', isExternal: false },
    { name: 'About', href: '/about', isExternal: false },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-6 py-3 sm:py-4 ${
        scrolled ? 'mt-2' : 'mt-0'
      }`}
    >
      <div 
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-brand-white/80 backdrop-blur-md shadow-lg border border-brand-black/5' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <div className="w-10 h-10 bg-brand-black rounded-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-brand-white font-black text-xl">Z</span>
          </div>
          <span className="font-black text-2xl tracking-tighter hidden sm:block">Zendo.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-sm uppercase tracking-widest hover:text-brand-orange-red transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="font-bold text-sm uppercase tracking-widest hover:text-brand-orange-red transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button className="px-6 py-2 text-base">
            Contact
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 hover:bg-brand-black/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-6 right-6 mt-2 bg-brand-white rounded-3xl p-6 shadow-2xl border border-brand-black/5 transition-all duration-300 origin-top md:hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="font-black text-3xl tracking-tighter hover:translate-x-2 transition-transform"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className="font-black text-3xl tracking-tighter hover:translate-x-2 transition-transform"
              >
                {link.name}
              </Link>
            )
          ))}
          <hr className="border-brand-black/5" />
          <Button 
            className="w-full justify-between"
            onClick={handleNavClick}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </nav>
  );
};
