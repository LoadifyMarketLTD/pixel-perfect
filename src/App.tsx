import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index.tsx";
import Catalog from "./pages/Catalog.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Login from "./pages/Login.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Signup from "./pages/Signup.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import Deals from "./pages/Deals.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import ReturnsPolicy from "./pages/ReturnsPolicy.tsx";
import ShippingPolicy from "./pages/ShippingPolicy.tsx";
import BuyerTerms from "./pages/BuyerTerms.tsx";
import SellerTerms from "./pages/SellerTerms.tsx";
import SellerLayout from "./components/seller/SellerLayout.tsx";
import SellerDashboard from "./pages/seller/SellerDashboard.tsx";
import SellerProducts from "./pages/seller/SellerProducts.tsx";
import SellerOrders from "./pages/seller/SellerOrders.tsx";
import {
  SellerShipments, SellerReturns, SellerReviews,
  SellerRFQ, SellerProfile, SellerSettings,
} from "./pages/seller/SellerPlaceholders.tsx";
import AdminLayout from "./components/admin/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminApprovals from "./pages/admin/AdminApprovals.tsx";
import {
  AdminUsers, AdminProducts, AdminOrders, AdminReports,
  AdminFlagged, AdminSupport, AdminSettings,
} from "./pages/admin/AdminPlaceholders.tsx";
import BuyerLayout from "./components/buyer/BuyerLayout.tsx";
import BuyerDashboard from "./pages/buyer/BuyerDashboard.tsx";
import BuyerOrders from "./pages/buyer/BuyerOrders.tsx";
import BuyerWishlist from "./pages/buyer/BuyerWishlist.tsx";
import BuyerAddresses from "./pages/buyer/BuyerAddresses.tsx";
import {
  BuyerPayments, BuyerReviews, BuyerProfile, BuyerSettings,
} from "./pages/buyer/BuyerPlaceholders.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
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
          <Route path="/deals" element={<Deals />} />
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
            <Route path="reviews" element={<SellerReviews />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
