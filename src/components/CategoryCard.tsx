import React from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Smartphone,
  Zap,
  Headphones,
  Keyboard,
  Monitor,
  Cpu,
  BatteryCharging,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  description,
  iconName,
}) => {
  const renderIcon = () => {
    const iconClass = "w-6 h-6 text-[#1459D9]";
    switch (iconName) {
      case "Laptop":
        return <Laptop className={iconClass} />;
      case "Smartphone":
        return <Smartphone className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      case "Headphones":
        return <Headphones className={iconClass} />;
      case "Keyboard":
        return <Keyboard className={iconClass} />;
      case "Monitor":
        return <Monitor className={iconClass} />;
      case "Cpu":
        return <Cpu className={iconClass} />;
      case "BatteryCharging":
        return <BatteryCharging className={iconClass} />;
      case "Shield":
        return <Shield className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      default:
        return <Laptop className={iconClass} />;
    }
  };

  return (
    <Link
      to={`/products?category=${id}`}
      className="group bg-white p-6 rounded-xl border border-slate-200/90 hover:border-[#1459D9]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#1459D9]/10 flex items-center justify-center mb-4 transition-colors">
          {renderIcon()}
        </div>
        <h3 className="font-display font-semibold text-slate-900 text-base group-hover:text-[#1459D9] transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 flex items-center gap-1 text-xs font-semibold text-[#1459D9] group-hover:translate-x-1 transition-transform">
        <span>Browse Products</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
};
