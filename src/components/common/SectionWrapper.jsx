import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier for premium feel
      }}
      className={`section-container relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
