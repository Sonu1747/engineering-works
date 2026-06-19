import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  FaHardHat,
  FaIndustry,
  FaTools,
  FaBolt,
  FaWrench,
  FaFire,
  FaRoad,
  FaCogs
} from 'react-icons/fa';

interface TimelineEvent {
  year: string;
  category: string;
  title: string;
  client: string;
  icon: ReactNode;
  desc: string;
  tags: string[];
}

export default function ExperienceTimeline() {
  const events: TimelineEvent[] = [
    {
      year: '2022 – 2026',
      category: 'Project Leadership & Supervision',
      title: 'Senior Foreman',
      client: 'Patel Engineering Ltd., Kiru (J&K)',
      icon: <FaHardHat className="w-5 h-5" />,
      desc: 'Complete handling and supervision of Batching Plant 240 operations. Managed installation and maintenance of Induction beam conveyor belt systems. Supervised welding, fabrication, and fitting activities at site. Led a team of workers and ensured proper task allocation. Monitored plant equipment performance and conducted preventive maintenance. Ensured adherence to safety standards and quality procedures.',
      tags: ['Batching Plant 240', 'Conveyor Systems', 'Fabrication', 'Team Leadership', 'Safety & Quality'],
    },
    {
      year: '2017 – 2022',
      category: 'Batching Plant Supervision',
      title: 'Batching Plant Foreman',
      client: 'H.G. Infra Engineering Ltd., Nagpur',
      icon: <FaIndustry className="w-5 h-5" />,
      desc: 'Supervised complete operation of batching plant. Managed plant maintenance and troubleshooting activities. Led mechanical team and ensured smooth production workflow. Monitored safety standards and quality control procedures.',
      tags: ['Operations', 'Plant Maintenance', 'Mechanical Team', 'Quality Control'],
    },
    {
      year: '2012 – 2017',
      category: 'Workshop & Fabrication',
      title: 'Workshop Welder Foreman',
      client: 'Ashoka Buildcon Ltd., Odisha',
      icon: <FaTools className="w-5 h-5" />,
      desc: 'Supervised welding and fabrication work in workshop. Managed repair and maintenance of plant machinery. Assigned daily tasks to welders and fitters. Ensured quality welding as per industrial standards.',
      tags: ['Welding', 'Fabrication', 'Machinery Repair', 'Task Allocation'],
    },
    {
      year: '2010 – 2012',
      category: 'Hydro Dam Projects',
      title: 'Batching Plant Foreman',
      client: 'GVK Alaknanda Hydro Project Dam, Uttarakhand',
      icon: <FaBolt className="w-5 h-5" />,
      desc: 'Handled full operation and maintenance of batching plant. Coordinated plant team for continuous concrete production. Ensured proper functioning of conveyor and mechanical systems.',
      tags: ['Dam Project', 'Concrete Production', 'Conveyor Systems', 'Mechanical Systems'],
    },
    {
      year: '2008 – 2010',
      category: 'Hydro Electric Projects',
      title: 'Batching Plant Foreman',
      client: 'Rithwik Project, Koteshwar Hydro Electric Project, Uttarakhand',
      icon: <FaBolt className="w-5 h-5" />,
      desc: 'Supervised batching plant operations at hydro project site. Performed preventive and breakdown maintenance. Managed plant workers and ensured work discipline.',
      tags: ['Hydro Project', 'Preventive Maintenance', 'Breakdown Maintenance', 'Team Management'],
    },
    {
      year: '2007 – 2008',
      category: 'Mechanical Fitting & Maintenance',
      title: 'Batching Plant Fitter',
      client: 'Ashoka Buildcon Ltd., Nashik',
      icon: <FaWrench className="w-5 h-5" />,
      desc: 'Assisted in installation and maintenance of batching plant. Performed mechanical fitting and repair tasks.',
      tags: ['Fitting', 'Installation', 'Repair'],
    },
    {
      year: '2006 – 2007',
      category: 'Gas Plant Operations',
      title: 'Batching Plant Fitter',
      client: 'Punj Lloyd Group – Gas Plant, Bharuch',
      icon: <FaFire className="w-5 h-5" />,
      desc: 'Conducted mechanical fitting of batching plant equipment. Assisted in gas plant mechanical operations.',
      tags: ['Gas Plant', 'Mechanical Fitting', 'Equipment Assembly'],
    },
    {
      year: '2004 – 2006',
      category: 'Road Infrastructure Projects',
      title: 'Batching Plant Fitter',
      client: 'Ashoka Buildcon Ltd., Surat (Road Project)',
      icon: <FaRoad className="w-5 h-5" />,
      desc: 'Installed and maintained batching plant machinery for road project. Performed repair and alignment of mechanical components.',
      tags: ['Road Project', 'Alignment', 'Plant Installation'],
    },
    {
      year: '2003 – 2004',
      category: 'Industrial Fitting Support',
      title: 'Fitter',
      client: 'Oriental Lever Engineering, Aurangabad',
      icon: <FaCogs className="w-5 h-5" />,
      desc: 'Executed fitting and mechanical support tasks. Assisted in machinery installation and repair.',
      tags: ['Fitting', 'Machinery Repair', 'Installation Support'],
    },
    {
      year: '1993 – 2003',
      category: 'Cement Plant Maintenance',
      title: 'Mechanic / Fitter / Builder',
      client: 'Mohta Cement Pvt. Ltd.',
      icon: <FaIndustry className="w-5 h-5" />,
      desc: 'Performed mechanical maintenance and welding work. Handled repair of cement plant equipment. Assisted in structural and fabrication tasks.',
      tags: ['Cement Plant', 'Mechanical Maintenance', 'Structural Welding', 'Fabrication'],
    },
  ];

  return (
    <section
      id="experience-timeline"
      className="relative py-24 bg-ind-blue-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      {/* Glow elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ind-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white">
            Experience Showcase
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 mt-4 font-light">
            Highlighting milestone achievements that have defined our 32-year legacy in industrial execution.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ind-orange-500 via-ind-orange-500/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-16">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-6 md:left-1/2 top-2 w-10 h-10 rounded-xl bg-ind-orange-500 text-white flex items-center justify-center transform -translate-x-1/2 z-20 shadow-lg shadow-ind-orange-500/20 border-2 border-ind-blue-950">
                    {event.icon}
                  </div>

                  {/* Left Side spacer */}
                  <div className="w-full md:w-1/2" />

                  {/* Right Side Card content */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-10 text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6 }}
                      className="p-6 rounded-2xl glassmorphism border border-white/5 relative hover:border-ind-orange-500/30 transition-all duration-300"
                    >
                      {/* Year flag */}
                      <span className="absolute top-4 right-4 bg-ind-orange-600/10 border border-ind-orange-500/25 text-ind-orange-500 font-mono text-xs px-2.5 py-1 rounded font-bold">
                        {event.year}
                      </span>

                      <span className="text-[10px] font-mono uppercase tracking-widest text-ind-orange-500 block mb-1">
                        {event.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-extrabold uppercase text-white tracking-wide">
                        {event.title}
                      </h3>
                      <p className="text-xs font-mono text-ind-gray-400 mt-1">
                        Client: {event.client}
                      </p>
                      <p className="text-xs sm:text-sm text-ind-gray-300 font-light mt-3 leading-relaxed">
                        {event.desc}
                      </p>

                      {/* Tag pill badges */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-ind-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
