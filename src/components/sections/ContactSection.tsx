import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-hero px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-miluena-bold text-tannin-gold mb-8">
              CONTACT
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-foreground font-miluena text-xl mb-2">
                  Get in Touch
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Ready to experience the future of wine? Connect with us to learn more 
                  about our innovative flavors and where to find them.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-foreground/80">
                  <span className="text-tannin-gold">📧</span>
                  <span>Contact us at</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <span className="text-tannin-gold">📱</span>
                  <span>Find us</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <span className="text-tannin-gold">📍</span>
                  <span>Instagram</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <span className="text-tannin-gold">💼</span>
                  <span>LinkedIn</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 border border-tannin-gold/20 shadow-elegant">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-tannin-gold font-miluena text-lg mb-6"
              >
                For more updates
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label htmlFor="email" className="block text-foreground/80 text-sm mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-tannin-gold/30 focus:border-tannin-gold focus:ring-tannin-gold/20"
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <label htmlFor="message" className="block text-foreground/80 text-sm mb-2">
                    Message (optional)
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-background/50 border-tannin-gold/30 focus:border-tannin-gold focus:ring-tannin-gold/20 min-h-[100px]"
                    placeholder="Tell us what interests you about tannin..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-tannin-gold hover:bg-tannin-gold/90 text-tannin-dark-purple font-miluena font-bold transition-all duration-300 shadow-glow hover:shadow-lg"
                  >
                    Stay Connected
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-tannin-gold/20"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-tannin-gold/20 rounded border border-tannin-gold/30 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-tannin-gold">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 10v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <span className="text-tannin-gold font-miluena-bold text-lg">tannin</span>
          </div>
          <p className="text-foreground/60 text-sm">
            Tannin Beverages Private Limited 
Sy.no. 489/P, KIADB Industrial Area, Jigani village , Jigani Holli Anekal Taluk, Bengaluru - 560105.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;