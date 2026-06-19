import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import headIcon from '../assets/head icon.png';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Safety', href: '#safety' },
    { name: 'Workforce', href: '#workforce' },
    { name: 'Contact', href: '#contact' },
  ];

  // Robust offset-based detection of the active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check if we are at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPos = window.scrollY + 150; // 150px offset for the fixed header
      let currentSection = 'home';

      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scrolling while the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const id = href.substring(1);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'glassmorphism shadow-lg py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 text-ind-orange-500 font-display font-bold text-lg sm:text-xl tracking-wider select-none"
            >
              <img
                src={headIcon}
                alt="Pal Engineering Works Logo"
                className="w-10 h-10 object-contain rounded-lg border border-ind-orange-500/30 bg-white/5 p-1 animate-pulse-slow"
              />
              <div className="flex flex-col">
                <span className="text-ind-orange-500 font-mono text-sm leading-none tracking-widest font-black uppercase">
                  PAL
                </span>
                <span className="text-white dark:text-white light:text-ind-blue-900 text-[10px] font-sans tracking-wide leading-none mt-1 opacity-90">
                  Engineering Works
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-ind-orange-500 ${isActive
                      ? 'text-ind-orange-500 font-semibold scale-105'
                      : 'text-ind-gray-300 dark:text-ind-gray-300 light:text-ind-blue-900'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-ind-orange-500 rounded" />
                    )}
                  </a>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-lg text-ind-orange-500 hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>

              {/* Quick Inquiry CTA */}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="px-5 py-2.5 rounded-lg font-display text-sm font-bold uppercase tracking-wider text-white bg-ind-orange-600 hover:bg-ind-orange-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-ind-orange-700/25"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile menu controls */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Theme Toggle Mobile */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-lg text-ind-orange-500 hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <FaSun className="w-4.5 h-4.5" /> : <FaMoon className="w-4.5 h-4.5" />}
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-ind-orange-500 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Blur & Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[320px] h-screen bg-ind-blue-950/98 dark:bg-ind-blue-950/98 light:bg-white border-l border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 dark:border-white/5 light:border-black/5">
          <div className="flex items-center space-x-3 text-ind-orange-500 font-display font-bold text-lg tracking-wider">
            <img
              src={headIcon}
              alt="Pal Engineering Works Logo"
              className="w-8 h-8 object-contain rounded-lg border border-ind-orange-500/30 bg-white/5 p-1"
            />
            <div className="flex flex-col">
              <span className="text-ind-orange-500 font-mono text-xs leading-none tracking-widest font-black uppercase">
                PAL
              </span>
              <span className="text-white dark:text-white light:text-ind-blue-900 text-[9px] font-sans tracking-wide leading-none mt-1 opacity-90">
                Engineering Works
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-ind-orange-500 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-colors"
            aria-label="Close mobile menu"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`w-full text-left py-3 px-4 text-base font-display uppercase tracking-wider font-semibold rounded-lg transition-all duration-300 ${isActive
                  ? 'bg-ind-orange-600/20 text-ind-orange-500 border-l-4 border-ind-orange-500 pl-3 font-bold'
                  : 'text-ind-gray-300 dark:text-ind-gray-300 light:text-ind-blue-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 hover:text-ind-orange-500'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Drawer Bottom Action */}
        <div className="p-6 border-t border-white/5 dark:border-white/5 light:border-black/5 bg-white/[0.02] dark:bg-white/[0.02] light:bg-black/[0.02]">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="w-full inline-flex items-center justify-center py-3.5 bg-ind-orange-600 hover:bg-ind-orange-500 text-white font-display uppercase tracking-widest font-extrabold rounded-lg shadow-lg hover:shadow-ind-orange-500/20 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
