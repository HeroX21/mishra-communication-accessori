import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageSquare, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const pawanWhatsApp = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  const gaganWhatsApp = buildWhatsAppUrl(
    BUSINESS_CONFIG.secondaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  return (
    <footer className="bg-[#071426] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#1459D9] text-white font-extrabold text-sm flex items-center justify-center tracking-tight shadow-xs">
                MC
              </span>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                {BUSINESS_CONFIG.name}
              </span>
            </div>
            <p className="text-xs font-semibold text-[#FFC928] uppercase tracking-wider">
              {BUSINESS_CONFIG.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your neighborhood shop for mobile accessories, laptop essentials, computer peripherals, and smart gadgets in Burari, Delhi. Contact us to confirm current prices and compatibility.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Genuine accessory assistance &amp; in-store testing</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 tracking-wide uppercase text-[11px] text-slate-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Explore Products
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="hover:text-white transition-colors">
                  Laptop &amp; Mobile Accessories
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors">
                  Current Offers
                </Link>
              </li>
              <li>
                <Link to="/about-contact" className="hover:text-white transition-colors">
                  About &amp; Contact Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 tracking-wide uppercase text-[11px] text-slate-400">
              Popular Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/products?category=laptop-accessories"
                  className="hover:text-white transition-colors"
                >
                  Laptop Chargers &amp; Sleeves
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=usb-hubs-adapters"
                  className="hover:text-white transition-colors"
                >
                  Type-C Hubs &amp; Multiport Adapters
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=keyboards-mice"
                  className="hover:text-white transition-colors"
                >
                  Wireless Mice &amp; Keyboards
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=stands-cooling"
                  className="hover:text-white transition-colors"
                >
                  Aluminium Laptop Stands
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=chargers-cables"
                  className="hover:text-white transition-colors"
                >
                  Fast Chargers &amp; Braided Cables
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=audio-accessories"
                  className="hover:text-white transition-colors"
                >
                  TWS Earbuds &amp; Audio Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white text-sm mb-4 tracking-wide uppercase text-[11px] text-slate-400">
              Visit &amp; Contact Us
            </h3>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-[#3985FF] shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed text-slate-400">
                {BUSINESS_CONFIG.address.fullFormatted}
              </address>
            </div>
            <a
              href={BUSINESS_CONFIG.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFC928] hover:text-white transition-colors"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Direct Contacts */}
            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-400">Pawan Mishra:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_CONFIG.primaryContact.telephoneUrl}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#3985FF]" />
                    <span>{BUSINESS_CONFIG.primaryContact.phone}</span>
                  </a>
                  <a
                    href={pawanWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    aria-label="WhatsApp Pawan Mishra"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-400">Gagan Mishra:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_CONFIG.secondaryContact.telephoneUrl}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#3985FF]" />
                    <span>{BUSINESS_CONFIG.secondaryContact.phone}</span>
                  </a>
                  <a
                    href={gaganWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    aria-label="WhatsApp Gagan Mishra"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Configured Opening Hours notice */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-[#FFC928] shrink-0" />
              <span>{BUSINESS_CONFIG.openingHoursNotice}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Direct WhatsApp &amp; In-Store Enquiries</span>
            <span>·</span>
            <Link to="/about-contact" className="hover:text-slate-200 transition-colors">
              Privacy &amp; Contact Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
