import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Banner */}
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-terracotta text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">We'd Love to Hear From You</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">Contact Us</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-terracotta text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">Get in Touch</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-text-dark">We're Here to Help</h2>
              <p className="text-text-dark/70 text-sm leading-relaxed mb-10 max-w-md">
                Whether you have a question about our products, need help with an order, or want to discuss a bulk or gifting requirement — we are always happy to hear from you.
              </p>

              <div className="space-y-7">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-bold mb-1 text-text-dark">Phone</h4>
                    <p className="text-text-dark/70 text-sm">+91 91552 22222</p>
                    <p className="text-text-dark/50 text-xs mt-0.5">Mon–Sat, 9am–7pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-bold mb-1 text-text-dark">Email</h4>
                    <p className="text-text-dark/70 text-sm">hello@papriwale.com</p>
                    <p className="text-text-dark/50 text-xs mt-0.5">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-bold mb-1 text-text-dark">Address</h4>
                    <p className="text-text-dark/70 text-sm">Papriwale Sweets</p>
                    <p className="text-text-dark/70 text-sm">Buxar, Bihar – 802101, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-bold mb-1 text-text-dark">Business Hours</h4>
                    <p className="text-text-dark/70 text-sm">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-text-dark/70 text-sm">Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gold/20">
                <h4 className="text-xs tracking-widest uppercase font-bold mb-4 text-text-dark">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-text-dark hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-text-dark hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="bg-cream border border-gold/20 p-8 md:p-10 shadow-sm">
                <h3 className="font-serif text-2xl mb-6 text-text-dark">Send Us a Message</h3>
                {sent && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 text-sm px-4 py-3 rounded">
                    Thank you! Your message has been sent. We'll get back to you within 24 hours.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Your Name *</label>
                      <input
                        type="text" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-cream-light border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Email Address *</label>
                      <input
                        type="email" required value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-cream-light border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors"
                        placeholder="rahul@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Subject *</label>
                    <input
                      type="text" required value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-cream-light border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="Order enquiry / Bulk order / General question"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Message *</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-cream-light border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <button type="submit" className="w-full bg-terracotta text-white hover:bg-terracotta-dark transition-colors py-4 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
