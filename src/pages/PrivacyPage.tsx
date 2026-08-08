import React from 'react';

const sections = [
  {
    title: 'Our Commitment',
    content: `We, Shri Badri Narayan Papriwale, honour the privacy of our customers and work towards it. Our privacy policy acclaims to respect and protect the information or data collected via the website.\n\nThe personal data collected by us is used to study, analyse, process, and enhance the services offered by us and associates; contact you regarding any updates on the website; market our products/services; and for other related internal business review purposes.`,
  },
  {
    title: 'What Information Do We Capture?',
    content: `Shri Badri Narayan Papriwale captures the date and time of the website visit as recorded on our web server. We do capture the visitor's email address where voluntarily provided.`,
  },
  {
    title: 'Do We Ask for Personal Data?',
    content: `No. Shri Badri Narayan Papriwale does not ask for the customer's personal data as a mandatory requirement. There are pages by which the user may contact us and purchase products. However, sharing of personal information is entirely at the discretion of the user, who is responsible for the sole risk thereof.\n\nWe may encourage you to register details with personal information for login purposes only. Shri Badri Narayan Papriwale does not store, share, or ask for any financial data. The registration process is solely meant for contacting you for updates and new product or service offerings, at the choice of the customer.\n\nMoreover, you are voluntarily agreeing to our processing of personal information by providing personal data as you create or update your account and profile. The details are processed in the way set by this privacy policy or as amended over time.`,
  },
  {
    title: 'How Do We Use Your Data?',
    content: `The data collected through our website helps us identify the content valued by you. We may use it for marketing and website enhancement purposes. We may send emailers or notifications for various purposes — to deliver new product information, process orders, provide seller information, and for other means.\n\nWe do not give, sell, or distribute the data collected through the website to third parties outside Shri Badri Narayan Papriwale, unless required by law.`,
  },
  {
    title: 'How Do We Protect Your Data?',
    content: `There may be some risk involved while transmitting data to other vendor or bank sites for payment processing. The risks attached thereon are understood and acknowledged by you through agreeing to this privacy policy.\n\nThe online merchants, payment gateways, and others participating in our services are encouraged to follow industry privacy initiatives and are thus responsible towards consumer privacy. However, as we are not in direct control over the policy or practices of participating parties, we are not responsible for the contents of those sites or any breach of information that may or may not lead to any damage directly or indirectly.\n\nWe encourage you to always review the privacy policies of the concerned merchant and other third parties involved prior to providing personal information or transacting with them.`,
  },
  {
    title: 'How Long Do We Retain Information?',
    content: `Shri Badri Narayan Papriwale preserves information as long as the customer's account is active or as needed. We may keep certain data even after account closure if it becomes essential to comply with legal obligations, meet regulations, resolve disputes, prevent abuse and fraud, or enforce the agreement.`,
  },
  {
    title: 'Contact Us',
    content: `Our Registered Address:\n\nSHRI B.N PAPRIWALE PRIVATE LIMITED\nH No. 7, Musafir Ganj, Buxar, Near Gangotri Sweets House,\nBuxar, Bihar, India – 802101\n\nYou can reach us via email at: saurabhsakg@gmail.com\n\nOur efforts support you to resolve any kind of issues at their best.`,
  },
  {
    title: 'Policy Amendments',
    content: `Shri Badri Narayan Papriwale reserves the right to amend this Privacy Policy at any time with or without notification. We request you to review the policy frequently. Your continued use of Shri Badri Narayan Papriwale's services means that you agree to this Privacy Policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-cream-light min-h-screen">
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Legal</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">Privacy Policy</h1>
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gold/40"></div>
            <span className="text-gold mx-4">❈</span>
            <div className="h-px w-16 bg-gold/40"></div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map(({ title, content }) => (
            <div key={title} className="border-b border-gold/20 pb-10 last:border-0">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-text-dark mb-4 flex items-center gap-3">
                <span className="text-gold text-base">❈</span> {title}
              </h2>
              {content.split('\n\n').map((para, i) => (
                <p key={i} className="text-text-dark/80 text-sm leading-relaxed font-light mb-3 last:mb-0 whitespace-pre-line">{para}</p>
              ))}
            </div>
          ))}
          <p className="font-sc text-[10px] tracking-[0.2em] uppercase text-text-dark/50 pt-4">
            Shri Badri Narayan Papriwale — Buxar, Bihar, India
          </p>
        </div>
      </section>
    </div>
  );
}
