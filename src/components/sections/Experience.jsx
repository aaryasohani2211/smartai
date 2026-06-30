import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const Experience = () => {
  const experiences = [
    {
      company: 'AlphaNexis Tech Pvt Ltd',
      role: 'AI Automation & BDE Intern',
      duration: 'Jan 2026 – April 2026',
      responsibilities: [
        'Designed automation workflows using n8n and REST APIs',
        'Conducted stakeholder meetings',
        'Delivered AI-powered workflow solutions',
        'Integrated LLM-based automations'
      ]
    },
    {
      company: 'Linkites Infotech',
      role: 'AI/ML Intern',
      duration: 'Sept 2025 – Nov 2025',
      responsibilities: [
        'Built LangChain AI workflows',
        'Worked with Transformers and LLMs',
        'Used OpenAI APIs',
        'Optimized ML/DL pipelines'
      ]
    }
  ];

  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          My <span className="glow-text">Journey</span>
        </motion.h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Professional experience in AI automation, machine learning, and delivering intelligent solutions.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Timeline Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-secondary z-10 shadow-[0_0_10px_#00D4FF]" />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`w-full md:w-[45%] ml-8 md:ml-0 glass-card p-6 md:p-8 relative group`}
              >
                {/* Duration Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-accent-secondary mb-3 uppercase tracking-widest">
                  <FiCalendar />
                  {exp.duration}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  {exp.role}
                </h3>
                
                <div className="flex items-center gap-2 text-text-secondary font-medium mb-4">
                  <FiBriefcase className="text-accent-primary" />
                  {exp.company}
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                      <FiCheckCircle className="mt-1 text-accent-secondary flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative side accent */}
                <div className={`absolute top-0 bottom-0 w-1 bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
