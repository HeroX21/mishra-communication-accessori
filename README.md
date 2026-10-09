# Mishra Communication — Premium Mobile & Laptop Accessories

A modern, responsive, production-ready website for **Mishra Communication**, a mobile and laptop accessories, computer peripherals, and smart gadgets business located in **West Sant Nagar, Chandan Vihar, Burari, Delhi – 110084**.

---

## 1. Scope & Architecture

### Exactly Five Interconnected Public Pages
1. **Home (`/`)**: Brand introduction, hero showcase, 10-category grid, featured products, laptop accessories spotlight, mobile accessories spotlight, store values, promotional preview, location and contacts preview, FAQ accordion, and dual CTAs.
2. **Products (`/products`)**: Complete accessory catalogue with real-time multi-field search (name, keywords, descriptions), category filtering with URL parameter synchronization (`?category=...`), price sorting that respects unverified prices, accessible product detail modal with keyboard/Escape handling, and direct WhatsApp enquiry generation.
3. **Laptop & Mobile Accessories (`/accessories`)**: Dedicated discovery page breaking down laptop essentials, mobile protection, and audio/smart gadgets, with pin/voltage compatibility warnings and an interactive **5-step Compatibility Assistant** generating structured WhatsApp messages.
4. **Offers (`/offers`)**: Verified in-store promotional packages with strict Asia/Kolkata timezone verification calculations, separation between active packages and historical visiting-card references, and honest terms.
5. **About & Contact (`/about-contact`)**: Verified business profile, full service grid, direct contact cards for **Pawan Mishra** (+91 84475 97343) and **Gagan Mishra** (+91 88821 15974), Google Maps directions, configurable opening-hours disclosure, validated contact enquiry form with Indian mobile number validation, and explicit privacy notices.

---

## 2. Source of Truth Business Information

- **Business Name**: Mishra Communication
- **Category**: Mobile accessories, laptop accessories, computer peripherals, charging adapters, cables, audio products, and smart gadgets.
- **Tagline**: Best Deals, Best Price!
- **Headline**: Smart Accessories. Better Setup. Better Deals.
- **Primary Contact**: Pawan Mishra (`+91 84475 97343` / `https://wa.me/918447597343`)
- **Secondary Contact**: Gagan Mishra (`+91 88821 15974` / `https://wa.me/918882115974`)
- **Address**: West Sant Nagar, Chandan Vihar, Gali Number 09, Near Khanna Property Dealer, Burari, Delhi – 110084.
- **Google Maps Link**: Constructed from the verified address without fabricated coordinates.
- **Opening Hours**: Configured notice requesting visitors to confirm current daily hours before visiting.

---

## 3. Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS v4 with custom brand tokens:
  - Midnight Navy: `#071426`
  - Electric Blue: `#1459D9`
  - Bright Blue: `#3985FF`
  - Warm Gold: `#FFC928`
  - Soft Background: `#F5F7FB`
- **Icons**: Lucide React
- **SEO & Structured Data**: Open Graph, Twitter cards, XML Sitemap (`/sitemap.xml`), Robots.txt (`/robots.txt`), Schema.org `ElectronicsStore` JSON-LD.

---

## 4. Business Information Awaiting Owner Confirmation

To ensure 100% accuracy and prevent misleading customers, the following items are kept as configurable placeholders or pending review:
1. **Exact Store Opening Hours**: Currently configured as *"Please contact the shop to confirm current opening hours."* (Can be updated in `src/data/businessConfig.ts`).
2. **Real-Time Product Prices**: Kept as `null` with fallback *"Contact for current price"*. When Pawan or Gagan confirms shelf prices, update the `price` and set `priceVerified: true` in `src/data/products.ts`.
3. **Specific Inventory Availability**: Kept with notice *"Availability to be confirmed"* to avoid promising items that may be temporarily out of stock.
4. **Historical Promotional Terms**: Promotional flyers and visiting card text are stored in `src/data/promotions.ts` under review (`isVerified: false`) until active dates and gift terms are verified.

---

## 5. Build & Setup Instructions

### Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Production Build
```bash
npm run build
```
This produces an optimized static build in the `dist/` directory.

### Deployment
The output in `dist/` can be deployed directly to Cloud Run, Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
Ensure single-page application (SPA) rewrites redirect all route requests (`/*`) to `/index.html`.
