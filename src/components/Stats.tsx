import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function StatsCounter({ end, suffix = "", duration = 2500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const statsList = [
    { label: 'Years Experience', value: 32, suffix: '+' },
    { label: 'Projects Completed', value: 20, suffix: '+' },
    { label: 'Skilled Workforce', value: 50, suffix: '+' },
    { label: 'Industrial Clients', value: 20, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
  ];

  return (
    <section className="relative py-20 bg-ind-blue-950 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
          alt="Active Steel Welding Erection"
          className="w-full h-full object-cover object-center filter brightness-15 opacity-40 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ind-blue-950 via-ind-blue-950/80 to-ind-blue-950" />
        <div className="absolute inset-0 industrial-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glassmorphism border border-white/5 text-center flex flex-col justify-center items-center h-40 hover:border-ind-orange-500/20 transition-all duration-300"
            >
              <h3 className="text-3xl sm:text-5xl font-mono font-black text-ind-orange-500 tracking-tight leading-none">
                <StatsCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs sm:text-sm font-sans text-ind-gray-400 uppercase tracking-widest mt-3.5 font-medium max-w-[120px] leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
