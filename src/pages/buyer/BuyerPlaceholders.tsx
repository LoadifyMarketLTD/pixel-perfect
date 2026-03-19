import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Star, UserCircle, Settings } from "lucide-react";

const Placeholder = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold text-foreground">{title}</h1>
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <Icon className="h-12 w-12 mb-4 opacity-40" />
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm mt-1">This section is under development.</p>
      </CardContent>
    </Card>
  </div>
);

export const BuyerPayments = () => <Placeholder title="Payment Methods" icon={CreditCard} />;
export const BuyerReviews = () => <Placeholder title="My Reviews" icon={Star} />;
export const BuyerProfile = () => <Placeholder title="My Profile" icon={UserCircle} />;
export const BuyerSettings = () => <Placeholder title="Account Settings" icon={Settings} />;
