import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Menu,
  X,
  Phone,
  Search,
  Laptop,
  Smartphone,
  Headphones,
  Sparkles,
  Zap,
  MapPin,
  Tag,
  Home,
  Info,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const primaryWhatsAppUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  const gaganWhatsAppUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.secondaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  const navLinks = [
    { label: "Home", to: "/", icon: Home },
    { label: "Products", to: "/products", icon: Laptop, badge: "21+ Items" },
    { label: "Accessories", to: "/accessories", icon: Headphones },
    { label: "Offers", to: "/offers", icon: Tag, badge: "Deals" },
    { label: "About & Contact", to: "/about-contact", icon: Info },
  ];

  const quickCategories = [
    { label: "Laptop Accessories", to: "/products?category=laptop-accessories", icon: Laptop },
    { label: "Mobile Accessories", to: "/products?category=mobile-accessories", icon: Smartphone },
    { label: "Audio Gear", to: "/products?category=audio-accessories", icon: Headphones },
    { label: "Smart Gadgets", to: "/products?category=smart-gadgets", icon: Sparkles },
    { label: "Chargers & Cables", to: "/products?category=chargers-cables", icon: Zap },
  ];

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      setMobileMenuOpen(false);
      navigate(`/products?search=${encodeURIComponent(mobileSearchQuery.trim())}`);
      setMobileSearchQuery("");
    } else {
      setMobileMenuOpen(false);
      navigate("/products");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 group focus-visible:outline-2 focus-visible:outline-[#1459D9] rounded-md shrink-0"
            aria-label="Mishra Communication Home"
          >
            <span className="w-8 h-8 rounded-lg bg-[#071426] text-[#FFC928] font-extrabold text-sm flex items-center justify-center tracking-tight shadow-xs group-hover:bg-[#1459D9] group-hover:text-white transition-colors">
              MC
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-xl tracking-tight text-slate-900 whitespace-nowrap leading-tight">
                Mishra Communication
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide sm:hidden">
                Burari, Delhi
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap transition-colors py-1 relative hover:text-slate-950 ${
                    isActive
                      ? "text-[#1459D9] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1459D9] after:rounded-full"
                      : "text-slate-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1459D9] hover:bg-[#0f44a8] active:scale-[0.98] rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1459D9] whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current/20" />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#1459D9] active:scale-95 transition-all"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE NAVIGATION OVERLAY */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 w-full h-[100dvh] bg-white flex flex-col md:hidden overflow-hidden animate-in fade-in duration-200"
        >
          {/* Top Bar inside Full Menu */}
          <div className="h-16 px-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <span className="w-8 h-8 rounded-lg bg-[#071426] text-[#FFC928] font-extrabold text-sm flex items-center justify-center tracking-tight shadow-xs">
                MC
              </span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-slate-900 leading-tight">
                  Mishra Communication
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  West Sant Nagar, Burari
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#1459D9] active:scale-95 transition-all"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content Container (Takes up remaining 100% height) */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
            {/* Quick Product Search Bar */}
            <form onSubmit={handleMobileSearchSubmit} className="relative">
              <label htmlFor="mobile-nav-search" className="sr-only">
                Search catalogue
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-400" />
              </div>
              <input
                id="mobile-nav-search"
                type="text"
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                placeholder="Search accessories or gadgets..."
                className="w-full pl-10 pr-20 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1459D9] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute inset-y-1 right-1 px-3 bg-[#1459D9] text-white text-xs font-semibold rounded-lg hover:bg-[#0f44a8] transition-colors"
              >
                Search
              </button>
            </form>

            {/* Primary Site Navigation */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2">
                Main Pages
              </span>
              <nav className="space-y-1" aria-label="Mobile Main Navigation">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-[#1459D9] text-white shadow-xs"
                            : "text-slate-800 hover:bg-slate-100 active:bg-slate-100"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <Icon
                              className={`w-5 h-5 ${
                                isActive ? "text-white" : "text-slate-500"
                              }`}
                            />
                            <span>{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-blue-50 text-[#1459D9]"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                            <ChevronRight
                              className={`w-4 h-4 ${
                                isActive ? "text-white/80" : "text-slate-400"
                              }`}
                            />
                          </div>
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Category Quick Jumps */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2">
                Popular Categories
              </span>
              <div className="grid grid-cols-2 gap-2">
                {quickCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.to}
                      to={cat.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1459D9] hover:bg-blue-50/50 transition-colors flex items-center gap-2.5 text-xs font-medium text-slate-800"
                    >
                      <Icon className="w-4 h-4 text-[#1459D9] shrink-0" />
                      <span className="truncate">{cat.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Direct Contacts Section */}
            <div className="pt-2 border-t border-slate-200 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                Direct Contact · Burari Shop
              </span>

              {/* Pawan Mishra Contact Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-900">
                    Pawan Mishra
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold">
                    Primary
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={primaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={BUSINESS_CONFIG.primaryContact.telephoneUrl}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1459D9]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Gagan Mishra Contact Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-900">
                    Gagan Mishra
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    Store Support
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={gaganWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={BUSINESS_CONFIG.secondaryContact.telephoneUrl}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1459D9]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Store Address & Map Link */}
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Store Address:</span>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    {BUSINESS_CONFIG.address.fullFormatted}
                  </p>
                </div>
              </div>
              <a
                href={BUSINESS_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1459D9] hover:underline pt-1"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
