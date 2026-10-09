import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What types of mobile accessories are available?",
    answer:
      "Mishra Communication provides mobile protective cases, tempered glass screen protectors, charging adapters, braided Type-C and Lightning cables, high-capacity power banks, wired earphones, and wireless Bluetooth earbuds. Please visit or message the shop to verify models for your specific phone.",
  },
  {
    question: "Can I enquire about laptop accessories?",
    answer:
      "Yes. We assist with compatible laptop power adapters, wireless and wired mice, office keyboards, foldable aluminium laptop stands, cooling pads, protective sleeves, USB hubs, and storage flash drives.",
  },
  {
    question: "How can I check product compatibility?",
    answer:
      "Because laptop charging pins, power delivery wattages, and phone dimensions differ, we encourage bringing your device to our shop in Burari or sending your device brand and model via WhatsApp so we can confirm exact compatibility before you purchase.",
  },
  {
    question: "How do I confirm current prices?",
    answer:
      "To ensure transparency and accurate daily quotes, prices are confirmed directly via WhatsApp or by phone call with Pawan Mishra (+91 84475 97343) or Gagan Mishra (+91 88821 15974). We never publish unverified estimates.",
  },
  {
    question: "How can I check availability?",
    answer:
      "You can send a quick WhatsApp enquiry or call before visiting the shop. We will verify real-time shelf stock or arrange prompt inventory for you.",
  },
  {
    question: "Does Mishra Communication offer laptop chargers and peripherals?",
    answer:
      "Yes, we provide compatible laptop chargers (Type-C Power Delivery and dedicated barrel tips for HP, Dell, Lenovo, and others) as well as peripherals including multi-port USB hubs, mice, keyboards, and desk mats.",
  },
  {
    question: "How can I enquire about current offers?",
    answer:
      "You can browse the verified promotional packages on our Offers page or ask directly on WhatsApp. We will share any active package deals and eligible accessory combinations currently approved in-store.",
  },
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
              className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-slate-900 hover:text-[#1459D9] transition-colors focus-visible:outline-2 focus-visible:outline-[#1459D9]"
            >
              <span className="pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#1459D9]" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
