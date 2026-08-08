import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const products = [
  { id: 1, name: 'Kaju Badam Papri', price: 380, weight: '250g', tag: 'Premium', desc: 'A rich and indulgent papri crafted with whole cashews and almonds, bound together with pure desi ghee and natural sugar. Every bite delivers a satisfying crunch with the warmth of traditional sweetness.', image: 'https://i0.wp.com/papriwale.com/wp-content/uploads/2021/10/IMG_6312-copy_Original-scaled.jpg?resize=400%2C400&ssl=1' },
  { id: 2, name: 'Kaju Papdi', price: 640, weight: '250g', tag: 'Bestseller', desc: 'Delicate, melt-in-the-mouth papdi generously loaded with premium cashews. Made with pure ghee and a perfectly balanced sweetness — a true celebration of flavour and craftsmanship.', image: 'https://i0.wp.com/papriwale.com/wp-content/uploads/2021/10/IMG_6296-copy_Original-scaled.jpg?resize=400%2C400&ssl=1' },
  { id: 3, name: 'Special Ghee Papdi', price: 240, weight: '250g', tag: 'Popular', desc: 'Our signature papdi made with an extra generous pour of pure desi ghee, giving it an irresistibly rich flavour and a perfectly crisp texture. Simple, honest, and deeply satisfying.', image: 'https://i0.wp.com/papriwale.com/wp-content/uploads/2021/10/IMG_6291-copy_Original-scaled.jpg?resize=400%2C400&ssl=1' },
  { id: 4, name: 'Dry Fruit Papri', price: 350, weight: '250g', tag: 'Premium', desc: 'Our most indulgent offering — classic papri studded with cashews, almonds, and pistachios. Perfect for gifting.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCvgIkcCYT-CAZkQbAPgip51eSYD-PGFiIbe3QSd_I37ChRyTTMef1xS_&s=10' },
  { id: 5, name: 'Papri', price: 380, weight: '500g', tag: 'Value Pack', desc: 'Our classic papri in a larger pack — ideal for families and frequent orders. Same authentic taste, better value.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Jwk9j0c9y0KVIcy_i8_ecboIKlGw7MOIDq1Jh8sACA&s=10' },
  { id: 6, name: 'Festival Gift Box', price: 799, weight: 'Assorted', tag: 'Gift', desc: 'A curated assortment of our finest papri varieties, beautifully packaged in a traditional gift box. Ideal for festivals and celebrations.', image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=600&auto=format&fit=crop' },
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
            Every variety is made fresh in small batches using traditional methods and pure desi ghee — just as it has been since 1958. No preservatives, no artificial flavors.
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
            All our papri are made with pure desi ghee, natural sweeteners, and hand-ground spices. No artificial colors, no preservatives, no compromises. Shelf life: 30 days from date of manufacture. Store in a cool, dry place.
          </p>
        </div>
      </section>
    </div>
  );
}
