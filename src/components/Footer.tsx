import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import headIcon from '../assets/head icon.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Plant Erection', href: '#services' },
    { name: 'Plant Maintenance', href: '#services' },
    { name: 'Plant Shifting & Relocation', href: '#services' },
    { name: 'Shutdown Services', href: '#services' },
    { name: 'Manpower Supply', href: '#services' },
    { name: 'Project Support', href: '#services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Workforce', href: '#workforce' },
    { name: 'Safety', href: '#safety' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-ind-blue-950 text-white border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Column 1: Info & Brand */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <a href="#home" className="flex items-center space-x-3 text-ind-orange-500 font-display font-bold text-xl tracking-wider">
              <img
                src={headIcon}
                alt="Pal Engineering Works Logo"
                className="w-10 h-10 object-contain rounded-lg border border-ind-orange-500/30 bg-white/5 p-1"
              />
              <div className="flex flex-col">
                <span className="text-ind-orange-500 font-mono text-sm leading-none tracking-widest font-black">
                  PAL
                </span>
                <span className="text-white text-[10px] font-sans tracking-wide leading-none mt-1 opacity-90">
                  ENGINEERING WORKS
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-ind-gray-400 font-light leading-relaxed">
              32+ Years of engineering excellence in industrial plant erection, high-precision equipment installation, annual shutdowns, and mechanical relocation contracts across India.
            </p>

            {/* Social handles */}
            <div className="flex space-x-3.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-ind-orange-500 hover:bg-ind-orange-500 hover:text-white flex items-center justify-center text-ind-gray-400 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-ind-orange-500 hover:bg-ind-orange-500 hover:text-white flex items-center justify-center text-ind-gray-400 transition-all duration-300"
                aria-label="YouTube Channel"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-ind-orange-500 hover:bg-ind-orange-500 hover:text-white flex items-center justify-center text-ind-gray-400 transition-all duration-300"
                aria-label="Facebook Page"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-ind-orange-500 hover:bg-ind-orange-500 hover:text-white flex items-center justify-center text-ind-gray-400 transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-ind-gray-400 hover:text-ind-orange-500 transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services shortcuts */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-ind-gray-400 hover:text-ind-orange-500 transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Google Maps Frame & Location */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 mb-2">
              Our Location
            </h4>

            {/* Custom Styled Dark-inversion Google Map Embed */}
            <div className="relative w-full h-[160px] overflow-hidden rounded-xl border border-white/10 bg-ind-blue-900">
              <iframe
                src="https://maps.google.com/maps?q=Fatehgarh%20Farrukhabad%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="160"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg)',
                  opacity: 0.7,
                }}
                loading="lazy"
                title="Pal Engineering Works Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-1.5 font-mono text-[10px] text-ind-gray-400">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-1.5 text-ind-orange-500 shrink-0" />
                Fatehgarh, Farrukhabad, Uttar Pradesh
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-1.5 text-ind-orange-500 shrink-0" />
                +91 63886 88948
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-1.5 text-ind-orange-500 shrink-0" />
                pal.engineering.works91@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Row */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-ind-gray-500 font-mono">
          <p className="mb-4 sm:mb-0">
            &copy; {currentYear} Pal Engieering Works All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-ind-orange-500 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-ind-orange-500 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
