import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const posts = [
  { id: 1, date: 'October 12, 2024', category: 'Heritage', title: 'The Art of Making Papri: A 65-Year-Old Tradition', excerpt: 'Step inside our kitchen and discover how every batch of papri is still made by hand, using the same techniques Badrinarayan ji perfected in 1958. From the quality of ghee to the precise temperature of the kadhai — every detail matters.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop' },
  { id: 2, date: 'September 5, 2024', category: 'Ingredients', title: 'Why Pure Desi Ghee Makes All the Difference', excerpt: 'In a world of shortcuts, we choose the longer path. Learn why we source only pure desi ghee from local dairy farmers in Bihar, and how it transforms the taste, texture, and shelf life of our papri.', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop' },
  { id: 3, date: 'August 20, 2024', category: 'Culture', title: 'Papri in Bihar: More Than Just a Sweet', excerpt: 'In Buxar and across Bihar, papri is not just a confection — it is a ritual. From Chhath Puja offerings to wedding trays, we explore the deep cultural significance of this humble sweet in Bihari life.', image: 'https://images.unsplash.com/photo-1605856422204-748eb27685ff?q=80&w=800&auto=format&fit=crop' },
  { id: 4, date: 'July 14, 2024', category: 'Gifting', title: 'The Perfect Festive Gift: Our Guide to Gifting Papri', excerpt: 'Whether it is Diwali, Holi, or a family celebration, a box of Papriwale papri carries warmth, tradition, and love. Here is how to choose the right variety and packaging for every occasion.', image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop' },
  { id: 5, date: 'June 3, 2024', category: 'Story', title: 'From Buxar to New Jersey: How Papriwale Crossed Oceans', excerpt: "When Anjali ordered her first box from New Jersey, she cried. The taste was exactly as she remembered from her grandmother's kitchen. This is the story of how we began shipping internationally — and why it matters.", image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop' },
  { id: 6, date: 'May 18, 2024', category: 'Health', title: 'Natural Sweeteners: Gur vs. Sugar in Traditional Sweets', excerpt: 'Our Gur Papri uses pure jaggery instead of refined sugar. We break down the nutritional differences, the flavor profile, and why our ancestors were onto something truly special.', image: 'https://images.unsplash.com/photo-1621236166409-7eeb99276949?q=80&w=800&auto=format&fit=crop' },
];

export default function BlogPage() {
  return (
    <div className="bg-cream-light min-h-screen">
      {/* Banner */}
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Stories & Insights</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">Our Blog</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
          <p className="mt-6 text-text-dark/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Recipes, heritage stories, ingredient deep-dives, and the culture behind every sweet we make.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid lg:grid-cols-2 gap-0 bg-cream border border-gold/20 shadow-md overflow-hidden">
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sc text-terracotta text-[10px] tracking-[0.2em] uppercase border border-terracotta/40 px-3 py-1">{posts[0].category}</span>
                <span className="text-text-dark/65 text-xs font-light">{posts[0].date}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-dark mb-5 leading-snug">{posts[0].title}</h2>
              <p className="text-text-dark/80 text-sm leading-relaxed mb-8 font-light">{posts[0].excerpt}</p>
              <button className="self-start flex items-center gap-2 text-terracotta font-sc text-[10px] tracking-[0.2em] uppercase border-b border-terracotta/30 pb-0.5 group">
                Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-cream border border-gold/20 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sc text-terracotta text-[10px] tracking-[0.2em] uppercase">{post.category}</span>
                    <span className="text-text-dark/30 text-[10px]">·</span>
                    <span className="text-text-dark/65 text-[10px] font-light">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-text-dark font-medium leading-snug group-hover:text-terracotta transition-colors">{post.title}</h3>
                  <p className="text-text-dark/80 text-xs leading-relaxed line-clamp-3 font-light">{post.excerpt}</p>
                  <button className="mt-4 flex items-center gap-1.5 text-terracotta font-sc text-[10px] tracking-[0.2em] uppercase group/btn">
                    Read More <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
