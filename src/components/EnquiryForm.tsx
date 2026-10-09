import React, { useState } from "react";
import { MessageSquare, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { buildWhatsAppUrl, isValidIndianPhone, WhatsAppMessages } from "../utils/whatsapp";

interface FormData {
  name: string;
  phone: string;
  contactTarget: "pawan" | "gagan";
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    contactTarget: "pawan",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "prepared">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide your phone number.";
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please specify a subject or category.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your enquiry message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters so we can assist you.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Pick target contact
    const target =
      formData.contactTarget === "gagan"
        ? BUSINESS_CONFIG.secondaryContact
        : BUSINESS_CONFIG.primaryContact;

    const messageText = WhatsAppMessages.contactForm({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    });

    const whatsappUrl = buildWhatsAppUrl(target.whatsappNumber, messageText);

    // Open WhatsApp in a new tab safely
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmittedStatus("prepared");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
      <div className="mb-6">
        <h3 className="font-display font-bold text-xl text-slate-900">
          Send an Accessory Enquiry
        </h3>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
          Fill out the details below. We will format your enquiry and launch WhatsApp so you can chat directly with Pawan or Gagan Mishra.
        </p>
      </div>

      {submittedStatus === "prepared" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-sm mb-0.5">
              Enquiry Formatted for WhatsApp
            </span>
            <p>
              Your message has been prepared and opened in WhatsApp. Please press <strong>Send</strong> in WhatsApp to deliver it to our store. We will reply as soon as possible.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Contact recipient preference */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Direct Message To <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`flex items-center gap-2 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                formData.contactTarget === "pawan"
                  ? "border-[#1459D9] bg-[#1459D9]/5 text-slate-900 font-semibold"
                  : "border-slate-200 hover:bg-slate-50 text-slate-600"
              }`}
            >
              <input
                type="radio"
                name="contactTarget"
                value="pawan"
                checked={formData.contactTarget === "pawan"}
                onChange={() => setFormData({ ...formData, contactTarget: "pawan" })}
                className="text-[#1459D9]"
              />
              <span>Pawan Mishra (+91 84475 97343)</span>
            </label>

            <label
              className={`flex items-center gap-2 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                formData.contactTarget === "gagan"
                  ? "border-[#1459D9] bg-[#1459D9]/5 text-slate-900 font-semibold"
                  : "border-slate-200 hover:bg-slate-50 text-slate-600"
              }`}
            >
              <input
                type="radio"
                name="contactTarget"
                value="gagan"
                checked={formData.contactTarget === "gagan"}
                onChange={() => setFormData({ ...formData, contactTarget: "gagan" })}
                className="text-[#1459D9]"
              />
              <span>Gagan Mishra (+91 88821 15974)</span>
            </label>
          </div>
        </div>

        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 mb-1">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="form-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                errors.name ? "border-red-500 bg-red-50/20" : "border-slate-200"
              } focus:border-[#1459D9] focus:outline-none transition-colors`}
            />
            {errors.name && (
              <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-700 mb-1">
              Indian Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="form-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-200"
              } focus:border-[#1459D9] focus:outline-none transition-colors`}
            />
            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-700 mb-1">
            Enquiry Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="form-subject"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Laptop charger compatibility for Dell Inspiron 15"
            className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
              errors.subject ? "border-red-500 bg-red-50/20" : "border-slate-200"
            } focus:border-[#1459D9] focus:outline-none transition-colors`}
          />
          {errors.subject && (
            <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-semibold text-slate-700 mb-1">
            Your Message &amp; Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="form-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please specify your device model, requested accessory, and any questions about current stock or price..."
            className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
              errors.message ? "border-red-500 bg-red-50/20" : "border-slate-200"
            } focus:border-[#1459D9] focus:outline-none transition-colors`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1459D9] hover:bg-[#0f44a8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#1459D9]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Format &amp; Open in WhatsApp</span>
          </button>
        </div>

        {/* Privacy Note */}
        <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <p>
            Privacy Notice: Enquiry information is used exclusively to assist you with accessory compatibility and pricing via direct WhatsApp chat. No sensitive passwords, OTPs, or financial card details should ever be transmitted.
          </p>
        </div>
      </form>
    </div>
  );
};
