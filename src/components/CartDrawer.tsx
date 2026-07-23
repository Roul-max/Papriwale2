import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty } = useApp();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setCartOpen(false)}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <h2 className="font-serif text-xl text-text-dark">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="bg-terracotta text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{totalItems}</span>
                )}
              </div>
              <button onClick={() => setCartOpen(false)} className="text-text-dark/60 hover:text-terracotta transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag className="w-16 h-16 text-gold/30" strokeWidth={1} />
                  <p className="font-serif text-xl text-text-dark/50">Your cart is empty</p>
                  <p className="text-xs text-text-dark/40 tracking-wide">Add some papri to get started!</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 py-4 border-b border-gold/10 last:border-0">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-base text-text-dark mb-0.5">{item.name}</h4>
                        <p className="text-[10px] tracking-widest uppercase text-text-dark/50 mb-2">{item.weight}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gold/30 rounded">
                            <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 flex items-center justify-center text-text-dark hover:text-terracotta transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 flex items-center justify-center text-text-dark hover:text-terracotta transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-serif text-base text-text-dark">₹{item.price * item.qty}</span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-text-dark/30 hover:text-terracotta transition-colors self-start mt-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-gold/20 bg-cream-light space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase font-semibold text-text-dark/60">Subtotal</span>
                  <span className="font-serif text-2xl text-text-dark">₹{total.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-text-dark/50 tracking-wide">Shipping & taxes calculated at checkout</p>
                <button className="w-full bg-terracotta text-white hover:bg-terracotta-dark transition-colors py-4 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => setCartOpen(false)} className="w-full border border-gold/30 text-text-dark hover:border-terracotta hover:text-terracotta transition-colors py-3 text-xs tracking-widest uppercase font-medium">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
