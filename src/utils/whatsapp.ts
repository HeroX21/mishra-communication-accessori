/**
 * WhatsApp helpers for Mishra Communication
 * Normalizes phone numbers, encodes messages, and builds actionable URLs.
 */

export function normalizePhoneDigits(phone: string): string {
  // Strip all non-digit characters
  const digits = phone.replace(/\D/g, "");
  // If standard 10-digit Indian number without country code, prefix with 91
  if (digits.length === 10) {
    return `91${digits}`;
  }
  return digits;
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = normalizePhoneDigits(phoneNumber);
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

/**
 * Validates Indian mobile number:
 * 10 digits starting with 6, 7, 8, or 9 (with optional +91 or 91 or 0 prefix)
 */
export function isValidIndianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return /^[6-9]\d{9}$/.test(digits.slice(1));
  }
  return false;
}

// Pre-formatted inquiry message builders
export const WhatsAppMessages = {
  general: () =>
    "Hello Mishra Communication, I would like to enquire about your mobile accessories, laptop accessories and current offers.",

  product: (productName: string) =>
    `Hello Mishra Communication, I am interested in ${productName}. Please share the current price, compatibility details and availability.`,

  laptopAccessory: (accessory: string, brand?: string, model?: string) => {
    const deviceStr = [brand, model].filter(Boolean).join(" ");
    if (deviceStr) {
      return `Hello Mishra Communication, I need ${accessory} for my ${deviceStr}. Please confirm compatibility, current price and availability.`;
    }
    return `Hello Mishra Communication, I need ${accessory}. Please confirm compatibility with my laptop, current price and availability.`;
  },

  mobileAccessory: (accessory: string, deviceName?: string) => {
    if (deviceName) {
      return `Hello Mishra Communication, I am interested in ${accessory} for ${deviceName}. Please confirm compatible devices, current price and availability.`;
    }
    return `Hello Mishra Communication, I am interested in ${accessory}. Please confirm compatible devices, current price and availability.`;
  },

  offer: (offerTitle: string) =>
    `Hello Mishra Communication, I would like to know more about ${offerTitle}. Please confirm validity, eligibility and terms.`,

  customCompatibility: (data: {
    deviceType: string;
    brand?: string;
    model?: string;
    accessory: string;
    details?: string;
  }) => {
    let msg = `Hello Mishra Communication, I have an accessory enquiry:\n• Device Type: ${data.deviceType}`;
    if (data.brand) msg += `\n• Brand: ${data.brand}`;
    if (data.model) msg += `\n• Model: ${data.model}`;
    msg += `\n• Accessory Needed: ${data.accessory}`;
    if (data.details) msg += `\n• Additional Notes: ${data.details}`;
    msg += "\nPlease confirm compatibility, current price and availability.";
    return msg;
  },

  contactForm: (data: {
    name: string;
    phone: string;
    subject: string;
    message: string;
  }) =>
    `Hello Mishra Communication,\n\nName: ${data.name}\nContact: ${data.phone}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
};
