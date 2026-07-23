import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

const allProducts = [
  { id: 1, name: 'Classic Papri', price: 450, weight: '500g', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200&auto=format&fit=crop' },
  { id: 2, name: 'Elaichi Papri', price: 480, weight: '500g', tag: 'Popular', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=200&auto=format&fit=crop' },
  { id: 3, name: 'Gur Papri', price: 480, weight: '500g', tag: 'Seasonal', image: 'https://images.unsplash.com/photo-1605856422204-748eb27685ff?q=80&w=200&auto=format&fit=crop' },
  { id: 4, name: 'Til Papri', price: 450, weight: '500g', tag: 'Winter Special', image: 'https://images.unsplash.com/photo-1621236166409-7eeb99276949?q=80&w=200&auto=format&fit=crop' },
  { id: 5, name: 'Dry Fruit Papri', price: 650, weight: '500g', tag: 'Premium', image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?q=80&w=200&auto=format&fit=crop' },
  { id: 6, name: 'Festival Gift Box', price: 1200, weight: '1kg Assorted', tag: 'Gift', image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=200&auto=format&fit=crop' },
];

const pages = [
  { label: 'About Us', page: 'about', desc: 'Our story, values, and 65-year legacy' },
  { label: 'Products', page: 'products', desc: 'Browse our full papri collection' },
  { label: 'Blog', page: 'blog', desc: 'Heritage stories, recipes & insights' },
  { label: 'Testimonials', page: 'testimonials', desc: 'What our customers say' },
  { label: 'FAQ', page: 'faq', desc: 'Orders, delivery, and product questions' },
  { label: 'Contact', page: 'contact', desc: 'Get in touch with us' },
];

interface Props {
  navigate: (page: string) => void;
}

export default function SearchOverlay({ navigate }: Props) {
  const { searchOpen, setSearchOpen, addToCart } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [setSearchOpen]);

  const q = query.toLowerCase().trim();
  const filteredProducts = q ? allProducts.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)) : [];
  const filteredPages = q ? pages.filter(p => p.label.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)) : [];
  const hasResults = filteredProducts.length > 0 || filteredPages.length > 0;

  const handleNavigate = (page: string) => {
    navigate(page);
    setSearchOpen(false);
  };

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-cream shadow-2xl"
          >
            {/* Input */}
            <div className="flex items-center px-5 py-4 border-b border-gold/20">
              <Search className="w-5 h-5 text-terracotta mr-3 shrink-0" strokeWidth={1.5} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search products, pages..."
                className="flex-1 bg-transparent text-text-dark text-base focus:outline-none placeholder:text-text-dark/40"
              />
              <button onClick={() => setSearchOpen(false)} className="text-text-dark/40 hover:text-terracotta transition-colors ml-3">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {!q && (
                <div className="px-5 py-8 text-center">
                  <p className="text-text-dark/40 text-sm">Start typing to search products and pages...</p>
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {['Classic Papri', 'Gur Papri', 'Gift Box', 'About', 'Blog'].map(s => (
                      <button key={s} onClick={() => setQuery(s)} className="text-[10px] tracking-widest uppercase border border-gold/30 px-3 py-1.5 text-text-dark/60 hover:border-terracotta hover:text-terracotta transition-colors">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {q && !hasResults && (
                <div className="px-5 py-8 text-center">
                  <p className="text-text-dark/50 text-sm">No results for "<span className="text-text-dark font-medium">{query}</span>"</p>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div className="px-5 py-4">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-text-dark/40 mb-3">Products</p>
                  <div className="space-y-2">
                    {filteredProducts.map(p => (
                      <div key={p.id} className="flex items-center gap-4 p-3 hover:bg-cream-light rounded transition-colors group">
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-base text-text-dark">{p.name}</p>
                          <p className="text-xs text-text-dark/50">{p.weight} · ₹{p.price}</p>
                        </div>
                        <button
                          onClick={() => { addToCart(p); setSearchOpen(false); }}
                          className="text-[10px] tracking-widest uppercase text-terracotta border border-terracotta/40 px-3 py-1.5 hover:bg-terracotta hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Add
                        </button>
                        <button onClick={() => handleNavigate('products')} className="text-text-dark/30 hover:text-terracotta transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredPages.length > 0 && (
                <div className="px-5 py-4 border-t border-gold/10">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-text-dark/40 mb-3">Pages</p>
                  <div className="space-y-1">
                    {filteredPages.map(p => (
                      <button key={p.page} onClick={() => handleNavigate(p.page)} className="w-full flex items-center justify-between p-3 hover:bg-cream-light rounded transition-colors text-left group">
                        <div>
                          <p className="text-sm font-medium text-text-dark group-hover:text-terracotta transition-colors">{p.label}</p>
                          <p className="text-xs text-text-dark/50">{p.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-text-dark/30 group-hover:text-terracotta transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-5 py-3 border-t border-gold/10 flex justify-between items-center">
              <p className="text-[10px] text-text-dark/30 tracking-wide">Press ESC to close</p>
              {q && hasResults && (
                <button onClick={() => handleNavigate('products')} className="text-[10px] tracking-widest uppercase text-terracotta font-semibold flex items-center gap-1">
                  View all products <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
