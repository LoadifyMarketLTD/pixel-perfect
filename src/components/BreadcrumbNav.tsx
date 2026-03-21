import { ChevronRight, ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  showBack?: boolean;
  backLabel?: string;
  backTo?: string;
  /** Additional wrapper classes (used by Deals hero for color overrides) */
  className?: string;
}

const BreadcrumbNav = ({
  items,
  showBack = true,
  backLabel,
  backTo,
  className,
}: BreadcrumbNavProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center gap-2 py-4 ${className ?? ""}`}>
      {showBack && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mr-4 shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden xs:inline">{backLabel || "Back"}</span>
        </button>
      )}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-sm overflow-x-auto scrollbar-none"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          return (
            <span key={index} className="flex items-center gap-1.5 shrink-0">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />
              )}
              {isLast || !item.to ? (
                <span className="text-foreground font-medium truncate max-w-[180px] sm:max-w-[260px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  {isFirst && <Home className="h-3.5 w-3.5" />}
                  <span className={isFirst ? "hidden sm:inline" : ""}>{item.label}</span>
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default BreadcrumbNav;

/**
 * Helper: build breadcrumb items for a product page.
 * Detects if user came from clearance flow via `ref` search param.
 */
export function buildProductBreadcrumbs(
  product: { title: string; category: string; subcategory?: string },
  fromClearance: boolean
): BreadcrumbItem[] {
  const base: BreadcrumbItem[] = [{ label: "Home", to: "/" }];

  if (fromClearance) {
    base.push({ label: "Clearance", to: "/clearance" });
  } else {
    base.push({ label: "Catalog", to: "/catalog" });
  }

  base.push({
    label: product.category,
    to: fromClearance
      ? `/clearance?category=${encodeURIComponent(product.category)}`
      : `/catalog?category=${encodeURIComponent(product.category)}`,
  });

  if (product.subcategory) {
    base.push({ label: product.subcategory });
  }

  // Truncate title for breadcrumb display
  const shortTitle =
    product.title.length > 40 ? product.title.slice(0, 37) + "…" : product.title;
  base.push({ label: shortTitle });

  return base;
}
