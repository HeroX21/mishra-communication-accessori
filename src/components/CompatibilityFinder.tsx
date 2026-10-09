import React, { useState } from "react";
import { MessageSquare, AlertCircle, Laptop, Smartphone, Headphones, HelpCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, WhatsAppMessages } from "../utils/whatsapp";

export const CompatibilityFinder: React.FC = () => {
  const [deviceType, setDeviceType] = useState<"Laptop" | "Mobile Device" | "Audio Device" | "Other">("Laptop");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [accessory, setAccessory] = useState("");
  const [details, setDetails] = useState("");
  const [accessoryError, setAccessoryError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessory.trim()) {
      setAccessoryError("Please specify which accessory you need (e.g. 65W charger, tempered glass, USB hub).");
      return;
    }
    setAccessoryError("");

    const message = WhatsAppMessages.customCompatibility({
      deviceType,
      brand: brand.trim() || undefined,
      model: model.trim() || undefined,
      accessory: accessory.trim(),
      details: details.trim() || undefined,
    });

    const whatsappUrl = buildWhatsAppUrl(
      BUSINESS_CONFIG.primaryContact.whatsappNumber,
      message
    );

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#071426] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-slate-800">
      <div className="max-w-2xl mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FFC928]">
          Compatibility Assistant
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
          Need Help Confirming Compatibility?
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Laptop chargers, pin connectors, and mobile accessories must match your exact device. Tell us your setup and we’ll verify compatibility directly on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Device Type Selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            1. Select Device Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Laptop", icon: Laptop },
              { label: "Mobile Device", icon: Smartphone },
              { label: "Audio Device", icon: Headphones },
              { label: "Other", icon: HelpCircle },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = deviceType === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    setDeviceType(item.label as "Laptop" | "Mobile Device" | "Audio Device" | "Other")
                  }
                  className={`flex flex-col items-center gap-2 p-3.5 rounded-xl border text-xs font-medium transition-all ${
                    isSelected
                      ? "border-[#3985FF] bg-[#1459D9]/20 text-white shadow-xs"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? "text-[#3985FF]" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="comp-brand" className="block text-xs font-semibold text-slate-300 mb-1">
              2. Device Brand (Optional)
            </label>
            <input
              id="comp-brand"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g. Dell, HP, Lenovo, Samsung, Apple"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-[#3985FF] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="comp-model" className="block text-xs font-semibold text-slate-300 mb-1">
              3. Model or Serial Details (Optional)
            </label>
            <input
              id="comp-model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="e.g. Inspiron 5502, ThinkPad E14, Galaxy M34"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-[#3985FF] focus:outline-none"
            />
          </div>
        </div>

        {/* Accessory Needed (Required) */}
        <div>
          <label htmlFor="comp-acc" className="block text-xs font-semibold text-slate-300 mb-1">
            4. Accessory Needed <span className="text-[#FFC928]">*</span>
          </label>
          <input
            id="comp-acc"
            type="text"
            value={accessory}
            onChange={(e) => {
              setAccessory(e.target.value);
              if (accessoryError) setAccessoryError("");
            }}
            placeholder="e.g. 65W Type-C adapter, wireless mouse, aluminium laptop stand"
            className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border ${
              accessoryError ? "border-red-400" : "border-slate-700"
            } text-white placeholder-slate-500 focus:border-[#3985FF] focus:outline-none`}
          />
          {accessoryError && (
            <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{accessoryError}</span>
            </p>
          )}
        </div>

        {/* Additional notes */}
        <div>
          <label htmlFor="comp-notes" className="block text-xs font-semibold text-slate-300 mb-1">
            5. Additional Requirements (Optional)
          </label>
          <textarea
            id="comp-notes"
            rows={2}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Any pin size specifics, port requirements, or preferred brands..."
            className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-[#3985FF] focus:outline-none"
          />
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1459D9] hover:bg-[#3985FF] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#FFC928]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask About Compatibility on WhatsApp</span>
          </button>
          <p className="mt-2 text-[11px] text-slate-400">
            Note: Opens a prefilled chat with Pawan Mishra. Please click send in WhatsApp to submit your request.
          </p>
        </div>
      </form>
    </div>
  );
};
