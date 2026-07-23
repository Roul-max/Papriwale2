import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    category: 'Orders & Delivery',
    items: [
      { q: 'How long does delivery take?', a: 'Orders within India are typically delivered within 3–7 business days depending on your location. Metro cities usually receive orders within 3–4 days. International orders take 10–15 business days.' },
      { q: 'Do you deliver internationally?', a: 'Yes! We ship to the USA, Canada, UK, UAE, Australia, and several other countries. International shipping charges are calculated at checkout based on your location and order weight.' },
      { q: 'What is the minimum order value?', a: 'There is no minimum order value for domestic orders. For international orders, a minimum order of ₹2,000 applies to ensure the papri reaches you in optimal condition.' },
      { q: 'Can I track my order?', a: 'Yes. Once your order is dispatched, you will receive a tracking number via email and SMS. You can use this to track your shipment in real time.' },
    ],
  },
  {
    category: 'Products & Quality',
    items: [
      { q: 'What is the shelf life of your papri?', a: 'Our papri has a shelf life of 30 days from the date of manufacture when stored in a cool, dry place. We recommend consuming within 15 days of opening for the best taste.' },
      { q: 'Are your products free from preservatives?', a: 'Absolutely. All our papri are made with 100% natural ingredients — pure desi ghee, natural sweeteners, and hand-ground spices. We never use artificial preservatives, colors, or flavors.' },
      { q: 'Are your products suitable for vegetarians?', a: 'Yes, all our products are 100% vegetarian. We do not use any animal-derived ingredients other than pure desi ghee sourced from local dairy farms.' },
      { q: 'Do you offer sugar-free options?', a: 'We currently offer our Gur Papri which uses pure jaggery instead of refined sugar, making it a more natural alternative. We are working on additional options for health-conscious customers.' },
    ],
  },
  {
    category: 'Gifting & Bulk Orders',
    items: [
      { q: 'Do you offer custom gift packaging?', a: 'Yes! We offer beautiful traditional gift boxes for festivals and special occasions. You can also request custom branding for corporate gifting. Please contact us at hello@papriwale.com for bulk and custom orders.' },
      { q: 'Is there a discount for bulk orders?', a: 'Yes, we offer special pricing for bulk orders above 5kg. Please reach out to us directly at hello@papriwale.com or call +91 91552 22222 to discuss your requirements.' },
      { q: 'Can I place an order for a wedding or event?', a: 'Absolutely! We regularly fulfill orders for weddings, corporate events, and festivals. We recommend placing event orders at least 2 weeks in advance to ensure timely delivery.' },
    ],
  },
  {
    category: 'Returns & Refunds',
    items: [
      { q: 'What if my order arrives damaged?', a: 'We take great care in packaging, but if your order arrives damaged, please contact us within 24 hours of delivery with photos. We will arrange a replacement or full refund promptly.' },
      { q: 'Can I return or cancel my order?', a: 'Since our products are perishable food items, we do not accept returns. However, order cancellations are accepted within 12 hours of placing the order. Please contact us immediately if you need to cancel.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/20 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-serif text-lg md:text-xl font-medium text-text-dark">{q}</span>
        <ChevronDown className={`w-5 h-5 text-terracotta shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-text-dark/80 text-sm leading-relaxed pb-5 font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-cream-light min-h-screen">
      {/* Banner */}
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Got Questions?</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">FAQ</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
          <p className="mt-6 text-text-dark/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Everything you need to know about our products, orders, and delivery. Can't find your answer? Reach out to us directly.
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqs.map(({ category, items }) => (
            <div key={category}>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-text-dark mb-6 pb-4 border-b border-gold/30 flex items-center gap-3">
                <span className="text-gold text-lg">❈</span> {category}
              </h2>
              <div>
                {items.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream border-t border-gold/20 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-light mb-4 text-text-dark">Still Have Questions?</h3>
          <p className="text-text-dark/80 text-sm leading-relaxed mb-8 font-light">Our team is happy to help. Reach out to us and we will get back to you within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@papriwale.com" className="bg-terracotta text-white hover:bg-terracotta-dark transition-colors px-8 py-4 font-sc text-[11px] tracking-[0.25em] uppercase">Email Us</a>
            <a href="tel:+919155222222" className="border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors px-8 py-4 font-sc text-[11px] tracking-[0.25em] uppercase">Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
