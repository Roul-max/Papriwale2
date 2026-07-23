import React, { useState, useEffect } from 'react';
import {
  Search, User, ShoppingBag,
  Facebook, Instagram, Send, Phone, Mail, MapPin, Menu, X
} from 'lucide-react';
import { motion } from 'motion/react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import ProfileDrawer from './components/ProfileDrawer';
import { useApp } from './context/AppContext';

type Page = 'home' | 'about' | 'products' | 'blog' | 'testimonials' | 'faq' | 'contact';

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Products', page: 'products' },
  { label: 'Blog', page: 'blog' },
  { label: 'Testimonials', page: 'testimonials' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact', page: 'contact' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, setCartOpen, setSearchOpen, setProfileOpen, user } = useApp();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'products': return <ProductsPage />;
      case 'blog': return <BlogPage />;
      case 'testimonials': return <TestimonialsPage />;
      case 'faq': return <FAQPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-light font-sans text-text-dark selection:bg-terracotta selection:text-white">

      {/* Top Utility Bar */}
      <div className="w-full bg-terracotta-dark text-white text-[10px] md:text-xs tracking-widest uppercase py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-1 md:gap-0">
          <span>Celebrating 65+ Years of Sweet Heritage from Buxar, Bihar</span>
          <span>Delivering Tradition Across India & Worldwide</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">

          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate('home')}>
            <img src="/logo.png" alt="Papriwale Logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] lg:text-xs tracking-widest font-medium uppercase">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`transition-colors hover:text-terracotta ${currentPage === page ? 'text-terracotta' : 'text-text-dark'}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button onClick={() => setSearchOpen(true)} className="text-text-dark hover:text-terracotta transition-colors hidden sm:block">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button onClick={() => setProfileOpen(true)} className="text-text-dark hover:text-terracotta transition-colors hidden sm:block relative">
              <User className="w-5 h-5" strokeWidth={1.5} />
              {user && <span className="absolute -top-1 -right-1 w-2 h-2 bg-terracotta rounded-full"></span>}
            </button>
            <button onClick={() => setCartOpen(true)} className="text-text-dark hover:text-terracotta transition-colors relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{totalItems}</span>
              )}
            </button>
            <button className="md:hidden text-text-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-gold/20 py-4 px-4 flex flex-col space-y-4 shadow-lg"
          >
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`text-sm tracking-widest uppercase font-medium text-left transition-colors hover:text-terracotta ${currentPage === page ? 'text-terracotta' : 'text-text-dark'}`}
              >
                {label}
              </button>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gold/20">
              <button onClick={() => { setSearchOpen(true); setIsMenuOpen(false); }} className="flex items-center text-xs tracking-widest uppercase"><Search className="w-4 h-4 mr-2" /> Search</button>
              <button onClick={() => { setProfileOpen(true); setIsMenuOpen(false); }} className="flex items-center text-xs tracking-widest uppercase"><User className="w-4 h-4 mr-2" /> Account</button>
            </div>
          </motion.div>
        )}
      </header>

      <main>{renderPage()}</main>

      <CartDrawer />
      <SearchOverlay navigate={navigate} />
      <ProfileDrawer />

      {/* Footer */}
      <footer className="bg-cream-light pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blush/30 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            <div className="space-y-6">
              <img src="/logo.png" alt="Papriwale Logo" className="h-28 w-auto object-contain -ml-2" />
              <p className="text-sm text-text-dark/70 leading-relaxed max-w-xs">
                Traditional sweetness since 1958. Handmade papri from Buxar, Bihar, with love and legacy.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-text-dark hover:bg-gold hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-text-dark hover:bg-gold hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-text-dark hover:bg-gold hover:text-white transition-colors"><Phone className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-text-dark">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.filter(l => l.page !== 'home').map(({ label, page }) => (
                  <li key={page}>
                    <button onClick={() => navigate(page)} className="text-sm text-text-dark/70 hover:text-terracotta transition-colors">{label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-text-dark">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start"><Phone className="w-4 h-4 text-terracotta mt-0.5 mr-3 shrink-0" /><span className="text-sm text-text-dark/70">+91 91552 22222</span></li>
                <li className="flex items-start"><Mail className="w-4 h-4 text-terracotta mt-0.5 mr-3 shrink-0" /><span className="text-sm text-text-dark/70">hello@papriwale.com</span></li>
                <li className="flex items-start"><MapPin className="w-4 h-4 text-terracotta mt-0.5 mr-3 shrink-0" /><span className="text-sm text-text-dark/70">Papriwale Sweets, Buxar, Bihar - 802101, India</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-text-dark">Stay Updated</h4>
              <p className="text-sm text-text-dark/70 leading-relaxed mb-4">Subscribe to get updates on new arrivals, offers & more.</p>
              <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="w-full bg-cream border border-gold/30 rounded-l-md px-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors" required />
                <button type="submit" className="bg-terracotta text-white px-4 rounded-r-md flex items-center justify-center hover:bg-terracotta-dark transition-colors" aria-label="Subscribe">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          <div className="border-t border-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-text-dark/60 gap-4 md:gap-0">
            <p>&copy; 2026 Papriwale. All Rights Reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-terracotta transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
