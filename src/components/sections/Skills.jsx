import { motion } from 'framer-motion';
import { 
  FiCpu, FiCode, FiLayers, FiSmartphone, 
  FiCheckCircle, FiActivity 
} from 'react-icons/fi';
import { 
  SiPython, SiPytorch, SiTensorflow, SiOpencv, 
  SiSqlite, SiFlutter, SiOpenai, SiLangchain 
} from 'react-icons/si';
import SectionWrapper from '../common/SectionWrapper';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI/ML',
      icon: <FiCpu className="text-purple-500" />,
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Transformers', level: 80 },
        { name: 'YOLOv8', level: 90 },
        { name: 'OpenCV', level: 85 },
      ]
    },
    {
      title: 'Programming',
      icon: <FiCode className="text-blue-500" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 80 },
        { name: 'DSA', level: 85 },
        { name: 'OOP', level: 90 },
      ]
    },
    {
      title: 'AI Tools',
      icon: <FiLayers className="text-emerald-500" />,
      skills: [
        { name: 'LangChain', level: 85 },
        { name: 'OpenAI APIs', level: 90 },
        { name: 'n8n', level: 80 },
      ]
    },
    {
      title: 'App Development',
      icon: <FiSmartphone className="text-orange-500" />,
      skills: [
        { name: 'Flutter', level: 75 },
      ]
    }
  ];

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Technical <span className="glow-text">Arsenal</span>
        </motion.h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A comprehensive overview of my technical stack and proficiency across various domains of artificial intelligence and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="text-6xl">{category.icon}</div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-bg-primary border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-text-primary flex items-center gap-2">
                      <FiActivity className="text-accent-secondary animate-pulse" />
                      {skill.name}
                    </span>
                    <span className="text-text-secondary font-mono">{skill.level}%</span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (skillIndex * 0.1) }}
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary relative"
                    >
                      {/* Shine effect */}
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Floating Icons Grid (Decorative) */}
      <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {[SiPython, SiPytorch, SiTensorflow, SiOpencv, SiSqlite, SiFlutter, SiOpenai, SiLangchain].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
            className="text-4xl text-text-secondary hover:text-accent-secondary"
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
