/**
 * API Configuration — Placeholder for future backend integration.
 *
 * This Lovable project is UI-only. All API calls are stubbed.
 * When migrating to the main GitHub project, replace these
 * placeholders with your real Supabase client and API endpoints.
 *
 * DO NOT add real credentials here — this file is for structure only.
 */

// ─── Endpoint Configuration ────────────────────────────────────
// Replace with your real API base URL during migration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://your-api.example.com";

export const ENDPOINTS = {
  // Auth (Supabase in main project)
  AUTH_LOGIN: "/auth/login",
  AUTH_SIGNUP: "/auth/signup",
  AUTH_LOGOUT: "/auth/logout",
  AUTH_SESSION: "/auth/session",

  // Products
  PRODUCTS_LIST: "/products",
  PRODUCTS_DETAIL: (id: string) => `/products/${id}`,
  PRODUCTS_CREATE: "/products",
  PRODUCTS_UPDATE: (id: string) => `/products/${id}`,

  // Orders
  ORDERS_LIST: "/orders",
  ORDERS_DETAIL: (id: string) => `/orders/${id}`,
  ORDERS_CREATE: "/orders",

  // Cart
  CART_GET: "/cart",
  CART_ADD: "/cart/items",
  CART_UPDATE: (itemId: string) => `/cart/items/${itemId}`,
  CART_REMOVE: (itemId: string) => `/cart/items/${itemId}`,

  // Checkout / Stripe
  CHECKOUT_SESSION: "/checkout/create-session",

  // Seller
  SELLER_DASHBOARD: "/seller/dashboard",
  SELLER_PRODUCTS: "/seller/products",
  SELLER_ORDERS: "/seller/orders",
  SELLER_REVIEWS: "/seller/reviews",

  // Buyer
  BUYER_DASHBOARD: "/buyer/dashboard",
  BUYER_ORDERS: "/buyer/orders",
  BUYER_WISHLIST: "/buyer/wishlist",
  BUYER_ADDRESSES: "/buyer/addresses",

  // Admin
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_APPROVALS: "/admin/approvals",
  ADMIN_USERS: "/admin/users",

  // Contact form
  CONTACT_SUBMIT: "/contact",
} as const;

// ─── Type Helpers ──────────────────────────────────────────────
// These types mirror what the real API should return.
// During migration, replace with shared types from the main project.

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

// ─── Stub Fetch Helper ─────────────────────────────────────────
// Replace with your real authenticated fetch during migration.
// This is intentionally a no-op that returns mock-shaped responses.

export async function apiFetch<T>(
  _endpoint: string,
  _options?: RequestInit
): Promise<ApiResponse<T>> {
  console.warn(
    "[Loadify API] apiFetch called in UI-only mode. " +
    "Replace with real API client during migration."
  );
  return { data: null, error: "UI-only mode — no backend connected", status: 0 };
}
