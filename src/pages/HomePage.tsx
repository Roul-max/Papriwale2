import React from 'react';
import { ArrowRight, Hand, Droplet, Truck, ShieldCheck, Globe, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const products = [
  { id: 1, name: 'Classic Papri', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvp7w69wWbNoO5smD9AVAQ313z-jNjntv4cbdqlidsVA&s=10' },
  { id: 2, name: 'Elaichi Papri', price: 480, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7YyCLadFYJ1ecU7b9WKC5iuU2DQZYGbqIE0qpIqoLQ&s=10' },
  { id: 3, name: 'Gur Papri', price: 480, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlD8cjbdbXivGiDGi1tCx9YOFjTAOXJG47iUGfnacew&s=10' },
  { id: 4, name: 'Til Papri', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzdzpJp-Ev9AhDBPdUEvAopT9IM1yx8TSctqWyS0YQw&s=10' },
];

export default function HomePage({ navigate }: { navigate: (page: string) => void }) {
  const { addToCart } = useApp();
  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-4 pb-20 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start z-10">
              <span className="text-terracotta text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4 flex items-center">
                <span className="w-8 h-px bg-terracotta mr-3"></span>Since 1958
              </span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-text-dark">
                Handmade Papri.<br /><span className="italic font-normal">Timeless Tradition.</span>
              </h2>
              <p className="text-text-dark/80 text-base md:text-lg mb-8 max-w-md leading-relaxed">
                From the heart of Buxar, Bihar — crafted with purity, devotion, and 65+ years of legacy.
              </p>
              <button onClick={() => navigate('products')} className="bg-terracotta text-white hover:bg-terracotta-dark transition-colors px-8 py-4 text-xs md:text-sm tracking-widest uppercase font-medium flex items-center group">
                Explore Our Papri <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-12 flex items-center gap-4">
                <span className="font-serif text-4xl md:text-5xl text-gold">65+</span>
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs tracking-widest uppercase text-terracotta font-semibold">Years of</span>
                  <span className="text-[10px] md:text-xs tracking-widest uppercase text-text-dark">Heritage</span>
                </div>
                <div className="ml-2 text-gold opacity-60">❈</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] lg:max-w-[480px] aspect-[3/4]">
                <div className="absolute inset-0 bg-gold/10 overflow-hidden" style={{ borderRadius: '200px 200px 12px 12px' }}>
                  <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1200&auto=format&fit=crop" alt="Traditional Indian sweets" className="w-full h-full object-cover object-center" />
                </div>
                <div className="absolute inset-0 border border-gold/30 pointer-events-none" style={{ borderRadius: '200px 200px 12px 12px', margin: '12px' }}></div>
                <div className="absolute -bottom-6 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40 rounded-full bg-cream border border-gold/30 flex items-center justify-center p-2 shadow-xl z-20">
                  <div className="w-full h-full rounded-full border border-dashed border-gold/60 flex flex-col items-center justify-center text-center p-2">
                    <span className="text-terracotta text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-bold">ESTD. 1958</span>
                    <span className="font-serif text-lg md:text-xl text-text-dark my-1">Buxar</span>
                    <span className="text-text-dark/70 text-[8px] md:text-[9px] tracking-[0.2em] uppercase">Bihar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-cream border-t border-b border-gold/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gold/20">
            {[
              { Icon: Hand, title: 'Handmade', sub: 'with Traditional Methods' },
              { Icon: Droplet, title: 'Pure Ingredients', sub: 'No Preservatives' },
              { Icon: Truck, title: 'Delivered Fresh', sub: 'Across India' },
              { Icon: ShieldCheck, title: 'Secure Packaging', sub: 'For Every Order' },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center text-center px-4">
                <Icon className="w-8 h-8 text-gold mb-3" strokeWidth={1} />
                <h3 className="font-serif text-sm md:text-base font-semibold mb-1">{title}</h3>
                <p className="text-[10px] md:text-xs text-text-dark/70 tracking-wide">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Snippet */}
      <section className="relative py-20 md:py-32 bg-cream-light overflow-hidden">
        <div className="absolute top-0 left-0 text-gold/5 text-9xl -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">❈</div>
        <div className="absolute bottom-0 right-0 text-gold/5 text-9xl translate-x-1/2 translate-y-1/2 select-none pointer-events-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-terracotta text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-text-dark">A Legacy Born in 1958</h2>
              <div className="space-y-6 text-text-dark/80 text-sm md:text-base leading-relaxed max-w-lg mb-10">
                <p>Papriwale began as a small sweet shop in Buxar, founded by Badrinarayan ji with a simple belief — that true sweetness comes from purity, tradition, and honesty.</p>
                <p>What started as handmade papri for local festivals is today a cherished tradition passed down through generations, bringing the authentic taste of Buxar to homes near and far.</p>
              </div>
              <button onClick={() => navigate('about')} className="border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors px-8 py-4 text-xs tracking-widest uppercase font-medium">
                Know Our Journey
              </button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative max-w-md w-full bg-cream p-4 shadow-xl rotate-2">
                <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop" alt="Vintage sweet shop" className="w-full h-auto object-cover grayscale opacity-90" />
                <div className="absolute inset-0 border border-white/40 pointer-events-none m-4"></div>
                <div className="mt-4 text-center pb-2">
                  <p className="font-serif text-lg">पपरीवाले</p>
                  <p className="text-[10px] tracking-widest uppercase text-text-dark/60 mt-1">ESTD. 1958</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta text-xs tracking-[0.2em] uppercase font-semibold mb-3 block">Our Papri Collection</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-dark">Made the Traditional Way</h2>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-16 bg-gold/40"></div>
              <span className="text-gold mx-4 text-sm">❈</span>
              <div className="h-px w-16 bg-gold/40"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-cream-light mb-4 rounded-lg shadow-sm">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-1 text-text-dark">{product.name}</h3>
                  <p className="text-text-dark/60 text-sm mb-3">₹{product.price} / 500g</p>
                  <button onClick={() => addToCart(product)} className="text-[10px] tracking-widest uppercase font-semibold text-terracotta hover:text-terracotta-dark border-b border-terracotta/30 pb-0.5">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => navigate('products')} className="bg-terracotta text-white hover:bg-terracotta-dark transition-colors px-10 py-4 text-xs tracking-widest uppercase font-medium">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="bg-terracotta-burnt text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-4 lg:pr-8">
              <span className="text-cream-light/80 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">What Our Customers Say</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Voices That Inspire Us</h2>
              <button onClick={() => navigate('testimonials')} className="border border-white text-white hover:bg-white hover:text-terracotta-burnt transition-colors px-8 py-4 text-xs tracking-widest uppercase font-medium">
                Read All Reviews
              </button>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="text-gold/20 font-serif text-9xl absolute -top-8 -left-4 md:-left-8 select-none leading-none">"</div>
              <div className="relative z-10 pl-4 md:pl-8">
                <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed mb-6">
                  The taste takes me back to my childhood in Bihar. Nothing compares to the authentic flavor of Papriwale papri. Pure, traditional, and simply the best!
                </p>
                <p className="text-[11px] md:text-xs tracking-widest uppercase text-cream/80">— Anjali S., New Jersey, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="bg-cream-light py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {[
              { Icon: Truck, title: 'Pan India Delivery', sub: 'Fast & reliable delivery across India' },
              { Icon: Globe, title: 'Worldwide Shipping', sub: "Bringing Buxar's taste to your doorstep" },
              { Icon: Gift, title: 'Festival Specials', sub: 'Perfect for gifting and celebrations' },
              { Icon: ShieldCheck, title: 'Secure Packaging', sub: 'Packed with care to retain freshness' },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-start">
                <Icon className="w-6 h-6 text-gold mt-1 mr-4 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xs tracking-widest uppercase font-bold mb-1.5 text-text-dark">{title}</h4>
                  <p className="text-xs text-text-dark/70 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
