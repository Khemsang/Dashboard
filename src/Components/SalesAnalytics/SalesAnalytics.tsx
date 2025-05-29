

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../../Constants/SalesData";


const SalesAnalytics = () => {
  return (
    <div className="p-4 rounded-xl bg-white shadow dark:bg-slate-400 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Analytics</h2>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>
      <div className="dark:text-white">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="product1"
              stroke="#6366F1"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="product2"
              stroke="#10B981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesAnalytics;
