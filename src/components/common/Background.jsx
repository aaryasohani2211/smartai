import { motion } from 'framer-motion';
import { useMemo } from 'react';

const Background = () => {
  // Generate random particles for a subtle star/sparkle effect
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#040a1a]">
      {/* 1. Base Layer: Deep Navy to Indigo Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0c142b_0%,#040a1a_100%)]" />

      {/* 2. Animated Aurora Mesh / Soft Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: ['-10%', '10%', '-10%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-indigo-900/40 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: ['10%', '-10%', '10%'],
          y: ['5%', '-5%', '5%'],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-violet-900/30 blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[10%] w-[90%] h-[90%] rounded-full bg-cyan-900/20 blur-[140px]"
      />

      {/* 3. Subtle Dotted Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 4. Flowing Curved SVG Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -100 500 Q 250 300 500 500 T 1100 500"
          stroke="url(#line-grad)"
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              "M -100 500 Q 250 300 500 500 T 1100 500",
              "M -100 500 Q 250 700 500 500 T 1100 500",
              "M -100 500 Q 250 300 500 500 T 1100 500"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -100 600 Q 300 400 600 600 T 1100 600"
          stroke="url(#line-grad)"
          strokeWidth="0.5"
          fill="none"
          animate={{
            d: [
              "M -100 600 Q 300 400 600 600 T 1100 600",
              "M -100 600 Q 300 800 600 600 T 1100 600",
              "M -100 600 Q 300 400 600 600 T 1100 600"
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* 5. Subtle Particle Animations */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: '#00D4FF',
            borderRadius: '50%',
            filter: 'blur(1px)',
            boxShadow: '0 0 10px #00D4FF',
          }}
        />
      ))}

      {/* 6. Soft Lavender Highlights / Bloom Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,181,253,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.05)_0%,transparent_50%)]" />

      {/* 7. Noise Texture for depth (Lowered opacity for elegance) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default Background;
