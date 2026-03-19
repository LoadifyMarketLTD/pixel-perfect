# Loadify Market — Migration Guide

> **Purpose**: This Lovable project is a **UI-only frontend layer**. The main GitHub project is the single source of truth for backend, authentication, database, Stripe, and all business logic. This guide explains how to migrate components into the main project.

---

## 1. Architecture Overview

```
┌─────────────────────────────────┐
│  Main GitHub Project (Next.js)  │
│  ├── Supabase (Auth + DB + RLS) │
│  ├── Netlify Functions (API)    │
│  ├── Stripe (Payments)          │
│  └── Business Logic             │
└─────────────┬───────────────────┘
              │  migrate UI into ↑
┌─────────────┴───────────────────┐
│  Lovable Project (This Repo)    │
│  ├── React + Vite + Tailwind    │
│  ├── shadcn/ui components       │
│  ├── Mock data only             │
│  └── No backend / no auth       │
└─────────────────────────────────┘
```

## 2. What to Migrate

### Ready Components (copy directly)
| Source Path | Description |
|---|---|
| `src/components/Navbar.tsx` | Main navigation bar |
| `src/components/NavbarSearch.tsx` | Search input in navbar |
| `src/components/NavLink.tsx` | Nav link helper |
| `src/components/Footer.tsx` | Full footer with legal links |
| `src/components/HeroSection.tsx` | Landing hero |
| `src/components/TrustSection.tsx` | Trust badges |
| `src/components/WhySellSection.tsx` | Seller value props |
| `src/components/FeaturesSection.tsx` | Feature highlights |
| `src/components/StatsSection.tsx` | Marketplace stats |
| `src/components/HowItWorksSection.tsx` | Step-by-step flow |
| `src/components/CategoriesSection.tsx` | Category grid |
| `src/components/CTASection.tsx` | Call-to-action banner |
| `src/components/CookieConsent.tsx` | GDPR cookie banner |
| `src/components/catalog/*` | Catalog header, filters, product card |
| `src/components/product/*` | Product gallery, info, reviews, seller card |
| `src/components/seller/*` | Seller layout + sidebar |
| `src/components/buyer/*` | Buyer layout + sidebar |
| `src/components/admin/*` | Admin layout + sidebar |
| `src/components/ui/*` | Full shadcn/ui library |

### Pages (migrate and wire to real data)
| Page | Status | Migration Notes |
|---|---|---|
| `Index.tsx` | ✅ Ready | Static landing — copy as-is |
| `Catalog.tsx` | ⚠️ Needs wiring | Replace `mockProducts` with Supabase query |
| `ProductDetail.tsx` | ⚠️ Needs wiring | Replace mock with real product fetch |
| `Login.tsx` | ⚠️ Needs wiring | Replace `console.log` with `supabase.auth.signInWithPassword()` |
| `Signup.tsx` | ⚠️ Needs wiring | Replace `console.log` with `supabase.auth.signUp()` |
| `Cart.tsx` | ⚠️ Needs wiring | Replace local state with cart context/DB |
| `Checkout.tsx` | ⚠️ Needs wiring | Connect to Stripe checkout session |
| `AboutUs.tsx` | ✅ Ready | Static content |
| `ContactUs.tsx` | ⚠️ Needs wiring | Wire form to email API / Supabase function |
| `TermsAndConditions.tsx` | ✅ Ready | Static legal |
| `PrivacyPolicy.tsx` | ✅ Ready | Static legal |
| `CookiePolicy.tsx` | ✅ Ready | Static legal |
| `Disclaimer.tsx` | ✅ Ready | Static legal |
| `ReturnsPolicy.tsx` | ✅ Ready | Static legal |
| `ShippingPolicy.tsx` | ✅ Ready | Static legal |
| `BuyerTerms.tsx` | ✅ Ready | Static legal |
| `SellerTerms.tsx` | ✅ Ready | Static legal |
| `NotFound.tsx` | ✅ Ready | Static |

### Dashboard Pages
| Page | Status | Migration Notes |
|---|---|---|
| `seller/SellerDashboard.tsx` | ⚠️ Mock data | Wire stats to real Supabase queries |
| `seller/SellerProducts.tsx` | ⚠️ Mock data | Replace hardcoded array with DB query |
| `seller/SellerOrders.tsx` | ⚠️ Mock data | Replace hardcoded array with DB query |
| `seller/SellerReviewsPage.tsx` | ⚠️ Mock data | Wire to reviews table |
| `seller/SellerPlaceholders.tsx` | 🔴 Placeholder | Shipments, Returns, RFQ, Profile, Settings |
| `buyer/BuyerDashboard.tsx` | ⚠️ Mock data | Wire stats to real queries |
| `buyer/BuyerOrders.tsx` | ⚠️ Mock data | Replace hardcoded orders |
| `buyer/BuyerWishlist.tsx` | ⚠️ Mock data | Wire to wishlist table |
| `buyer/BuyerAddresses.tsx` | ⚠️ Mock data | Wire to addresses table |
| `buyer/BuyerPlaceholders.tsx` | 🔴 Placeholder | Payments, Reviews, Profile, Settings |
| `admin/AdminDashboard.tsx` | ⚠️ Mock data | Wire to admin analytics |
| `admin/AdminApprovals.tsx` | ⚠️ Mock data | Wire to approval queue |
| `admin/AdminPlaceholders.tsx` | 🔴 Placeholder | Users, Products, Orders, Reports, Flagged, Support, Settings |

## 3. Step-by-Step Migration

### Step 1: Copy Design System
1. Copy `src/index.css` (CSS variables, tokens, fonts)
2. Copy `tailwind.config.ts` (extended theme)
3. Copy `src/components/ui/*` (entire shadcn library)
4. Install matching dependencies (see `package.json`)

### Step 2: Copy Static Pages
Copy all ✅ Ready pages and the landing page sections. These need zero backend changes.

### Step 3: Copy Layout Components
- `Navbar.tsx`, `Footer.tsx`, `CookieConsent.tsx`
- Dashboard layouts: `SellerLayout`, `BuyerLayout`, `AdminLayout`

### Step 4: Wire Data Pages
For each ⚠️ page:
1. Copy the component file
2. Replace the mock data import with your Supabase client query
3. Use the existing `src/lib/api.ts` config for endpoint URLs
4. Keep the same props/types — the UI is decoupled from data source

### Step 5: Wire Authentication
In `Login.tsx` and `Signup.tsx`:
- Replace `console.log("Login submitted", ...)` with your existing Supabase auth calls
- Add redirect logic after successful auth
- Wrap protected routes with your existing auth guard

### Step 6: Wire Payments
In `Checkout.tsx`:
- Replace the static form with your existing Stripe checkout session creation
- Use the Netlify Function endpoint already in the main project

## 4. Key Files to NOT Migrate
| File | Reason |
|---|---|
| `src/data/mockProducts.ts` | Mock data — replace with real DB |
| `src/lib/api.ts` | Placeholder config — use main project's API layer |
| `vite.config.ts` | Lovable-specific build config |
| `playwright*` | Lovable test setup |

## 5. Dependency Alignment
The Lovable project uses these key packages that must match the main project:
- `react` / `react-dom` ^18.3
- `react-router-dom` ^6.30
- `@tanstack/react-query` ^5.83
- `tailwindcss` ^3.4
- `tailwindcss-animate`
- All `@radix-ui/*` packages (shadcn foundation)
- `lucide-react` ^0.462
- `recharts` ^2.15 (for dashboard charts)
- `sonner` (toast notifications)

## 6. Assets
Copy `src/assets/` entirely — contains:
- `loadify-logo.png`
- `hero-warehouse.jpg`, `hero-seller-dashboard.jpg`
- `categories/*.jpg` (16 category images)

---

*Last updated: 19 March 2026*
