// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
// import SectionWrapper from '../common/SectionWrapper';

// const Projects = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const projects = [
//     {
//       title: 'Plant Leaf Disease Detection',
//       tech: ['Python', 'CNN', 'OpenCV', 'VGG16'],
//       description: 'Developed a deep learning model to accurately identify diseases in plant leaves, optimizing agricultural output.',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       title: 'Generative AI for Interior Designing',
//       tech: ['Python', 'Generative AI', 'OpenAI'],
//       description: 'An AI-powered design assistant that generates realistic interior concepts based on user text descriptions.',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       title: 'Speech to Image Generation',
//       tech: ['Python', 'AI', 'Speech Recognition'],
//       description: 'Real-time conversion of voice commands into high-quality AI-generated imagery using latent diffusion models.',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       title: 'AI Chat Game',
//       tech: ['Flutter', 'Firebase'],
//       description: 'Interactive conversational game powered by Firebase and advanced AI for dynamic NPC interactions.',
//       color: 'from-orange-500 to-yellow-500'
//     },
//     {
//       title: 'Doctor Appointment Booking Bot',
//       tech: ['Python', 'Automation'],
//       description: 'A robust automation script for scheduling medical appointments, reducing manual booking time by 80%.',
//       color: 'from-rose-500 to-red-500'
//     },
//     {
//       title: 'Hand Detection using YOLOv8',
//       tech: ['YOLOv8', 'OpenCV'],
//       description: 'High-speed real-time hand gesture recognition system using the latest YOLOv8 architecture.',
//       color: 'from-indigo-500 to-blue-500'
//     }
//   ];

//   return (
//     <SectionWrapper id="projects">
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-black mb-4"
//         >
//           Featured <span className="glow-text">Projects</span>
//         </motion.h2>
//         <p className="text-text-secondary max-w-2xl mx-auto">
//           A showcase of my work in artificial intelligence, computer vision, and automation.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="group relative h-full"
//           >
//             {/* Gradient Border Glow */}
//             <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md`} />

//             <div className="relative h-full glass-card overflow-hidden flex flex-col">
//               {/* Project Image Placeholder / Header */}
//               <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-20 relative flex items-center justify-center overflow-hidden`}>
//                 <FiCode className="text-6xl text-white/20 group-hover:scale-110 transition-transform duration-500" />

//                 {/* Spotlight effect */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]"
//                   onMouseMove={(e) => {
//                     const rect = e.currentTarget.getBoundingClientRect();
//                     e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
//                     e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
//                   }}
//                 />

//                 {/* Animated Overlay */}
//                 <div className="absolute inset-0 bg-bg-card/80 flex items-center justify-center gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-3 bg-white/10 rounded-full text-white hover:bg-accent-primary transition-colors"
//                   >
//                     <FiGithub size={20} />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-3 bg-white/10 rounded-full text-white hover:bg-accent-secondary transition-colors"
//                   >
//                     <FiExternalLink size={20} />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex-grow flex flex-col">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((t) => (
//                     <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-accent-secondary border border-white/10">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-secondary transition-colors">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-text-secondary leading-relaxed mb-6">
//                   {project.description}
//                 </p>

//                 {/* Bottom Bar */}
//                 <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
//                   <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Case Study</span>
//                   <FiArrowRight className="text-accent-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// };

// // Simple arrow component for the card
// const FiArrowRight = ({ className }) => (
//   <svg
//     stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
//     className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
//   >
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//     <polyline points="12 5 19 12 12 19"></polyline>
//   </svg>
// );

// export default Projects;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const projects = [
  {
    title: 'Plant Leaf Disease Detection',
    tech: ['Python', 'CNN', 'OpenCV', 'VGG16'],
    description:
      'Developed a deep learning model to accurately identify diseases in plant leaves, optimizing agricultural output.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
    github: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Generative AI for Interior Designing',
    tech: ['Python', 'Generative AI', 'OpenAI'],
    description:
      'An AI-powered design assistant that generates realistic interior concepts based on user text descriptions.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    github: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Speech to Image Generation',
    tech: ['Python', 'AI', 'Speech Recognition'],
    description:
      'Real-time conversion of voice commands into high-quality AI-generated imagery using latent diffusion models.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    github: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'AI Chat Game',
    tech: ['Flutter', 'Firebase'],
    description:
      'Interactive conversational game powered by Firebase and advanced AI for dynamic NPC interactions.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    github: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Doctor Appointment Booking Bot',
    tech: ['Python', 'Automation'],
    description:
      'A robust automation script for scheduling medical appointments, reducing manual booking time by 80%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    github: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Hand Detection using YOLOv8',
    tech: ['YOLOv8', 'OpenCV'],
    description:
      'High-speed real-time hand gesture recognition system using the latest YOLOv8 architecture.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
    github: 'https://github.com',
    liveLink: 'https://example.com',
  },
];

/* ─── Corner bracket positions ─────────────────────────────── */
const corners = [
  { top: 0, left: 0, rotate: '0deg' },
  { top: 0, right: 0, rotate: '90deg' },
  { bottom: 0, right: 0, rotate: '180deg' },
  { bottom: 0, left: 0, rotate: '270deg' },
];

/* ─── Single card ───────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(project.liveLink, '_blank')}
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        /* quadrilateral — chamfered all four corners */
        clipPath:
          'polygon(0% 4%, 4% 0%, 96% 0%, 100% 4%, 100% 96%, 96% 100%, 4% 100%, 0% 96%)',
        aspectRatio: '4/3',
        background: '#0a0a0a',
        boxShadow: hovered
          ? '0 0 0 1.5px #c8a96e, 0 24px 60px rgba(200,169,110,0.18)'
          : '0 0 0 1px #2a2a2a, 0 8px 30px rgba(0,0,0,0.5)',
        transform: hovered ? 'translateY(-5px) scale(1.015)' : 'none',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* ── Background image ── */}
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.09)' : 'scale(1)',
          filter: hovered ? 'brightness(0.28)' : 'brightness(0.7)',
          transition: 'transform 0.6s ease, filter 0.6s ease',
        }}
      />

      {/* ── Corner accent brackets ── */}
      {corners.map(({ rotate, ...position }, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            width: '18px',
            height: '18px',
            borderTop: '2px solid #c8a96e',
            borderLeft: '2px solid #c8a96e',
            transform: `rotate(${rotate})`,
            opacity: hovered ? 1 : 0.35,
            transition: 'opacity 0.4s ease',
            zIndex: 10,
            ...position,
          }}
        />
      ))}

      {/* ── Default title bar (slides away on hover) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '14px 18px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)',
          transform: hovered ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 0.4s ease',
          zIndex: 5,
        }}
      >
        <h3 className="text-sm font-black uppercase tracking-widest text-white/90 m-0">
          {project.title}
        </h3>
      </div>

      {/* ── Hover overlay — slides up from bottom ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(8, 8, 8, 0.86)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '20px 18px 18px',
          borderTop: '1px solid rgba(200,169,110,0.3)',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 8,
        }}
      >
        {/* Title */}
        <h3
          className="font-black uppercase tracking-widest mb-2"
          style={{ fontSize: '0.88rem', color: '#c8a96e', margin: '0 0 8px' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed"
          style={{ fontSize: '0.78rem', color: 'rgba(240,230,208,0.82)', margin: '0 0 12px' }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: '2px 9px',
                border: '1px solid rgba(200,169,110,0.45)',
                borderRadius: '1px',
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                color: '#c8a96e',
                letterSpacing: '0.07em',
                background: 'rgba(200,169,110,0.07)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
            className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 uppercase"
            style={{
              fontSize: '0.68rem',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              color: 'rgba(240,230,208,0.65)',
            }}
          >
            <FiGithub size={13} /> GitHub
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); window.open(project.liveLink, '_blank'); }}
            className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 uppercase"
            style={{
              fontSize: '0.68rem',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              color: '#c8a96e',
            }}
          >
            <FiExternalLink size={13} /> Live
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Section ───────────────────────────────────────────────── */
const Projects = () => (
  <SectionWrapper id="projects">
    {/* Heading */}
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
        style={{ color: '#c8a96e' }}
      >
        — Selected Work —
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="text-4xl md:text-5xl font-black mb-4"
      >
        Featured <span className="glow-text">Projects</span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, #c8a96e, transparent)',
          margin: '0 auto 14px',
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="text-text-secondary max-w-2xl mx-auto"
      >
        A showcase of my work in artificial intelligence, computer vision, and automation.
      </motion.p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>

    {/* Hint */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="text-center mt-14 text-xs uppercase tracking-[0.2em]"
      style={{ color: 'rgba(200,169,110,0.3)', fontFamily: 'monospace' }}
    >
      Hover to explore · Click to visit
    </motion.p>
  </SectionWrapper>
);

export default Projects;