import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiShield } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const Certifications = () => {
  const certs = [
    {
      name: 'Deep Learning Institute',
      org: 'NVIDIA',
      year: '2025',
      icon: <FiShield className="text-green-500" />
    },
    {
      name: 'TalentNext Certification',
      org: 'Wipro',
      year: '2024',
      icon: <FiAward className="text-blue-500" />
    },
    {
      name: 'Data Structures & Algorithms',
      org: 'Infosys',
      year: '2024',
      icon: <FiAward className="text-orange-500" />
    },
    {
      name: 'Data Science Professional',
      org: 'IBM',
      year: '2023',
      icon: <FiShield className="text-blue-400" />
    },
    {
      name: 'Cloud Computing Specialist',
      org: 'Alibaba Cloud',
      year: '2023',
      icon: <FiAward className="text-orange-600" />
    },
    {
      name: 'AI/ML Internship Cert',
      org: 'CodexIntern',
      year: '2024',
      icon: <FiAward className="text-purple-500" />
    },
    {
      name: 'Data Science Intern',
      org: 'Cognifyz Technologies',
      year: '2024',
      icon: <FiAward className="text-cyan-500" />
    }
  ];

  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Professional <span className="glow-text">Certifications</span>
        </motion.h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Recognized credentials and industry validations of my expertise in AI, Data Science, and Cloud technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            {/* Animated Shine Effect Layer */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden z-20 pointer-events-none">
              <motion.div 
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent-primary/5 rounded-2xl blur-lg group-hover:bg-accent-primary/10 transition-all duration-500" />

            <div className="relative glass-card p-6 h-full flex flex-col justify-between border-white/5 group-hover:border-accent-primary/30 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-secondary transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-sm font-semibold text-accent-primary uppercase tracking-wide mb-4">
                  {cert.org}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span className="flex items-center gap-2 text-xs text-text-secondary">
                  <FiCalendar />
                  {cert.year}
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="text-text-secondary hover:text-accent-secondary"
                >
                  <FiExternalLink />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
