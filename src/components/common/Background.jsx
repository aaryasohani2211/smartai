import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#081120]">
      {/* Mesh Gradient Layer */}
      <motion.div 
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-mesh opacity-50 transition-opacity duration-1000"
      />

      {/* Floating Ambient Glows */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="glow-bg-primary -top-40 -left-40 opacity-30"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -100, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="glow-bg-secondary -bottom-40 -right-40 opacity-20"
      />

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />
    </div>
  );
};

export default Background;
