import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../../../Constants/ecommerce";

const eSalesGraph: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full h-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Monthly Sales</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={salesData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default eSalesGraph;
