import React, { useEffect, useRef } from "react";
import { X, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Product } from "../data/products";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";
import { ImageFallback } from "./ImageFallback";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key and trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (product) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappInquiryUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.primaryContact.whatsappNumber,
    WhatsAppMessages.product(product.name)
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 shadow-xs focus-visible:outline-2 focus-visible:outline-[#1459D9] transition-all"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-slate-50 p-6 flex items-center justify-center">
            <ImageFallback
              src={product.image}
              alt={product.name}
              fallbackType={product.fallbackType}
              aspectRatio="aspect-square"
              className="rounded-xl shadow-xs"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Category */}
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1459D9] mb-1">
                {product.categoryLabel}
              </div>

              {/* Title */}
              <h2
                id="modal-product-title"
                className="font-display font-bold text-xl text-slate-900 leading-snug"
              >
                {product.name}
              </h2>

              {/* Price & Availability Notice */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Price:</span>
                  <span className="font-semibold text-slate-900 tabular-nums">
                    {product.priceVerified && product.price !== null
                      ? `₹${product.price.toLocaleString("en-IN")}`
                      : "Contact for current price"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Stock Status:</span>
                  <span className="text-slate-700 font-medium">
                    {product.availabilityVerified && product.availability
                      ? product.availability
                      : "Availability to be confirmed"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                    Highlights &amp; Features
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compatibility Details */}
              {product.compatibility && product.compatibility.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                    Compatibility Guidance
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {product.compatibility.map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#3985FF] shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">Options:</span>
                  <span>{product.variants.join(", ")}</span>
                </div>
              )}
            </div>

            {/* Action Area */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1459D9] hover:bg-[#0f44a8] text-white font-semibold text-sm rounded-xl transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire Price &amp; Availability via WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-slate-500">
                Direct enquiry to Pawan Mishra. Please click send after WhatsApp opens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
