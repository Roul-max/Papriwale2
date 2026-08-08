import React from 'react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="bg-cream-light min-h-screen">
      {/* Banner */}
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Our Story</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">About Us</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
        </div>
      </div>

      {/* Founder Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">The Beginning</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 text-text-dark">A Legacy Born in Buxar</h2>
              <div className="space-y-5 text-text-dark/80 text-sm md:text-base leading-relaxed font-light">
                <p>Badrinarayan Papriwale began as a tiny shop in Buxar, Bihar — the land of Maharishi Vishwamitra's Tapobhumi. By 1948, Shri Badrinarayan ji set out to create a new kind of sweet. After many attempts and tireless dedication, he finally perfected a recipe that satisfied him completely. That sweet was named <em>Papri</em>.</p>
                <p>Shri Badrinarayan ji is the person who discovered this sweet in Buxar, and since then, Buxar has become famous for its delicious papri. Today, our brand continues to run in his name — <strong>Badrinarayan Papriwale</strong> — the oldest sweet shop in Buxar, Bihar.</p>
                <p>Our papri is celebrated across many cities, and it is with great pride that we have now begun online delivery — so that those who cannot travel to Buxar can still savour the authentic taste they have always longed for.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center">
              <div className="relative max-w-md w-full bg-cream p-4 shadow-xl -rotate-1">
                <img src="https://i0.wp.com/papriwale.com/wp-content/uploads/2025/04/IMG-20250425-WA0010-e1745938340612.jpg?w=885&ssl=1" alt="Papriwale — Buxar, Bihar" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 border border-white/40 pointer-events-none m-4"></div>
                <div className="mt-4 text-center pb-2">
                  <p className="font-serif text-lg">पपरीवाले — Buxar, Bihar</p>
                  <p className="font-sc text-[9px] tracking-[0.25em] uppercase text-text-dark/50 mt-1">ESTD. 1958</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buxar Heritage */}
      <section className="bg-cream py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Rooted in Tradition</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-text-dark">Crafted with Love</h2>
              <div className="space-y-5 text-text-dark/80 text-sm md:text-base leading-relaxed font-light">
                <p>Welcome to our sweet world, where every bite tells a story of heritage, purity, and passion. We are proud to be based in Buxar — a culturally rich town in the heart of Bihar, known for its historical significance and age-old traditions.</p>
                <p>At our shop, we carry forward this legacy by preparing sweets the traditional way, with a deep respect for purity and taste. Whether it is our signature Papri or our wide range of other mithai, you will always find a sweet connection to Buxar in every box.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="border-l-2 border-gold/30 pl-8 space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-text-dark mb-3">Buxar — A Town Steeped in Heritage</h3>
                  <p className="text-text-dark/80 text-sm leading-relaxed font-light">Nestled on the banks of the sacred Ganges, Buxar is a land that blends mythology, history, and culture. From the historic Battle of Buxar (1764) to being home to spiritual legends like Maharishi Vishwamitra and Lord Ram's guru Vasishtha — the town is deeply woven into India's ancient narrative.</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-text-dark mb-3">The Sweet Soul of Buxar</h3>
                  <p className="text-text-dark/80 text-sm leading-relaxed font-light">Among the wide variety of sweets Buxar is known for, Papri holds a special place. Light, flaky, and melt-in-the-mouth, this golden-hued delicacy is more than just a dessert — it is a celebration in every bite. In Buxar, Papri is not mass-produced; it is handcrafted with love using pure ghee, gram flour, sugar, and cardamom, and shared during festivals, weddings, and special occasions as a symbol of joy and hospitality.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-3 block">What We Stand For</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-text-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Purity', desc: 'We use only 100% natural ingredients — pure desi ghee, unrefined sugars, and hand-picked spices. No artificial flavors, no preservatives, ever.' },
              { title: 'Tradition', desc: 'Every papri is made using the same age-old recipes passed down through generations. We believe tradition is not just heritage — it is our identity.' },
              { title: 'Honesty', desc: 'From sourcing to packaging, we are transparent about what goes into our products. What you see is exactly what you get — nothing more, nothing less.' },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center p-8 border border-gold/20 bg-cream-light">
                <div className="text-gold text-3xl mb-4">❈</div>
                <h3 className="font-serif text-3xl font-light mb-4 text-text-dark">{title}</h3>
                <p className="text-text-dark/80 text-sm leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="bg-cream py-20 border-t border-gold/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-3 block">Leadership</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-text-dark">Our Directors</h2>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-16 bg-gold/40"></div>
              <span className="text-gold mx-4">❈</span>
              <div className="h-px w-16 bg-gold/40"></div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center text-center">
            <div className="w-full overflow-hidden border border-gold/20 shadow-md mb-8">
              <img
                src="https://i0.wp.com/papriwale.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-02-at-9.38.55-PM.jpeg?w=960&ssl=1"
                alt="Mrs. Kavita Devi & Mr. Arun Kumar"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-text-dark mb-1">
              Mrs. Kavita Devi &amp; Mr. Arun Kumar
            </h3>
            <p className="font-sc text-[10px] tracking-[0.25em] uppercase text-terracotta">Directors</p>
            <p className="font-sc text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1">Badrinarayan Papriwale, Buxar</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-3 block">Our Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-text-dark">Milestones Through the Years</h2>
          </div>
          <div className="space-y-0">
            {[
              { year: '1948', title: 'The Discovery', desc: 'Shri Badrinarayan ji, after many attempts, perfects the recipe for Papri in Buxar, Bihar — creating a sweet that would define the region\'s culinary identity.' },
              { year: '1972', title: 'Growing Roots', desc: 'The next generation joins the business. Badrinarayan Papriwale expands and becomes a household name across Buxar district and neighboring areas.' },
              { year: '1995', title: 'Reaching New Horizons', desc: 'Papriwale begins fulfilling orders across Bihar and neighboring states, bringing the authentic taste of Buxar to new homes.' },
              { year: '2010', title: 'Pan India Presence', desc: 'With growing demand from the Indian diaspora, Papriwale starts delivering across India and to international customers in the USA, UK, and UAE.' },
              { year: '2024', title: 'Digital Heritage', desc: 'Papriwale launches its online store at papriwale.com — so that everyone, no matter where they are, can taste the authentic papri of Buxar.' },
            ].map(({ year, title, desc }, i) => (
              <div key={year} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-sc text-[10px] tracking-widest shrink-0">{year.slice(2)}'</div>
                  {i < 4 && <div className="w-px h-16 bg-gold/30 mt-2"></div>}
                </div>
                <div className="pb-12">
                  <span className="font-sc text-terracotta text-[10px] tracking-[0.25em] uppercase">{year}</span>
                  <h3 className="font-serif text-2xl mt-1 mb-2 text-text-dark font-medium">{title}</h3>
                  <p className="text-text-dark/80 text-sm leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
