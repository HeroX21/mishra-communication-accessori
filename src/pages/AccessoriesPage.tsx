import React from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Smartphone,
  Headphones,
  Zap,
  Cpu,
  Monitor,
  Shield,
  Keyboard,
  ArrowRight,
  MessageSquare,
  AlertTriangle,
  HardDrive,
  Radio,
  Sparkles,
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { PageHeading } from "../components/PageHeading";
import { CompatibilityFinder } from "../components/CompatibilityFinder";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

export const AccessoriesPage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-20">
      {/* Page Heading */}
      <PageHeading
        kicker="Category Discovery"
        title="Accessories for Work, Play and Everyday Use."
        description="Explore practical accessories for mobile devices, laptops and everyday digital setups. Contact Mishra Communication to confirm product compatibility, current prices and availability."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Laptop & Mobile Accessories" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* Quick Discovery Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Jump To:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <a
                href="#laptop-section"
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1459D9] hover:text-white transition-colors"
              >
                Laptop Essentials
              </a>
              <a
                href="#mobile-section"
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1459D9] hover:text-white transition-colors"
              >
                Mobile Accessories
              </a>
              <a
                href="#audio-gadgets-section"
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1459D9] hover:text-white transition-colors"
              >
                Audio &amp; Gadgets
              </a>
              <a
                href="#compatibility-guide"
                className="px-3 py-1.5 rounded-lg bg-[#FFC928]/20 text-slate-900 hover:bg-[#FFC928] transition-colors"
              >
                Compatibility Finder
              </a>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1459D9] hover:bg-[#0f44a8] rounded-xl transition-colors shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

        {/* SECTION 2: LAPTOP ACCESSORIES */}
        <section id="laptop-section" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Laptop className="w-5 h-5 text-[#1459D9]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                  Workplace &amp; Productivity
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                Laptop Accessories &amp; Essentials
              </h2>
            </div>
            <Link
              to="/products?category=laptop-accessories"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1459D9] hover:underline"
            >
              <span>View All Laptop Peripherals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Compatibility Disclaimer Box */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">
                Laptop Charger &amp; Adapter Compatibility Notice:
              </span>
              <p className="text-amber-800 leading-relaxed">
                Laptop chargers vary by pin connector diameter (e.g. 4.5mm blue tip, 7.4mm big pin, yellow square pin, or Type-C PD) as well as voltage and wattage ratings (45W, 65W, 90W). Never use an incompatible adapter. Bring your laptop or existing adapter to Mishra Communication in Burari to ensure exact matching.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Compatible Laptop Power Adapters",
                desc: "Replacement adapters for Dell, HP, Lenovo, ASUS, Acer and Type-C Power Delivery models. Tested with surge safeguards.",
                catLink: "laptop-accessories",
                icon: Zap,
              },
              {
                title: "Aluminium Foldable Laptop Stands",
                desc: "Ergonomic multi-angle risers improving sitting posture and passive ventilation for home and office workstations.",
                catLink: "stands-cooling",
                icon: Monitor,
              },
              {
                title: "USB-C Multi-Port Hubs & Docks",
                desc: "Expand modern laptop ports with 4K HDMI, high-speed USB 3.0, SD card readers, and PD pass-through charging.",
                catLink: "usb-hubs-adapters",
                icon: Cpu,
              },
              {
                title: "Wireless & Ergonomic Mice",
                desc: "Silent-click and precision wireless optical mice with 2.4GHz USB nano dongles and contoured grips.",
                catLink: "keyboards-mice",
                icon: Keyboard,
              },
              {
                title: "Protective Laptop Sleeves & Bags",
                desc: "Water-resistant shockproof padded sleeves for 13.3-inch, 14-inch, and 15.6-inch laptops with accessory pockets.",
                catLink: "cases-sleeves",
                icon: Shield,
              },
              {
                title: "USB Flash Drives & Storage",
                desc: "Dual OTG Type-C and USB 3.0 flash drives for simple file backup and data sharing between devices.",
                catLink: "laptop-accessories",
                icon: HardDrive,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1459D9] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/products?category=${item.catLink}`}
                      className="text-xs font-semibold text-[#1459D9] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: MOBILE ACCESSORIES */}
        <section id="mobile-section" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#1459D9]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                  Everyday Protection &amp; Power
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                Mobile Accessories &amp; Protection
              </h2>
            </div>
            <Link
              to="/products?category=mobile-accessories"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1459D9] hover:underline"
            >
              <span>View All Mobile Accessories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Durable Protective Phone Covers",
                desc: "Shock-absorbing silicone, hybrid armor, and clear cases with raised camera lens protection.",
                catLink: "mobile-accessories",
                icon: Shield,
              },
              {
                title: "HD Tempered Glass Screen Guards",
                desc: "9H surface scratch-resistant edge-to-edge tempered glass protectors for popular phone models.",
                catLink: "mobile-accessories",
                icon: Smartphone,
              },
              {
                title: "Fast Wall Chargers & Adapters",
                desc: "High-wattage wall adapters supporting Quick Charge and Type-C Power Delivery protocols.",
                catLink: "chargers-cables",
                icon: Zap,
              },
              {
                title: "Braided Charging & Sync Cables",
                desc: "Nylon braided heavy-duty Type-C, Lightning, and micro-USB cables with reinforced necks.",
                catLink: "chargers-cables",
                icon: Cpu,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      to={`/products?category=${item.catLink}`}
                      className="text-xs font-semibold text-[#1459D9] hover:underline flex items-center gap-1"
                    >
                      <span>Check Models</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: AUDIO AND SMART GADGETS */}
        <section id="audio-gadgets-section" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-[#1459D9]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                  Audio &amp; Connected Lifestyle
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                Audio Products &amp; Smart Peripherals
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/products?category=smart-gadgets"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1459D9] hover:underline"
              >
                <span>Smart Gadgets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                to="/products?category=audio-accessories"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1459D9] hover:underline"
              >
                <span>Audio Gear</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "True Wireless (TWS) & Gaming Earbuds",
                desc: "Compact wireless buds featuring low-latency Beast Mode, quad calling mics, and LED battery charging cases (e.g. boAt Coach, TWS).",
                catLink: "audio-accessories",
                icon: Headphones,
              },
              {
                title: "Over-Ear & Vintage Studio Headphones",
                desc: "Plush acoustic mesh headband earphones and retro leatherette wireless headphones with multi-directional brass control dials.",
                catLink: "audio-accessories",
                icon: Radio,
              },
              {
                title: "Sport Magnetic Bluetooth Neckbands",
                desc: "Lightweight silicone collar neckbands with magnetic locking earbuds, fast quick-charge, and crystal-clear call quality.",
                catLink: "audio-accessories",
                icon: Headphones,
              },
              {
                title: "Smart Ambient Lamps & 15W Qi Chargers",
                desc: "All-in-one bedside gadgets like G-Shape 15W Qi fast wireless phone charging stations with rhythm RGB light and Bluetooth audio.",
                catLink: "smart-gadgets",
                icon: Sparkles,
              },
              {
                title: "Curved HD Bluetooth Calling Smartwatches",
                desc: "Metallic wrist smartwatches with edge-to-edge curved screens, dial-pad calling, health tracking, and custom watch faces.",
                catLink: "smart-gadgets",
                icon: Cpu,
              },
              {
                title: "Galaxy Projectors & Smart Lifestyle Gadgets",
                desc: "Astronaut 360° magnetic nebula star projectors, zero-ink kids instant print cameras, portable steam irons, and USB travel blenders.",
                catLink: "smart-gadgets",
                icon: Sparkles,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1459D9] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      to={`/products?category=${item.catLink}`}
                      className="text-xs font-semibold text-[#1459D9] hover:underline flex items-center gap-1"
                    >
                      <span>Browse Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: INTERACTIVE COMPATIBILITY FINDER */}
        <section id="compatibility-guide" className="scroll-mt-24">
          <CompatibilityFinder />
        </section>

        {/* SECTION 6: PRODUCT DISCOVERY CTA */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 text-center space-y-4 shadow-2xs">
          <h2 className="font-display font-bold text-2xl text-slate-900">
            Know What You Need? Let&apos;s Find the Right Category.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Browse our full catalogue, check our verified promotional packages, or connect with our store staff directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/products"
              className="px-5 py-2.5 bg-[#1459D9] hover:bg-[#0f44a8] text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs"
            >
              Browse Products
            </Link>
            <Link
              to="/offers"
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
            >
              View Current Offers
            </Link>
            <Link
              to="/about-contact"
              className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
            >
              Contact the Shop
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
