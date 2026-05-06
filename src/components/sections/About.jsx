import { motion } from 'framer-motion';
import { FiCpu, FiDatabase, FiLayers, FiCode } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const About = () => {
  const skills = [
    {
      title: 'AI Automation',
      description: 'Streamlining complex workflows with intelligent agentic systems.',
      icon: <FiCpu />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Machine Learning',
      description: 'Developing predictive models and deep learning architectures.',
      icon: <FiDatabase />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'LLM Workflows',
      description: 'Building custom solutions with LangChain and OpenAI APIs.',
      icon: <FiLayers />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Python Development',
      description: 'Architecting scalable backend systems for AI applications.',
      icon: <FiCode />,
      color: 'from-orange-500 to-rose-500'
    }
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1
      }
    })
  };

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              About <span className="glow-text">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-8" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed text-justify"
          >
            Arya Sohani is an <span className="text-white font-semibold">AI/ML Engineer</span> specializing in intelligent automation, 
            machine learning systems, and LLM-powered applications. With hands-on experience in 
            workflow automation, deep learning, LangChain, OpenAI APIs, and scalable AI solutions, 
            Arya focuses on solving real-world problems using modern AI technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-8 pt-6"
          >
            <div>
              <h4 className="text-3xl font-bold text-white">20+</h4>
              <p className="text-sm text-text-secondary">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">99%</h4>
              <p className="text-sm text-text-secondary">AI Accuracy Focus</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* Decorative Background Glow */}
          <div className="absolute inset-0 bg-accent-primary/5 blur-[100px] rounded-full -z-10" />
          
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 group cursor-default relative overflow-hidden"
            >
              {/* Card Hover Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none -z-10" />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg shadow-black/20`}>
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-secondary transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-sm text-text-secondary leading-relaxed">
                {skill.description}
              </p>

              {/* Animated corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;
