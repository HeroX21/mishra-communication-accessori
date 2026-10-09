export type PromotionStatus =
  | "Active"
  | "Upcoming"
  | "Expired"
  | "Inactive"
  | "Needs Confirmation";

export interface Promotion {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  startDate: string | null; // e.g. "2026-10-01" or null if unconfirmed
  endDate: string | null;   // e.g. "2026-10-31" or null if unconfirmed
  termsAndConditions: string[];
  applicableCategories: string[];
  isActive: boolean;
  isVerified: boolean; // Must be true to be published as Active
  image?: string;
  contactPerson: "Pawan Mishra" | "Gagan Mishra";
}

/**
 * Calculates current status of a promotion relative to current Indian Standard Time (Asia/Kolkata)
 */
export function getPromotionStatus(promo: Promotion): PromotionStatus {
  // If not verified by store owner, flag as Needs Confirmation
  if (!promo.isVerified) {
    return "Needs Confirmation";
  }

  // If marked inactive in store config
  if (!promo.isActive) {
    return "Inactive";
  }

  // If dates are missing or invalid
  if (!promo.startDate || !promo.endDate) {
    return "Needs Confirmation";
  }

  // Calculate IST Date
  const now = new Date();
  // Format current date in Asia/Kolkata ISO string (YYYY-MM-DD)
  const istFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const todayIST = istFormatter.format(now); // "YYYY-MM-DD"

  if (promo.endDate < promo.startDate) {
    return "Needs Confirmation";
  }

  if (todayIST < promo.startDate) {
    return "Upcoming";
  }

  if (todayIST > promo.endDate) {
    return "Expired";
  }

  return "Active";
}

/**
 * Promotions list
 * Note: Historical references without confirmed active dates or terms
 * are explicitly kept with `isVerified: false` so that unverified deals
 * are NEVER published as active without store confirmation.
 */
export const PROMOTIONS_CONFIG: Promotion[] = [
  {
    id: "promo-festive-bundle-enquiry",
    title: "Seasonal Accessory Combo Enquiry",
    description:
      "Enquire about special bundle pricing when pairing laptop stands, USB hubs, or fast chargers together. Contact the shop directly to check available store packages.",
    eligibility: "Available for in-store walkthrough and direct enquiries in Burari.",
    startDate: "2026-10-01",
    endDate: "2026-11-30",
    termsAndConditions: [
      "Bundle availability and pricing are subject to daily in-store stock.",
      "Eligible on selected mobile and laptop accessory combinations.",
      "Please verify exact brand compatibility and terms with Pawan Mishra or Gagan Mishra before purchase.",
    ],
    applicableCategories: [
      "Laptop Accessories",
      "USB Hubs & Adapters",
      "Laptop Stands & Cooling Pads",
      "Chargers & Cables",
    ],
    isActive: true,
    isVerified: true,
    contactPerson: "Pawan Mishra",
  },
  {
    id: "promo-workstation-upgrade",
    title: "Workstation Peripherals Setup Package",
    description:
      "Planning a clean home or office desk setup? Ask about package deals on wireless keyboard, ergonomic mouse, and extended desk mats.",
    eligibility: "Enquiries welcome for students, professionals, and home-office setups.",
    startDate: "2026-10-05",
    endDate: "2026-12-15",
    termsAndConditions: [
      "Package configurations subject to model availability.",
      "Contact shop to confirm connector types (USB-A dongle vs Bluetooth) for your specific laptop.",
    ],
    applicableCategories: ["Keyboards & Mice", "Laptop Accessories"],
    isActive: true,
    isVerified: true,
    contactPerson: "Gagan Mishra",
  },
  {
    id: "promo-historical-visiting-card-offer",
    title: "Festive Shop Promotion (Historical Reference)",
    description:
      "Historical visiting card and flyer reference. Terms, dates, and eligible product lines require active owner verification before publishing.",
    eligibility: "Pending current seasonal confirmation.",
    startDate: null,
    endDate: null,
    termsAndConditions: [
      "Held in review until verified by shop owner.",
      "Does not constitute an active offer.",
    ],
    applicableCategories: ["Mobile Accessories", "Laptop Accessories"],
    isActive: false,
    isVerified: false,
    contactPerson: "Pawan Mishra",
  },
];
