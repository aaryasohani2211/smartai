import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Plant Leaf Disease Detection',
      tech: ['Python', 'CNN', 'OpenCV', 'VGG16'],
      description: 'Developed a deep learning model to accurately identify diseases in plant leaves, optimizing agricultural output.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Generative AI for Interior Designing',
      tech: ['Python', 'Generative AI', 'OpenAI'],
      description: 'An AI-powered design assistant that generates realistic interior concepts based on user text descriptions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Speech to Image Generation',
      tech: ['Python', 'AI', 'Speech Recognition'],
      description: 'Real-time conversion of voice commands into high-quality AI-generated imagery using latent diffusion models.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Chat Game',
      tech: ['Flutter', 'Firebase'],
      description: 'Interactive conversational game powered by Firebase and advanced AI for dynamic NPC interactions.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Doctor Appointment Booking Bot',
      tech: ['Python', 'Automation'],
      description: 'A robust automation script for scheduling medical appointments, reducing manual booking time by 80%.',
      color: 'from-rose-500 to-red-500'
    },
    {
      title: 'Hand Detection using YOLOv8',
      tech: ['YOLOv8', 'OpenCV'],
      description: 'High-speed real-time hand gesture recognition system using the latest YOLOv8 architecture.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Featured <span className="glow-text">Projects</span>
        </motion.h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A showcase of my work in artificial intelligence, computer vision, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative h-full"
          >
            {/* Gradient Border Glow */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md`} />
            
            <div className="relative h-full glass-card overflow-hidden flex flex-col">
              {/* Project Image Placeholder / Header */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-20 relative flex items-center justify-center overflow-hidden`}>
                <FiCode className="text-6xl text-white/20 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]" 
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-bg-card/80 flex items-center justify-center gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-accent-primary transition-colors"
                  >
                    <FiGithub size={20} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-accent-secondary transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-accent-secondary border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bottom Bar */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Case Study</span>
                  <FiArrowRight className="text-accent-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// Simple arrow component for the card
const FiArrowRight = ({ className }) => (
  <svg 
    stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" 
    className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Projects;
