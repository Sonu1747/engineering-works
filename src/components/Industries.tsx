import { motion } from 'framer-motion';
import { FaBuilding, FaRoad, FaCogs, FaBolt, FaIndustry, FaWrench, FaHammer, FaHardHat } from 'react-icons/fa';

export default function Industries() {
  const industriesList = [
    {
      name: 'Patel Engineering Ltd.',
      icon: <FaBuilding className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop',
      desc: 'Erection & commissioning of batching plants and induction beam conveyor belt systems at Kiru (J&K).',
    },
    {
      name: 'H.G. Infra Engineering Ltd.',
      icon: <FaRoad className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=400&auto=format&fit=crop',
      desc: 'Operation, maintenance, and setup of heavy mechanical batching systems for high-speed highways in Nagpur.',
    },
    {
      name: 'Schwing Stetter India',
      icon: <FaCogs className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop',
      desc: 'Precision mechanical alignment, assembly, and breakdown support for heavy concrete machinery.',
    },
    {
      name: 'GVK Alaknanda Hydro Dam',
      icon: <FaBolt className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=400&auto=format&fit=crop',
      desc: 'Full-scale operation, maintenance, and continuous concrete production support for dam infrastructure in Uttarakhand.',
    },
    {
      name: 'Mohta Cement Pvt. Ltd.',
      icon: <FaIndustry className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=400&auto=format&fit=crop',
      desc: 'Mechanical upkeep, fabrication, and repair of large-scale cement processing units.',
    },
    {
      name: 'Rithwik Project, Koteshwar',
      icon: <FaHammer className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400&auto=format&fit=crop',
      desc: 'Breakdown maintenance, conveyor alignment, and crew coordination at major hydro sites in Uttarakhand.',
    },
    {
      name: 'Ashoka Buildcon Ltd.',
      icon: <FaHardHat className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=400&auto=format&fit=crop',
      desc: 'Welding, fitting, and structural fabrication projects across national highways and bridges in Odisha, Nashik, and Surat.',
    },
    {
      name: 'Oriental Lever Engineering',
      icon: <FaWrench className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=400&auto=format&fit=crop',
      desc: 'Executed precision fitting, machinery installation, and mechanical support tasks in Aurangabad.',
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 bg-ind-blue-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-ind-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Clients & Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white">
            Clients & Projects We Serve
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 mt-4 font-light">
            Bringing 32+ years of heavy mechanical project expertise to key infrastructure developers and manufacturing giants across India.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {industriesList.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-64 rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background image overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={ind.bgImage}
                  alt={ind.name}
                  className="w-full h-full object-cover filter brightness-35 contrast-115 group-hover:scale-110 group-hover:brightness-20 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ind-blue-950 via-ind-blue-950/70 to-transparent" />
                <div className="absolute inset-0 bg-ind-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Contents */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between items-start text-left">
                <div className="p-3 bg-white/5 border border-white/10 text-ind-orange-500 rounded-xl group-hover:bg-ind-orange-500 group-hover:text-white transition-colors duration-300">
                  {ind.icon}
                </div>

                <div>
                  <h3 className="text-lg font-display font-extrabold uppercase text-white tracking-wide group-hover:text-ind-orange-500 transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-ind-gray-400 mt-2 font-light line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
