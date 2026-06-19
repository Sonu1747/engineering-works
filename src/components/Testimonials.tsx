import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Pal Engineering completed our 500T kiln erection in record time. Their alignment tolerances were far better than standard engineering limits. Truly a professional team.",
      name: "Rajesh Sharma",
      role: "Vice President (Projects)",
      company: "UltraTech Cement",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      text: "During our 2025 steel plant annual shutdown, their fitters and welders worked round the clock with zero safety violations. Outstanding scheduling and safety discipline.",
      name: "Amit Bose",
      role: "Head of Shutdown & Outages",
      company: "Jindal Steel & Power",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      text: "Relocating our complete chemical distillation block was executed seamlessly. Every single vessel was dismantled, moved, and re-erected with perfect precision.",
      name: "V. K. Rao",
      role: "General Manager (Operations)",
      company: "Deccan Chemical Industries",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-ind-blue-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      {/* Decorative radial blur */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-ind-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 mt-4 font-light">
            Read what major industrial leaders and project coordinators say about our execution and commitment.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Carousel Framework */}
        <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full glassmorphism p-8 sm:p-12 rounded-3xl border border-white/10 relative text-left"
            >
              {/* Quote icon watermark */}
              <FaQuoteLeft className="absolute top-6 left-6 text-white/5 w-24 h-24 pointer-events-none" />

              {/* Stars */}
              <div className="flex space-x-1 text-ind-orange-500 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-2xl text-ind-gray-300 font-sans italic font-light leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Profile Bar */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-ind-orange-500"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wide">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs font-mono text-ind-orange-500">
                    {testimonials[currentIndex].role} —{' '}
                    <span className="text-ind-gray-400">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide navigation dot indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-ind-orange-500 w-8' : 'bg-white/20'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
