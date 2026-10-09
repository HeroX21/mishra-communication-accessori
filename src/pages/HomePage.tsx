import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Laptop,
  Smartphone,
  Cpu,
  Clock,
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { PRODUCTS_CATALOGUE, Product } from "../data/products";
import { PROMOTIONS_CONFIG, getPromotionStatus } from "../data/promotions";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";
import { ProductCard } from "../components/ProductCard";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { CategoryCard } from "../components/CategoryCard";
import { OfferCard } from "../components/OfferCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { ImageFallback } from "../components/ImageFallback";
import heroImg from "../assets/images/hero_workspace_accessories_1791567836366.jpg";
import laptopHubStandImg from "../assets/images/product_laptop_hub_stand_1791567847940.jpg";
import earbudsImg from "../assets/images/product_audio_earbuds_1791567858926.jpg";
import gShapeLampSpeakerImg from "../assets/images/prod_g_shape_lamp_speaker_1791569941824.jpg";
import smartwatchGoldImg from "../assets/images/prod_smartwatch_gold_luxury_1791569954869.jpg";
import astronautProjectorImg from "../assets/images/prod_astronaut_star_projector_1791569966657.jpg";

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const heroWhatsAppUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  const featuredProducts = PRODUCTS_CATALOGUE.filter((p) => p.featured).slice(0, 8);
  const activePromos = PROMOTIONS_CONFIG.filter((p) => getPromotionStatus(p) === "Active").slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* SECTION 3: PREMIUM HERO */}
      <section className="relative bg-[#071426] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle geometric gradient accents */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#1459D9]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-[#FFC928]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-xs text-[#FFC928]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC928]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Burari, Delhi · Mobile &amp; Laptop Accessories
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight text-white leading-tight">
                {BUSINESS_CONFIG.headline}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Discover mobile accessories, laptop essentials, computer peripherals and smart gadgets. Contact Mishra Communication in Burari, Delhi, to confirm current prices and availability.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1459D9] hover:bg-[#0f44a8] active:scale-[0.98] rounded-xl transition-all shadow-md focus-visible:outline-2 focus-visible:outline-[#3985FF]"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#FFC928]"
                >
                  <MessageSquare className="w-4 h-4 text-[#FFC928]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#3985FF] shrink-0" />
                  <span>Compatibility Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFC928] shrink-0" />
                  <span>Direct In-Store Support</span>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <ImageFallback
                  src={heroImg}
                  alt="Modern workspace with laptop stand, keyboard, wireless mouse, and accessories"
                  aspectRatio="aspect-16/10"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">
                      Curated Desk &amp; Mobile Setup
                    </span>
                    <span className="text-[#FFC928] font-bold text-[11px]">
                      West Sant Nagar
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    Laptop chargers, stands, USB hubs, wireless audio &amp; power solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CATEGORY GRID */}
      <section className="py-16 md:py-20 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                Browse Categories
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                Explore Essential Accessory Ranges
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl">
                Select a category to view compatible peripherals, protective solutions, and charging essentials.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1459D9] hover:text-[#0f44a8] transition-colors"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {BUSINESS_CONFIG.categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                description={cat.description}
                iconName={cat.iconName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PRODUCTS */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                Featured Catalogue
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                Popular Mobile &amp; Laptop Peripherals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl">
                Browse popular accessories tested for reliable performance. Contact shop to confirm exact pricing and availability.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1459D9] hover:text-[#0f44a8]"
            >
              <span>All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LAPTOP ACCESSORIES SPOTLIGHT */}
      <section className="py-16 md:py-20 bg-[#071426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3985FF]">
                Laptop Essentials Spotlight
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                Upgrade Your Everyday Workspace.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Find accessories for productivity, connectivity and everyday laptop use. Contact the shop to confirm compatibility and availability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Laptop className="w-4 h-4 text-[#3985FF]" />
                  <span>Compatible Laptop Power Adapters</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Cpu className="w-4 h-4 text-[#3985FF]" />
                  <span>Multi-Port Type-C Docks &amp; Hubs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Wireless &amp; Silent Office Mice</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#FFC928]" />
                  <span>Padded Sleeves &amp; Foldable Stands</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/products?category=laptop-accessories"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1459D9] hover:bg-[#3985FF] rounded-xl transition-colors shadow-xs"
                >
                  <span>Explore Laptop Accessories</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
                <ImageFallback
                  src={laptopHubStandImg}
                  alt="Aluminium laptop stand and USB-C multiport hub"
                  aspectRatio="aspect-4/3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MOBILE ACCESSORIES SPOTLIGHT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <ImageFallback
                  src={earbudsImg}
                  alt="TWS wireless earbuds and audio charging accessories"
                  aspectRatio="aspect-4/3"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                Mobile Accessories Spotlight
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                Everyday Accessories, Made Practical.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Protect and power your mobile devices with durable cases, tempered glass, fast chargers, braided cables, power banks, and high-clarity audio accessories.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Durable shockproof protective cases &amp; premium covers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Edge-to-edge tempered glass screen protection with precision fitting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast charging adapters, USB-C and Lightning braided cables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wireless earbuds, Bluetooth neckbands &amp; portable power banks</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/products?category=mobile-accessories"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#071426] hover:bg-[#1459D9] rounded-xl transition-colors shadow-xs"
                >
                  <span>Explore Mobile Accessories</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART GADGETS & AUDIO GEAR SPOTLIGHT */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#071426] to-[#0a1c38] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFC928]/15 border border-[#FFC928]/30 text-xs text-[#FFC928] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smart Gadgets &amp; Audio Discovery</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                Modern Gadgets for Lifestyle, Desk &amp; Travel.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                From wireless charger ambient lamps and galaxy star projectors to luxury calling smartwatches, kids instant cameras, and sound-reactive speakers — discover gadgets tested for convenience and daily utility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Sparkles className="w-4 h-4 text-[#FFC928] shrink-0" />
                  <span>G-Shape 15W Qi Charger &amp; Lamp</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Sparkles className="w-4 h-4 text-[#3985FF] shrink-0" />
                  <span>Astronaut 360° Galaxy Star Projector</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Curved HD Calling Smartwatches</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#FFC928] shrink-0" />
                  <span>Kids Instant Print Cameras &amp; Audio</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/products?category=smart-gadgets"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-900 bg-[#FFC928] hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
                >
                  <span>Explore Smart Gadgets</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products?category=audio-accessories"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
                >
                  <span>Browse Audio Gear</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900/90 group">
                  <ImageFallback
                    src={gShapeLampSpeakerImg}
                    alt="G-Shape smart ambient lamp with wireless fast charger"
                    fallbackType="gadget"
                    aspectRatio="aspect-square"
                    className="w-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-3 bg-slate-900/95 border-t border-slate-800">
                    <span className="text-xs font-semibold text-white block truncate">G-Shape Wireless Charger Lamp</span>
                    <span className="text-[11px] text-slate-400">15W Qi · RGB Mood Light</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900/90 group">
                  <ImageFallback
                    src={smartwatchGoldImg}
                    alt="Luxury curved HD display calling smartwatch"
                    fallbackType="gadget"
                    aspectRatio="aspect-square"
                    className="w-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-3 bg-slate-900/95 border-t border-slate-800">
                    <span className="text-xs font-semibold text-white block truncate">Luxury Calling Smartwatch</span>
                    <span className="text-[11px] text-slate-400">HD Curved · Bluetooth Call</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900/90 group">
                  <ImageFallback
                    src={astronautProjectorImg}
                    alt="Astronaut 360-degree galaxy nebula star projector"
                    fallbackType="gadget"
                    aspectRatio="aspect-square"
                    className="w-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-3 bg-slate-900/95 border-t border-slate-800">
                    <span className="text-xs font-semibold text-white block truncate">Astronaut Star Projector</span>
                    <span className="text-[11px] text-slate-400">360° Magnetic · Remote</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between text-xs">
                  <div>
                    <span className="text-[#FFC928] font-bold text-xs uppercase tracking-wider block mb-1">
                      In-Store Guidance
                    </span>
                    <h3 className="font-semibold text-white text-sm mb-1.5">
                      Need Help Selecting a Gadget?
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Ask Pawan Mishra on WhatsApp for video demos, feature confirmation, and live stock in Burari.
                    </p>
                  </div>
                  <div className="pt-3">
                    <a
                      href={heroWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFC928] hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: ABOUT THE STORE & SECTION 10: WHY CHOOSE MISHRA COMMUNICATION */}
      <section className="py-16 md:py-20 bg-[#F5F7FB] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
              About Mishra Communication
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Your Local Accessory Specialist in Burari, Delhi
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mishra Communication serves customers looking for mobile accessories, laptop essentials, computer peripherals, and smart gadgets in West Sant Nagar, Chandan Vihar, and surrounding Burari neighborhoods. We assist customers with verifying model compatibility, connector fit, and daily store prices before purchasing.
            </p>
            <div className="mt-4">
              <Link
                to="/about-contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1459D9] hover:underline"
              >
                <span>Learn About Us &amp; View Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Section 10: 4 Service Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1459D9] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-display font-semibold text-slate-900 text-sm">
                Product Selection Assistance
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Direct in-person and phone guidance to ensure you select the appropriate charger, cable, or desk accessory.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1459D9] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-display font-semibold text-slate-900 text-sm">
                Mobile &amp; Laptop Categories
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Extensive coverage of laptop power adapters, USB hubs, mice, keyboards, mobile cases, and tempered glass.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1459D9] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-display font-semibold text-slate-900 text-sm">
                Direct Price &amp; Compatibility Enquiries
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Transparent information with no unverified claims. We confirm real-time shelf stock and pricing before you travel.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1459D9] flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="font-display font-semibold text-slate-900 text-sm">
                Convenient Phone &amp; WhatsApp Contact
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Immediate direct messaging with store representatives Pawan Mishra and Gagan Mishra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PROMOTIONS PREVIEW */}
      {activePromos.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                  In-Store Offers
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                  Current Verified Packages
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Enquire about available bundle options and seasonal packages.
                </p>
              </div>
              <Link
                to="/offers"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1459D9] hover:underline"
              >
                <span>View All Offers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activePromos.map((promo) => (
                <OfferCard key={promo.id} promotion={promo} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 11: LOCATION AND CONTACT PREVIEW */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC928]">
                Store Location · Burari, Delhi
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Visit Mishra Communication in West Sant Nagar
              </h2>
              <div className="flex items-start gap-3 text-slate-300 text-sm pt-1">
                <MapPin className="w-5 h-5 text-[#3985FF] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {BUSINESS_CONFIG.address.fullFormatted}
                </address>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_CONFIG.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1459D9] hover:bg-[#3985FF] text-white text-xs font-semibold transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-[#FFC928]" />
                  <span>{BUSINESS_CONFIG.openingHoursNotice}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
              <h3 className="font-display font-semibold text-white text-sm">
                Direct Contact Points
              </h3>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Primary Contact</span>
                  <span className="font-semibold text-sm text-white">Pawan Mishra</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_CONFIG.primaryContact.telephoneUrl}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#3985FF] transition-colors"
                    aria-label="Call Pawan Mishra"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={buildWhatsAppUrl(
                      BUSINESS_CONFIG.primaryContact.whatsappNumber,
                      WhatsAppMessages.general()
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 transition-colors"
                    aria-label="WhatsApp Pawan Mishra"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Secondary Contact</span>
                  <span className="font-semibold text-sm text-white">Gagan Mishra</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_CONFIG.secondaryContact.telephoneUrl}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#3985FF] transition-colors"
                    aria-label="Call Gagan Mishra"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={buildWhatsAppUrl(
                      BUSINESS_CONFIG.secondaryContact.whatsappNumber,
                      WhatsAppMessages.general()
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 transition-colors"
                    aria-label="WhatsApp Gagan Mishra"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: ACCESSIBLE FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
              Frequently Asked Questions
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Common Questions About Products &amp; Enquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Learn how we confirm accessory compatibility, price quotes, and store stock in Burari.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="py-14 bg-[#071426] text-white border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Looking for the Right Accessory?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Contact Mishra Communication to enquire about mobile accessories, laptop essentials and smart gadgets.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/products"
              className="px-5 py-3 text-xs font-semibold text-white bg-[#1459D9] hover:bg-[#3985FF] rounded-xl transition-colors shadow-xs"
            >
              Browse Products
            </Link>
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-semibold text-slate-900 bg-[#FFC928] hover:bg-amber-300 rounded-xl transition-colors shadow-xs flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={BUSINESS_CONFIG.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-[#3985FF]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
