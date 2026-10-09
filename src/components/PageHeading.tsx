import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeadingProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  kicker?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  description,
  breadcrumbs,
  kicker,
}) => {
  return (
    <div className="bg-[#071426] text-white py-12 md:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="flex items-center gap-1.5">
                  {crumb.to && !isLast ? (
                    <Link
                      to={crumb.to}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#FFC928] font-medium" aria-current={isLast ? "page" : undefined}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
                </li>
              );
            })}
          </ol>
        </nav>

        {kicker && (
          <span className="text-xs font-bold uppercase tracking-wider text-[#3985FF] block mb-1">
            {kicker}
          </span>
        )}

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
          {title}
        </h1>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
