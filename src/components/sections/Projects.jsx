// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiGithub, FiExternalLink } from 'react-icons/fi';
// import SectionWrapper from '../common/SectionWrapper';

// const projects = [
//   {
//     title: 'Plant Leaf Disease Detection',
//     tech: ['Python', 'CNN', 'OpenCV', 'VGG16'],
//     description:
//       'Developed a deep learning model to accurately identify diseases in plant leaves, optimizing agricultural output.',
//     image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
//     github: 'https://github.com',
//     liveLink: 'https://example.com',
//   },
//   {
//     title: 'Generative AI for Interior Designing',
//     tech: ['Python', 'Generative AI', 'OpenAI'],
//     description:
//       'An AI-powered design assistant that generates realistic interior concepts based on user text descriptions.',
//     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
//     github: 'https://github.com',
//     liveLink: 'https://example.com',
//   },
//   {
//     title: 'Speech to Image Generation',
//     tech: ['Python', 'AI', 'Speech Recognition'],
//     description:
//       'Real-time conversion of voice commands into high-quality AI-generated imagery using latent diffusion models.',
//     image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
//     github: 'https://github.com',
//     liveLink: 'https://example.com',
//   },
//   {
//     title: 'AI Chat Game',
//     tech: ['Flutter', 'Firebase'],
//     description:
//       'Interactive conversational game powered by Firebase and advanced AI for dynamic NPC interactions.',
//     image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
//     github: 'https://github.com',
//     liveLink: 'https://example.com',
//   },
//   {
//     title: 'Doctor Appointment Booking Bot',
//     tech: ['Python', 'Automation'],
//     description:
//       'A robust automation script for scheduling medical appointments, reducing manual booking time by 80%.',
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
//     github: 'https://github.com',
//     liveLink: 'https://example.com',
//   },
//   {
//     title: 'Hand Detection using YOLOv8',
//     tech: ['YOLOv8', 'OpenCV'],
//     description:
//       'High-speed real-time hand gesture recognition system using the latest YOLOv8 architecture.',
//     image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
//     github: 'https://github.com',
//     liveLink: 'https://example.com',
//   },
// ];

// /* ─── Corner bracket positions ─────────────────────────────── */
// const corners = [
//   { top: 0, left: 0, rotate: '0deg' },
//   { top: 0, right: 0, rotate: '90deg' },
//   { bottom: 0, right: 0, rotate: '180deg' },
//   { bottom: 0, left: 0, rotate: '270deg' },
// ];

// /* ─── Single card ───────────────────────────────────────────── */
// const ProjectCard = ({ project, index }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => window.open(project.liveLink, '_blank')}
//       style={{
//         position: 'relative',
//         cursor: 'pointer',
//         overflow: 'hidden',
//         /* quadrilateral — chamfered all four corners */
//         clipPath:
//           'polygon(0% 4%, 4% 0%, 96% 0%, 100% 4%, 100% 96%, 96% 100%, 4% 100%, 0% 96%)',
//         aspectRatio: '4/3',
//         background: '#0a0a0a',
//         boxShadow: hovered
//           ? '0 0 0 1.5px #c8a96e, 0 24px 60px rgba(200,169,110,0.18)'
//           : '0 0 0 1px #2a2a2a, 0 8px 30px rgba(0,0,0,0.5)',
//         transform: hovered ? 'translateY(-5px) scale(1.015)' : 'none',
//         transition: 'box-shadow 0.4s ease, transform 0.4s ease',
//       }}
//     >
//       {/* ── Background image ── */}
//       <img
//         src={project.image}
//         alt={project.title}
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           display: 'block',
//           transform: hovered ? 'scale(1.09)' : 'scale(1)',
//           filter: hovered ? 'brightness(0.28)' : 'brightness(0.7)',
//           transition: 'transform 0.6s ease, filter 0.6s ease',
//         }}
//       />

//       {/* ── Corner accent brackets ── */}
//       {corners.map(({ rotate, ...position }, i) => (
//         <span
//           key={i}
//           style={{
//             position: 'absolute',
//             width: '18px',
//             height: '18px',
//             borderTop: '2px solid #c8a96e',
//             borderLeft: '2px solid #c8a96e',
//             transform: `rotate(${rotate})`,
//             opacity: hovered ? 1 : 0.35,
//             transition: 'opacity 0.4s ease',
//             zIndex: 10,
//             ...position,
//           }}
//         />
//       ))}

//       {/* ── Default title bar (slides away on hover) ── */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           padding: '14px 18px',
//           background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)',
//           transform: hovered ? 'translateY(100%)' : 'translateY(0)',
//           transition: 'transform 0.4s ease',
//           zIndex: 5,
//         }}
//       >
//         <h3 className="text-sm font-black uppercase tracking-widest text-white/90 m-0">
//           {project.title}
//         </h3>
//       </div>

//       {/* ── Hover overlay — slides up from bottom ── */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           background: 'rgba(8, 8, 8, 0.86)',
//           backdropFilter: 'blur(8px)',
//           WebkitBackdropFilter: 'blur(8px)',
//           padding: '20px 18px 18px',
//           borderTop: '1px solid rgba(200,169,110,0.3)',
//           transform: hovered ? 'translateY(0)' : 'translateY(100%)',
//           transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
//           zIndex: 8,
//         }}
//       >
//         {/* Title */}
//         <h3
//           className="font-black uppercase tracking-widest mb-2"
//           style={{ fontSize: '0.88rem', color: '#c8a96e', margin: '0 0 8px' }}
//         >
//           {project.title}
//         </h3>

//         {/* Description */}
//         <p
//           className="leading-relaxed"
//           style={{ fontSize: '0.78rem', color: 'rgba(240,230,208,0.82)', margin: '0 0 12px' }}
//         >
//           {project.description}
//         </p>

//         {/* Tech tags */}
//         <div className="flex flex-wrap gap-1.5 mb-3">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               style={{
//                 padding: '2px 9px',
//                 border: '1px solid rgba(200,169,110,0.45)',
//                 borderRadius: '1px',
//                 fontSize: '0.65rem',
//                 fontFamily: 'monospace',
//                 color: '#c8a96e',
//                 letterSpacing: '0.07em',
//                 background: 'rgba(200,169,110,0.07)',
//               }}
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Action buttons */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
//             className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 uppercase"
//             style={{
//               fontSize: '0.68rem',
//               fontFamily: 'monospace',
//               letterSpacing: '0.08em',
//               color: 'rgba(240,230,208,0.65)',
//             }}
//           >
//             <FiGithub size={13} /> GitHub
//           </button>

//           <button
//             onClick={(e) => { e.stopPropagation(); window.open(project.liveLink, '_blank'); }}
//             className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 uppercase"
//             style={{
//               fontSize: '0.68rem',
//               fontFamily: 'monospace',
//               letterSpacing: '0.08em',
//               color: '#c8a96e',
//             }}
//           >
//             <FiExternalLink size={13} /> Live
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// /* ─── Section ───────────────────────────────────────────────── */
// const Projects = () => (
//   <SectionWrapper id="projects">
//     {/* Heading */}
//     <div className="text-center mb-16">
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
//         style={{ color: '#c8a96e' }}
//       >
//         — Selected Work —
//       </motion.p>

//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.08 }}
//         className="text-4xl md:text-5xl font-black mb-4"
//       >
//         Featured <span className="glow-text">Projects</span>
//       </motion.h2>

//       <motion.div
//         initial={{ scaleX: 0 }}
//         whileInView={{ scaleX: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         style={{
//           width: '60px',
//           height: '1px',
//           background: 'linear-gradient(to right, transparent, #c8a96e, transparent)',
//           margin: '0 auto 14px',
//         }}
//       />

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.25 }}
//         className="text-text-secondary max-w-2xl mx-auto"
//       >
//         A showcase of my work in artificial intelligence, computer vision, and automation.
//       </motion.p>
//     </div>

//     {/* Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//       {projects.map((project, index) => (
//         <ProjectCard key={project.title} project={project} index={index} />
//       ))}
//     </div>

//     {/* Hint */}
//     <motion.p
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.4 }}
//       className="text-center mt-14 text-xs uppercase tracking-[0.2em]"
//       style={{ color: 'rgba(200,169,110,0.3)', fontFamily: 'monospace' }}
//     >
//       Hover to explore · Click to visit
//     </motion.p>
//   </SectionWrapper>
// );

// export default Projects;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA  — topic-matched Unsplash images, NO color filter
───────────────────────────────────────────────────────────────*/
const projects = [
  {
    id: 1,
    title: 'Plant Leaf Disease Detection',
    subtitle: 'Deep Learning · Computer Vision',
    tech: ['Python', 'CNN', 'OpenCV', 'VGG16'],
    description:
      'Deep learning model that identifies 38 plant diseases with 96% accuracy using transfer learning on VGG16, deployed as a real-time web app for farmers.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80',
    accent: '#22c55e',          // green — plant/nature
    accentDim: 'rgba(34,197,94,0.12)',
    accentBorder: 'rgba(34,197,94,0.35)',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    number: '01',
  },
  {
    id: 2,
    title: 'Generative AI Interior Design',
    subtitle: 'Generative AI · OpenAI API',
    tech: ['Python', 'Stable Diffusion', 'OpenAI', 'FastAPI'],
    description:
      'AI assistant that transforms text prompts into photorealistic interior renders. Users describe their dream room; the model visualizes it in seconds.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    accent: '#a78bfa',          // violet — creative/AI
    accentDim: 'rgba(167,139,250,0.12)',
    accentBorder: 'rgba(167,139,250,0.35)',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    number: '02',
  },
  {
    id: 3,
    title: 'Speech → Image Generation',
    subtitle: 'Multimodal AI · Speech Recognition',
    tech: ['Python', 'Whisper', 'DALL·E', 'React'],
    description:
      'Speak your imagination — Whisper transcribes voice input in real-time, which feeds directly into a latent diffusion pipeline to generate high-fidelity images.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
    accent: '#06b6d4',          // cyan — tech/audio
    accentDim: 'rgba(6,182,212,0.12)',
    accentBorder: 'rgba(6,182,212,0.35)',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    number: '03',
  },
  {
    id: 4,
    title: 'AI Chat Game',
    subtitle: 'Flutter · Firebase · NLP',
    tech: ['Flutter', 'Firebase', 'Gemini API', 'Dart'],
    description:
      'Immersive mobile RPG where every NPC is powered by an LLM. Dynamic story branches, persistent memory, and adaptive dialogue make each playthrough unique.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80',
    accent: '#f59e0b',          // amber — gaming/fun
    accentDim: 'rgba(245,158,11,0.12)',
    accentBorder: 'rgba(245,158,11,0.35)',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    number: '04',
  },
  {
    id: 5,
    title: 'Doctor Appointment Bot',
    subtitle: 'Automation · Healthcare',
    tech: ['Python', 'Selenium', 'Twilio', 'FastAPI'],
    description:
      'Intelligent booking automation that scrapes availability, matches patient preferences, and sends SMS confirmations — cutting scheduling time by 80%.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    accent: '#38bdf8',          // sky — medical/clean
    accentDim: 'rgba(56,189,248,0.12)',
    accentBorder: 'rgba(56,189,248,0.35)',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    number: '05',
  },
  {
    id: 6,
    title: 'Hand Detection — YOLOv8',
    subtitle: 'Real-time CV · Object Detection',
    tech: ['YOLOv8', 'OpenCV', 'Python', 'CUDA'],
    description:
      'Sub-20ms real-time hand gesture recognition system trained on 50k+ annotated frames. Runs at 60 FPS on GPU, enabling touchless UI control.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    accent: '#f43f5e',          // rose — detection/precision
    accentDim: 'rgba(244,63,94,0.12)',
    accentBorder: 'rgba(244,63,94,0.35)',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    number: '06',
  },
];

/* ─────────────────────────────────────────────────────────────
   SINGLE CARD
───────────────────────────────────────────────────────────────*/
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(project.liveLink, '_blank')}
      style={{
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '16px',
        overflow: 'hidden',
        aspectRatio: '4 / 3',
        background: '#080c1a',
        outline: hovered
          ? `1.5px solid ${project.accent}`
          : '1px solid rgba(255,255,255,0.07)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0px)',
        transition: 'outline 0.3s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1)',
        willChange: 'transform',
      }}
    >
      {/* ── 1. Background image — NO colour filter, full natural photo ── */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          filter: hovered ? 'brightness(0.25)' : 'brightness(0.55)',
          transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease',
        }}
      />

      {/* ── 2. Permanent bottom gradient (title always readable) ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(4,6,20,0.97) 0%, rgba(4,6,20,0.55) 38%, transparent 65%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── 3. Accent colour glow — bottom edge, always subtle ── */}
      <div
        style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          height: '3px',
          background: project.accent,
          zIndex: 12,
          opacity: hovered ? 1 : 0.45,
          transition: 'opacity 0.35s ease',
          boxShadow: `0 0 18px 2px ${project.accent}`,
        }}
      />

      {/* ── 4. Project number badge (top-left) ── */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 10,
          fontFamily: '"DM Mono", "Fira Mono", monospace',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: project.accent,
          background: project.accentDim,
          border: `1px solid ${project.accentBorder}`,
          borderRadius: '4px',
          padding: '3px 10px',
          backdropFilter: 'blur(6px)',
        }}
      >
        {project.number}
      </div>

      {/* ── 5. Top-right: GitHub icon ── */}
      <motion.button
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '8px',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          backdropFilter: 'blur(8px)',
        }}
      >
        <FiGithub size={15} />
      </motion.button>

      {/* ── 6. Default state: title bar at bottom ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 20px 22px',
          zIndex: 5,
          transform: hovered ? 'translateY(8px)' : 'translateY(0)',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.25s ease, transform 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <p
          style={{
            margin: '0 0 4px',
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: project.accent,
          }}
        >
          {project.subtitle}
        </p>
        <h3
          style={{
            margin: 0,
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.3,
            color: '#f1f5ff',
            letterSpacing: '0.01em',
          }}
        >
          {project.title}
        </h3>
      </div>

      {/* ── 7. Hover overlay: slides up — pure dark bg, no colour wash ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 8,
              padding: '22px 20px 20px',
              background: 'rgba(4,6,20,0.92)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderTop: `1px solid ${project.accentBorder}`,
            }}
          >
            {/* Subtitle label */}
            <p
              style={{
                margin: '0 0 6px',
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: project.accent,
              }}
            >
              {project.subtitle}
            </p>

            {/* Title */}
            <h3
              style={{
                margin: '0 0 10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#f1f5ff',
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                margin: '0 0 14px',
                fontSize: '0.79rem',
                lineHeight: 1.65,
                color: 'rgba(200,210,240,0.78)',
              }}
            >
              {project.description}
            </p>

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '0.62rem',
                    fontFamily: '"DM Mono", monospace',
                    letterSpacing: '0.07em',
                    fontWeight: 600,
                    color: project.accent,
                    background: project.accentDim,
                    border: `1px solid ${project.accentBorder}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(200,210,240,0.85)',
                  fontSize: '0.7rem',
                  fontFamily: '"DM Mono", monospace',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                <FiGithub size={13} /> Code
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); window.open(project.liveLink, '_blank'); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  background: project.accentDim,
                  border: `1px solid ${project.accentBorder}`,
                  color: project.accent,
                  fontSize: '0.7rem',
                  fontFamily: '"DM Mono", monospace',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                <FiExternalLink size={13} /> Live Demo
              </button>

              {/* Arrow badge */}
              <div
                style={{
                  marginLeft: 'auto',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: project.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FiArrowUpRight size={16} color="#fff" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────────*/
const Projects = () => (
  <SectionWrapper id="projects">
    {/* ── Section heading ── */}
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#7c3aed',
          marginBottom: '12px',
        }}
      >
        — Selective Work —
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.07 }}
        className="text-4xl md:text-5xl font-black mb-4"
      >
        Featured <span className="glow-text">Projects</span>
      </motion.h2>

      {/* purple → cyan divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.18, duration: 0.6 }}
        style={{
          width: '80px',
          height: '2px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
          margin: '0 auto 16px',
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22 }}
        className="text-text-secondary max-w-2xl mx-auto text-sm"
      >
        A showcase of my work in artificial intelligence, computer vision, and automation.
      </motion.p>
    </div>

    {/* ── Cards grid ── */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
      className="project-grid"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>

    {/* ── Responsive grid styles ── */}
    <style>{`
      @media (max-width: 900px) { .project-grid { grid-template-columns: repeat(2,1fr) !important; } }
      @media (max-width: 560px) { .project-grid { grid-template-columns: 1fr !important; } }
    `}</style>

    {/* ── Footer hint ── */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35 }}
      style={{
        textAlign: 'center',
        marginTop: '52px',
        fontFamily: '"DM Mono", monospace',
        fontSize: '0.68rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(124,58,237,0.35)',
      }}
    >
      Hover to explore · Click to visit live demo
    </motion.p>
  </SectionWrapper>
);

export default Projects;