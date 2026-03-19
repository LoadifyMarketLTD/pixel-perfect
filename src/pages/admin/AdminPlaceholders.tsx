import { Card, CardContent } from "@/components/ui/card";
import { Users, Package, ShoppingCart, BarChart3, Flag, MessageSquare, Settings } from "lucide-react";

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

export const AdminUsers = () => <Placeholder title="User Management" icon={Users} />;
export const AdminProducts = () => <Placeholder title="Product Moderation" icon={Package} />;
export const AdminOrders = () => <Placeholder title="Order Management" icon={ShoppingCart} />;
export const AdminReports = () => <Placeholder title="Reports & Analytics" icon={BarChart3} />;
export const AdminFlagged = () => <Placeholder title="Flagged Content" icon={Flag} />;
export const AdminSupport = () => <Placeholder title="Support Tickets" icon={MessageSquare} />;
export const AdminSettings = () => <Placeholder title="System Settings" icon={Settings} />;
