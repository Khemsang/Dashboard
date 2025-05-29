import { Eye, ShoppingCart, Package, Users } from "lucide-react";

const stats = [
  { icon: <Eye />, label: "Total views", value: "$3.456K", change: "0.43%", positive: true },
  { icon: <ShoppingCart />, label: "Total Profit", value: "$45,2K", change: "4.35%", positive: true },
  { icon: <Package />, label: "Total Product", value: "2.450", change: "2.59%", positive: true },
  { icon: <Users />, label: "Total Users", value: "3.456", change: "0.95%", positive: false },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 dark:bg-gray-900 dark:text-white">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-4 rounded-xl shadow flex items-center justify-between dark:bg-slate-400 dark:text-white"
        >
          <div>
            <div className="text-gray-500 dark:text-gray-300">{stat.label}</div>
            <div className="text-xl font-semibold">{stat.value}</div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className={`text-sm ${stat.positive ? "text-green-500" : "text-red-500"}`}>
              {stat.change} {stat.positive ? "↑" : "↓"}
            </div>
            <div className="text-blue-500 text-2xl mt-1">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
