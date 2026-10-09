import React, { useState } from "react";
import { Laptop, Smartphone, Headphones, BatteryCharging, Shield, Cpu, Monitor, Keyboard, Plug, Sparkles } from "lucide-react";

interface ImageFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: "hub" | "stand" | "audio" | "powerbank" | "peripheral" | "cable" | "case" | "gadget" | "general";
  aspectRatio?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackType = "general",
  aspectRatio = "aspect-4/3",
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFallbackIcon = () => {
    switch (fallbackType) {
      case "hub":
        return <Cpu className="w-10 h-10 text-[#1459D9]" />;
      case "stand":
        return <Monitor className="w-10 h-10 text-[#1459D9]" />;
      case "audio":
        return <Headphones className="w-10 h-10 text-[#1459D9]" />;
      case "powerbank":
        return <BatteryCharging className="w-10 h-10 text-[#1459D9]" />;
      case "peripheral":
        return <Keyboard className="w-10 h-10 text-[#1459D9]" />;
      case "cable":
        return <Plug className="w-10 h-10 text-[#1459D9]" />;
      case "case":
        return <Shield className="w-10 h-10 text-[#1459D9]" />;
      case "gadget":
        return <Sparkles className="w-10 h-10 text-[#1459D9]" />;
      default:
        return <Laptop className="w-10 h-10 text-[#1459D9]" />;
    }
  };

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200/80 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="p-3 rounded-xl bg-white shadow-xs mb-2">
          {getFallbackIcon()}
        </div>
        <span className="text-xs font-medium text-slate-600 line-clamp-1">{alt}</span>
        <span className="text-[11px] text-slate-400 mt-0.5">Mishra Communication</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full ${aspectRatio} bg-slate-100 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-[#1459D9] animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
