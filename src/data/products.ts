export type ProductCategory =
  | "laptop-accessories"
  | "mobile-accessories"
  | "chargers-cables"
  | "audio-accessories"
  | "keyboards-mice"
  | "stands-cooling"
  | "usb-hubs-adapters"
  | "power-banks"
  | "cases-sleeves"
  | "smart-gadgets";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  image: string;
  fallbackType: "hub" | "stand" | "audio" | "powerbank" | "peripheral" | "cable" | "case" | "gadget";
  price: number | null; // null for unconfirmed / enquiry-only prices
  priceVerified: boolean;
  availability: "In Stock" | "Limited Stock" | "Enquire for Stock" | null;
  availabilityVerified: boolean;
  specifications: string[];
  compatibility: string[];
  variants?: string[];
  featured: boolean;
  demoOnly: boolean;
  keywords: string[];
}

// Visual assets from workspace
import laptopHubStandImg from "../assets/images/product_laptop_hub_stand_1791567847940.jpg";
import audioEarbudsImg from "../assets/images/product_audio_earbuds_1791567858926.jpg";
import chargingPowerbankImg from "../assets/images/product_charging_powerbank_1791567870135.jpg";
import peripheralsGearImg from "../assets/images/category_peripherals_gear_1791567880846.jpg";
import heroAccessoriesImg from "../assets/images/hero_workspace_accessories_1791567836366.jpg";

// Uploaded & identified product assets
import boatCoachEarbudsImg from "../assets/images/prod_boat_coach_earbuds_1791569888889.jpg";
import marshallHeadphonesImg from "../assets/images/prod_marshall_headphones_1791569931964.jpg";
import gShapeLampSpeakerImg from "../assets/images/prod_g_shape_lamp_speaker_1791569941824.jpg";
import smartwatchGoldImg from "../assets/images/prod_smartwatch_gold_luxury_1791569954869.jpg";
import astronautProjectorImg from "../assets/images/prod_astronaut_star_projector_1791569966657.jpg";
import monocularTelescopeImg from "../assets/images/prod_monocular_telescope_1791570020442.jpg";
import jaiNeckbandImg from "../assets/images/prod_jai_neckband_1791570030974.jpg";
import kidsInstantCameraImg from "../assets/images/prod_kids_instant_camera_1791570042954.jpg";
import qucinSpeakerImg from "../assets/images/prod_qucin_speaker_1791570055080.jpg";
import airpodsMaxHeadphonesImg from "../assets/images/prod_airpods_max_headphones_1791570065669.jpg";
import scalpMassagerImg from "../assets/images/prod_electric_scalp_massager_1791570134325.jpg";
import usbGalaxyLampImg from "../assets/images/prod_usb_galaxy_projection_lamp_1791570146041.jpg";
import travelSteamIronImg from "../assets/images/prod_portable_steam_iron_1791570158150.jpg";
import miniJuicerImg from "../assets/images/prod_portable_mini_juicer_1791570169966.jpg";

export const PRODUCTS_CATALOGUE: Product[] = [
  // --- CORE WORKSPACE & COMPUTING PRODUCTS ---
  {
    id: "prod-usb-c-multiport-hub",
    name: "Aluminium Multi-Port USB-C Hub & Adapter",
    category: "usb-hubs-adapters",
    categoryLabel: "USB Hubs & Adapters",
    description:
      "Compact aluminium multi-port hub featuring 4K HDMI, USB 3.0 ports, SD/TF card slots, and USB-C Power Delivery pass-through for laptops and tablets.",
    image: laptopHubStandImg,
    fallbackType: "hub",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Ports: 4K HDMI, USB 3.0, USB 2.0, SD/TF slots, USB-C PD",
      "Body: Heat-dissipating aluminium alloy",
      "Interface: High-speed Type-C connector with braided cable",
      "Plug & Play: No driver installation required",
    ],
    compatibility: [
      "USB-C laptops (MacBook, Dell, HP, Lenovo, ASUS, Acer)",
      "Type-C tablets & compatible smartphones",
    ],
    variants: ["Space Grey", "Silver"],
    featured: true,
    demoOnly: false,
    keywords: ["usb hub", "type c adapter", "hdmi port", "laptop dock", "macbook dongle", "sd card reader"],
  },
  {
    id: "prod-foldable-laptop-stand",
    name: "Ergonomic Aluminium Foldable Laptop Stand",
    category: "stands-cooling",
    categoryLabel: "Laptop Stands & Cooling Pads",
    description:
      "Sturdy 6-level adjustable height laptop riser constructed from high-grade aluminium alloy with anti-slip silicone cushions for improved posture and airflow.",
    image: laptopHubStandImg,
    fallbackType: "stand",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Levels: 6-angle ergonomic height adjustment",
      "Material: CNC-machined aluminium with silicone pads",
      "Foldable: Pocket-sized collapsible design with travel pouch",
      "Cooling: Hollow open design for passive heat dissipation",
    ],
    compatibility: [
      "10-inch to 15.6-inch laptops",
      "Tablets and drawing pads",
    ],
    variants: ["Metallic Silver", "Matte Grey"],
    featured: true,
    demoOnly: false,
    keywords: ["laptop stand", "cooling riser", "ergonomic desk", "aluminium holder", "portable stand"],
  },
  {
    id: "prod-wireless-keyboard-mouse-combo",
    name: "Compact Wireless Keyboard & Precision Mouse Combo",
    category: "keyboards-mice",
    categoryLabel: "Keyboards & Mice",
    description:
      "Whisper-quiet low-profile wireless keyboard paired with an ergonomic optical mouse. Uses a single 2.4GHz USB nano receiver for zero-clutter desks.",
    image: peripheralsGearImg,
    fallbackType: "peripheral",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Connection: 2.4GHz wireless via single USB nano dongle",
      "Keyboard: Chiclet low-travel keys with multimedia shortcuts",
      "Mouse: 1600 DPI adjustable optical sensor, silent switches",
      "Battery life: Smart auto-sleep power saving mode",
    ],
    compatibility: [
      "Windows PC, macOS laptops, Linux desktops",
      "Smart TVs and USB-supported interactive panels",
    ],
    variants: ["Space Grey", "Matte Black"],
    featured: true,
    demoOnly: false,
    keywords: ["keyboard mouse combo", "wireless mouse", "office keyboard", "silent mouse", "desk setup"],
  },
  {
    id: "prod-extended-desk-mat",
    name: "Waterproof Extended Desk Mat & Gaming Mouse Pad",
    category: "keyboards-mice",
    categoryLabel: "Keyboards & Mice",
    description:
      "Extra-large non-slip rubber base desk mat with smooth micro-textured fabric surface, anti-fray stitched edges, and spill-resistant coating.",
    image: peripheralsGearImg,
    fallbackType: "peripheral",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Dimensions: Fits full-size keyboard and mouse comfortably",
      "Surface: Low-friction micro-weave cloth for accurate tracking",
      "Base: Non-slip textured natural rubber base",
      "Border: Precision reinforced anti-fraying stitched border",
    ],
    compatibility: [
      "All optical and laser mice, suitable for home and office desks",
    ],
    variants: ["Minimalist Solid Black", "Dark Slate Grey"],
    featured: false,
    demoOnly: false,
    keywords: ["mouse pad", "desk mat", "extended mousepad", "desk blotter", "laptop mat"],
  },
  {
    id: "prod-laptop-power-adapter",
    name: "Universal & Compatible Laptop Power Adapters",
    category: "laptop-accessories",
    categoryLabel: "Laptop Accessories",
    description:
      "Reliable replacement laptop chargers and Type-C Power Delivery adapters built with over-voltage and surge protection. Verify your exact brand and tip at the shop.",
    image: heroAccessoriesImg,
    fallbackType: "stand",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Outputs: Available in 45W, 65W, 90W and Type-C 65W PD",
      "Protection: Surge, short-circuit, and thermal safeguards",
      "Cable: Long heavy-duty power cord with grounded 3-pin plug",
      "Guidance: Shop verifies connector pin dimensions prior to sale",
    ],
    compatibility: [
      "HP, Dell, Lenovo, ASUS, Acer, Apple Type-C & compatible models",
      "Always check voltage, amp rating and pin size at shop",
    ],
    variants: ["USB-C 65W PD", "Round Pin 65W", "Square Pin 65W"],
    featured: false,
    demoOnly: false,
    keywords: ["laptop charger", "power adapter", "hp charger", "dell charger", "lenovo adapter", "65w charger"],
  },
  {
    id: "prod-laptop-protective-sleeve",
    name: "Water-Resistant Shockproof Laptop Sleeve & Bag",
    category: "cases-sleeves",
    categoryLabel: "Protective Cases & Sleeves",
    description:
      "Plush fleece-lined laptop protective case with splash-proof oxford exterior fabric, external zipper accessory pocket, and 360-degree corner cushioning.",
    image: heroAccessoriesImg,
    fallbackType: "case",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Interior: Ultra-soft scratch-resistant velvet lining",
      "Exterior: Water-repellent heavy canvas nylon",
      "Storage: Front zippered compartment for charger, mouse & cables",
      "Zippers: Smooth dual metal zips with protective inner baffle",
    ],
    compatibility: [
      "13.3-inch to 14-inch laptops and ultrabooks",
      "15.6-inch standard notebooks",
    ],
    variants: ["Dark Charcoal Grey", "Navy Blue", "Slate Black"],
    featured: false,
    demoOnly: false,
    keywords: ["laptop sleeve", "laptop bag", "protective case", "water resistant pouch", "macbook cover"],
  },
  {
    id: "prod-usb-drive-storage",
    name: "Dual-Interface USB 3.0 & Type-C Flash Drive",
    category: "laptop-accessories",
    categoryLabel: "Laptop Accessories",
    description:
      "Dual OTG metal thumb drive with standard USB-A on one end and Type-C on the other, allowing seamless file transfer between smartphones, tablets and PCs.",
    image: laptopHubStandImg,
    fallbackType: "hub",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Dual Interface: USB 3.0 Type-A + USB-C OTG",
      "Body: 360-degree swivel zinc-alloy metal case",
      "Performance: High-speed read and write for movies, docs & photos",
      "Protection: Shockproof, dustproof, and key-ring loop",
    ],
    compatibility: [
      "Windows, Mac, ChromeOS, Android OTG smartphones",
    ],
    variants: ["32GB", "64GB", "128GB"],
    featured: false,
    demoOnly: false,
    keywords: ["pendrive", "usb drive", "otg flash drive", "type c pendrive", "storage accessory"],
  },

  // --- AUDIO ACCESSORIES (IDENTIFIED FROM ASSETS) ---
  {
    id: "prod-boat-coach-earbuds",
    name: "boAt Coach Gaming & Sports TWS Earbuds",
    category: "audio-accessories",
    categoryLabel: "Audio Accessories",
    description:
      "High-energy in-ear true wireless earbuds engineered with low-latency Beast Mode, quad microphones with ENx noise cancellation for crystal calls, and an LED battery case.",
    image: boatCoachEarbudsImg,
    fallbackType: "audio",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Gaming Latency: Ultra-low latency BEAST mode for gaming and video sync",
      "Mic Technology: Quad microphones with ENx ambient noise suppression",
      "Battery Case: Matte charging dock with digital status LED indicator",
      "Drivers: 10mm high-amplitude titanium drivers with deep bass response",
      "Connectivity: Bluetooth 5.3 with instant wake and pair technology",
    ],
    compatibility: [
      "All Android smartphones (Samsung, Redmi, Realme, OnePlus, Vivo)",
      "Apple iPhones and iPads",
      "Laptops and gaming PCs via Bluetooth",
    ],
    variants: ["Matte Black", "Cobalt Blue", "Stealth Grey"],
    featured: true,
    demoOnly: false,
    keywords: ["boat earbuds", "boat coach", "tws gaming earbuds", "low latency earbuds", "calling earbuds", "beast mode"],
  },
  {
    id: "prod-airpods-max-headphones",
    name: "Hi-Fi Wireless Over-Ear Headphones with Acoustic Mesh",
    category: "audio-accessories",
    categoryLabel: "Audio Accessories",
    description:
      "Architectural over-ear Bluetooth headphones featuring a breathable knit mesh canopy, telescoping anodized aluminium arms, acoustically engineered memory foam ear cushions, and dynamic soundstage.",
    image: airpodsMaxHeadphonesImg,
    fallbackType: "audio",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Canopy: Breathable knit mesh headband for uniform weight distribution",
      "Ear Cups: Anodized aluminium aesthetic cups with memory foam cushions",
      "Audio: Custom 40mm dynamic drivers providing ultra-low distortion",
      "Connectivity: High-speed Bluetooth 5.3 plus wired 3.5mm AUX option",
      "Controls: Integrated dial and tactile buttons for volume and calls",
    ],
    compatibility: [
      "Apple iOS (iPhone, iPad, Mac)",
      "Android smartphones, Windows laptops, smart TVs",
    ],
    variants: ["Space Grey", "Silver White", "Sky Blue", "Midnight"],
    featured: true,
    demoOnly: false,
    keywords: ["over ear headphones", "mesh canopy headphones", "hi-fi wireless headset", "studio audio", "deep bass"],
  },
  {
    id: "prod-marshall-vintage-headphones",
    name: "Vintage Style On-Ear Bluetooth Headphones with Brass Knob",
    category: "audio-accessories",
    categoryLabel: "Audio Accessories",
    description:
      "Retro-styled wireless on-ear headphones with custom vinyl leatherette textured finish, multi-directional brass control knob, collapsible headband, and signature balanced audio.",
    image: marshallHeadphonesImg,
    fallbackType: "audio",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Control Knob: Multi-directional brass joystick for playback and volume",
      "Form Factor: Compact foldable design with ergonomic 3D hinges",
      "Audio Drivers: Custom-tuned 40mm dynamic drivers for punchy bass & clear highs",
      "Dual Mode: Bluetooth wireless playback and 3.5mm audio cable pass-through",
      "Battery: Long playback runtime with fast Type-C replenishment",
    ],
    compatibility: [
      "Smartphones, tablets, laptops, gaming consoles, MP3 players",
    ],
    variants: ["Vintage Black", "Classic Brown"],
    featured: true,
    demoOnly: false,
    keywords: ["marshall style", "retro headphones", "vintage wireless headphones", "brass knob", "on-ear audio"],
  },
  {
    id: "prod-jai-wireless-neckband",
    name: "Magnetic Sport Wireless Bluetooth Neckband Earphones",
    category: "audio-accessories",
    categoryLabel: "Audio Accessories",
    description:
      "Featherweight silicone neckband with magnetic snap-together earbuds, vibration notifications, clear HD microphone for calling, and splash-resistant construction for active daily commutes.",
    image: jaiNeckbandImg,
    fallbackType: "audio",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Magnetic Lock: Earbuds latch magnetically to prevent dangling when not in use",
      "Band Material: Memory-alloy core coated in soft skin-friendly silicone",
      "Calling: High-sensitivity inline microphone with passive background noise filter",
      "Charging: Fast Type-C quick-charge giving hours of playtime in minutes",
      "Controls: Three-button tactile control for music, volume and call answering",
    ],
    compatibility: [
      "All Bluetooth smartphones, tablets, laptops and smartwatches",
    ],
    variants: ["Carbon Black", "Crimson Red & Black", "Navy Blue"],
    featured: true,
    demoOnly: false,
    keywords: ["neckband", "bluetooth neckband", "magnetic earphones", "wireless collar", "gym earphones"],
  },
  {
    id: "prod-tws-wireless-earbuds",
    name: "True Wireless Stereo (TWS) Bluetooth Earbuds",
    category: "audio-accessories",
    categoryLabel: "Audio Accessories",
    description:
      "Lightweight in-ear Bluetooth earbuds with digital charge display, deep bass drivers, environmental noise suppression, and compact magnetic carry case.",
    image: audioEarbudsImg,
    fallbackType: "audio",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Connectivity: Bluetooth 5.3 low-latency pairing",
      "Drivers: Dynamic high-fidelity acoustic drivers",
      "Charging Case: Magnetic dock with LED percentage display",
      "Controls: Smart touch sensors for calls & music",
    ],
    compatibility: [
      "Android smartphones, iPhones, iPads",
      "Laptops, tablets, and Bluetooth-enabled smart TVs",
    ],
    variants: ["Matte Black", "Classic White"],
    featured: false,
    demoOnly: false,
    keywords: ["earbuds", "tws", "wireless earphones", "bluetooth audio", "noise cancelling", "calling buds"],
  },
  {
    id: "prod-qucin-party-speaker",
    name: "Dynamic Sound-Reactive RGB Portable Bluetooth Speaker",
    category: "audio-accessories",
    categoryLabel: "Audio Accessories",
    description:
      "Heavy-bass wireless party speaker with 360-degree beat-synced RGB LED lighting rings, rugged carry handle, and versatile playback through Bluetooth, USB flash drives, and AUX.",
    image: qucinSpeakerImg,
    fallbackType: "audio",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Light Show: Beat-synced multi-color RGB ambient lighting modes",
      "Sound Output: Dual acoustic drivers paired with a passive bass radiator",
      "Inputs: Bluetooth 5.0, USB flash drive, MicroSD (TF card), 3.5mm AUX",
      "Portability: Integrated ergonomic carry handle with rubberized footing",
      "Battery: Built-in rechargeable lithium battery with Type-C input",
    ],
    compatibility: [
      "Smartphones, laptops, smart TVs, USB pendrives, tablets",
    ],
    variants: ["Midnight Black RGB", "Rugged Camouflage"],
    featured: true,
    demoOnly: false,
    keywords: ["rgb speaker", "qucin speaker", "party speaker", "portable bluetooth speaker", "bass speaker"],
  },

  // --- SMART GADGETS & LIFESTYLE ELECTRONICS (IDENTIFIED FROM ASSETS) ---
  {
    id: "prod-g-shape-smart-lamp",
    name: "G-Shape 3-in-1 Smart RGB Lamp with Wireless Fast Charger & Speaker",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Modern multifunctional nightstand and desk gadget featuring a 15W Qi wireless fast phone charger, ambient sound-reactive RGB mood lighting, digital clock, and Bluetooth speaker.",
    image: gShapeLampSpeakerImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Wireless Charging: 15W Qi fast charging pad on central shelf",
      "RGB Atmosphere: Multiple customizable dynamic color transitions and sound sync",
      "Speaker: Integrated 360-degree Bluetooth wireless audio speaker",
      "Display: Digital LED clock display with alarm clock function",
      "Inputs: Bluetooth, TF card slot, USB playback, and 3.5mm AUX input",
    ],
    compatibility: [
      "Qi wireless charging smartphones (iPhone 12-16, Samsung Galaxy S-series, etc.)",
      "All Bluetooth-enabled audio devices",
    ],
    variants: ["Pure White", "Sleek Matte Black"],
    featured: true,
    demoOnly: false,
    keywords: ["g lamp", "g shape speaker", "wireless charger lamp", "rgb night lamp", "desk clock speaker", "smart atmosphere light"],
  },
  {
    id: "prod-luxury-gold-smartwatch",
    name: "Luxury Curved HD Display Bluetooth Calling Smartwatch",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Sophisticated smartwatch with edge-to-edge curved glass touch display, integrated microphone and speaker for Bluetooth phone calling, health tracking sensors, and luxury metallic strap.",
    image: smartwatchGoldImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Display: Vibrant HD curved touch screen with rich contrast",
      "Calling: Built-in speaker, dial-pad, and microphone for hands-free Bluetooth calling",
      "Health Sensors: Real-time heart rate, SpO2 blood oxygen, and sleep monitoring",
      "Fitness: Multi-sports modes with step counter and calorie calculation",
      "Strap: Luxury gold-toned metallic mesh / link strap with secure magnetic clasp",
    ],
    compatibility: [
      "Android smartphones (Android 6.0 and above)",
      "Apple iPhones (iOS 11.0 and above) via Bluetooth companion app",
    ],
    variants: ["Champagne Gold", "Rose Gold", "Onyx Black"],
    featured: true,
    demoOnly: false,
    keywords: ["smartwatch", "calling smartwatch", "gold smartwatch", "luxury fitness tracker", "curved display watch"],
  },
  {
    id: "prod-astronaut-galaxy-projector",
    name: "Astronaut 360° Magnetic Head Galaxy Nebula Star Projector",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Detailed astronaut night light featuring a 360-degree rotating magnetic helmet that projects cosmic nebula clouds and twinkling green stars across ceilings and walls with wireless remote control.",
    image: astronautProjectorImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Head Rotation: 360-degree magnetic head joint for aiming projections anywhere",
      "Projections: 8+ vibrant nebula color modes with twinkling green laser stars",
      "Remote: Multi-function infrared remote to control speed, brightness, and colors",
      "Timer: Built-in 45-minute and 90-minute sleep timer modes",
      "Base: Detailed astronaut figure standing securely on lunar terrain base",
    ],
    compatibility: [
      "Powered via any standard 5V USB port (laptop, power bank, USB wall adapter)",
    ],
    variants: ["Space White Astronaut"],
    featured: true,
    demoOnly: false,
    keywords: ["astronaut projector", "galaxy projector", "starry sky light", "nebula night lamp", "room aesthetic gadget"],
  },
  {
    id: "prod-usb-galaxy-ceiling-light",
    name: "Flexible USB Starry Sky Galaxy Ceiling Projection Lamp",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Portable plug-and-play flexible gooseneck USB laser light. Rotate the aluminium lens tip to project starry constellation patterns in cars, laptop desks, or bedroom ceilings.",
    image: usbGalaxyLampImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Gooseneck: 360-degree bendable metal gooseneck retains any angled position",
      "Pattern Lens: Twist top metal nozzle to shift between multiple starry patterns",
      "Power: USB plug-and-play requiring zero batteries or charging",
      "Portability: Ultra-compact pencil-sized travel design",
    ],
    compatibility: [
      "Any standard USB-A port (car charger, laptop, power bank, USB socket)",
    ],
    variants: ["Violet-Blue Starlight", "Ruby Red Starlight"],
    featured: false,
    demoOnly: false,
    keywords: ["usb starry light", "car ceiling light", "galaxy usb", "flexible laser lamp", "atmosphere light"],
  },
  {
    id: "prod-kids-instant-camera",
    name: "Kids Dual-Lens Instant Print Zero-Ink Digital Camera",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Fun creative instant camera that prints black-and-white photos immediately using thermal receipt paper without costly ink cartridges. Features 1080p digital recording and dual selfie lenses.",
    image: kidsInstantCameraImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Print Tech: Zero-ink thermal printing with instant photo output in seconds",
      "Dual Lenses: Front and selfie camera lenses for photos and 1080p HD video",
      "Screen: 2.4-inch bright IPS color viewing screen",
      "Creativity: Fun decorative frames, cartoon filters, and built-in puzzle games",
      "Battery: Built-in rechargeable lithium battery with Type-C port and neck lanyard",
    ],
    compatibility: [
      "Standard thermal paper rolls (57mm), MicroSD card expansion, Type-C charging",
    ],
    variants: ["Pastel Pink", "Sky Blue"],
    featured: true,
    demoOnly: false,
    keywords: ["kids camera", "instant print camera", "thermal camera", "toy camera", "zero ink printer", "children gift"],
  },
  {
    id: "prod-cordless-scalp-massager",
    name: "Cordless 3D Kneading Electric Scalp & Body Massager",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Rechargeable handheld relaxation gadget featuring 4 rotating massage heads with 84 soft silicone nodes designed for deep scalp stimulation, tension reduction, and wellness.",
    image: scalpMassagerImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Massage Nodes: 4 silicone heads with 84 individual kneading contact points",
      "Modes: Multiple rotational directions and speeds with single-button control",
      "Water Resistance: IPX7 waterproof housing safe for dry hair or shower use",
      "Charging: Magnetic/USB rechargeable base with ergonomic curved grip handle",
    ],
    compatibility: [
      "Universal USB charging via standard 5V adapter, power bank, or laptop",
    ],
    variants: ["Pearl White", "Silver Grey"],
    featured: false,
    demoOnly: false,
    keywords: ["scalp massager", "head massager", "electric body massager", "relaxation gadget", "hair wellness"],
  },
  {
    id: "prod-travel-steam-iron",
    name: "Handheld 180° Rotatable Mini Travel Garment Steam Iron",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Compact portable flat iron and garment steamer featuring a 180-degree swiveling folding handle, titanium alloy heating plate, and quick water-spray misting for travel wrinkle removal.",
    image: travelSteamIronImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Handle: 180-degree rotatable ergonomic folding handle for flat packing",
      "Soleplate: Smooth glide titanium alloy ceramic panel heats up in 30 seconds",
      "Steaming: Built-in micro water spray button for stubborn wrinkles",
      "Versatility: Supports both horizontal flat ironing and vertical hanging steaming",
    ],
    compatibility: [
      "Standard 220V household electrical outlets with grounded plug",
    ],
    variants: ["Emerald Green", "Clean White"],
    featured: false,
    demoOnly: false,
    keywords: ["travel iron", "portable steamer", "mini garment iron", "rotatable iron", "travel clothes iron"],
  },
  {
    id: "prod-portable-mini-blender-juicer",
    name: "USB Rechargeable 6-Blade Portable Mini Blender & Juicer Bottle",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    description:
      "Personal on-the-go electric smoothie blender cup equipped with 6 food-grade stainless steel blades, magnetic safety interlock, leak-proof sports cap, and USB battery operation.",
    image: miniJuicerImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Blades: 6 serrated 304 stainless steel blades for fruit juices, shakes & baby puree",
      "Safety Interlock: Micro-switch sensor ensures blades only activate when cup is closed",
      "Bottle: BPA-free food-grade PCTG transparent cup with silicone carrying strap",
      "Battery: Built-in rechargeable battery with waterproof Type-C charging port",
    ],
    compatibility: [
      "Rechargeable via USB charger, car charger, laptop port, or portable power bank",
    ],
    variants: ["Mint Green", "Soft Pink", "Bright White"],
    featured: false,
    demoOnly: false,
    keywords: ["portable juicer", "usb blender", "mini smoothie maker", "electric juicer cup", "travel blender"],
  },

  // --- MOBILE PROTECTION & HARDWARE ACCESSORIES ---
  {
    id: "prod-monocular-telescope-mobile",
    name: "HD High-Power Monocular Telescope with Smartphone Camera Clip",
    category: "mobile-accessories",
    categoryLabel: "Mobile Accessories",
    description:
      "High-definition multi-coated optical telescope paired with an adjustable smartphone lens mount and mini desktop tripod, turning your smartphone into an ultra-telephoto camera.",
    image: monocularTelescopeImg,
    fallbackType: "gadget",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Optics: High-transmission FMC green film glass lens and BAK4 prism",
      "Phone Mount: Universal spring clip aligns directly with single or multi-camera lenses",
      "Tripod: Includes 360-degree swivel miniature tabletop tripod",
      "Body: Weatherproof rubber-armored chassis with smooth manual focus wheel",
    ],
    compatibility: [
      "Compatible with all popular Android smartphones and iPhones",
    ],
    variants: ["Matte Black Optical"],
    featured: true,
    demoOnly: false,
    keywords: ["mobile telescope", "phone camera zoom", "telephoto lens", "monocular clip", "optical zoom accessory"],
  },
  {
    id: "prod-fast-charge-powerbank",
    name: "Fast-Charging High-Capacity Slim Power Bank",
    category: "power-banks",
    categoryLabel: "Power Banks",
    description:
      "High-density polymer portable battery with dual USB output, bidirectional Type-C fast charging, and integrated LED battery level readout.",
    image: chargingPowerbankImg,
    fallbackType: "powerbank",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Output: Dual USB-A + Type-C Fast Output (PD/QC)",
      "Indicator: Digital LED battery display",
      "Safety: Multi-layer protection against short-circuit and overcharging",
      "Form factor: Pocketable textured anti-scratch exterior",
    ],
    compatibility: [
      "All major Android smartphones & iPhones",
      "Smartwatches, neckbands, and wireless earbuds",
    ],
    variants: ["Textured Black", "Slate Blue"],
    featured: true,
    demoOnly: false,
    keywords: ["power bank", "portable charger", "fast charging", "usb c battery", "mobile backup"],
  },
  {
    id: "prod-braided-fast-cables",
    name: "Reinforced Braided USB-C & Lightning Fast Charging Cables",
    category: "chargers-cables",
    categoryLabel: "Chargers & Cables",
    description:
      "Nylon-braided heavy-duty charging and sync cables with reinforced strain relief collars and support for rapid power delivery up to 65W/100W.",
    image: chargingPowerbankImg,
    fallbackType: "cable",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Jacket: High-density dual-braided nylon weave",
      "Connectors: Gold-plated alloy housing with stress relief",
      "Speed: Supports 480Mbps high-speed data transfer",
      "Lengths available: 1m, 1.5m, 2m",
    ],
    compatibility: [
      "Type-C to Type-C (Laptops, iPad Pro, Android)",
      "Type-C to Lightning (iPhones, iPad)",
      "USB-A to Type-C / Micro-USB",
    ],
    variants: ["Type-C to Type-C", "Type-C to Lightning", "USB-A to Type-C"],
    featured: true,
    demoOnly: false,
    keywords: ["braided cable", "fast charging cable", "type c cable", "lightning cable", "durable wire"],
  },
  {
    id: "prod-tempered-glass-screen-protection",
    name: "Edge-to-Edge HD Tempered Glass Screen Protectors",
    category: "mobile-accessories",
    categoryLabel: "Mobile Accessories",
    description:
      "9H hardness scratch-resistant tempered glass protectors with oleophobic coating to resist fingerprints and maintain crystal-clear touch sensitivity.",
    image: audioEarbudsImg,
    fallbackType: "case",
    price: null,
    priceVerified: false,
    availability: null,
    availabilityVerified: false,
    specifications: [
      "Hardness: 9H surface shatter-proof tempered glass",
      "Coating: Anti-fingerprint and smudge-resistant oleophobic layer",
      "Clarity: 99.9% optical transparency with zero touch lag",
      "Edges: 2.5D curved smooth polished borders",
    ],
    compatibility: [
      "Comprehensive fit for popular Samsung, Redmi, Realme, Vivo, Oppo, OnePlus and Apple models",
      "In-store precision alignment assistance available",
    ],
    variants: ["Clear HD", "Privacy Tint", "Matte Gaming"],
    featured: false,
    demoOnly: false,
    keywords: ["tempered glass", "screen guard", "mobile protector", "scratch protection", "privacy glass"],
  },
];
