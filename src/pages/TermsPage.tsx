import React from 'react';

const sections = [
  {
    title: 'Introduction',
    content: `Shri Badri Narayan Papriwale provides website features and other products and services to you when you visit or shop at www.papriwale.com. Shri Badri Narayan Papriwale provides the services subject to the following terms and conditions.\n\nBy using Products or Services through www.papriwale.com, you willfully and out of free will unconditionally agree to these conditions.`,
  },
  {
    title: 'Privacy',
    content: `Please review our Privacy Policy, which also governs your use of all information (whether personal or public).`,
  },
  {
    title: 'Electronic Communications',
    content: `When you use any of Shri Badri Narayan Papriwale's services, or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or text message. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.`,
  },
  {
    title: 'Copyright',
    content: `All content included in or made available through any of the availed services — such as text, graphics, logos, button icons, images, audio clips, and data compilations — is the property of Shri Badri Narayan Papriwale or its content suppliers and shall be protected and governed by the laws of India. All unwarranted copies of content are strictly prohibited and illegal.`,
  },
  {
    title: 'Trademarks',
    content: `Graphics, logos, page headers, button icons, scripts, and service names included in or made available through any service are trademarks or service marks of Shri Badri Narayan Papriwale. Availing of the services does not grant you any right to copy or use the same.`,
  },
  {
    title: 'Your Login Account',
    content: `If you register yourself with the portal, you are responsible for maintaining the confidentiality of your account information and password, and for restricting access to your computer. You agree to accept responsibility for the authenticity of the information and for all activities that occur under your account or password.\n\nShri Badri Narayan Papriwale reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders in its sole discretion with no damage or demurral payable to you.`,
  },
  {
    title: 'Risk of Loss',
    content: `All items purchased through electronic mode through this website are made pursuant to a shipment contract. This means that the risk of loss and title for such items pass to you upon our delivery to the carrier (shipping partner) for dispatch.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-cream-light min-h-screen">
      <div className="relative bg-cream py-20 md:py-28 border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 text-gold/5 text-[20rem] font-serif flex items-center justify-center select-none pointer-events-none leading-none">❈</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-sc text-terracotta text-[11px] tracking-[0.25em] uppercase mb-4 block">Legal</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-text-dark mb-6">Terms & Conditions</h1>
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
                <p key={i} className="text-text-dark/80 text-sm leading-relaxed font-light mb-3 last:mb-0">{para}</p>
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
