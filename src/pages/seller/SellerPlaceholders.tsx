import { Construction } from "lucide-react";

const SellerPlaceholder = ({ title }: { title: string }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Construction className="h-8 w-8 text-muted-foreground" />
      </div>
      <h1 className="font-display text-xl font-bold text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground mt-2 max-w-sm">
        This section is coming soon. The UI will be built in the next iteration.
      </p>
    </div>
  );
};

export const SellerShipments = () => <SellerPlaceholder title="Shipments" />;
export const SellerReturns = () => <SellerPlaceholder title="Returns" />;
export const SellerReviews = () => <SellerPlaceholder title="Reviews" />;
export const SellerRFQ = () => <SellerPlaceholder title="RFQ / Quotes" />;
export const SellerProfile = () => <SellerPlaceholder title="Seller Profile" />;
export const SellerSettings = () => <SellerPlaceholder title="Settings" />;
