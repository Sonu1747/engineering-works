import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaChevronDown, FaCog } from 'react-icons/fa';

// Custom CountUp Component
function CountUp({ end, duration = 2500, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);

      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [videoPlay, setVideoPlay] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ind-blue-950 text-white pt-20"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!videoPlay ? (
          <img
            src="https://images.unsplash.com/photo-1513828742140-ccaa34f3bfc1?q=80&w=1920&auto=format&fit=crop"
            alt="Industrial Plant Background"
            className="w-full h-full object-cover object-center scale-105 filter brightness-30 contrast-125 transition-transform duration-10000 ease-out"
          />
        ) : (
          <iframe
            src="https://www.youtube.com/embed/5Hl3y6yR80E?autoplay=1&mute=1&controls=0&loop=1&playlist=5Hl3y6yR80E"
            title="Industrial Plant video"
            className="w-full h-full object-cover scale-110 pointer-events-none opacity-30"
            style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh' }}
          />
        )}

        {/* Industrial Grids & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ind-blue-950 via-ind-blue-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ind-blue-950/90 via-transparent to-ind-blue-950/50" />
        <div className="absolute inset-0 industrial-grid opacity-60" />
      </div>

      {/* Rotating Mechanical Gears & Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Large gear top right */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="absolute -top-12 -right-12 w-64 h-64 text-white/5 opacity-40 md:opacity-100"
        >
          <FaCog className="w-full h-full" />
        </motion.div>

        {/* Small gear overlapping */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          className="absolute top-36 -right-4 w-32 h-32 text-ind-orange-500/10"
        >
          <FaCog className="w-full h-full" />
        </motion.div>

        {/* Lower Left Blueprint Gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="absolute -bottom-24 -left-24 w-80 h-80 text-white/5"
        >
          <FaCog className="w-full h-full" />
        </motion.div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-between h-full min-h-[calc(100vh-5rem)]">
        {/* Empty space for structural balance */}
        <div className="h-4" />

        {/* Center Text Block */}
        <div className="max-w-4xl mt-12 sm:mt-16 text-left">
          {/* Animated tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ind-orange-600/20 border border-ind-orange-500/30 text-ind-orange-500 font-mono text-xs uppercase tracking-widest font-bold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-ind-orange-500 animate-ping" />
            <span>Industrial Construction & Erection Leaders</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight uppercase leading-tight"
          >
            Delivering Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ind-orange-500 to-amber-500">
              Excellence
            </span>{' '}
            For Over 32 Years
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base sm:text-xl text-ind-gray-300 font-sans max-w-2xl font-light leading-relaxed"
          >
            Trusted Partner for Plant Erection, Maintenance, Shutdown Projects, Industrial Manpower & Mechanical Services Across India.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-ind-orange-600 hover:bg-ind-orange-500 text-white font-display font-extrabold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-ind-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base border border-ind-orange-700/50"
            >
              Get a Quote
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-white/20 hover:border-ind-orange-500 text-white font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </a>

            {/* Video Background Toggle */}
            <button
              onClick={() => setVideoPlay(!videoPlay)}
              className="flex items-center space-x-2.5 px-4 text-xs font-mono text-ind-gray-400 hover:text-white transition-colors"
            >
              <span className="p-2 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                <FaPlay className="w-3 h-3 text-ind-orange-500" />
              </span>
              <span>{videoPlay ? 'Static Cover' : 'Live Plant Video'}</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Counters Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 bg-ind-blue-900/60 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-2xl"
        >
          <div className="text-left border-l-2 border-ind-orange-500 pl-4">
            <h3 className="text-3xl sm:text-4xl font-mono font-black text-white">
              <CountUp end={32} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm font-sans text-ind-gray-400 uppercase tracking-widest mt-1">
              Years Experience
            </p>
          </div>

          <div className="text-left border-l-2 border-ind-orange-500 pl-4">
            <h3 className="text-3xl sm:text-4xl font-mono font-black text-white">
              <CountUp end={20} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm font-sans text-ind-gray-400 uppercase tracking-widest mt-1">
              Projects Completed
            </p>
          </div>

          <div className="text-left border-l-2 border-ind-orange-500 pl-4">
            <h3 className="text-3xl sm:text-4xl font-mono font-black text-white">
              <CountUp end={50} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm font-sans text-ind-gray-400 uppercase tracking-widest mt-1">
              Skilled Workforce
            </p>
          </div>

          <div className="text-left border-l-2 border-ind-orange-500 pl-4">
            <h3 className="text-3xl sm:text-4xl font-mono font-black text-white">
              <CountUp end={20} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm font-sans text-ind-gray-400 uppercase tracking-widest mt-1">
              Industrial Clients
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-40 animate-bounce">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ind-gray-400 mb-1">
            Scroll
          </span>
          <FaChevronDown className="w-4.5 h-4.5 text-ind-orange-500" />
        </div>
      </div>
    </section>
  );
}
