import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { OffersPage } from "./pages/OffersPage";
import { AboutContactPage } from "./pages/AboutContactPage";
import { BUSINESS_CONFIG } from "./data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "./utils/whatsapp";

/**
 * Scroll to top on route navigation and update page-specific SEO titles
 */
const RouteMetadataAndScroll: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Technical SEO Page Titles as defined in Section 16
    let title = "Mishra Communication | Mobile & Laptop Accessories in Burari";
    let metaDesc = "Mobile accessories, laptop essentials, computer peripherals and smart gadgets in Burari, Delhi. Contact Mishra Communication.";

    switch (pathname) {
      case "/":
        title = "Mishra Communication | Mobile & Laptop Accessories in Burari";
        metaDesc = "Discover mobile accessories, laptop essentials, computer peripherals and smart gadgets. Contact Mishra Communication in Burari, Delhi.";
        break;
      case "/products":
        title = "Mobile & Laptop Accessories | Mishra Communication";
        metaDesc = "Browse mobile accessories, laptop essentials, computer peripherals and smart gadgets. Contact the shop to confirm current prices and availability.";
        break;
      case "/accessories":
        title = "Laptop Accessories & Mobile Essentials | Mishra Communication";
        metaDesc = "Explore practical accessories for mobile devices, laptops and everyday digital setups in Burari, Delhi.";
        break;
      case "/offers":
        title = "Accessory Offers | Mishra Communication, Burari";
        metaDesc = "Contact Mishra Communication to confirm current promotions, eligible products and offer terms in Burari, Delhi.";
        break;
      case "/about-contact":
        title = "Contact Mishra Communication | Burari, Delhi";
        metaDesc = "Serving customers in Burari, Delhi with mobile accessories, laptop essentials, and peripherals. Direct phone calls and WhatsApp.";
        break;
      default:
        title = "Mishra Communication | Mobile & Laptop Accessories in Burari";
        break;
    }

    document.title = title;

    // Update meta description tag
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", metaDesc);
    }
  }, [pathname]);

  return null;
};

export default function App() {
  const floatingWhatsAppUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.general()
  );

  return (
    <BrowserRouter>
      <RouteMetadataAndScroll />
      <div className="min-h-screen flex flex-col bg-[#F5F7FB] text-[#111827]">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content View */}
        <main className="flex-1" id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/about-contact" element={<AboutContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button for Quick Inquiries */}
        <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
          <a
            href={floatingWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat with Pawan Mishra"
            className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#071426]"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="text-xs font-bold tracking-wide hidden sm:inline">
              Chat on WhatsApp
            </span>
          </a>
        </aside>
      </div>
    </BrowserRouter>
  );
}
