import { useState, useEffect } from 'react';
import { FaWhatsapp, FaChevronUp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function FloatingWidgets() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll Progress Bar at the top of the viewport */}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      {/* Floating Widget Column */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
        {/* Contact Menu Expansion */}
        <div className="relative">
          {showContactMenu && (
            <div className="absolute bottom-14 right-0 flex flex-col space-y-2 bg-ind-blue-900 border border-white/10 p-2 rounded-lg shadow-2xl animate-float">
              <a
                href="tel:+916388688948"
                className="flex items-center space-x-2 px-3 py-2 rounded bg-ind-blue-800 text-white hover:bg-ind-orange-500 transition-colors"
                title="Call Us"
              >
                <FaPhoneAlt className="w-4 h-4 text-ind-orange-500 hover:text-white" />
                <span className="text-xs font-mono">+916388688948</span>
              </a>
              <a
                href="mailto:pal.engineering.works91@gmail.com"
                className="flex items-center space-x-2 px-3 py-2 rounded bg-ind-blue-800 text-white hover:bg-ind-orange-500 transition-colors"
                title="Email Us"
              >
                <FaEnvelope className="w-4 h-4 text-ind-orange-500 hover:text-white" />
                <span className="text-xs font-mono">pal.engineering.works91@gmail.com</span>
              </a>
            </div>
          )}

          {/* Quick Contact Toggle */}
          <button
            onClick={() => setShowContactMenu(!showContactMenu)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-ind-orange-600 text-white shadow-xl hover:bg-ind-orange-500 transition-all duration-300 hover:scale-110"
            title="Get in touch"
          >
            <FaPhoneAlt className="w-5 h-5 animate-pulse" />
          </button>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/916388688948?text=Hello%20Pal%20Engineering%20Works,%20I'm%20interested%20in%20your%20industrial%20contracting%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white shadow-xl hover:bg-green-400 transition-all duration-300 hover:scale-110 border border-green-600/30"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-ind-blue-900 border border-white/10 text-ind-orange-500 shadow-xl hover:bg-ind-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
            title="Scroll to Top"
          >
            <FaChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}
