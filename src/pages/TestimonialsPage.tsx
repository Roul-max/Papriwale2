import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  { id: 1, name: 'Anjali S.', location: 'New Jersey, USA', rating: 5, text: 'The taste takes me back to my childhood in Bihar. Nothing compares to the authentic flavor of Papriwale papri. Pure, traditional, and simply the best! I order every month without fail.' },
  { id: 2, name: 'Rajesh K.', location: 'Mumbai, Maharashtra', rating: 5, text: 'I have tried many sweet shops across India, but Papriwale is in a league of its own. The Classic Papri is absolutely divine — you can taste the pure ghee in every bite. Highly recommended!' },
  { id: 3, name: 'Priya M.', location: 'Bengaluru, Karnataka', rating: 5, text: 'Ordered the Festival Gift Box for Diwali and my entire family was blown away. The packaging was beautiful and the papri arrived perfectly fresh. Will definitely order again!' },
  { id: 4, name: 'Suresh T.', location: 'Toronto, Canada', rating: 5, text: 'Living abroad, I always missed the authentic taste of Bihari sweets. Papriwale ships internationally and the quality is outstanding. The Gur Papri is my absolute favourite.' },
  { id: 5, name: 'Meena D.', location: 'Delhi, India', rating: 5, text: 'My mother-in-law is from Buxar and she said this is exactly how papri used to taste in her childhood. That is the highest compliment I can give. Truly authentic and delicious.' },
  { id: 6, name: 'Vikram P.', location: 'Patna, Bihar', rating: 5, text: 'Being from Bihar myself, I am very particular about my papri. Papriwale never disappoints. The Til Papri during winter is something I look forward to every year.' },
  { id: 7, name: 'Sunita R.', location: 'Hyderabad, Telangana', rating: 5, text: 'Gifted the Dry Fruit Papri to my colleagues and they were all asking where I got it from. The quality and taste are exceptional. A truly premium product.' },
  { id: 8, name: 'Amit B.', location: 'Buxar, Bihar', rating: 5, text: 'I grew up eating Papriwale papri and now my children love it too. Three generations of our family have been loyal customers. The taste has never changed — and that is exactly why we keep coming back.' },
  { id: 9, name: 'Kavita J.', location: 'Pune, Maharashtra', rating: 5, text: 'The Elaichi Papri is absolutely fragrant and delicious. I love that there are no artificial flavors — you can taste the real cardamom. Will be ordering the gift box for my parents next.' },
];

export default function TestimonialsPage() {
  const [featured, setFeatured] = useState(0);

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Banner */}
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-terracotta text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">What Our Customers Say</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">Testimonials</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-terracotta-burnt text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Happy Customers' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '65+', label: 'Years of Trust' },
              { value: '50+', label: 'Cities Delivered' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl md:text-5xl text-gold mb-2">{value}</div>
                <div className="text-[10px] tracking-widest uppercase text-cream/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div key={featured} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-cream border border-gold/20 p-10 md:p-16 text-center shadow-sm">
            <div className="text-gold/30 font-serif text-8xl leading-none mb-4">"</div>
            <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-text-dark leading-relaxed mb-8">
              {testimonials[featured].text}
            </p>
            <div className="flex justify-center mb-3">
              {[...Array(testimonials[featured].rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
            </div>
            <p className="font-semibold text-text-dark text-sm tracking-wide">{testimonials[featured].name}</p>
            <p className="text-text-dark/50 text-xs tracking-widest uppercase mt-1">{testimonials[featured].location}</p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.slice(0, 9).map((_, i) => (
              <button key={i} onClick={() => setFeatured(i)} className={`w-2 h-2 rounded-full transition-colors ${i === featured ? 'bg-terracotta' : 'bg-gold/30 hover:bg-gold/60'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-cream border border-gold/20 p-7 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setFeatured(i)}
              >
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />)}
                </div>
                <p className="text-text-dark/80 text-sm leading-relaxed mb-5 line-clamp-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-text-dark text-sm">{t.name}</p>
                  <p className="text-text-dark/50 text-[10px] tracking-widest uppercase mt-0.5">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
