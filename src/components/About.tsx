import { FaEye, FaBullseye, FaShieldAlt, FaAward, FaUserCheck, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  const coreValues = [
    {
      icon: <FaShieldAlt className="w-6 h-6 text-ind-orange-500" />,
      title: 'Safety First',
      desc: 'Zero-accident policy. We strictly implement international HSE standards on all active erection & shutdown sites.',
    },
    {
      icon: <FaAward className="w-6 h-6 text-ind-orange-500" />,
      title: 'Premium Quality',
      desc: 'Precise mechanical alignments, rigorous testing, and QA checks run by experienced supervisors.',
    },
    {
      icon: <FaUserCheck className="w-6 h-6 text-ind-orange-500" />,
      title: 'Absolute Integrity',
      desc: 'Transparent pricing, honest resource deployment, and strict commitment to client SLAs.',
    },
  ];



  return (
    <section
      id="about"
      className="relative py-24 bg-ind-blue-900/40 dark:bg-ind-blue-900/40 light:bg-white text-white light:text-ind-blue-900 overflow-hidden"
    >
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ind-orange-500 bg-ind-orange-500/10 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase mt-4 text-white light:text-ind-blue-900">
            About Our Company
          </h2>
          <div className="w-20 h-1 bg-ind-orange-500 mx-auto mt-4 rounded" />
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white light:text-ind-blue-900 uppercase">
              PAL ENGINEERING WORKS
            </h3>
            <p className="text-ind-gray-300 light:text-ind-gray-700 leading-relaxed font-light">
              Since 1994, we have established ourselves as a benchmark of engineering precision and industrial dependability. We specialize in high-capacity plant erection, mechanical equipment installations, machinery alignment, shutdown repair operations, and turnkey plant shifting.
            </p>
            <p className="text-ind-gray-300 light:text-ind-gray-700 leading-relaxed font-light">
              We operate across diverse sectors including steel mills, cement plants, chemical factories, power stations, and sugar refineries. Our experienced project managers and highly-skilled technicians work hand-in-hand to guarantee that every task meets the strictest safety tolerances.
            </p>

            {/* Founder Experience Showcase Box */}
            <div className="p-6 rounded-xl border border-ind-orange-500/25 bg-ind-orange-600/5 dark:bg-ind-orange-600/5 light:bg-ind-orange-500/5 flex items-start space-x-4">
              <span className="p-3.5 bg-ind-orange-500 text-white rounded-lg flex items-center justify-center font-mono font-extrabold text-xl leading-none">
                32+
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-ind-orange-500 uppercase">
                  Founder Experience
                </h4>
                <p className="text-xs sm:text-sm text-ind-gray-300 light:text-ind-gray-700 mt-1 font-light">
                  "Backed by over 32 years of hands-on experience in plant erection, industrial maintenance, plant relocation, shutdown execution, and mechanical project management."
                </p>
              </div>
            </div>
          </div>

          {/* Graphical Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-ind-orange-500 rounded-2xl transform rotate-3 scale-98 opacity-20 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop"
                alt="Founder & Site Erection Team"
                className="w-full h-full object-cover filter brightness-85 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 glassmorphism p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                    Address
                  </h4>
                  <p className="text-xs font-mono text-ind-orange-500 flex items-center mt-1">
                    <FaMapMarkerAlt className="mr-1" /> Farrukhabad, India
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/50 block">Operational</span>
                  <span className="text-xs font-bold font-mono text-green-400">PAN-INDIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-2xl glassmorphism border border-white/5 flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-ind-orange-500/10 text-ind-orange-500 mb-6">
                <FaBullseye className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-white light:text-ind-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-ind-gray-300 light:text-ind-gray-700 font-light text-sm sm:text-base leading-relaxed">
                To deliver top-tier mechanical installation and maintenance services utilizing cutting-edge techniques, maintaining the highest levels of safety and quality, and creating unmatched value for our client networks.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl glassmorphism border border-white/5 flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-ind-orange-500/10 text-ind-orange-500 mb-6">
                <FaEye className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-white light:text-ind-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-ind-gray-300 light:text-ind-gray-700 font-light text-sm sm:text-base leading-relaxed">
                To be recognized as India's premier industrial contracting partner, empowering factories, refineries, and plants to reach peak productivity through robust structural integrity and reliable shutdown execution.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="mb-24">
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-center uppercase mb-10 text-white light:text-ind-blue-900">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-xl glassmorphism hover:border-ind-orange-500/40 transition-all duration-300 text-left"
              >
                <div className="mb-4 inline-block">{val.icon}</div>
                <h4 className="text-lg font-display font-bold uppercase text-white light:text-ind-blue-900">
                  {val.title}
                </h4>
                <p className="text-sm text-ind-gray-400 light:text-ind-gray-600 mt-2 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
