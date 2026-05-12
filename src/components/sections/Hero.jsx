// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiCode } from 'react-icons/fi';
// import SectionWrapper from '../common/SectionWrapper';

// const Hero = () => {
//   // Mouse reactive movement for the AI visual
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 150 };
//   const dx = useSpring(mouseX, springConfig);
//   const dy = useSpring(mouseY, springConfig);

//   const rotateX = useTransform(dy, [-300, 300], [15, -15]);
//   const rotateY = useTransform(dx, [-300, 300], [-15, 15]);

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const { innerWidth, innerHeight } = window;
//     mouseX.set(clientX - innerWidth / 2);
//     mouseY.set(clientY - innerHeight / 2);
//   };

//   const techStack = ['PyTorch', 'TensorFlow', 'LLMs', 'OpenCV', 'Scikit-Learn', 'Python'];

//   return (
//     <div onMouseMove={handleMouseMove} className="relative overflow-hidden min-h-screen flex items-center pt-20">
//       <SectionWrapper id="hero" className="w-full !py-0">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

//           {/* Left Side: Content */}
//           <motion.div
//             style={{ x: useTransform(dx, [-300, 300], [-10, 10]), y: useTransform(dy, [-300, 300], [-10, 10]) }}
//             className="space-y-10 z-10"
//           >
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary text-sm font-medium"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
//               </span>
//               Available for New Projects
//             </motion.div>

//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-5xl md:text-7xl font-black tracking-tight"
//               >
//                 Arya <span className="glow-text">Sohani</span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="space-y-1"
//               >
//                 <h2 className="text-2xl md:text-3xl font-bold text-white/90">
//                   AI/ML Engineer
//                 </h2>
//                 <p className="text-lg md:text-xl text-accent-secondary/80 font-medium tracking-wide uppercase">
//                   Data Science & AI Automation Specialist
//                 </p>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-text-secondary text-lg max-w-xl leading-relaxed"
//               >
//                 AIML graduate focused on building intelligent automation systems,
//                 LLM workflows, and scalable AI-powered applications.
//                 Transforming complex data into actionable intelligence.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 {/* View Projects Button */}
//                 <button
//                   onClick={() =>
//                     document.getElementById("projects")?.scrollIntoView({
//                       behavior: "smooth",
//                     })
//                   }
//                   className="btn-primary group"
//                 >
//                   View Projects
//                   <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>

//                 {/* Contact Button */}
//                 <button
//                   onClick={() =>
//                     document.getElementById("contact")?.scrollIntoView({
//                       behavior: "smooth",
//                     })
//                   }
//                   className="btn-secondary"
//                 >
//                   Contact Me
//                 </button>
//               </motion.div>
//             </div>

//             {/* <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="flex flex-wrap gap-4"
//             >
//               <button className="btn-primary group">
//                 View Projects
//                 <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="btn-secondary">
//                 Contact Me
//               </button>
//             </motion.div> */}

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="flex items-center gap-6 text-2xl text-text-secondary"
//             >
//               {[
//                 { icon: <FiGithub />, href: "https://github.com/aryasohani", label: "GitHub" },
//                 { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/aryasohani22", label: "LinkedIn" },
//                 { icon: <FiCode />, href: "https://leetcode.com/u/Aryas2211/", label: "LeetCode" },
//                 { icon: <FiMail />, href: "aryasohani2211@gmail.com", label: "Email" }
//               ].map((social, i) => (
//                 <a
//                   key={i}
//                   href={social.href}
//                   className="hover:text-accent-secondary transition-colors duration-300"
//                   aria-label={social.label}
//                   target="_blank"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Side: AI Visual */}
//           <motion.div
//             style={{ rotateX, rotateY, perspective: 1000 }}
//             className="relative h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none"
//           >
//             {/* Main Orb */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.1, 1],
//                 boxShadow: [
//                   "0 0 40px rgba(124, 58, 237, 0.3)",
//                   "0 0 80px rgba(0, 212, 255, 0.5)",
//                   "0 0 40px rgba(124, 58, 237, 0.3)"
//                 ]
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-primary relative z-20 overflow-hidden"
//             >
//               {/* Internal Gradient Sphere */}
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//                   backgroundSize: '20px 20px'
//                 }}
//               />
//             </motion.div>

//             {/* Rotating Rings */}
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 8 + i * 4,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 className={`absolute rounded-full border border-white/10 ${i === 0 ? 'w-64 h-64' : i === 1 ? 'w-80 h-80' : 'w-[400px] h-[400px]'
//                   }`}
//               >
//                 <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#00D4FF]`} />
//               </motion.div>
//             ))}

//             {/* Neural Network Lines (Abstract) */}
//             <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
//               <motion.path
//                 d="M 20,50 Q 50,20 80,50 T 20,50"
//                 fill="none"
//                 stroke="url(#grad1)"
//                 strokeWidth="0.2"
//                 animate={{ strokeDashoffset: [0, 200] }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 strokeDasharray="10 5"
//               />
//               <defs>
//                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#7C3AED" />
//                   <stop offset="100%" stopColor="#00D4FF" />
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* Tech Stack Pills */}
//             {techStack.map((tech, i) => (
//               <motion.div
//                 key={tech}
//                 animate={{
//                   y: [0, -15, 0],
//                   opacity: [0.6, 1, 0.6]
//                 }}
//                 transition={{
//                   duration: 4,
//                   delay: i * 0.5,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className={`absolute glass-card px-4 py-2 text-xs font-bold text-white border border-white/20`}
//                 style={{
//                   top: `${20 + (i % 3) * 30}%`,
//                   left: i < 3 ? '10%' : '75%',
//                   transform: 'translate(-50%, -50%)'
//                 }}
//               >
//                 {tech}
//               </motion.div>
//             ))}

//             {/* Particles */}
//             {[...Array(15)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 animate={{
//                   scale: [1, 1.5, 1],
//                   opacity: [0.2, 0.6, 0.2],
//                   x: [0, Math.random() * 40 - 20, 0],
//                   y: [0, Math.random() * 40 - 20, 0]
//                 }}
//                 transition={{
//                   duration: 3 + Math.random() * 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute w-1 h-1 bg-white rounded-full"
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`
//                 }}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </SectionWrapper>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiCode } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

/* ═══════════════════════════════════════════════════════════════
   NEURAL NET CANVAS  — fully NaN-safe
═══════════════════════════════════════════════════════════════*/
const NeuralCanvas = () => {
  const ref = useRef(null);
  const raf = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    /* ── size ── */
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* ── mouse (smooth lerp in draw loop) ── */
    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      target.current.x = (e.clientX - r.left - r.width / 2) / r.width;
      target.current.y = (e.clientY - r.top - r.height / 2) / r.height;
    };
    window.addEventListener('mousemove', onMouse);

    /* ── build nodes on sphere (Fibonacci) ── */
    const N = 80;
    const phi = Math.PI * (3 - Math.sqrt(5));
    const nodes = Array.from({ length: N }, (_, i) => {
      const ny = 1 - (i / (N - 1)) * 2;
      const rr = Math.sqrt(Math.max(0, 1 - ny * ny));
      const theta = phi * i;
      return {
        ox: Math.cos(theta) * rr,
        oy: ny,
        oz: Math.sin(theta) * rr,
        sz: 1.4 + Math.random() * 2,
        ph: Math.random() * Math.PI * 2,
        sp: 0.6 + Math.random() * 0.8,
      };
    });

    /* ── edges: connect close neighbours ── */
    const edges = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = nodes[i].ox - nodes[j].ox;
        const dy = nodes[i].oy - nodes[j].oy;
        const dz = nodes[i].oz - nodes[j].oz;
        if (dx * dx + dy * dy + dz * dz < 0.18) edges.push([i, j]);
      }
    }

    /* ── helpers ── */
    const safe = (v) => (isFinite(v) ? v : 0);
    const clamp01 = (v) => Math.min(1, Math.max(0, v));

    /* ── draw ── */
    let t = 0;
    const draw = () => {
      raf.current = requestAnimationFrame(draw);
      t += 0.004;

      /* smooth mouse lerp */
      mouse.current.x += (target.current.x - mouse.current.x) * 0.06;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.06;

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      if (W === 0 || H === 0) return;
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) * 0.36;

      ctx.clearRect(0, 0, W, H);

      /* rotation angles */
      const aY = t + mouse.current.x * 0.5;
      const aX = Math.sin(t * 0.35) * 0.22 + mouse.current.y * 0.4;
      const cY = Math.cos(aY), sY = Math.sin(aY);
      const cX = Math.cos(aX), sX = Math.sin(aX);

      /* project */
      const proj = nodes.map((n) => {
        /* rotate Y */
        const x1 = n.ox * cY - n.oz * sY;
        const z1 = n.ox * sY + n.oz * cY;
        /* rotate X */
        const y2 = n.oy * cX - z1 * sX;
        const z2 = n.oy * sX + z1 * cX;
        /* perspective */
        const fov = 2.4;
        const scale = fov / (fov + z2);
        return {
          px: safe(cx + x1 * R * scale),
          py: safe(cy + y2 * R * scale),
          depth: clamp01((z2 + 1) / 2),
          scale: clamp01(scale),
        };
      });

      /* ── edges ── */
      edges.forEach(([i, j]) => {
        const a = proj[i];
        const b = proj[j];
        const dist = Math.hypot(a.px - b.px, a.py - b.py);
        if (dist < 1 || dist > R * 0.6) return;           // skip zero-len

        const depth = clamp01((a.depth + b.depth) * 0.5);
        if (depth < 0.15) return;
        const alpha = clamp01(depth * 0.5 * (1 - dist / (R * 0.6)));
        if (alpha < 0.01) return;

        const g = ctx.createLinearGradient(a.px, a.py, b.px, b.py);
        const a0 = alpha.toFixed(3);
        g.addColorStop(0, `rgba(124,58,237,${a0})`);
        g.addColorStop(1, `rgba(6,182,212,${a0})`);
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = g;
        ctx.lineWidth = clamp01(0.8 * a.scale);
        ctx.stroke();
      });

      /* ── nodes ── */
      nodes.forEach((n, i) => {
        const p = proj[i];
        if (p.depth < 0.1) return;
        const pulse = 0.7 + 0.3 * Math.sin(t * n.sp * 3 + n.ph);
        const r = Math.max(0.3, n.sz * p.scale * pulse);
        const alpha = clamp01(p.depth * 0.95);

        /* glow halo */
        const gr = r * 4;
        if (gr > 0.5) {
          const g = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, gr);
          g.addColorStop(0, `rgba(167,139,250,${(alpha * 0.45).toFixed(3)})`);
          g.addColorStop(1, 'rgba(6,182,212,0)');
          ctx.beginPath();
          ctx.arc(p.px, p.py, gr, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        /* dot */
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0
          ? `rgba(6,182,212,${alpha.toFixed(3)})`
          : `rgba(167,139,250,${alpha.toFixed(3)})`;
        ctx.fill();
      });

      /* ── travelling signal ── */
      if (edges.length > 0) {
        const ei = Math.floor(t * 7) % edges.length;
        const [si, sj] = edges[ei];
        const ap = proj[si];
        const bp = proj[sj];
        const edgeLen = Math.hypot(ap.px - bp.px, ap.py - bp.py);
        if (edgeLen > 1 && isFinite(ap.px) && isFinite(ap.py)) {
          const prog = (t * 7) % 1;
          const sx = ap.px + (bp.px - ap.px) * prog;
          const sy = ap.py + (bp.py - ap.py) * prog;
          if (isFinite(sx) && isFinite(sy)) {
            const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 7);
            sg.addColorStop(0, 'rgba(255,255,255,0.95)');
            sg.addColorStop(0.4, 'rgba(6,182,212,0.55)');
            sg.addColorStop(1, 'rgba(6,182,212,0)');
            ctx.beginPath();
            ctx.arc(sx, sy, 7, 0, Math.PI * 2);
            ctx.fillStyle = sg;
            ctx.fill();
          }
        }
      }
    };

    draw();
    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

/* ═══════════════════════════════════════════════════════════════
   TYPEWRITER for role lines
═══════════════════════════════════════════════════════════════*/
const roles = ['AI/ML Engineer', 'Deep Learning Developer', 'Computer Vision Engineer', 'LLM & Automation Expert'];

const Typewriter = () => {
  const [txt, setTxt] = useState('');
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    let rIdx = 0, cIdx = 0, del = false;
    let timerId;

    const tick = () => {
      const word = roles[rIdx];
      if (!del) {
        cIdx++;
        setTxt(word.slice(0, cIdx));
        if (cIdx === word.length) {
          del = true;
          timerId = setTimeout(tick, 1800);
          return;
        }
      } else {
        cIdx--;
        setTxt(word.slice(0, cIdx));
        if (cIdx === 0) {
          del = false;
          rIdx = (rIdx + 1) % roles.length;
        }
      }
      timerId = setTimeout(tick, del ? 45 : 80);
    };

    timerId = setTimeout(tick, 600);
    const blinkId = setInterval(() => setBlink(b => !b), 530);
    return () => { clearTimeout(timerId); clearInterval(blinkId); };
  }, []);

  return (
    <span style={{ color: '#06b6d4', fontWeight: 700 }}>
      {txt}
      <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s', color: '#a78bfa' }}>|</span>
    </span>
  );
};

/* ═══════════════════════════════════════════════════════════════
   FLOATING PILL
═══════════════════════════════════════════════════════════════*/
const Pill = ({ label, delay, top, left, right }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    style={{
      position: 'absolute', top, left, right,
      padding: '5px 14px',
      borderRadius: '8px',
      background: 'rgba(8,10,28,0.8)',
      border: '1px solid rgba(124,58,237,0.4)',
      backdropFilter: 'blur(10px)',
      fontSize: '0.68rem',
      fontFamily: '"DM Mono","Fira Mono",monospace',
      fontWeight: 600,
      letterSpacing: '0.1em',
      color: '#a78bfa',
      whiteSpace: 'nowrap',
      zIndex: 20,
      pointerEvents: 'none',
    }}
  >
    <motion.span
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{ display: 'block' }}
    >
      {label}
    </motion.span>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════
   STAT BADGE
═══════════════════════════════════════════════════════════════*/
const Stat = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: 'rgba(8,10,28,0.85)',
      border: '1px solid rgba(124,58,237,0.22)',
      borderRadius: '12px',
      padding: '12px 18px',
      backdropFilter: 'blur(10px)',
      textAlign: 'center',
      minWidth: '80px',
    }}
  >
    <div style={{
      fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.1,
      background: 'linear-gradient(120deg,#a78bfa,#06b6d4)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>{value}</div>
    <div style={{
      fontSize: '0.6rem', fontFamily: '"DM Mono",monospace',
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'rgba(167,139,250,0.6)', marginTop: '3px',
    }}>{label}</div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════*/
const pills = [
  { label: 'PyTorch', delay: 1.0, top: '6%', left: '4%' },
  { label: 'TensorFlow', delay: 1.2, top: '20%', right: '2%' },
  { label: 'OpenCV', delay: 1.4, top: '45%', left: '1%' },
  { label: 'LangChain', delay: 1.6, top: '65%', right: '3%' },
  { label: 'Scikit-Learn', delay: 1.8, top: '82%', left: '8%' },
  { label: 'CUDA · GPU', delay: 2.0, top: '28%', left: '42%' },
];

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/aryasohani', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/aryasohani22', label: 'LinkedIn' },
  { icon: <FiCode />, href: 'https://leetcode.com/u/Aryas2211/', label: 'LeetCode' },
  { icon: <FiMail />, href: 'mailto:aryasohani2211@gmail.com', label: 'Email' },
];

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spCfg = { damping: 30, stiffness: 110 };
  const dx = useSpring(mouseX, spCfg);
  const dy = useSpring(mouseY, spCfg);

  return (
    <div
      onMouseMove={(e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      }}
      style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '80px' }}
    >

      {/* ── ambient background blobs ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-15%', right: '-10%',
          width: '650px', height: '650px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 68%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', left: '-8%',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
        }} />
        {/* horizontal grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.025) 1px, transparent 1px)',
          backgroundSize: '100% 72px',
        }} />
        {/* vertical grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 100%',
        }} />
      </div>

      <SectionWrapper id="hero" className="w-full !py-0">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
          className="hero-grid"
        >

          {/* ══════════ LEFT ══════════ */}
          <motion.div
            style={{
              x: useTransform(dx, [-600, 600], [-10, 10]),
              y: useTransform(dy, [-600, 600], [-8, 8]),
            }}
          >

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', borderRadius: '40px',
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.28)',
                fontSize: '0.78rem', fontWeight: 600, color: '#06b6d4',
                marginBottom: '28px',
              }}
            >
              <span style={{ position: 'relative', display: 'inline-flex' }}>
                <span className="animate-ping" style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: '#06b6d4', opacity: 0.5,
                }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', display: 'block' }} />
              </span>
              Available for New Projects
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: '-0.02em', margin: '0 0 10px',
              }}
            >
              Arya <span className="glow-text">Sohani</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                fontWeight: 700, marginBottom: '8px',
                minHeight: '2rem',
              }}
            >
              <Typewriter />
            </motion.div>

            {/* Sub label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: '"DM Mono",monospace',
                fontSize: '0.72rem', letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'rgba(167,139,250,0.65)',
                marginBottom: '20px',
              }}
            >
              Data Science & AI Automation Specialist
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                width: '60px', height: '2px', borderRadius: '2px',
                background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
                marginBottom: '22px', transformOrigin: 'left',
              }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-secondary"
              style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '480px', marginBottom: '32px' }}
            >
              AIML graduate specialising in intelligent automation systems,
              LLM workflows, and scalable AI-powered applications.
              Transforming complex data into actionable intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                View Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Socials + inline stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
            >
              <div style={{ display: 'flex', gap: '18px' }}>
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3 }}
                    style={{ fontSize: '1.25rem', color: 'rgba(167,139,250,0.65)', display: 'flex' }}
                    className="hover:text-accent-secondary transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>

              <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.1)' }} />

              <span style={{
                fontFamily: '"DM Mono",monospace',
                fontSize: '0.65rem', letterSpacing: '0.1em',
                color: 'rgba(167,139,250,0.5)',
              }}>
                20+ Projects &nbsp;·&nbsp; 99% Accuracy
              </span>
            </motion.div>
          </motion.div>

          {/* ══════════ RIGHT — Neural Visual ══════════ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ position: 'relative', height: '540px' }}
          >
            {/* Canvas */}
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: '24px', overflow: 'hidden',
            }}>
              <NeuralCanvas />
            </div>

            {/* Centre orb */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)',
                  '0 0 50px rgba(6,182,212,0.5),  0 0 90px rgba(6,182,212,0.18)',
                  '0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -60%)',
                width: '110px', height: '110px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#7c3aed 0%,#06b6d4 100%)',
                zIndex: 15,
                pointerEvents: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {/* Outer rings */}
              {[130, 160, 195].map((size, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: `${size}px`, height: `${size}px`,
                  borderRadius: '50%',
                  border: `1px solid rgba(${i === 0 ? '124,58,237' : '6,182,212'},${0.35 - i * 0.08})`,
                }} />
              ))}

              {/* Brain icon */}
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2a2.5 2.5 0 0 1 5 0" />
                <path d="M9.5 2C7 2 5 4 5 6.5c0 1.5.6 2.8 1.6 3.7" />
                <path d="M14.5 2C17 2 19 4 19 6.5c0 1.5-.6 2.8-1.6 3.7" />
                <path d="M5 6.5A4 4 0 0 0 3 10a4 4 0 0 0 4 4" />
                <path d="M19 6.5A4 4 0 0 1 21 10a4 4 0 0 1-4 4" />
                <path d="M9 14a3 3 0 0 0 6 0" />
                <path d="M12 14v7" /><path d="M9 21h6" />
              </svg>
            </motion.div>

            {/* Label below orb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              style={{
                position: 'absolute',
                top: 'calc(50% + 16px)',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: '"DM Mono",monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(167,139,250,0.55)',
                zIndex: 15,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Neural Network
            </motion.div>

            {/* Tech pills */}
            {pills.map((p) => <Pill key={p.label} {...p} />)}

            {/* Stat cards — bottom row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              style={{
                position: 'absolute', bottom: '0', left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex', gap: '10px',
                zIndex: 20,
              }}
            >
              <Stat value="20+" label="Projects" delay={1.4} />
              <Stat value="99%" label="Accuracy" delay={1.5} />
              <Stat value="6+" label="Months Exp" delay={1.6} />
            </motion.div>
          </motion.div>

        </div>
      </SectionWrapper>

      {/* responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Hero;



// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiCode } from 'react-icons/fi';
// import SectionWrapper from '../common/SectionWrapper';

// /* ═══════════════════════════════════════════════════════════════
//    NEURAL NET CANVAS  — fully NaN-safe
// ═══════════════════════════════════════════════════════════════*/
// const NeuralCanvas = () => {
//   const ref = useRef(null);
//   const raf = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const target = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = ref.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');

//     /* ── size ── */
//     const resize = () => {
//       const dpr = window.devicePixelRatio || 1;
//       const w = canvas.offsetWidth;
//       const h = canvas.offsetHeight;
//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };
//     resize();
//     const ro = new ResizeObserver(resize);
//     ro.observe(canvas);

//     /* ── mouse (smooth lerp in draw loop) ── */
//     const onMouse = (e) => {
//       const r = canvas.getBoundingClientRect();
//       target.current.x = (e.clientX - r.left - r.width / 2) / r.width;
//       target.current.y = (e.clientY - r.top - r.height / 2) / r.height;
//     };
//     window.addEventListener('mousemove', onMouse);

//     /* ── build nodes on sphere (Fibonacci) ── */
//     const N = 80;
//     const phi = Math.PI * (3 - Math.sqrt(5));
//     const nodes = Array.from({ length: N }, (_, i) => {
//       const ny = 1 - (i / (N - 1)) * 2;
//       const rr = Math.sqrt(Math.max(0, 1 - ny * ny));
//       const theta = phi * i;
//       return {
//         ox: Math.cos(theta) * rr,
//         oy: ny,
//         oz: Math.sin(theta) * rr,
//         sz: 1.4 + Math.random() * 2,
//         ph: Math.random() * Math.PI * 2,
//         sp: 0.6 + Math.random() * 0.8,
//       };
//     });

//     /* ── edges: connect close neighbours ── */
//     const edges = [];
//     for (let i = 0; i < N; i++) {
//       for (let j = i + 1; j < N; j++) {
//         const dx = nodes[i].ox - nodes[j].ox;
//         const dy = nodes[i].oy - nodes[j].oy;
//         const dz = nodes[i].oz - nodes[j].oz;
//         if (dx * dx + dy * dy + dz * dz < 0.18) edges.push([i, j]);
//       }
//     }

//     /* ── helpers ── */
//     const safe = (v) => (isFinite(v) ? v : 0);
//     const clamp01 = (v) => Math.min(1, Math.max(0, v));

//     /* ── draw ── */
//     let t = 0;
//     const draw = () => {
//       raf.current = requestAnimationFrame(draw);
//       t += 0.004;

//       /* smooth mouse lerp */
//       mouse.current.x += (target.current.x - mouse.current.x) * 0.06;
//       mouse.current.y += (target.current.y - mouse.current.y) * 0.06;

//       const W = canvas.offsetWidth;
//       const H = canvas.offsetHeight;
//       if (W === 0 || H === 0) return;
//       const cx = W / 2;
//       const cy = H / 2;
//       const R = Math.min(W, H) * 0.36;

//       ctx.clearRect(0, 0, W, H);

//       /* rotation angles */
//       const aY = t + mouse.current.x * 0.5;
//       const aX = Math.sin(t * 0.35) * 0.22 + mouse.current.y * 0.4;
//       const cY = Math.cos(aY), sY = Math.sin(aY);
//       const cX = Math.cos(aX), sX = Math.sin(aX);

//       /* project */
//       const proj = nodes.map((n) => {
//         /* rotate Y */
//         const x1 = n.ox * cY - n.oz * sY;
//         const z1 = n.ox * sY + n.oz * cY;
//         /* rotate X */
//         const y2 = n.oy * cX - z1 * sX;
//         const z2 = n.oy * sX + z1 * cX;
//         /* perspective */
//         const fov = 2.4;
//         const scale = fov / (fov + z2);
//         return {
//           px: safe(cx + x1 * R * scale),
//           py: safe(cy + y2 * R * scale),
//           depth: clamp01((z2 + 1) / 2),
//           scale: clamp01(scale),
//         };
//       });

//       /* ── edges ── */
//       edges.forEach(([i, j]) => {
//         const a = proj[i];
//         const b = proj[j];
//         const dist = Math.hypot(a.px - b.px, a.py - b.py);
//         if (dist < 1 || dist > R * 0.6) return;           // skip zero-len

//         const depth = clamp01((a.depth + b.depth) * 0.5);
//         if (depth < 0.15) return;
//         const alpha = clamp01(depth * 0.5 * (1 - dist / (R * 0.6)));
//         if (alpha < 0.01) return;

//         const g = ctx.createLinearGradient(a.px, a.py, b.px, b.py);
//         const a0 = alpha.toFixed(3);
//         g.addColorStop(0, `rgba(124,58,237,${a0})`);
//         g.addColorStop(1, `rgba(6,182,212,${a0})`);
//         ctx.beginPath();
//         ctx.moveTo(a.px, a.py);
//         ctx.lineTo(b.px, b.py);
//         ctx.strokeStyle = g;
//         ctx.lineWidth = clamp01(0.8 * a.scale);
//         ctx.stroke();
//       });

//       /* ── nodes ── */
//       nodes.forEach((n, i) => {
//         const p = proj[i];
//         if (p.depth < 0.1) return;
//         const pulse = 0.7 + 0.3 * Math.sin(t * n.sp * 3 + n.ph);
//         const r = Math.max(0.3, n.sz * p.scale * pulse);
//         const alpha = clamp01(p.depth * 0.95);

//         /* glow halo */
//         const gr = r * 4;
//         if (gr > 0.5) {
//           const g = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, gr);
//           g.addColorStop(0, `rgba(167,139,250,${(alpha * 0.45).toFixed(3)})`);
//           g.addColorStop(1, 'rgba(6,182,212,0)');
//           ctx.beginPath();
//           ctx.arc(p.px, p.py, gr, 0, Math.PI * 2);
//           ctx.fillStyle = g;
//           ctx.fill();
//         }

//         /* dot */
//         ctx.beginPath();
//         ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
//         ctx.fillStyle = i % 3 === 0
//           ? `rgba(6,182,212,${alpha.toFixed(3)})`
//           : `rgba(167,139,250,${alpha.toFixed(3)})`;
//         ctx.fill();
//       });

//       /* ── travelling signal ── */
//       if (edges.length > 0) {
//         const ei = Math.floor(t * 7) % edges.length;
//         const [si, sj] = edges[ei];
//         const ap = proj[si];
//         const bp = proj[sj];
//         const edgeLen = Math.hypot(ap.px - bp.px, ap.py - bp.py);
//         if (edgeLen > 1 && isFinite(ap.px) && isFinite(ap.py)) {
//           const prog = (t * 7) % 1;
//           const sx = ap.px + (bp.px - ap.px) * prog;
//           const sy = ap.py + (bp.py - ap.py) * prog;
//           if (isFinite(sx) && isFinite(sy)) {
//             const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 7);
//             sg.addColorStop(0, 'rgba(255,255,255,0.95)');
//             sg.addColorStop(0.4, 'rgba(6,182,212,0.55)');
//             sg.addColorStop(1, 'rgba(6,182,212,0)');
//             ctx.beginPath();
//             ctx.arc(sx, sy, 7, 0, Math.PI * 2);
//             ctx.fillStyle = sg;
//             ctx.fill();
//           }
//         }
//       }
//     };

//     draw();
//     return () => {
//       cancelAnimationFrame(raf.current);
//       ro.disconnect();
//       window.removeEventListener('mousemove', onMouse);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={ref}
//       style={{ width: '100%', height: '100%', display: 'block' }}
//     />
//   );
// };

// /* ═══════════════════════════════════════════════════════════════
//    TYPEWRITER for role lines
// ═══════════════════════════════════════════════════════════════*/
// const roles = ['AI/ML Engineer', 'Deep Learning Developer', 'Computer Vision Engineer', 'LLM & Automation Expert'];

// const Typewriter = () => {
//   const [txt, setTxt] = useState('');
//   const [blink, setBlink] = useState(true);

//   useEffect(() => {
//     let rIdx = 0, cIdx = 0, del = false;
//     let timerId;

//     const tick = () => {
//       const word = roles[rIdx];
//       if (!del) {
//         cIdx++;
//         setTxt(word.slice(0, cIdx));
//         if (cIdx === word.length) {
//           del = true;
//           timerId = setTimeout(tick, 1800);
//           return;
//         }
//       } else {
//         cIdx--;
//         setTxt(word.slice(0, cIdx));
//         if (cIdx === 0) {
//           del = false;
//           rIdx = (rIdx + 1) % roles.length;
//         }
//       }
//       timerId = setTimeout(tick, del ? 45 : 80);
//     };

//     timerId = setTimeout(tick, 600);
//     const blinkId = setInterval(() => setBlink(b => !b), 530);
//     return () => { clearTimeout(timerId); clearInterval(blinkId); };
//   }, []);

//   return (
//     <span style={{ color: '#06b6d4', fontWeight: 700 }}>
//       {txt}
//       <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s', color: '#a78bfa' }}>|</span>
//     </span>
//   );
// };

// /* ═══════════════════════════════════════════════════════════════
//    FLOATING PILL
// ═══════════════════════════════════════════════════════════════*/
// const Pill = ({ label, delay, top, left, right }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.6 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5, delay }}
//     style={{
//       position: 'absolute', top, left, right,
//       padding: '5px 14px',
//       borderRadius: '8px',
//       background: 'rgba(8,10,28,0.8)',
//       border: '1px solid rgba(124,58,237,0.4)',
//       backdropFilter: 'blur(10px)',
//       fontSize: '0.68rem',
//       fontFamily: '"DM Mono","Fira Mono",monospace',
//       fontWeight: 600,
//       letterSpacing: '0.1em',
//       color: '#a78bfa',
//       whiteSpace: 'nowrap',
//       zIndex: 20,
//       pointerEvents: 'none',
//     }}
//   >
//     <motion.span
//       animate={{ y: [0, -5, 0] }}
//       transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
//       style={{ display: 'block' }}
//     >
//       {label}
//     </motion.span>
//   </motion.div>
// );

// /* ═══════════════════════════════════════════════════════════════
//    STAT BADGE
// ═══════════════════════════════════════════════════════════════*/
// const Stat = ({ value, label, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 16 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay }}
//     style={{
//       background: 'rgba(8,10,28,0.85)',
//       border: '1px solid rgba(124,58,237,0.22)',
//       borderRadius: '12px',
//       padding: '12px 18px',
//       backdropFilter: 'blur(10px)',
//       textAlign: 'center',
//       minWidth: '80px',
//     }}
//   >
//     <div style={{
//       fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.1,
//       background: 'linear-gradient(120deg,#a78bfa,#06b6d4)',
//       WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//     }}>{value}</div>
//     <div style={{
//       fontSize: '0.6rem', fontFamily: '"DM Mono",monospace',
//       letterSpacing: '0.12em', textTransform: 'uppercase',
//       color: 'rgba(167,139,250,0.6)', marginTop: '3px',
//     }}>{label}</div>
//   </motion.div>
// );

// /* ═══════════════════════════════════════════════════════════════
//    ROBOT HEAD — mouse-reactive 3-D SVG mask
// ═══════════════════════════════════════════════════════════════*/
// const RobotHead = ({ mouseX, mouseY }) => {
//   /* convert raw spring values → rotation angles */
//   const rotY = useTransform(mouseX, [-600, 600], [-28, 28]);
//   const rotX = useTransform(mouseY, [-400, 400], [18, -18]);
//   /* eyes follow mouse more dramatically */
//   const eyeX = useTransform(mouseX, [-600, 600], [-7, 7]);
//   const eyeY = useTransform(mouseY, [-400, 400], [-5, 5]);
//   /* antenna sway */
//   const antRot = useTransform(mouseX, [-600, 600], [-12, 12]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.7 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       style={{
//         position: 'absolute',
//         top: '50%', left: '50%',
//         transform: 'translate(-50%, -54%)',
//         zIndex: 20,
//         perspective: '900px',
//         perspectiveOrigin: '50% 50%',
//         pointerEvents: 'none',
//       }}
//     >
//       <motion.div
//         style={{
//           rotateY: rotY,
//           rotateX: rotX,
//           transformStyle: 'preserve-3d',
//           width: '220px',
//           height: '260px',
//         }}
//       >
//         {/* ── Glow behind head ── */}
//         <motion.div
//           animate={{
//             opacity: [0.5, 0.9, 0.5],
//             scale: [1, 1.08, 1],
//           }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
//           style={{
//             position: 'absolute',
//             top: '50%', left: '50%',
//             transform: 'translate(-50%,-50%)',
//             width: '200px', height: '200px',
//             borderRadius: '50%',
//             background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(6,182,212,0.15) 55%, transparent 75%)',
//             filter: 'blur(18px)',
//             zIndex: -1,
//           }}
//         />

//         {/* ── SVG Robot Face ── */}
//         <svg
//           viewBox="0 0 220 260"
//           width="220" height="260"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ overflow: 'visible', filter: 'drop-shadow(0 0 18px rgba(124,58,237,0.6))' }}
//         >
//           <defs>
//             {/* face gradient */}
//             <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#1a1040" />
//               <stop offset="50%" stopColor="#0d0d2b" />
//               <stop offset="100%" stopColor="#060618" />
//             </linearGradient>
//             {/* panel gradient */}
//             <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#2a1a5e" stopOpacity="0.9" />
//               <stop offset="100%" stopColor="#0a0820" stopOpacity="0.9" />
//             </linearGradient>
//             {/* eye glow filter */}
//             <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="3" result="blur" />
//               <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
//             </filter>
//             {/* strong glow */}
//             <filter id="strongGlow" x="-80%" y="-80%" width="260%" height="260%">
//               <feGaussianBlur stdDeviation="5" result="blur" />
//               <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
//             </filter>
//             {/* chrome edge */}
//             <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#9b72ff" stopOpacity="0.9" />
//               <stop offset="40%" stopColor="#6d3aed" stopOpacity="0.7" />
//               <stop offset="100%" stopColor="#3b1fa8" stopOpacity="0.5" />
//             </linearGradient>
//             <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
//               <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.12" />
//               <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
//             </linearGradient>
//           </defs>

//           {/* ── Antenna ── */}
//           <motion.g style={{ originX: '110px', originY: '30px', rotate: antRot }}>
//             <line x1="110" y1="30" x2="110" y2="5" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
//             <line x1="110" y1="5" x2="96" y2="14" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
//             <line x1="110" y1="5" x2="124" y2="14" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
//             <motion.circle
//               cx="110" cy="3" r="4" fill="#a78bfa"
//               animate={{ opacity: [0.6, 1, 0.6], r: [3.5, 5, 3.5] }}
//               transition={{ duration: 1.8, repeat: Infinity }}
//               filter="url(#eyeGlow)"
//             />
//           </motion.g>

//           {/* ── Neck ── */}
//           <rect x="88" y="218" width="44" height="28" rx="4" fill="url(#faceGrad)" stroke="#3b1fa8" strokeWidth="1" />
//           <rect x="96" y="222" width="10" height="20" rx="2" fill="#1a1040" stroke="#7c3aed" strokeWidth="0.8" opacity="0.8" />
//           <rect x="114" y="222" width="10" height="20" rx="2" fill="#1a1040" stroke="#7c3aed" strokeWidth="0.8" opacity="0.8" />

//           {/* ── Head shell ── */}
//           <rect x="28" y="30" width="164" height="192" rx="28" fill="url(#faceGrad)" stroke="url(#chromeGrad)" strokeWidth="2.5" />

//           {/* ── Inner face panel ── */}
//           <rect x="42" y="48" width="136" height="160" rx="20" fill="url(#panelGrad)" stroke="#4c1d95" strokeWidth="1" opacity="0.9" />

//           {/* ── Side ear panels ── */}
//           <rect x="18" y="80" width="14" height="60" rx="6" fill="url(#faceGrad)" stroke="#5b21b6" strokeWidth="1.5" />
//           <rect x="21" y="95" width="8" height="10" rx="2" fill="#06b6d4" opacity="0.6" filter="url(#eyeGlow)" />
//           <rect x="21" y="110" width="8" height="10" rx="2" fill="#7c3aed" opacity="0.6" filter="url(#eyeGlow)" />
//           <rect x="188" y="80" width="14" height="60" rx="6" fill="url(#faceGrad)" stroke="#5b21b6" strokeWidth="1.5" />
//           <rect x="191" y="95" width="8" height="10" rx="2" fill="#06b6d4" opacity="0.6" filter="url(#eyeGlow)" />
//           <rect x="191" y="110" width="8" height="10" rx="2" fill="#7c3aed" opacity="0.6" filter="url(#eyeGlow)" />

//           {/* ── Forehead bar ── */}
//           <rect x="55" y="55" width="110" height="10" rx="5" fill="#1e1248" stroke="#6d28d9" strokeWidth="1" />
//           <motion.rect
//             x="60" y="57.5" width="30" height="5" rx="2.5" fill="#06b6d4" opacity="0.9"
//             animate={{ x: [60, 130, 60] }}
//             transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//             filter="url(#eyeGlow)"
//           />

//           {/* ── Eye sockets ── */}
//           <rect x="52" y="82" width="46" height="36" rx="10" fill="#080618" stroke="#5b21b6" strokeWidth="1.5" />
//           <rect x="122" y="82" width="46" height="36" rx="10" fill="#080618" stroke="#5b21b6" strokeWidth="1.5" />

//           {/* ── Eyeballs (follow mouse) ── */}
//           <motion.g style={{ x: eyeX, y: eyeY }}>
//             {/* Left eye */}
//             <ellipse cx="75" cy="100" rx="14" ry="12" fill="#06b6d4" opacity="0.15" />
//             <ellipse cx="75" cy="100" rx="10" ry="9" fill="#06b6d4" opacity="0.6" filter="url(#eyeGlow)" />
//             <ellipse cx="75" cy="100" rx="6" ry="5.5" fill="#ffffff" opacity="0.95" />
//             <ellipse cx="75" cy="100" rx="3" ry="3" fill="#0a0020" />
//             {/* Left pupil glow */}
//             <motion.circle
//               cx="75" cy="100" r="2" fill="#06b6d4"
//               animate={{ opacity: [0.5, 1, 0.5], r: [1.5, 2.5, 1.5] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//             {/* Left highlight */}
//             <ellipse cx="71" cy="96" rx="2.5" ry="2" fill="white" opacity="0.7" />
//           </motion.g>

//           <motion.g style={{ x: eyeX, y: eyeY }}>
//             {/* Right eye */}
//             <ellipse cx="145" cy="100" rx="14" ry="12" fill="#a78bfa" opacity="0.15" />
//             <ellipse cx="145" cy="100" rx="10" ry="9" fill="#a78bfa" opacity="0.6" filter="url(#eyeGlow)" />
//             <ellipse cx="145" cy="100" rx="6" ry="5.5" fill="#ffffff" opacity="0.95" />
//             <ellipse cx="145" cy="100" rx="3" ry="3" fill="#0a0020" />
//             <motion.circle
//               cx="145" cy="100" r="2" fill="#a78bfa"
//               animate={{ opacity: [0.5, 1, 0.5], r: [1.5, 2.5, 1.5] }}
//               transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
//             />
//             <ellipse cx="141" cy="96" rx="2.5" ry="2" fill="white" opacity="0.7" />
//           </motion.g>

//           {/* ── Nose ridge ── */}
//           <rect x="106" y="122" width="8" height="18" rx="4" fill="#1a1040" stroke="#4c1d95" strokeWidth="1" />
//           <rect x="103" y="136" width="14" height="4" rx="2" fill="#2d1b69" />

//           {/* ── Mouth / speaker grille ── */}
//           <rect x="60" y="150" width="100" height="34" rx="10" fill="#080618" stroke="#5b21b6" strokeWidth="1.5" />
//           {[0, 1, 2, 3, 4].map((i) => (
//             <motion.rect
//               key={i}
//               x={70 + i * 18} y="158" width="8" height="18" rx="3"
//               fill="#06b6d4"
//               animate={{ scaleY: [0.4, 1, 0.6, 0.9, 0.4], opacity: [0.4, 0.9, 0.5, 0.8, 0.4] }}
//               transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
//               style={{ transformOrigin: '50% 100%' }}
//               filter="url(#eyeGlow)"
//             />
//           ))}

//           {/* ── Chin detail ── */}
//           <rect x="80" y="190" width="60" height="8" rx="4" fill="#1a1040" stroke="#4c1d95" strokeWidth="1" />
//           <rect x="95" y="192" width="30" height="4" rx="2" fill="#7c3aed" opacity="0.5" />

//           {/* ── Scan line overlay (animated) ── */}
//           <motion.rect
//             x="42" y="0" width="136" height="40"
//             fill="url(#scanGrad)"
//             animate={{ y: [48, 200, 48] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//             clipPath="inset(0 0 0 0 round 20px)"
//           />

//           {/* ── Edge circuit lines ── */}
//           <path d="M 42 90 L 30 90 L 30 110 L 36 110" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.5" />
//           <path d="M 178 90 L 190 90 L 190 110 L 184 110" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.5" />
//           <circle cx="36" cy="110" r="2.5" fill="#7c3aed" opacity="0.8" filter="url(#eyeGlow)" />
//           <circle cx="184" cy="110" r="2.5" fill="#7c3aed" opacity="0.8" filter="url(#eyeGlow)" />
//         </svg>

//         {/* ── Status badge ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.4 }}
//           style={{
//             position: 'absolute',
//             bottom: '-8px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             padding: '4px 14px',
//             background: 'rgba(8,10,28,0.9)',
//             border: '1px solid rgba(124,58,237,0.4)',
//             borderRadius: '20px',
//             backdropFilter: 'blur(10px)',
//             whiteSpace: 'nowrap',
//           }}
//         >
//           <motion.span
//             animate={{ opacity: [1, 0.3, 1] }}
//             transition={{ duration: 1.2, repeat: Infinity }}
//             style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4', display: 'block', flexShrink: 0 }}
//           />
//           <span style={{
//             fontFamily: '"DM Mono",monospace',
//             fontSize: '0.58rem',
//             letterSpacing: '0.18em',
//             textTransform: 'uppercase',
//             color: 'rgba(167,139,250,0.8)',
//           }}>
//             AI · ONLINE
//           </span>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };


// const pills = [
//   { label: 'PyTorch', delay: 1.0, top: '6%', left: '4%' },
//   { label: 'TensorFlow', delay: 1.2, top: '20%', right: '2%' },
//   { label: 'OpenCV', delay: 1.4, top: '45%', left: '1%' },
//   { label: 'LangChain', delay: 1.6, top: '65%', right: '3%' },
//   { label: 'Scikit-Learn', delay: 1.8, top: '82%', left: '8%' },
//   { label: 'CUDA · GPU', delay: 2.0, top: '28%', left: '42%' },
// ];

// const socials = [
//   { icon: <FiGithub />, href: 'https://github.com/aryasohani', label: 'GitHub' },
//   { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/aryasohani22', label: 'LinkedIn' },
//   { icon: <FiCode />, href: 'https://leetcode.com/u/Aryas2211/', label: 'LeetCode' },
//   { icon: <FiMail />, href: 'mailto:aryasohani2211@gmail.com', label: 'Email' },
// ];

// const Hero = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const spCfg = { damping: 30, stiffness: 110 };
//   const dx = useSpring(mouseX, spCfg);
//   const dy = useSpring(mouseY, spCfg);

//   return (
//     <div
//       onMouseMove={(e) => {
//         mouseX.set(e.clientX - window.innerWidth / 2);
//         mouseY.set(e.clientY - window.innerHeight / 2);
//       }}
//       style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '80px' }}
//     >

//       {/* ── ambient background blobs ── */}
//       <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
//         <div style={{
//           position: 'absolute', top: '-15%', right: '-10%',
//           width: '650px', height: '650px', borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 68%)',
//         }} />
//         <div style={{
//           position: 'absolute', bottom: '-5%', left: '-8%',
//           width: '420px', height: '420px', borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
//         }} />
//         {/* horizontal grid lines */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           backgroundImage: 'linear-gradient(rgba(124,58,237,0.025) 1px, transparent 1px)',
//           backgroundSize: '100% 72px',
//         }} />
//         {/* vertical grid lines */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.025) 1px, transparent 1px)',
//           backgroundSize: '72px 100%',
//         }} />
//       </div>

//       <SectionWrapper id="hero" className="w-full !py-0">
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '40px',
//           alignItems: 'center',
//           position: 'relative',
//           zIndex: 1,
//         }}
//           className="hero-grid"
//         >

//           {/* ══════════ LEFT ══════════ */}
//           <motion.div
//             style={{
//               x: useTransform(dx, [-600, 600], [-10, 10]),
//               y: useTransform(dy, [-600, 600], [-8, 8]),
//             }}
//           >

//             {/* Available badge */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 display: 'inline-flex', alignItems: 'center', gap: '8px',
//                 padding: '6px 14px', borderRadius: '40px',
//                 background: 'rgba(124,58,237,0.1)',
//                 border: '1px solid rgba(124,58,237,0.28)',
//                 fontSize: '0.78rem', fontWeight: 600, color: '#06b6d4',
//                 marginBottom: '28px',
//               }}
//             >
//               <span style={{ position: 'relative', display: 'inline-flex' }}>
//                 <span className="animate-ping" style={{
//                   position: 'absolute', inset: 0, borderRadius: '50%',
//                   background: '#06b6d4', opacity: 0.5,
//                 }} />
//                 <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', display: 'block' }} />
//               </span>
//               Available for New Projects
//             </motion.div>

//             {/* Name */}
//             <motion.h1
//               initial={{ opacity: 0, y: 28 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.65, delay: 0.12 }}
//               style={{
//                 fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
//                 fontWeight: 900, lineHeight: 1.05,
//                 letterSpacing: '-0.02em', margin: '0 0 10px',
//               }}
//             >
//               Arya <span className="glow-text">Sohani</span>
//             </motion.h1>

//             {/* Typewriter role */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.22 }}
//               style={{
//                 fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
//                 fontWeight: 700, marginBottom: '8px',
//                 minHeight: '2rem',
//               }}
//             >
//               <Typewriter />
//             </motion.div>

//             {/* Sub label */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               style={{
//                 fontFamily: '"DM Mono",monospace',
//                 fontSize: '0.72rem', letterSpacing: '0.22em',
//                 textTransform: 'uppercase', color: 'rgba(167,139,250,0.65)',
//                 marginBottom: '20px',
//               }}
//             >
//               Data Science & AI Automation Specialist
//             </motion.p>

//             {/* Divider */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               style={{
//                 width: '60px', height: '2px', borderRadius: '2px',
//                 background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
//                 marginBottom: '22px', transformOrigin: 'left',
//               }}
//             />

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-text-secondary"
//               style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '480px', marginBottom: '32px' }}
//             >
//               AIML graduate specialising in intelligent automation systems,
//               LLM workflows, and scalable AI-powered applications.
//               Transforming complex data into actionable intelligence.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.5 }}
//               style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}
//             >
//               <button
//                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="btn-primary group"
//               >
//                 View Projects
//                 <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="btn-secondary"
//               >
//                 Contact Me
//               </button>
//             </motion.div>

//             {/* Socials + inline stats */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.65 }}
//               style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
//             >
//               <div style={{ display: 'flex', gap: '18px' }}>
//                 {socials.map((s, i) => (
//                   <motion.a
//                     key={i}
//                     href={s.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label={s.label}
//                     whileHover={{ y: -3 }}
//                     style={{ fontSize: '1.25rem', color: 'rgba(167,139,250,0.65)', display: 'flex' }}
//                     className="hover:text-accent-secondary transition-colors"
//                   >
//                     {s.icon}
//                   </motion.a>
//                 ))}
//               </div>

//               <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.1)' }} />

//               <span style={{
//                 fontFamily: '"DM Mono",monospace',
//                 fontSize: '0.65rem', letterSpacing: '0.1em',
//                 color: 'rgba(167,139,250,0.5)',
//               }}>
//                 20+ Projects &nbsp;·&nbsp; 99% Accuracy
//               </span>
//             </motion.div>
//           </motion.div>

//           {/* ══════════ RIGHT — Neural Visual ══════════ */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             style={{ position: 'relative', height: '540px' }}
//           >
//             {/* Canvas */}
//             <div style={{
//               position: 'absolute', inset: 0,
//               borderRadius: '24px', overflow: 'hidden',
//             }}>
//               <NeuralCanvas />
//             </div>

//             {/* ── 3-D Robot Head ── */}
//             <RobotHead mouseX={dx} mouseY={dy} />

//             {/* Tech pills */}
//             {pills.map((p) => <Pill key={p.label} {...p} />)}

//             {/* Stat cards — bottom row */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.3 }}
//               style={{
//                 position: 'absolute', bottom: '0', left: '50%',
//                 transform: 'translateX(-50%)',
//                 display: 'flex', gap: '10px',
//                 zIndex: 20,
//               }}
//             >
//               <Stat value="20+" label="Projects" delay={1.4} />
//               <Stat value="99%" label="Accuracy" delay={1.5} />
//               <Stat value="6+" label="Months Exp" delay={1.6} />
//             </motion.div>
//           </motion.div>

//         </div>
//       </SectionWrapper>

//       {/* responsive styles */}
//       <style>{`
//         @media (max-width: 900px) {
//           .hero-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;