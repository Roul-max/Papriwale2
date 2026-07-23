import React, { useState } from 'react';
import { X, User, Mail, Lock, LogOut, Package, Heart, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export default function ProfileDrawer() {
  const { profileOpen, setProfileOpen, user, setUser } = useApp();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) { setError('Please fill in all fields.'); return; }
    if (mode === 'register' && !form.name) { setError('Please enter your name.'); return; }
    setUser({ name: mode === 'register' ? form.name : form.email.split('@')[0], email: form.email });
    setError('');
    setForm({ name: '', email: '', password: '' });
  };

  const handleLogout = () => {
    setUser(null);
    setMode('login');
  };

  return (
    <AnimatePresence>
      {profileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setProfileOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <h2 className="font-serif text-xl text-text-dark">{user ? 'My Account' : mode === 'login' ? 'Sign In' : 'Create Account'}</h2>
              </div>
              <button onClick={() => setProfileOpen(false)} className="text-text-dark/60 hover:text-terracotta transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {user ? (
                /* Logged-in view */
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-5 bg-terracotta/5 border border-terracotta/20 rounded">
                    <div className="w-14 h-14 rounded-full bg-terracotta text-white flex items-center justify-center font-serif text-2xl">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-serif text-lg text-text-dark">{user.name}</p>
                      <p className="text-xs text-text-dark/50">{user.email}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {[
                      { Icon: Package, label: 'My Orders', sub: 'Track and manage your orders' },
                      { Icon: Heart, label: 'Wishlist', sub: 'Your saved products' },
                      { Icon: MapPin, label: 'Saved Addresses', sub: 'Manage delivery addresses' },
                    ].map(({ Icon, label, sub }) => (
                      <button key={label} className="w-full flex items-center gap-4 p-4 hover:bg-cream-light rounded transition-colors text-left group">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text-dark group-hover:text-terracotta transition-colors">{label}</p>
                          <p className="text-xs text-text-dark/50">{sub}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-text-dark/30 group-hover:text-terracotta transition-colors" />
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gold/20">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 border border-terracotta/40 text-terracotta hover:bg-terracotta hover:text-white transition-colors py-3 text-xs tracking-widest uppercase font-semibold">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                /* Auth form */
                <div>
                  {/* Toggle */}
                  <div className="flex border border-gold/30 mb-6">
                    <button onClick={() => { setMode('login'); setError(''); }} className={`flex-1 py-2.5 text-xs tracking-widest uppercase font-semibold transition-colors ${mode === 'login' ? 'bg-terracotta text-white' : 'text-text-dark/60 hover:text-terracotta'}`}>
                      Sign In
                    </button>
                    <button onClick={() => { setMode('register'); setError(''); }} className={`flex-1 py-2.5 text-xs tracking-widest uppercase font-semibold transition-colors ${mode === 'register' ? 'bg-terracotta text-white' : 'text-text-dark/60 hover:text-terracotta'}`}>
                      Register
                    </button>
                  </div>

                  {error && <p className="text-red-600 text-xs mb-4 bg-red-50 border border-red-200 px-3 py-2 rounded">{error}</p>}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === 'register' && (
                      <div>
                        <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dark/30" strokeWidth={1.5} />
                          <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Rahul Sharma" className="w-full bg-cream-light border border-gold/30 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dark/30" strokeWidth={1.5} />
                        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full bg-cream-light border border-gold/30 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-widest uppercase font-semibold text-text-dark block mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dark/30" strokeWidth={1.5} />
                        <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" className="w-full bg-cream-light border border-gold/30 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                      </div>
                    </div>
                    {mode === 'login' && (
                      <div className="text-right">
                        <button type="button" className="text-xs text-terracotta hover:underline">Forgot password?</button>
                      </div>
                    )}
                    <button type="submit" className="w-full bg-terracotta text-white hover:bg-terracotta-dark transition-colors py-4 text-xs tracking-widest uppercase font-semibold mt-2">
                      {mode === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                  </form>

                  <p className="text-center text-xs text-text-dark/50 mt-6">
                    {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                    <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }} className="text-terracotta hover:underline font-medium">
                      {mode === 'login' ? 'Register' : 'Sign In'}
                    </button>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
