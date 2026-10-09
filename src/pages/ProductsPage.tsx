import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X, SlidersHorizontal, AlertCircle, RotateCcw } from "lucide-react";
import { PRODUCTS_CATALOGUE, Product, ProductCategory } from "../data/products";
import { BUSINESS_CONFIG } from "../data/businessConfig";
import { PageHeading } from "../components/PageHeading";
import { ProductCard } from "../components/ProductCard";
import { ProductDetailModal } from "../components/ProductDetailModal";

type SortOption = "featured" | "name-asc" | "name-desc" | "price-asc" | "price-desc";

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync category state when URL search parameter changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  // Handle category change
  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: catId }, { replace: true });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
    setSearchParams({}, { replace: true });
  };

  // Filtered & Sorted products calculation
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_CATALOGUE];

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        // Sort only priced items, keeping unpriced items at the end with transparent sorting
        result.sort((a, b) => {
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return a.price - b.price;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return b.price - a.price;
        });
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const categoriesList = [
    { id: "all", name: "All Products" },
    ...BUSINESS_CONFIG.categories.map((c) => ({ id: c.id, name: c.name })),
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-20">
      {/* Page Heading & Breadcrumb */}
      <PageHeading
        kicker="Catalogue &amp; Enquiries"
        title="Explore Products"
        description="Browse mobile accessories, laptop essentials, computer peripherals and smart gadgets. Contact the shop to confirm current prices, compatibility and availability."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Products" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Controls Bar: Search & Category Tabs & Sorting */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-5">
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <label htmlFor="product-search" className="sr-only">
                Search products, keywords or categories
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                id="product-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search accessories (e.g. Type-C hub, laptop stand, earbuds)..."
                className="w-full pl-10 pr-9 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1459D9] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting Control */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              <label htmlFor="product-sort" className="text-xs font-semibold text-slate-600">
                Sort by:
              </label>
              <select
                id="product-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#1459D9]"
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Name (A–Z)</option>
                <option value="name-desc">Name (Z–A)</option>
                <option value="price-asc">Price (Low–High)*</option>
                <option value="price-desc">Price (High–Low)*</option>
              </select>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Filter by Category
              </span>
              {(selectedCategory !== "all" || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1459D9] hover:text-[#0f44a8]"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Category Filters">
              {categoriesList.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? "bg-[#1459D9] text-white shadow-2xs font-semibold"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Notice for Price Sorting & Catalogue Accuracy */}
        <div className="mt-4 px-4 py-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#1459D9] shrink-0" />
            <span>
              Showing {filteredProducts.length} items. Product prices and availability vary based on brand variants and in-store stock. Contact Pawan Mishra or Gagan Mishra for live confirmation.
            </span>
          </div>
        </div>

        {/* Products Grid or Empty State */}
        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onViewDetails={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-900">
                No matching accessories found
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                We couldn't find items matching &quot;{searchQuery}&quot; in this category. We may still carry it in-store at Burari!
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold bg-[#1459D9] text-white rounded-lg hover:bg-[#0f44a8] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
