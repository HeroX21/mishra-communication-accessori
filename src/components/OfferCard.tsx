import React from "react";
import { MessageSquare, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { Promotion, getPromotionStatus } from "../data/promotions";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

interface OfferCardProps {
  promotion: Promotion;
}

export const OfferCard: React.FC<OfferCardProps> = ({ promotion }) => {
  const status = getPromotionStatus(promotion);

  // Assign contact person's phone
  const contact =
    promotion.contactPerson === "Gagan Mishra"
      ? BUSINESS_CONFIG.secondaryContact
      : BUSINESS_CONFIG.primaryContact;

  const whatsappUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    WhatsAppMessages.offer(promotion.title)
  );

  const getStatusBadge = () => {
    switch (status) {
      case "Active":
        return (
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md">
            Active Promotion
          </span>
        );
      case "Upcoming":
        return (
          <span className="text-xs font-semibold text-[#1459D9] bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-md">
            Upcoming Offer
          </span>
        );
      case "Expired":
        return (
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
            Expired
          </span>
        );
      case "Needs Confirmation":
      default:
        return (
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md">
            Pending Shop Confirmation
          </span>
        );
    }
  };

  return (
    <article className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-4 mb-3">
          {getStatusBadge()}
          {promotion.startDate && promotion.endDate && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {promotion.startDate} to {promotion.endDate}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
          {promotion.title}
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {promotion.description}
        </p>

        {/* Eligibility */}
        <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
          <span className="font-semibold block text-slate-900 mb-0.5">
            Eligibility Note:
          </span>
          {promotion.eligibility}
        </div>

        {/* Applicable Categories */}
        {promotion.applicableCategories.length > 0 && (
          <div className="mt-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Applicable Accessories
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
              {promotion.applicableCategories.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Terms and conditions */}
        {promotion.termsAndConditions.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Terms &amp; Verification Guidance
            </span>
            <ul className="space-y-1.5 text-xs text-slate-500">
              {promotion.termsAndConditions.map((term, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#071426] hover:bg-[#1459D9] text-white text-xs font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#1459D9]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Enquire Offer Terms on WhatsApp</span>
        </a>
        <p className="mt-2 text-[11px] text-center text-slate-400">
          Contact: {promotion.contactPerson} ({contact.phone})
        </p>
      </div>
    </article>
  );
};
