import React from 'react';
import { AlertCircle, XCircle, RefreshCw } from 'lucide-react';

const policies = [
  {
    Icon: RefreshCw,
    title: 'No Title Transfer on Returns',
    desc: 'Shri Badri Narayan Papriwale does not take title to returned items. Any case of refund or cancellation is at the sole discretion of Shri Badri Narayan Papriwale.',
  },
  {
    Icon: XCircle,
    title: 'No Refund Policy',
    desc: 'In any case of refund, no amount will be processed by Shri Badri Narayan Papriwale. Since our products are perishable food items, we are unable to accept returns once an order has been placed and processed.',
  },
  {
    Icon: AlertCircle,
    title: 'Cancellation Policy',
    desc: 'Once an order has been processed for dispatch, cancellation will not be allowed. If you need to cancel, please contact us immediately after placing the order, before it is dispatched.',
  },
];

export default function ReturnPolicyPage() {
  return (
    <div className="bg-cream-light min-h-screen">
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Legal</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">Return Policy</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-dark/80 text-sm leading-relaxed font-light mb-14 text-center max-w-xl mx-auto">
            As our products are handcrafted, perishable food items, please read our return and cancellation policy carefully before placing an order.
          </p>
          <div className="space-y-8">
            {policies.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-6 p-8 bg-cream border border-gold/20 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-text-dark mb-2">{title}</h3>
                  <p className="text-text-dark/80 text-sm leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-terracotta/5 border border-terracotta/20 text-center">
            <span className="text-gold text-2xl block mb-4">❈</span>
            <h3 className="font-serif text-2xl font-light text-text-dark mb-3">Have a Concern?</h3>
            <p className="text-text-dark/80 text-sm leading-relaxed font-light mb-6">
              If your order arrives damaged or there is an issue with your delivery, please contact us within 24 hours with photos and we will do our best to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:saurabhsakg@gmail.com" className="bg-terracotta text-white hover:bg-terracotta-dark transition-colors px-8 py-4 font-sc text-[11px] tracking-[0.25em] uppercase">Email Us</a>
              <a href="tel:+919955756111" className="border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors px-8 py-4 font-sc text-[11px] tracking-[0.25em] uppercase">Call Us</a>
            </div>
          </div>

          <p className="font-sc text-[10px] tracking-[0.2em] uppercase text-text-dark/50 pt-10 text-center">
            Shri Badri Narayan Papriwale — Buxar, Bihar, India
          </p>
        </div>
      </section>
    </div>
  );
}
