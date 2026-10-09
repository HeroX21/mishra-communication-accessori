import React from "react";
import { MessageSquare, ExternalLink } from "lucide-react";
import { Product } from "../data/products";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";
import { ImageFallback } from "./ImageFallback";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.product(product.name)
  );

  return (
    <article className="group bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      {/* Product Image Area */}
      <div
        className="cursor-pointer overflow-hidden relative bg-slate-50"
        onClick={() => onViewDetails(product)}
      >
        <ImageFallback
          src={product.image}
          alt={product.name}
          fallbackType={product.fallbackType}
          aspectRatio="aspect-4/3"
          className="group-hover:scale-102 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category kicker */}
          <div className="text-[12px] font-semibold text-[#1459D9] uppercase tracking-wider mb-1">
            {product.categoryLabel}
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-display font-semibold text-slate-900 text-base leading-snug hover:text-[#1459D9] cursor-pointer transition-colors line-clamp-2"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing, Availability & Action Row */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                Price
              </span>
              <span className="font-semibold text-slate-900 tabular-nums">
                {product.priceVerified && product.price !== null
                  ? `₹${product.price.toLocaleString("en-IN")}`
                  : "Contact for price"}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                Availability
              </span>
              <span className="text-slate-600 font-medium">
                {product.availabilityVerified && product.availability
                  ? product.availability
                  : "To be confirmed"}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => onViewDetails(product)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#1459D9]"
            >
              <span>Details</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1459D9] hover:bg-[#0f44a8] rounded-lg transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-[#1459D9]"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
