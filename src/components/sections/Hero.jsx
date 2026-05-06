import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiCode } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const Hero = () => {
  // Mouse reactive movement for the AI visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-300, 300], [15, -15]);
  const rotateY = useTransform(dx, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const techStack = ['PyTorch', 'TensorFlow', 'LLMs', 'OpenCV', 'Scikit-Learn', 'Python'];

  return (
    <div onMouseMove={handleMouseMove} className="relative overflow-hidden min-h-screen flex items-center pt-20">
      <SectionWrapper id="hero" className="w-full !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Content */}
          <motion.div
            style={{ x: useTransform(dx, [-300, 300], [-10, 10]), y: useTransform(dy, [-300, 300], [-10, 10]) }}
            className="space-y-10 z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
              </span>
              Available for New Projects
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black tracking-tight"
              >
                Arya <span className="glow-text">Sohani</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white/90">
                  AI/ML Engineer
                </h2>
                <p className="text-lg md:text-xl text-accent-secondary/80 font-medium tracking-wide uppercase">
                  Data Science & AI Automation Specialist
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-text-secondary text-lg max-w-xl leading-relaxed"
              >
                AIML graduate focused on building intelligent automation systems,
                LLM workflows, and scalable AI-powered applications.
                Transforming complex data into actionable intelligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {/* View Projects Button */}
                <button
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="btn-primary group"
                >
                  View Projects
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Contact Button */}
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="btn-secondary"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary group">
                View Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Contact Me
              </button>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-6 text-2xl text-text-secondary"
            >
              {[
                { icon: <FiGithub />, href: "https://github.com/aryasohani", label: "GitHub" },
                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/aryasohani22", label: "LinkedIn" },
                { icon: <FiCode />, href: "https://leetcode.com/u/Aryas2211/", label: "LeetCode" },
                { icon: <FiMail />, href: "aryasohani2211@gmail.com", label: "Email" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="hover:text-accent-secondary transition-colors duration-300"
                  aria-label={social.label}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: AI Visual */}
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none"
          >
            {/* Main Orb */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 40px rgba(124, 58, 237, 0.3)",
                  "0 0 80px rgba(0, 212, 255, 0.5)",
                  "0 0 40px rgba(124, 58, 237, 0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-primary relative z-20 overflow-hidden"
            >
              {/* Internal Gradient Sphere */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
            </motion.div>

            {/* Rotating Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8 + i * 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute rounded-full border border-white/10 ${i === 0 ? 'w-64 h-64' : i === 1 ? 'w-80 h-80' : 'w-[400px] h-[400px]'
                  }`}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#00D4FF]`} />
              </motion.div>
            ))}

            {/* Neural Network Lines (Abstract) */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
              <motion.path
                d="M 20,50 Q 50,20 80,50 T 20,50"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="0.2"
                animate={{ strokeDashoffset: [0, 200] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                strokeDasharray="10 5"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#00D4FF" />
                </linearGradient>
              </defs>
            </svg>

            {/* Tech Stack Pills */}
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute glass-card px-4 py-2 text-xs font-bold text-white border border-white/20`}
                style={{
                  top: `${20 + (i % 3) * 30}%`,
                  left: i < 3 ? '10%' : '75%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {tech}
              </motion.div>
            ))}

            {/* Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                  x: [0, Math.random() * 40 - 20, 0],
                  y: [0, Math.random() * 40 - 20, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
