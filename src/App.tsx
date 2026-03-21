import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import CookieConsent from "@/components/CookieConsent";

// Critical path — loaded eagerly
import Index from "./pages/Index";

// Lazy-loaded pages
const Catalog = lazy(() => import("./pages/Catalog"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Signup = lazy(() => import("./pages/Signup"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Deals = lazy(() => import("./pages/Deals"));
const Category = lazy(() => import("./pages/Category"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const ReturnsPolicy = lazy(() => import("./pages/ReturnsPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const BuyerTerms = lazy(() => import("./pages/BuyerTerms"));
const SellerTerms = lazy(() => import("./pages/SellerTerms"));

// Seller dashboard
const SellerLayout = lazy(() => import("./components/seller/SellerLayout"));
const SellerDashboard = lazy(() => import("./pages/seller/SellerDashboard"));
const SellerProducts = lazy(() => import("./pages/seller/SellerProducts"));
const SellerOrders = lazy(() => import("./pages/seller/SellerOrders"));
const SellerShipments = lazy(() => import("./pages/seller/SellerShipments"));
const SellerReturns = lazy(() => import("./pages/seller/SellerReturns"));
const SellerReviewsPage = lazy(() => import("./pages/seller/SellerReviewsPage"));
const SellerRFQ = lazy(() => import("./pages/seller/SellerRFQ"));
const SellerProfile = lazy(() => import("./pages/seller/SellerProfile"));
const SellerSettings = lazy(() => import("./pages/seller/SellerSettings"));

// Admin dashboard
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminApprovals = lazy(() => import("./pages/admin/AdminApprovals"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const AdminProducts = lazy(() => import("./pages/admin/AdminProducts"));
const AdminOrders = lazy(() => import("./pages/admin/AdminOrders"));
const AdminReports = lazy(() => import("./pages/admin/AdminReports"));
const AdminFlagged = lazy(() => import("./pages/admin/AdminFlagged"));
const AdminSupport = lazy(() => import("./pages/admin/AdminSupport"));
const AdminSettings = lazy(() => import("./pages/admin/AdminSettings"));

// Buyer dashboard
const BuyerLayout = lazy(() => import("./components/buyer/BuyerLayout"));
const BuyerDashboard = lazy(() => import("./pages/buyer/BuyerDashboard"));
const BuyerOrders = lazy(() => import("./pages/buyer/BuyerOrders"));
const BuyerWishlist = lazy(() => import("./pages/buyer/BuyerWishlist"));
const BuyerAddresses = lazy(() => import("./pages/buyer/BuyerAddresses"));
const BuyerPayments = lazy(() => import("./pages/buyer/BuyerPayments"));
const BuyerReviews = lazy(() => import("./pages/buyer/BuyerReviews"));
const BuyerProfile = lazy(() => import("./pages/buyer/BuyerProfile"));
const BuyerSettings = lazy(() => import("./pages/buyer/BuyerSettings"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/clearance" element={<Deals />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/returns" element={<ReturnsPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/buyer-terms" element={<BuyerTerms />} />
          <Route path="/seller-terms" element={<SellerTerms />} />

          {/* Seller Dashboard */}
          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<SellerDashboard />} />
            <Route path="products" element={<SellerProducts />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route path="shipments" element={<SellerShipments />} />
            <Route path="returns" element={<SellerReturns />} />
            <Route path="reviews" element={<SellerReviewsPage />} />
            <Route path="rfq" element={<SellerRFQ />} />
            <Route path="profile" element={<SellerProfile />} />
            <Route path="settings" element={<SellerSettings />} />
          </Route>

          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="approvals" element={<AdminApprovals />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="flagged" element={<AdminFlagged />} />
            <Route path="support" element={<AdminSupport />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Buyer Dashboard */}
          <Route path="/dashboard" element={<BuyerLayout />}>
            <Route index element={<BuyerDashboard />} />
            <Route path="orders" element={<BuyerOrders />} />
            <Route path="wishlist" element={<BuyerWishlist />} />
            <Route path="addresses" element={<BuyerAddresses />} />
            <Route path="payments" element={<BuyerPayments />} />
            <Route path="reviews" element={<BuyerReviews />} />
            <Route path="profile" element={<BuyerProfile />} />
            <Route path="settings" element={<BuyerSettings />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
