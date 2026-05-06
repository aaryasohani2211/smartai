import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: '#', label: 'GitHub' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiMail />, href: 'mailto:arya@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Animated Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-50" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <motion.a 
              href="#hero"
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black tracking-tighter text-white inline-block"
            >
              ARYA<span className="text-accent-primary">.</span>
            </motion.a>
            <p className="text-text-secondary max-w-sm leading-relaxed">
              Advancing the boundaries of AI/ML through innovative automation, 
              scalable intelligent systems, and state-of-the-art neural architectures.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, color: '#00D4FF' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl text-text-secondary transition-all border border-white/5 hover:border-accent-secondary/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-text-secondary hover:text-accent-secondary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent-secondary transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column / CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Get Notified</h4>
            <p className="text-sm text-text-secondary">Stay updated with my latest AI research and projects.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-accent-primary text-white rounded-lg text-xs font-bold hover:bg-accent-primary/80 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-text-secondary">
            © {currentYear} ARYA. Developed with <span className="text-accent-primary">React</span> & <span className="text-accent-secondary">Framer Motion</span>
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest"
          >
            Back to top
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-primary transition-colors">
              <FiArrowUp />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
