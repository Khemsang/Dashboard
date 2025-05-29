import React from "react";
import { MoreHorizontal } from "lucide-react";

interface StatBoxProps {
  icon: React.ReactNode;
  amount: string;
  label: string;
  bgColor: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, amount, label, bgColor }) => {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm w-full max-w-xs">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bgColor}`}>
          {icon}
        </div>
        <div>
          <div className="text-xl font-semibold text-gray-800">{amount}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </div>
      <MoreHorizontal className="text-gray-400" size={20} />
    </div>
  );
};

export default StatBox;
