import React, { useState } from "react";
import { MessageSquare, ShieldCheck, AlertCircle, Info, Sparkles } from "lucide-react";
import { PROMOTIONS_CONFIG, getPromotionStatus } from "../data/promotions";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { PageHeading } from "../components/PageHeading";
import { OfferCard } from "../components/OfferCard";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

export const OffersPage: React.FC = () => {
  const [filterTab, setFilterTab] = useState<"all" | "active" | "reference">("active");

  const generalOffersWhatsAppUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    "Hello Mishra Communication, I would like to enquire about any current store offers and package deals."
  );

  const activeOffers = PROMOTIONS_CONFIG.filter((p) => {
    const status = getPromotionStatus(p);
    return status === "Active" || status === "Upcoming";
  });

  const referenceOffers = PROMOTIONS_CONFIG.filter((p) => {
    const status = getPromotionStatus(p);
    return status === "Needs Confirmation" || status === "Inactive" || status === "Expired";
  });

  const displayedOffers =
    filterTab === "active"
      ? activeOffers
      : filterTab === "reference"
      ? referenceOffers
      : PROMOTIONS_CONFIG;

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-20">
      {/* Page Heading */}
      <PageHeading
        kicker="Store Promotions &amp; Packages"
        title="Discover What's on Offer."
        description="Contact Mishra Communication to confirm current promotions, eligible products and offer terms. We only publish verified store deals."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Offers" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* Verification Guarantee Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-[#1459D9] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-sm text-slate-900">
                Verified In-Store Deals Policy
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Mishra Communication does not use fabricated countdown clocks or misleading urgency. All active promotions are verified with in-store stock in Burari.
              </p>
            </div>
          </div>

          <a
            href={generalOffersWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-[#FFC928] hover:bg-amber-300 rounded-xl transition-colors shadow-2xs shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-slate-900" />
            <span>Enquire Current Deals</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setFilterTab("active")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              filterTab === "active"
                ? "bg-[#1459D9] text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Verified Active &amp; Upcoming ({activeOffers.length})
          </button>
          <button
            onClick={() => setFilterTab("reference")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              filterTab === "reference"
                ? "bg-[#1459D9] text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Under Review / Historical ({referenceOffers.length})
          </button>
          <button
            onClick={() => setFilterTab("all")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              filterTab === "all"
                ? "bg-[#1459D9] text-white shadow-2xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            All Configured ({PROMOTIONS_CONFIG.length})
          </button>
        </div>

        {/* Notice for Historical / Reference items */}
        {filterTab === "reference" && (
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              These promotions originate from historical shop visiting cards or prior campaigns. Because valid dates, gift allocations, or eligibility require active owner confirmation, they are marked as <strong>Pending Shop Confirmation</strong> and are not published as active store deals.
            </p>
          </div>
        )}

        {/* Offers Cards Grid */}
        {displayedOffers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedOffers.map((promo) => (
              <OfferCard key={promo.id} promotion={promo} />
            ))}
          </div>
        ) : (
          /* Empty State as defined in Section 8 */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-[#1459D9]" />
            </div>
            <h3 className="font-display font-semibold text-lg text-slate-900">
              No confirmed promotions are currently listed
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No confirmed promotions are currently listed. Contact Mishra Communication to enquire about current offers.
            </p>
            <div className="pt-2">
              <a
                href={generalOffersWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1459D9] hover:bg-[#0f44a8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Shop About Current Deals</span>
              </a>
            </div>
          </div>
        )}

        {/* How Promotions Work */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="font-display font-bold text-base text-slate-900 mb-3">
            How In-Store Promotions Work at Mishra Communication
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div>
              <span className="font-semibold text-slate-900 block mb-1">
                1. Transparent Verification
              </span>
              <p>
                Packages are created around accessory combinations like desk setups or dual charging accessories. We explain what is included before purchase.
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block mb-1">
                2. Live Stock Checks
              </span>
              <p>
                Because seasonal accessory batches sell quickly, message Pawan Mishra or Gagan Mishra on WhatsApp to reserve items.
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block mb-1">
                3. Direct In-Store Pickup
              </span>
              <p>
                Visit our store at West Sant Nagar, Chandan Vihar, Gali 9 in Burari, Delhi to test compatibility directly on your device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
