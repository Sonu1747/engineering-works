import { motion } from 'framer-motion';
import { FaHistory, FaUsers, FaShieldAlt, FaClock, FaCheckCircle, FaPercentage } from 'react-icons/fa';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <FaHistory className="w-8 h-8 text-ind-orange-500" />,
      title: '32+ Years Experience',
      desc: 'Three decades of executing challenging mechanical installations and shutdown operations across heavy industries.',
    },
    {
      icon: <FaUsers className="w-8 h-8 text-ind-orange-500" />,
      title: 'Skilled Workforce',
      desc: 'Over 100 certified fitters, structural welders, riggers, supervisors, and safety managers ready for deployment.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-ind-orange-500" />,
      title: 'Safety First Approach',
      desc: 'Strict compliance with ISO and OSHA safety rules. Regular on-site safety audits and toolbox talks.',
    },
    {
      icon: <FaClock className="w-8 h-8 text-ind-orange-500" />,
      title: 'On-Time Delivery',
      desc: 'Rigorous shutdown planning and scheduling to ensure zero delays and immediate recommissioning.',
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 text-ind-orange-500" />,
      title: 'Quality Assurance',
      desc: 'Precision machinery alignment, certified raw material checks, and comprehensive post-installation load testing.',
    },
    {
      icon: <FaPercentage className="w-8 h-8 text-ind-orange-500" />,
      title: 'Cost Effective Solutions',
      desc: 'Optimized planning and expert resource management that cuts down overhead and maintenance expenses.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-ind-blue-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ind-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ind-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 mt-4 font-light">
            We combine standard-certified engineering techniques with hands-on site management to keep your operations running smoothly.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Value Proposition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, index) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card group p-8 rounded-2xl glassmorphism border border-white/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start text-left cursor-default"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:border-ind-orange-500/50 group-hover:bg-ind-orange-500/10 transition-colors duration-300 mb-6">
                {pt.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold uppercase text-white group-hover:text-ind-orange-500 transition-colors duration-300">
                {pt.title}
              </h3>
              <p className="text-sm text-ind-gray-400 mt-3 font-light leading-relaxed">
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
