import { motion } from 'framer-motion';
import { FaHardHat, FaAward, FaCertificate, FaRegHandshake } from 'react-icons/fa';

interface Metric {
  label: string;
  percentage: number;
}

export default function SafetyQuality() {
  const metrics: Metric[] = [
    { label: 'HSE & Safety Regulations Compliance', percentage: 100 },
    { label: 'Quality Control (QA/QC) Audits Passed', percentage: 99 },
    { label: 'Welding & Structural Alignment Precision', percentage: 98 },
    { label: 'On-Time Project Milestone Rate', percentage: 96 },
  ];

  const pillars = [
    {
      icon: <FaHardHat className="w-7 h-7 text-ind-orange-500" />,
      title: 'Zero Accident HSE Policy',
      desc: 'We enforce mandatory personal protective equipment (PPE), daily tool-box safety briefings, site risk-mitigation profiling, and fire safety systems.',
    },
    {
      icon: <FaAward className="w-7 h-7 text-ind-orange-500" />,
      title: 'Strict Quality Standards',
      desc: 'All mechanical installations undergo meticulous alignment testing using advanced engineering machinery before client sign-off.',
    },
    {
      icon: <FaCertificate className="w-7 h-7 text-ind-orange-500" />,
      title: 'Certified Personnel',
      desc: 'Our supervisors, gas cutters, fitters, and riggers are certified by industry boards and undergo periodic safety recertification.',
    },
    {
      icon: <FaRegHandshake className="w-7 h-7 text-ind-orange-500" />,
      title: 'Industry Best Practices',
      desc: 'We follow ISO and structural welding norms, guaranteeing long lifespan and robust mechanical reliability.',
    },
  ];

  return (
    <section
      id="safety"
      className="relative py-24 bg-ind-blue-900/40 dark:bg-ind-blue-900/40 light:bg-white text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            Safety &amp; Quality
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 light:text-ind-gray-600 mt-4 font-light">
            We prioritize lives and machinery durability. Our rigorous checklists guarantee zero-error operational handovers.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Four Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pil) => (
                <div
                  key={pil.title}
                  className="p-6 rounded-2xl glassmorphism border border-white/5 flex flex-col justify-between hover:border-ind-orange-500/20 transition-all duration-300"
                >
                  <div>
                    <div className="mb-4 inline-block">{pil.icon}</div>
                    <h3 className="text-base sm:text-lg font-display font-bold uppercase text-white light:text-ind-blue-900">
                      {pil.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ind-gray-400 light:text-ind-gray-600 mt-2 font-light leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Progress Indicators */}
          <div className="lg:col-span-5 p-8 rounded-3xl glassmorphism border border-white/10 shadow-2xl space-y-6">
            <h3 className="text-lg font-display font-bold uppercase text-white light:text-ind-blue-900 tracking-wider mb-6">
              Performance Indicators
            </h3>

            <div className="space-y-6 text-left">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-xs sm:text-sm font-mono text-ind-gray-300 light:text-ind-gray-700 mb-2">
                    <span>{metric.label}</span>
                    <span className="text-ind-orange-500 font-bold">{metric.percentage}%</span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-ind-orange-500 to-amber-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom safety badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center space-x-4">
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 animate-ping shrink-0" />
              <p className="text-xs font-mono text-ind-gray-400">
                Current HSE Status: <strong className="text-green-400">SAFE SITE OPERATION ACTIVE</strong>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
