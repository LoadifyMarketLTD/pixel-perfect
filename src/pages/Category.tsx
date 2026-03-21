import { useMemo, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import ProductCard from "@/components/catalog/ProductCard";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/data/mockProducts";

/** Derive a readable category name from a URL slug */
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Generate a URL-safe slug from a category name */
export function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const fromClearance = searchParams.get("ref") === "clearance";
  const subcategoryParam = searchParams.get("sub") || "";

  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Find the matching category name from products
  const categoryName = useMemo(() => {
    if (!slug) return "";
    const match = mockProducts.find(
      (p) => nameToSlug(p.category) === slug
    );
    return match?.category || slugToName(slug);
  }, [slug]);

  // Get all subcategories for this category
  const subcategories = useMemo(() => {
    const subs = new Set<string>();
    mockProducts
      .filter((p) => nameToSlug(p.category) === slug)
      .forEach((p) => {
        if (p.subcategory) subs.add(p.subcategory);
      });
    return Array.from(subs).sort();
  }, [slug]);

  // Filter products
  const filtered = useMemo(() => {
    let products = mockProducts.filter(
      (p) => nameToSlug(p.category) === slug
    );
    if (subcategoryParam) {
      products = products.filter((p) => p.subcategory === subcategoryParam);
    }
    // Sort
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        products.sort((a, b) => b.views - a.views);
        break;
      default:
        break;
    }
    return products;
  }, [slug, subcategoryParam, sortBy]);

  // Breadcrumb
  const breadcrumbItems = useMemo(() => {
    const items = [
      { label: "Home", to: "/" },
      fromClearance
        ? { label: "Clearance", to: "/clearance" }
        : { label: "Marketplace", to: "/catalog" },
      { label: categoryName },
    ];
    if (subcategoryParam) {
      // Make category clickable
      items[items.length - 1] = {
        label: categoryName,
        to: fromClearance
          ? `/category/${slug}?ref=clearance`
          : `/category/${slug}`,
      };
      items.push({ label: subcategoryParam });
    }
    return items;
  }, [categoryName, slug, subcategoryParam, fromClearance]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <BreadcrumbNav
            items={breadcrumbItems}
            showBack
            backLabel={fromClearance ? "Back to Clearance" : "Back to Marketplace"}
            backTo={fromClearance ? "/clearance" : "/catalog"}
          />

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {subcategoryParam || categoryName}
            </h1>
            <p className="text-muted-foreground mt-1">
              {filtered.length} listing{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Subcategory pills */}
          {subcategories.length > 1 && !subcategoryParam && (
            <div className="flex flex-wrap gap-2 mb-6">
              {subcategories.map((sub) => (
                <Link
                  key={sub}
                  to={`/category/${slug}?sub=${encodeURIComponent(sub)}${fromClearance ? "&ref=clearance" : ""}`}
                >
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors px-3 py-1.5 text-sm"
                  >
                    {sub}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          {subcategoryParam && (
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                {subcategoryParam}
              </Badge>
              <Link
                to={`/category/${slug}${fromClearance ? "?ref=clearance" : ""}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕ Clear filter
              </Link>
            </div>
          )}

          {/* Sort controls */}
          <div className="mb-6">
            <CatalogHeader
              totalProducts={filtered.length}
              sortBy={sortBy}
              setSortBy={setSortBy}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onToggleFilters={() => {}}
            />
          </div>

          {/* Products grid */}
          {filtered.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                  : "space-y-4"
              }
            >
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  flowRef={fromClearance ? "clearance" : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
              <Link
                to={fromClearance ? "/clearance" : "/catalog"}
                className="text-primary hover:underline mt-4 inline-block"
              >
                ← Browse all listings
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
