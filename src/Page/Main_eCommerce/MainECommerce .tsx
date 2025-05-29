import { ShoppingCart, DollarSign, Users, Package } from "lucide-react";
import StatBox from "./StatBox/StatBox";
import { DeviceProduct, SalesGraph } from "../../Components";
import CircleGraph from "./CircleGraph/CircleGraph";

const StatsCards = [
  {
    icon: <ShoppingCart size={20} />,
    value: "1,234",
    label: "Orders",
    bgColor: "bg-blue-500",
  },
  {
    icon: <DollarSign size={20} />,
    value: "$56,789",
    label: "Revenue",
    bgColor: "bg-green-500",
  },
  {
    icon: <Users size={20} />,
    value: "3,210",
    label: "Customers",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <Package size={20} />,
    value: "789",
    label: "Products",
    bgColor: "bg-red-500",
  },
];

const MainECommerce = () => {
  return (
    <div className="p-6 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6 min-h-screen">
      <div className="lg:col-span-3">
        <CircleGraph />
      </div>
      <div className="lg:col-span-6">
        <SalesGraph />
      </div>
      <div className="lg:col-span-3 flex flex-col gap-4">
        {StatsCards.map((stat, index) => (
          <StatBox
            key={index}
            icon={stat.icon}
            amount={stat.value}
            label={stat.label}
            bgColor={stat.bgColor}
          />
        ))}
      </div>

      <DeviceProduct />
    </div>
  );
};

export default MainECommerce;