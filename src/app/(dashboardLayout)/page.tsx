import ActiveUsersCard from "@/components/page/analytics/cards/ActiveUserCard";
import ReportsCard from "@/components/page/analytics/cards/ReportsCard";
import StatCard from "@/components/page/analytics/cards/StatCard";
import CategoryChart from "@/components/page/analytics/charts/CategoryChart";
import SalesVolumeChart from "@/components/page/analytics/charts/SalesVolumeChart";
import UserGrowthChart from "@/components/page/analytics/charts/UserGrowthChart";
import { Card } from "@/components/ui/card";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <Card className="h-full p-5 animate-fadeIn flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="24,521"
          change="+12.5%"
          isPositive={true}
          icon={<Users className="h-6 w-6" />}
          color="blue"
        />
        <StatCard
          title="Active Users"
          value="18,432"
          change="+8.2%"
          isPositive={true}
          icon={<TrendingUp className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          title="Total Products"
          value="8,741"
          change="+5.1%"
          isPositive={true}
          icon={<ShoppingCart className="h-6 w-6" />}
          color="purple"
        />
        <StatCard
          title="Total Revenue"
          value="$1.2M"
          change="+18.3%"
          isPositive={true}
          icon={<DollarSign className="h-6 w-6" />}
          color="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserGrowthChart />
        <ActiveUsersCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryChart />
        <SalesVolumeChart />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ReportsCard />
      </div>
    </Card>
  );
};

export default AnalyticsPage;
