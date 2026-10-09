import React from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { PageHeading } from "../components/PageHeading";
import { EnquiryForm } from "../components/EnquiryForm";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

export const AboutContactPage: React.FC = () => {
  const pawanWhatsApp = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    "Hello Pawan Mishra, I have an enquiry regarding mobile and laptop accessories at Mishra Communication."
  );

  const gaganWhatsApp = buildWhatsAppUrl(
    BUSINESS_CONFIG.secondaryContact.whatsappNumber,
    "Hello Gagan Mishra, I have an enquiry regarding mobile and laptop accessories at Mishra Communication."
  );

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-20">
      {/* Page Heading */}
      <PageHeading
        kicker="Store Details &amp; Contact"
        title="About &amp; Contact Mishra Communication"
        description="Serving customers in Burari, Delhi with mobile accessories, laptop essentials, computer peripherals, and smart gadgets. Direct phone calls and WhatsApp messaging."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About & Contact" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* SECTION 1: ABOUT INTRODUCTION */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-2xs">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
              Store Profile
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
              About Mishra Communication
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mishra Communication is a local business located in West Sant Nagar, Chandan Vihar, Burari, Delhi. We focus on providing high-utility mobile accessories, laptop essentials, computer peripherals, charging adapters, cables, audio products, and smart gadgets to our local community.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because modern device ports, voltages, and pin sizes vary significantly, our primary priority is helping you verify product compatibility, physical fit, and real-time store pricing before purchasing. You can contact Pawan Mishra or Gagan Mishra directly via phone or WhatsApp for prompt personal assistance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Mobile &amp; Laptop Accessories</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Direct In-Store Assistance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Burari, Delhi Location</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES & ACCESSORY CATEGORIES */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
              What We Offer
            </span>
            <h2 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
              Store Services &amp; Product Specializations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Comprehensive accessory coverage across mobile, computing, and everyday digital setups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Mobile Covers & Cases",
                desc: "Shock-absorbing protective covers, slim silicone cases, and bumper cases.",
              },
              {
                title: "Screen Protectors & Guard",
                desc: "Edge-to-edge 9H tempered glass screen protectors and privacy guards.",
              },
              {
                title: "Mobile Chargers & Adapters",
                desc: "Fast wall chargers, high-wattage adapters, and multi-port USB plugs.",
              },
              {
                title: "Charging Cables & Connectors",
                desc: "Braided Type-C, Lightning, and micro-USB high-speed charging cables.",
              },
              {
                title: "Power Banks & Portable Power",
                desc: "High-capacity slim battery packs with fast charging indicators.",
              },
              {
                title: "Audio Products & Earbuds",
                desc: "True wireless stereo earbuds, wired earphones, neckbands, and speakers.",
              },
              {
                title: "Laptop Chargers & Adapters",
                desc: "Compatible power bricks and Type-C PD chargers for major laptop brands.",
              },
              {
                title: "Keyboards & Computer Mice",
                desc: "Wireless mice, office silent keyboards, and durable extended desk mats.",
              },
              {
                title: "Laptop Stands & Cooling Pads",
                desc: "Aluminium multi-angle adjustable risers for healthy posture and airflow.",
              },
              {
                title: "USB Hubs & Multi-Port Docks",
                desc: "Type-C dongles featuring 4K HDMI, USB 3.0 ports, and SD card readers.",
              },
              {
                title: "Protective Sleeves & Bags",
                desc: "Cushioned water-resistant laptop pouches for 13-inch to 15.6-inch devices.",
              },
              {
                title: "Other Smart Peripherals",
                desc: "Bluetooth speakers, OTG flash drives, and computer desk gadgets.",
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <h3 className="font-display font-semibold text-sm text-slate-900">
                  {srv.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 & 4: CONTACT CARDS, ADDRESS & HOURS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1459D9]">
                Reach Out Directly
              </span>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                Store Representatives
              </h2>
            </div>

            {/* Pawan Mishra Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    Primary Contact
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Pawan Mishra
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1459D9] flex items-center justify-center font-bold text-sm">
                  PM
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <a
                  href={BUSINESS_CONFIG.primaryContact.telephoneUrl}
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#1459D9]" />
                  <span>Call: {BUSINESS_CONFIG.primaryContact.phone}</span>
                </a>

                <a
                  href={pawanWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +91 84475 97343</span>
                </a>
              </div>
            </div>

            {/* Gagan Mishra Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    Secondary Contact
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Gagan Mishra
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1459D9] flex items-center justify-center font-bold text-sm">
                  GM
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <a
                  href={BUSINESS_CONFIG.secondaryContact.telephoneUrl}
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#1459D9]" />
                  <span>Call: {BUSINESS_CONFIG.secondaryContact.phone}</span>
                </a>

                <a
                  href={gaganWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +91 88821 15974</span>
                </a>
              </div>
            </div>

            {/* Address & Opening Hours */}
            <div className="bg-[#071426] text-white p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="font-display font-semibold text-sm text-[#FFC928]">
                Store Location &amp; Directions
              </h3>
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-[#3985FF] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {BUSINESS_CONFIG.address.fullFormatted}
                </address>
              </div>

              <a
                href={BUSINESS_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1459D9] hover:bg-[#3985FF] text-white text-xs font-semibold transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Section 5: Opening hours */}
              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#FFC928] shrink-0" />
                <span>{BUSINESS_CONFIG.openingHoursNotice}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form (Section 6 & 7) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </section>

        {/* SECTION 7: DETAILED PRIVACY & ACCURACY DISCLOSURE */}
        <section className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <ShieldCheck className="w-4 h-4 text-[#1459D9]" />
            <span>Store Privacy Notice &amp; Consumer Disclosure</span>
          </div>
          <p className="leading-relaxed">
            Mishra Communication collects your name, phone number, and accessory requirements exclusively for responding to your enquiry and confirming item compatibility. We do not store sensitive payment credentials, passwords, or confidential financial tokens on this website. When you submit an enquiry form, the details are formatted for delivery directly into WhatsApp chat.
          </p>
          <p className="text-slate-500">
            If you have any questions regarding how your contact info is handled, please speak with Pawan Mishra directly at +91 84475 97343.
          </p>
        </section>
      </div>
    </div>
  );
};
