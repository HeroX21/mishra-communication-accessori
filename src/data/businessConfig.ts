export interface ContactPerson {
  name: string;
  phone: string;
  telephoneUrl: string;
  whatsappNumber: string;
  whatsappUrl: string;
}

export interface BusinessConfig {
  name: string;
  legalCategory: string;
  tagline: string;
  headline: string;
  primaryContact: ContactPerson;
  secondaryContact: ContactPerson;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    fullFormatted: string;
  };
  directionsUrl: string;
  openingHoursNotice: string;
  announcement: {
    enabled: boolean;
    text: string;
    actionLabel: string;
    actionLink: string;
  };
  categories: {
    id: string;
    name: string;
    description: string;
    iconName: string;
    badgeCountNotice?: string;
  }[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Mishra Communication",
  legalCategory: "Mobile & Laptop Accessories, Computer Peripherals & Smart Gadgets",
  tagline: "Best Deals, Best Price!",
  headline: "Smart Accessories. Better Setup. Better Deals.",
  primaryContact: {
    name: "Pawan Mishra",
    phone: "+91 84475 97343",
    telephoneUrl: "tel:+918447597343",
    whatsappNumber: "918447597343",
    whatsappUrl: "https://wa.me/918447597343",
  },
  secondaryContact: {
    name: "Gagan Mishra",
    phone: "+91 88821 15974",
    telephoneUrl: "tel:+918882115974",
    whatsappNumber: "918882115974",
    whatsappUrl: "https://wa.me/918882115974",
  },
  address: {
    line1: "Gali Number 09",
    line2: "Chandan Vihar, West Sant Nagar",
    landmark: "Near Khanna Property Dealer",
    area: "West Sant Nagar, Chandan Vihar",
    city: "Burari, Delhi",
    pincode: "110084",
    state: "Delhi",
    fullFormatted:
      "West Sant Nagar, Chandan Vihar, Gali Number 09, Near Khanna Property Dealer, Burari, Delhi – 110084.",
  },
  // Constructed from the supplied address without fabricating coordinates
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mishra+Communication+West+Sant+Nagar+Chandan+Vihar+Gali+09+Near+Khanna+Property+Dealer+Burari+Delhi+110084",
  openingHoursNotice:
    "Please contact the shop to confirm current opening hours.",
  announcement: {
    enabled: true,
    text: "Explore mobile accessories, laptop essentials and smart gadgets at Mishra Communication.",
    actionLabel: "View Current Offers",
    actionLink: "/offers",
  },
  categories: [
    {
      id: "laptop-accessories",
      name: "Laptop Accessories",
      description: "Chargers, sleeves, cooling pads, adapters & desk accessories.",
      iconName: "Laptop",
    },
    {
      id: "mobile-accessories",
      name: "Mobile Accessories",
      description: "Covers, tempered glass, cables, adapters & protection.",
      iconName: "Smartphone",
    },
    {
      id: "chargers-cables",
      name: "Chargers & Cables",
      description: "Fast chargers, USB-C, Lightning & braided heavy-duty cables.",
      iconName: "Zap",
    },
    {
      id: "audio-accessories",
      name: "Audio Accessories",
      description: "Wireless earbuds, wired earphones, neckbands & headphones.",
      iconName: "Headphones",
    },
    {
      id: "keyboards-mice",
      name: "Keyboards & Mice",
      description: "Ergonomic wireless mice, office keyboards & mouse pads.",
      iconName: "Keyboard",
    },
    {
      id: "stands-cooling",
      name: "Laptop Stands & Cooling Pads",
      description: "Aluminium foldable risers and cooling pads for better posture.",
      iconName: "Monitor",
    },
    {
      id: "usb-hubs-adapters",
      name: "USB Hubs & Adapters",
      description: "Multi-port type-C docks, HDMI adapters, OTG & card readers.",
      iconName: "Cpu",
    },
    {
      id: "power-banks",
      name: "Power Banks",
      description: "High-capacity portable batteries with fast charging support.",
      iconName: "BatteryCharging",
    },
    {
      id: "cases-sleeves",
      name: "Protective Cases & Sleeves",
      description: "Padded laptop bags, slim sleeves and durable mobile covers.",
      iconName: "Shield",
    },
    {
      id: "smart-gadgets",
      name: "Other Smart Gadgets",
      description: "Bluetooth speakers, smart wrist gadgets & desk peripherals.",
      iconName: "Sparkles",
    },
  ],
};
