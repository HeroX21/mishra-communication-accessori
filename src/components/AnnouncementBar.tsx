import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/businessConfig";

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const { announcement } = BUSINESS_CONFIG;

  if (!announcement.enabled || dismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#071426] text-slate-200 border-b border-slate-800 text-xs py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center truncate">
          <span className="font-normal truncate">
            {announcement.text}
          </span>
          {announcement.actionLink && (
            <Link
              to={announcement.actionLink}
              className="inline-flex items-center gap-1 font-semibold text-[#FFC928] hover:text-white transition-colors underline-offset-4 hover:underline shrink-0"
            >
              <span>{announcement.actionLabel}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded-sm focus-visible:outline-2 focus-visible:outline-[#FFC928] transition-colors shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
