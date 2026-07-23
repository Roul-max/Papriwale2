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
              <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 text-text-dark">A Legacy Born in 1958</h2>
              <div className="space-y-5 text-text-dark/80 text-sm md:text-base leading-relaxed font-light">
                <p>Papriwale was founded in 1958 by Shri Badrinarayan ji in the historic city of Buxar, Bihar. With nothing but a small hearth, pure ingredients, and an unwavering commitment to quality, he began crafting papri that would become the pride of the region.</p>
                <p>His philosophy was simple: use only the finest ingredients — pure ghee, natural sugars, and freshly ground spices — and let the tradition speak for itself. No shortcuts, no compromises.</p>
                <p>Today, three generations later, the same values guide every batch of papri we make. The recipes remain unchanged, the methods remain handcrafted, and the love remains as pure as ever.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center">
              <div className="relative max-w-md w-full bg-cream p-4 shadow-xl -rotate-1">
                <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop" alt="Vintage sweet shop" className="w-full h-auto object-cover grayscale opacity-90" />
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

      {/* Values */}
      <section className="bg-cream py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-3 block">What We Stand For</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-text-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Purity', desc: 'We use only 100% natural ingredients — pure desi ghee, unrefined sugars, and hand-picked spices. No artificial flavors, no preservatives, ever.' },
              { title: 'Tradition', desc: 'Every papri is made using the same age-old recipes passed down through three generations. We believe tradition is not just heritage — it is our identity.' },
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

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-3 block">Our Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-text-dark">Milestones Through the Years</h2>
          </div>
          <div className="space-y-0">
            {[
              { year: '1958', title: 'The First Hearth', desc: 'Shri Badrinarayan ji opens a small sweet shop in Buxar, Bihar, crafting papri for local festivals and celebrations.' },
              { year: '1972', title: 'Growing Roots', desc: 'The second generation joins the business. The shop expands and Papriwale becomes a household name across Buxar district.' },
              { year: '1995', title: 'Reaching New Horizons', desc: 'Papriwale begins shipping to customers across Bihar and neighboring states, bringing the taste of Buxar to new homes.' },
              { year: '2010', title: 'Pan India Presence', desc: 'With growing demand from the Indian diaspora, Papriwale starts delivering across India and internationally.' },
              { year: '2023', title: 'Digital Heritage', desc: 'Papriwale launches its online store, making it easier than ever for sweet lovers worldwide to order authentic papri.' },
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
