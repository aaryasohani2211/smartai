import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiAward, FiStar, FiTrendingUp, FiZap } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Major <span className="glow-text">Milestones</span>
        </motion.h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Recognition and awards received for technical excellence and innovative contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
        
        {/* Main Achievement: 1st Prize */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 glass-card p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Background Decorative Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-primary/20 blur-[100px] rounded-full group-hover:bg-accent-primary/30 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 rounded-full bg-accent-primary/10 border-2 border-accent-primary/30 flex items-center justify-center text-6xl text-accent-primary shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                <FiAward />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent-secondary text-bg-primary font-black text-2xl w-12 h-12 rounded-full flex items-center justify-center border-4 border-bg-primary">
                <Counter value={1} />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-accent-secondary transition-colors">
                1st Prize: National Symposium Competition
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Organized by the <span className="text-accent-primary font-bold">CSIR</span> (Council of Scientific & Industrial Research). 
                Secured the top position for innovative research and technical presentation among participants from across the nation.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-text-secondary">National Level</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-text-secondary">Scientific Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Achievement: Top 10 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 glass-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group border-accent-secondary/20"
        >
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-secondary/20 blur-[60px] rounded-full" />
          
          <div className="relative z-10 space-y-6">
            <div className="text-5xl text-accent-secondary mb-2 group-hover:scale-110 transition-transform duration-500">
              <FiTrendingUp />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-5xl font-black text-white">
                Top <Counter value={10} />
              </h4>
              <p className="text-sm font-bold text-accent-secondary uppercase tracking-widest">National Rank</p>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              Consistently ranked among the top performers in highly competitive national-level technical assessments.
            </p>

            <div className="pt-4 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={i < 4 ? 'text-accent-secondary' : 'text-white/20'} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Small Bento Decorator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-12 glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-white/10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-accent-secondary text-2xl">
              <FiZap />
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-tighter">Excellence Driven</p>
              <p className="text-xs text-text-secondary">Consistently pushing the boundaries of AI & ML</p>
            </div>
          </div>
          <div className="h-px w-full md:w-32 bg-white/10" />
          <div className="flex -space-x-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-card bg-bg-primary flex items-center justify-center text-xs font-bold text-accent-primary">
                {i === 3 ? '+' : '🏆'}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Achievements;
