import { motion } from 'framer-motion';
import { FaClipboardList, FaSearch, FaProjectDiagram, FaHammer, FaShieldAlt, FaTruckLoading } from 'react-icons/fa';

export default function WorkProcess() {
  const steps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      icon: <FaClipboardList className="w-5 h-5" />,
      desc: 'Review project blueprints, client specs, timeline constraints, and load calculations.',
    },
    {
      step: '02',
      title: 'Site Inspection',
      icon: <FaSearch className="w-5 h-5" />,
      desc: 'Inspect physical site layouts, ground load capacities, crane clearances, and safety concerns.',
    },
    {
      step: '03',
      title: 'Project Planning',
      icon: <FaProjectDiagram className="w-5 h-5" />,
      desc: 'Define resource allocations, heavy lift rigging schedules, HSE plans, and detailed timelines.',
    },
    {
      step: '04',
      title: 'Execution',
      icon: <FaHammer className="w-5 h-5" />,
      desc: 'Carry out mechanical alignment, structural fabrication, plant rigging, and assembly under expert supervision.',
    },
    {
      step: '05',
      title: 'Quality Check',
      icon: <FaShieldAlt className="w-5 h-5" />,
      desc: 'Conduct non-destructive testing (NDT), geometric precision tests, and load runs.',
    },
    {
      step: '06',
      title: 'Project Delivery',
      icon: <FaTruckLoading className="w-5 h-5" />,
      desc: 'Provide final inspections, hand over operation logs, and sign off the commissioning certificates.',
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 bg-ind-blue-900/40 dark:bg-ind-blue-900/40 light:bg-ind-gray-100 text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Our Flow
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            Work Process
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 light:text-ind-gray-600 mt-4 font-light">
            A systematically structured roadmap that guarantees zero-defect site execution and punctual handovers.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Process Timeline Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-stretch">
          {steps.map((st, index) => {
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl glassmorphism border border-white/5 hover:border-ind-orange-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Visual Connector Line for Large Screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-1.5rem)] right-[-1.5rem] h-[2px] bg-ind-orange-500/20 z-0 pointer-events-none group-hover:bg-ind-orange-500/40 transition-colors" />
                )}

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6 z-10 relative">
                    <div className="w-12 h-12 rounded-xl bg-ind-orange-600/10 border border-ind-orange-500/30 text-ind-orange-500 flex items-center justify-center font-mono font-extrabold group-hover:bg-ind-orange-500 group-hover:text-white transition-all duration-300">
                      {st.icon}
                    </div>
                    <span className="font-mono text-3xl font-black text-white/5 group-hover:text-ind-orange-500/10 transition-colors duration-300">
                      {st.step}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base sm:text-lg font-display font-bold uppercase text-white light:text-ind-blue-900 group-hover:text-ind-orange-500 transition-colors duration-300">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ind-gray-400 light:text-ind-gray-600 mt-3 font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
