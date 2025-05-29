

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { monthlyData } from "../../Constants/monthlyDataGraph";


const SalesStackedBarGraph = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow dark:bg-slate-400 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Analytics1</h2>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>Monthly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 120]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="productOne"
            stackId="a"
            fill="#4338CA"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="productTwo"
            stackId="a"
            fill="#10B981"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesStackedBarGraph;
