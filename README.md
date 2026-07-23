# 🍬 Papriwale — Heritage Sweets Since 1948

A modern, fully responsive e-commerce website for **Papriwale**, a traditional Indian sweet shop from Buxar, Bihar, crafting handmade papri since 1948.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

### Pages
| Page | Description |
|------|-------------|
| **Home** | Hero section, trust strip, story snippet, product preview, testimonial, feature strip |
| **About Us** | Founder story, core values, visual milestone timeline |
| **Products** | Full product grid with tags, ratings, descriptions, and add-to-cart |
| **Blog** | Featured post + article grid with categories and excerpts |
| **Testimonials** | Stats bar, interactive featured quote carousel, full review grid |
| **FAQ** | Accordion-style questions grouped into 4 categories |
| **Contact** | Contact info cards + working contact form with success feedback |

### Functional UI
- 🔍 **Search Overlay** — Live search across products and pages with quick-suggestion chips
- 🛒 **Cart Drawer** — Slide-in cart with qty controls, remove, subtotal, and checkout
- 👤 **Profile Drawer** — Sign In / Register form with logged-in account view
- 📱 **Fully Responsive** — Mobile-first design with hamburger nav
- 🎨 **Smooth Animations** — Page transitions and micro-interactions via Framer Motion

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/papriwale.git
cd papriwale

# Install dependencies
npm install
```

### Environment Setup

Copy the example env file and add your Gemini API key:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
GEMINI_API_KEY=your_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗂️ Project Structure

```
papriwale/
├── public/
│   └── logo.png              # Brand logo
├── src/
│   ├── components/
│   │   ├── CartDrawer.tsx    # Slide-in shopping cart
│   │   ├── ProfileDrawer.tsx # Sign in / account panel
│   │   └── SearchOverlay.tsx # Full-screen search
│   ├── context/
│   │   └── AppContext.tsx    # Global state (cart, auth, UI panels)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── TestimonialsPage.tsx
│   │   ├── FAQPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx               # Root layout, navigation, footer
│   ├── main.tsx              # Entry point with AppProvider
│   └── index.css             # Global styles & Tailwind config
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Type safety |
| [Vite](https://vitejs.dev/) | 6 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Framer Motion](https://motion.dev/) | 12 | Animations & transitions |
| [Lucide React](https://lucide.dev/) | 0.546 | Icon library |
| [Express](https://expressjs.com/) | 4 | Backend server |

---

## 🎨 Design System

The site uses a custom warm color palette inspired by traditional Indian aesthetics:

| Token | Color | Usage |
|-------|-------|-------|
| `terracotta` | `#C1440E` | Primary CTA, accents |
| `gold` | `#B8860B` | Decorative elements, icons |
| `cream` | `#FAF6F0` | Background |
| `cream-light` | `#FDF9F4` | Section backgrounds |
| `text-dark` | `#2C1810` | Body text |

Typography uses **Playfair Display** (serif, headings) and **Montserrat** (sans-serif, body).

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server on port 3000
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # TypeScript type check
npm run clean     # Remove build artifacts
```

---

## 🌐 Live Website

Visit the official website: [papriwale.com](https://papriwale.com)

---

## 📄 License

© 2024 Papriwale. All Rights Reserved.
