import { motion } from 'framer-motion';
import { FaUserShield, FaHardHat, FaUsers, FaUserGraduate } from 'react-icons/fa';
import ramPalImg from '../assets/ram_pal.jpg';
import dineshPalImg from '../assets/dinesh_pal.jpg';
import sureshKumarImg from '../assets/suresh_kumar.jpg';
import rajeshKumarImg from '../assets/rajesh_kumar.jpg';
import arjunSinghImg from '../assets/arjun_singh.png';

interface Member {
  name: string;
  designation: string;
  experience: string;
  specialization: string;
  image: string;
}

export default function TeamWorkforce() {
  const team: Member[] = [
    {
      name: 'Ram Pal',
      designation: 'Senior Plant Erection Supervisor',
      experience: '20+ Years',
      specialization: 'Plant Erection, Plant Maintenance, Shutdown Projects',
      image: ramPalImg,
    },
    {
      name: 'Dinesh Pal',
      designation: 'Mechanical Supervisor',
      experience: '18+ Years',
      specialization: 'Industrial Maintenance & Rotary Overhauling',
      image: dineshPalImg,
    },
    {
      name: 'Suresh Kumar',
      designation: 'Site Incharge',
      experience: '15+ Years',
      specialization: 'Plant Relocation & High-Precision Installations',
      image: sureshKumarImg,
    },
    {
      name: 'Rajesh Kumar',
      designation: 'Senior Fitter',
      experience: '12+ Years',
      specialization: 'Mechanical Assembly & Conveyor Systems Alignment',
      image: rajeshKumarImg,
    },
    {
      name: 'Arjun Singh',
      designation: 'Welding Specialist',
      experience: '10+ Years',
      specialization: 'High-Pressure Gas Piping & Structural Fabrication',
      image: arjunSinghImg,
    },
  ];

  const workforceStats = [
    { label: 'Active Workforce', value: '100+', icon: <FaUsers className="w-5 h-5 text-ind-orange-500" /> },
    { label: 'Skilled Technicians', value: '25+', icon: <FaHardHat className="w-5 h-5 text-ind-orange-500" /> },
    { label: 'Supervisors', value: '15+', icon: <FaUserShield className="w-5 h-5 text-ind-orange-500" /> },
    { label: 'Project Leaders', value: '10+', icon: <FaUserGraduate className="w-5 h-5 text-ind-orange-500" /> },
  ];

  const marqueeItems = [
    'Currently Available For Plant Erection Projects',
    'Currently Available For Shutdown Maintenance',
    'Currently Available For Industrial Manpower Supply',
    'Currently Available For Plant Relocation Projects',
  ];

  // Repeat for seamless looping marquee
  const doubleMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section
      id="workforce"
      className="relative py-24 bg-ind-blue-900/10 dark:bg-ind-blue-900/10 light:bg-ind-gray-100 text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Our People
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            Active Workforce &amp; Team
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 light:text-ind-gray-600 mt-4 font-light">
            Meet the seasoned supervisors, inspectors, fitters, and welders executing massive industrial installations with absolute precision.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Live workforce statistics metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workforceStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl glassmorphism border border-white/5 flex items-center space-x-4 hover:border-ind-orange-500/25 transition-colors text-left"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl shrink-0">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-mono font-black text-white light:text-ind-blue-900 leading-none">
                  {stat.value}
                </h3>
                <p className="text-[10px] sm:text-xs font-sans text-ind-gray-400 light:text-ind-gray-600 uppercase tracking-wider mt-1.5 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-5 rounded-2xl glassmorphism border border-white/5 hover:border-ind-orange-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl text-left"
            >
              {/* Profile Image container */}
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-square border border-white/10 mb-4 bg-ind-blue-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-ind-blue-950/90 border border-white/10 font-mono text-[9px] text-ind-orange-500 font-bold uppercase">
                    {member.experience} EXP
                  </div>
                </div>

                {/* Status Dot Indicator */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-[9px] font-mono text-green-400 uppercase tracking-widest font-black">
                    Currently Working With Us
                  </span>
                </div>

                <h4 className="text-base font-display font-extrabold uppercase text-white light:text-ind-blue-900 group-hover:text-ind-orange-500 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-mono text-ind-gray-400 light:text-ind-gray-600 mt-1 uppercase">
                  {member.designation}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-[9px] font-mono text-ind-orange-500 uppercase tracking-wide block mb-1">
                  Specialization:
                </span>
                <p className="text-[10px] text-ind-gray-300 light:text-ind-gray-700 leading-normal font-light line-clamp-3">
                  {member.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-ind-orange-500/20 bg-ind-orange-500/5 text-center mb-16 shadow-lg">
          <p className="text-xs sm:text-sm text-ind-gray-300 light:text-ind-gray-700 italic font-light">
            "Backed by a dedicated team of experienced professionals delivering reliable industrial solutions across erection, maintenance, shutdown and plant relocation projects."
          </p>
        </div>
      </div>

      {/* Marquee Availability Slider */}
      <div className="overflow-hidden whitespace-nowrap bg-ind-orange-600 dark:bg-ind-orange-600 light:bg-ind-orange-500 py-4 border-y border-ind-orange-700/30 w-full relative z-20">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
          className="inline-flex space-x-16 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-black text-white"
        >
          {doubleMarquee.map((item, idx) => (
            <span key={idx} className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
