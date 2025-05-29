import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { circleColors, circleData } from "../../../Constants/ecommerce";

const CircleGraph: React.FC = () => {
  const total = circleData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-sm relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Sales by category</h2>
          <p className="text-sm text-gray-400">Detailed sales data</p>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm cursor-pointer">
          <span>Monthly</span>
          
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="flex flex-col items-center relative">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={circleData}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {circleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={circleColors[index % circleColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-[110px] text-center">
          <div className="text-sm font-medium text-gray-500">Total</div>
          <div className="text-xl font-semibold text-gray-800">{total}%</div>
        </div>

        <div className="flex gap-6 mt-4 text-sm text-gray-500">
          {circleData.slice(0, 2).map((item, idx) => (
            <div className="flex items-center gap-2" key={item.category}>
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: circleColors[idx] }}
              />
              {item.category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleGraph;
