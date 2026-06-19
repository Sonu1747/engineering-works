import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Industries from './components/Industries';
import ProjectShowcase from './components/ProjectShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import SafetyQuality from './components/SafetyQuality';
import TeamWorkforce from './components/TeamWorkforce';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check local storage or default to dark mode for the premium industrial corporate look
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // default to dark
  });

  useEffect(() => {
    // Save to local storage and update body classes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans relative ${
        isDarkMode ? 'bg-ind-blue-950 text-white' : 'bg-ind-gray-100 text-ind-blue-900'
      }`}
    >
      {/* Background Particles Canvas */}
      <ParticleBackground isDarkMode={isDarkMode} />

      {/* Trailing Custom Cursor on Desktops */}
      <CustomCursor />

      {/* Floating WhatsApp, Calls, and Top buttons */}
      <FloatingWidgets />

      {/* Sticky Top Header Nav */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Content Landing Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Industries />
        <ProjectShowcase />
        <ExperienceTimeline />
        <WorkProcess />
        <Testimonials />
        <SafetyQuality />
        <TeamWorkforce />
        <Stats />
        <ContactForm />
      </main>

      {/* Footer & Map Details */}
      <Footer />
    </div>
  );
}
