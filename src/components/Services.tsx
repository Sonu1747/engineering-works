import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCogs, FaWrench, FaTruckMoving, FaExclamationTriangle, FaUserFriends, FaClipboardCheck, FaTimes, FaCheck } from 'react-icons/fa';

export interface ServiceDetail {
  id: string;
  icon: ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  subservices: string[];
  equipment: string[];
  duration: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const servicesList: ServiceDetail[] = [
    {
      id: 'erection',
      icon: <FaCogs className="w-8 h-8" />,
      title: 'Plant Erection',
      shortDesc: 'Complete mechanical setup, structural assembly, conveyor systems, and precise machinery alignments.',
      longDesc: 'We handle large-scale structural assembly and heavy mechanical installation. From steel frameworks and crane tracks to high-precision equipment mounting and alignment, our engineering team ensures that structural load tolerances are maintained perfectly.',
      subservices: ['Mechanical Installation', 'Heavy Equipment Installation', 'Structural Erection', 'Conveyor Installation', 'Machinery Alignment'],
      equipment: ['Heavy cranes (100T-500T)', 'Tirfors & pulleys', 'Advanced laser alignment tools', 'Pneumatic impact wrenches'],
      duration: 'Timeline based on project size',
    },
    {
      id: 'maintenance',
      icon: <FaWrench className="w-8 h-8" />,
      title: 'Plant Maintenance',
      shortDesc: 'Routine preventive care, breakdown support, annual maintenance contracts (AMC), and equipment overhauling.',
      longDesc: 'Ensure operational efficiency and minimize machinery degradation with our scheduled AMC contracts. We troubleshoot gears, blowers, heavy rollers, and rotary kilns, keeping downtime to the bare minimum.',
      subservices: ['Preventive Maintenance', 'Breakdown Maintenance', 'Annual Maintenance Contracts (AMC)', 'Shutdown Maintenance', 'Equipment Overhauling'],
      equipment: ['Vibration analyzers', 'Ultrasonic thickness gauges', 'Bearing pullers & induction heaters', 'High-pressure cleaners'],
      duration: 'AMC / On-Demand',
    },
    {
      id: 'relocation',
      icon: <FaTruckMoving className="w-8 h-8" />,
      title: 'Plant Shifting & Relocation',
      shortDesc: 'Safe dismantling of industrial assets, coordinated logistics, reinstallation, and full recommissioning.',
      longDesc: 'Relocating a production unit requires careful sequencing. We map all mechanical assemblies, mark structures, safely dismantle parts, coordinate specialized heavy transport, and rebuild the plant at the new site.',
      subservices: ['De-installation & Dismantling', 'Transportation Coordination', 'Site Re-assembly', 'Re-alignment & Recommissioning'],
      equipment: ['Hydraulic jacks & skidding systems', 'Forklifts & heavy trailers', 'Tagging & documentation trackers'],
      duration: 'Project specific turnkey timeline',
    },
    {
      id: 'shutdown',
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      title: 'Industrial Shutdown Services',
      shortDesc: 'Fast emergency repairs, pre-planned shutdowns, scheduled outages, and rapid manpower deployment.',
      longDesc: 'We specialize in executing high-stakes shutdown operations under tight deadlines. Our team works in shifts, deploying supervisors, engineers, and fitters to execute overhaul schedules 24/7 without delays.',
      subservices: ['Shutdown Planning', 'Manpower Deployment', 'Mechanical Maintenance & Repairs', 'Emergency Outage Response'],
      equipment: ['Rigging gear & slings', 'Mobile site workshops', 'Safety barriers & exhaust gas testers'],
      duration: 'Outage specific (usually 7-30 days)',
    },
    {
      id: 'manpower',
      icon: <FaUserFriends className="w-8 h-8" />,
      title: 'Manpower Supply',
      shortDesc: 'Skilled technical personnel supply including fitters, structural welders, riggers, and supervisors.',
      longDesc: 'Need reliable skilled crew members for your projects? We supply certified technical professionals fully vetted for industrial workloads, safety protocols, and mechanical competencies.',
      subservices: ['Certified Welders (Arc/Tig/Mig)', 'Experienced Fitters & Riggers', 'Site Supervisors', 'Safety Inspectors', 'Helpers & Technicians'],
      equipment: ['Standard PPE kits & welder safety shields', 'Welding rectifiers & grinding machines', 'Site gas cylinders'],
      duration: 'Flexible monthly contracts / project hire',
    },
    {
      id: 'support',
      icon: <FaClipboardCheck className="w-8 h-8" />,
      title: 'Industrial Project Support',
      shortDesc: 'Site supervision, project coordination, safety audit compliance, and general technical advisory.',
      longDesc: 'Accelerate project success with professional management. We provide seasoned on-site coordinators who manage workflows, resolve material issues, verify safety codes, and compile QA reports.',
      subservices: ['Site Supervision & HSE Auditing', 'Project Coordination', 'Safety Compliance Verifications', 'Technical Advisory Support'],
      equipment: ['HSE audit checklists', 'Digital work-permit trackers', 'Drafting tools & drawing viewers'],
      duration: 'Project length contract',
    },
  ];

  const handleInquiryRedirect = (serviceName: string) => {
    setSelectedService(null);
    // Find the project type dropdown in the DOM, select the correct option, and scroll down
    const formDropdown = document.getElementById('projectType') as HTMLSelectElement | null;
    if (formDropdown) {
      let optionVal = 'Other';
      if (serviceName.toLowerCase().includes('erection')) optionVal = 'Plant Erection';
      else if (serviceName.toLowerCase().includes('maintenance')) optionVal = 'Plant Maintenance';
      else if (serviceName.toLowerCase().includes('relocation') || serviceName.toLowerCase().includes('shifting')) optionVal = 'Plant Relocation';
      else if (serviceName.toLowerCase().includes('shutdown')) optionVal = 'Shutdown Services';
      else if (serviceName.toLowerCase().includes('manpower')) optionVal = 'Manpower Supply';

      formDropdown.value = optionVal;
      // Trigger native change event if any state is bound
      formDropdown.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-ind-blue-900/10 dark:bg-ind-blue-900/10 light:bg-ind-gray-100 text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            Professional Services
          </h2>
          <p className="text-sm sm:text-base text-ind-gray-400 light:text-ind-gray-600 mt-4 font-light">
            Providing full-spectrum mechanical support and erection services across massive industrial sectors in India.
          </p>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl glassmorphism border border-white/5 hover:border-ind-orange-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl"
            >
              <div>
                <div className="p-4 bg-ind-orange-600/10 border border-ind-orange-500/20 text-ind-orange-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-ind-orange-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-white light:text-ind-blue-900 mb-3 group-hover:text-ind-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-ind-gray-400 light:text-ind-gray-600 font-light mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Subservice previews */}
                <ul className="space-y-2 mb-8">
                  {service.subservices.slice(0, 3).map((sub) => (
                    <li key={sub} className="flex items-center text-xs text-ind-gray-300 light:text-ind-gray-700 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-ind-orange-500 mr-2 shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                  {service.subservices.length > 3 && (
                    <li className="text-[11px] font-mono text-ind-orange-500/70 pl-3">
                      + {service.subservices.length - 3} more specialties
                    </li>
                  )}
                </ul>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                className="w-full py-3 bg-white/5 border border-white/10 group-hover:border-ind-orange-500/40 group-hover:bg-ind-orange-600 hover:text-white text-ind-gray-300 light:text-ind-blue-900 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:scale-102"
              >
                Explore Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Modal Overlay */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-ind-blue-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative z-10 w-full max-w-3xl glassmorphism rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-ind-gray-400 hover:text-white hover:bg-ind-orange-600 transition-colors"
                >
                  <FaTimes className="w-4.5 h-4.5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-ind-orange-500 text-white rounded-2xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ind-orange-500">
                      Service Breakdown
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-ind-gray-300 font-light leading-relaxed mb-6">
                  {selectedService.longDesc}
                </p>

                {/* Subservices List */}
                <div className="mb-8">
                  <h4 className="font-display font-bold uppercase text-ind-orange-500 text-sm tracking-wider mb-3">
                    Scope of Work / Specialties
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.subservices.map((sub) => (
                      <div key={sub} className="flex items-start space-x-2">
                        <FaCheck className="w-3.5 h-3.5 text-ind-orange-500 mt-1 shrink-0" />
                        <span className="text-xs sm:text-sm text-ind-gray-300 font-light">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Logistics */}
                <div className="mb-8 p-5 bg-white/5 border border-white/5 rounded-2xl">
                  <h4 className="font-display font-bold uppercase text-white text-xs tracking-wider mb-3">
                    Typical Equipment & Resources
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.equipment.map((eq) => (
                      <span
                        key={eq}
                        className="px-3 py-1.5 rounded-lg bg-ind-blue-900 border border-white/10 text-ind-gray-300 text-xs font-mono"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action Bar inside Modal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-ind-gray-400 block uppercase">
                      Execution Period
                    </span>
                    <span className="text-xs sm:text-sm font-semibold font-mono text-white">
                      {selectedService.duration}
                    </span>
                  </div>
                  <button
                    onClick={() => handleInquiryRedirect(selectedService.title)}
                    className="w-full sm:w-auto px-8 py-3 bg-ind-orange-600 hover:bg-ind-orange-500 text-white font-display font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg transition-colors"
                  >
                    Request Contract Quote
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
