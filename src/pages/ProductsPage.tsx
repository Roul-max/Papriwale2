import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const products = [
  { id: 1, name: 'Classic Papri', price: 450, weight: '500g', tag: 'Bestseller', desc: 'The original Papriwale recipe — crispy, golden papri made with pure ghee and a hint of cardamom. A timeless classic.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvp7w69wWbNoO5smD9AVAQ313z-jNjntv4cbdqlidsVA&s=10' },
  { id: 2, name: 'Elaichi Papri', price: 480, weight: '500g', tag: 'Popular', desc: 'Infused with the finest green cardamom, this papri carries a fragrant warmth that lingers long after the last bite.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7YyCLadFYJ1ecU7b9WKC5iuU2DQZYGbqIE0qpIqoLQ&s=10' },
  { id: 3, name: 'Gur Papri', price: 480, weight: '500g', tag: 'Seasonal', desc: 'Sweetened with pure jaggery sourced from local farms, this papri is rich, earthy, and deeply nourishing.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlD8cjbdbXivGiDGi1tCx9YOFjTAOXJG47iUGfnacew&s=10' },
  { id: 4, name: 'Til Papri', price: 450, weight: '500g', tag: 'Winter Special', desc: 'Loaded with roasted sesame seeds and natural sweetness, this papri is a winter favourite across Bihar.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzdzpJp-Ev9AhDBPdUEvAopT9IM1yx8TSctqWyS0YQw&s=10' },
  { id: 5, name: 'Dry Fruit Papri', price: 650, weight: '500g', tag: 'Premium', desc: 'Our most indulgent offering — classic papri studded with cashews, almonds, and pistachios. Perfect for gifting.', image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?q=80&w=600&auto=format&fit=crop' },
  { id: 6, name: 'Festival Gift Box', price: 1200, weight: '1kg Assorted', tag: 'Gift', desc: 'A curated assortment of our finest papri varieties, beautifully packaged in a traditional gift box. Ideal for festivals.', image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=600&auto=format&fit=crop' },
];

export default function ProductsPage() {
  const { addToCart } = useApp();

  return (
    <div className="bg-cream-light min-h-screen">
      {/* Banner */}
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Handcrafted with Love</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">Our Products</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
          <p className="mt-6 text-text-dark/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Every variety is made fresh in small batches using traditional methods and the purest ingredients — just as it has been since 1958.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group bg-cream border border-gold/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <span className="absolute top-3 left-3 bg-terracotta text-white font-sc text-[9px] tracking-[0.2em] uppercase px-3 py-1">{product.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 text-gold fill-gold" />)}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-1 text-text-dark font-medium">{product.name}</h3>
                  <p className="font-sc text-[10px] tracking-[0.2em] uppercase text-text-dark/45 mb-3">{product.weight}</p>
                  <p className="text-text-dark/80 text-sm leading-relaxed mb-5 font-light">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-text-dark font-light">₹{product.price}</span>
                    <button onClick={() => addToCart(product)} className="flex items-center gap-2 bg-terracotta text-white hover:bg-terracotta-dark transition-colors px-5 py-2.5 font-sc text-[10px] tracking-[0.2em] uppercase">
                      <ShoppingBag className="w-3.5 h-3.5" />Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-cream border-t border-gold/20 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-gold text-2xl">❈</span>
          <h3 className="font-serif text-3xl md:text-4xl font-light mt-4 mb-4 text-text-dark">Made with Only the Finest</h3>
          <p className="text-text-dark/80 text-sm md:text-base leading-relaxed font-light">
            All our papri are made with pure desi ghee, natural sweeteners, and hand-ground spices. No artificial colors, no preservatives, no compromises. Shelf life: 30 days from date of manufacture.
          </p>
        </div>
      </section>
    </div>
  );
}
