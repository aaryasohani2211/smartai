import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'aryasohani2211@gmail.com',
      href: 'mailto:aryasohani2211@gmail.com',
      color: 'text-purple-500'
    },
    // {
    //   icon: <FiPhone />,
    //   label: 'Phone',
    //   value: '+91 0000000000', // Placeholder
    //   href: 'tel:+910000000000',
    //   color: 'text-blue-500'
    // },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'text-emerald-500'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aryasohani22',
      href: 'https://linkedin.com/in/aryasohani22',
      color: 'text-cyan-500'
    }
  ];

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Get In <span className="glow-text">Touch</span>
        </motion.h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Interested in collaboration or have a question? Feel free to reach out. I'm always open to discussing new AI projects and innovative ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side: Contact Cards */}
        <div className="space-y-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 10 }}
              className="glass-card p-6 flex items-center gap-6 group hover:border-accent-primary/50 transition-all"
            >
              <div className={`text-3xl ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">{info.label}</p>
                <p className="text-lg font-semibold text-white group-hover:text-accent-secondary transition-colors">{info.value}</p>
              </div>
            </motion.a>
          ))}

          {/* Decorative Glow */}
          <div className="hidden lg:block relative h-32 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <p className="text-sm italic text-white/40 text-center uppercase tracking-[0.2em]">Let's build the future together</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 relative overflow-hidden"
        >
          {/* Form Background Accent */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-secondary/10 blur-[80px] rounded-full" />

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 focus:border-accent-secondary transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary ml-1">Message</label>
              <textarea
                rows="5"
                placeholder="Hi Arya, I'm interested in working with you on..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all placeholder:text-white/20 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full py-4 flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <FiSend className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;
