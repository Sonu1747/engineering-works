import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  category: string; // 'erection' | 'maintenance' | 'shutdown' | 'relocation' | 'installation'
  image: string;
  location: string;
  client: string;
  desc: string;
}

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Before/After slider states
  const [sliderPosition, setSliderPosition] = useState(50);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const [isSliding, setIsSliding] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: '500T Kiln Erection',
      category: 'erection',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
      location: 'Gujarat, India',
      client: 'UltraTech Cement',
      desc: 'Complete erection of a massive 500-ton rotary kiln, including precise alignment of tyres, girth gear, and support rollers.',
    },
    {
      id: 2,
      title: 'Blast Furnace Maintenance',
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      location: 'Odisha, India',
      client: 'Jindal Steel',
      desc: 'Annual breakdown maintenance and refractories repair for a major blast furnace unit, completed within a strict 14-day schedule.',
    },
    {
      id: 3,
      title: 'Refinery Shutdown Maintenance',
      category: 'shutdown',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
      location: 'Assam, India',
      client: 'IOCL',
      desc: 'Shutdown overhauling of heat exchangers, distillation columns, and high-pressure steam pipelines.',
    },
    {
      id: 4,
      title: 'Rolling Mill Shifting',
      category: 'relocation',
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop',
      location: 'Maharashtra to Karnataka',
      client: 'Tata Steel Long Products',
      desc: 'Complete dismantling, transit coordination, reassembly, and commissioning of a 1200T steel rolling mill.',
    },
    {
      id: 5,
      title: 'Automated Conveyor Setup',
      category: 'installation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      location: 'Madhya Pradesh, India',
      client: 'Jaypee Cement',
      desc: 'Installation of a 2.5km automated overland belt conveyor system, including drive pulleys and take-up structures.',
    },
    {
      id: 6,
      title: 'Turbine Generator Alignment',
      category: 'installation',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
      location: 'West Bengal, India',
      client: 'WBSEDCL',
      desc: 'Precision laser alignment and vibration testing for a 120MW steam turbine generator unit.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'erection', label: 'Plant Erection' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'shutdown', label: 'Shutdown Jobs' },
    { id: 'relocation', label: 'Plant Relocation' },
    { id: 'installation', label: 'Industrial Installation' },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  // Before/After handler
  const handleSliderMove = (clientX: number) => {
    if (!beforeAfterRef.current) return;
    const rect = beforeAfterRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isSliding || e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Prevent text selection when dragging
  useEffect(() => {
    const handleMouseUp = () => setIsSliding(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 bg-ind-blue-900/40 dark:bg-ind-blue-900/40 light:bg-white text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            Project Showcase
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 light:text-ind-gray-600 mt-4 font-light">
            Explore our hands-on engineering accomplishments, illustrating massive installations and maintenance shutdown tasks completed across India.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Before / After Slider Showcase Card */}
        <div className="max-w-4xl mx-auto mb-20 p-4 rounded-3xl glassmorphism border border-white/10 shadow-2xl">
          <h3 className="text-center font-display font-bold uppercase tracking-wider text-white light:text-ind-blue-900 text-sm mb-4">
            Interactive Site Showcase: Shifting &amp; Erection (Before / After)
          </h3>
          <div
            ref={beforeAfterRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsSliding(true)}
            onTouchStart={() => setIsSliding(true)}
            className="relative w-full aspect-[16/9] select-none overflow-hidden rounded-2xl border border-white/5 cursor-ew-resize"
          >
            {/* After (Right Side) */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Commissioned Erection Site"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute bottom-4 right-4 bg-ind-orange-600/90 text-white font-mono text-xs px-3 py-1.5 rounded-md tracking-wider font-extrabold z-10">
              AFTER (COMMISSIONED)
            </div>

            {/* Before (Left Side, Clipped) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop"
                alt="Dismantled Raw Site"
                className="absolute inset-y-0 left-0 w-full h-full object-cover pointer-events-none max-w-none"
                style={{ width: beforeAfterRef.current?.getBoundingClientRect().width }}
              />
              <div className="absolute bottom-4 left-4 bg-ind-blue-950/90 text-white font-mono text-xs px-3 py-1.5 rounded-md tracking-wider font-extrabold z-10">
                BEFORE (DISMANTLED)
              </div>
            </div>

            {/* Divider bar */}
            <div
              className="absolute inset-y-0 w-1 bg-ind-orange-500 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ind-orange-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
                ↔
              </div>
            </div>
          </div>
          <p className="text-center text-[10px] sm:text-xs font-mono text-ind-gray-400 mt-3">
            Drag or swipe the center divider left and right to inspect the site transformation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-lg border transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-ind-orange-600 border-ind-orange-600 text-white shadow-lg shadow-ind-orange-600/20'
                  : 'bg-white/5 border-white/10 hover:border-ind-orange-500/50 text-ind-gray-300 light:text-ind-blue-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden glassmorphism border border-white/5 shadow-lg h-80"
              >
                {/* Product Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-50 transition-all duration-500"
                />

                {/* Cover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ind-blue-950 via-ind-blue-950/40 to-transparent z-10" />

                {/* Details card content */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-left">
                  <span className="inline-block px-2.5 py-1 rounded bg-ind-orange-600/90 text-white font-mono text-[9px] uppercase tracking-widest font-black mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-display font-extrabold uppercase text-white tracking-wide">
                    {project.title}
                  </h4>
                  <p className="text-[11px] font-mono text-ind-gray-400 mt-1">
                    {project.client} | {project.location}
                  </p>
                </div>

                {/* Zoom Trigger Button on Hover */}
                <button
                  onClick={() => setLightboxIndex(idx)}
                  className="absolute top-4 right-4 z-20 p-3 bg-ind-orange-500 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-lg"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Slider Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-ind-blue-950/90 backdrop-blur-md"
              />

              {/* Close Trigger */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-55 p-2 rounded-full bg-white/5 border border-white/10 text-ind-gray-400 hover:text-white hover:bg-ind-orange-600 transition-all"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Slide controls */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1
                  )
                }
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-55 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-ind-orange-600 transition-all hidden sm:block"
              >
                <FaArrowLeft className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0
                  )
                }
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-55 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-ind-orange-600 transition-all hidden sm:block"
              >
                <FaArrowRight className="w-4.5 h-4.5" />
              </button>

              {/* Expanded Card Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-50 w-full max-w-4xl bg-ind-blue-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
              >
                <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
                  <img
                    src={filteredProjects[lightboxIndex].image}
                    alt={filteredProjects[lightboxIndex].title}
                    className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                  />
                </div>

                <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-between text-left text-white overflow-y-auto">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded bg-ind-orange-600 text-white font-mono text-[9px] uppercase tracking-widest font-black mb-3">
                      {filteredProjects[lightboxIndex].category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-white">
                      {filteredProjects[lightboxIndex].title}
                    </h3>
                    <div className="w-10 h-0.5 bg-ind-orange-500 mt-2 mb-4" />

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-mono text-ind-gray-400">
                        <strong className="text-white">Client: </strong>
                        {filteredProjects[lightboxIndex].client}
                      </p>
                      <p className="text-xs font-mono text-ind-gray-400">
                        <strong className="text-white">Location: </strong>
                        {filteredProjects[lightboxIndex].location}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-ind-gray-300 font-light leading-relaxed">
                      {filteredProjects[lightboxIndex].desc}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center sm:hidden">
                    <button
                      onClick={() =>
                        setLightboxIndex((prev) =>
                          prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1
                        )
                      }
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() =>
                        setLightboxIndex((prev) =>
                          prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
