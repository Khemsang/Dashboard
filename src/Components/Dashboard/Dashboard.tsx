import React from "react";
import { motion } from "framer-motion";
import OrderList from "../../assets/app/order_list/orderlist";
import { SalesAnalytics, SalesGraph, StatesCard } from "../index";

// Shared transition configuration for all animations
const commonTransition = {
  duration: 1.8,
  ease: "easeOut",
  type: "tween" as const,
};

const cornerVariants = {
  hiddenTopLeft: { opacity: 0, x: -70, y: -70 },
  hiddenTopRight: { opacity: 0, x: 70, y: -70 },
  hiddenBottomLeft: { opacity: 0, x: -70, y: 70 },
  hiddenBottomRight: { opacity: 0, x: 70, y: 70 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: commonTransition,
  },
};

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-6 space-y-6 dark:bg-gray-900 min-h-screen">
      {/* States Cards - Animate from Top Left */}
      <motion.div
        className="w-full"
        initial="hiddenTopLeft"
        animate="visible"
        variants={cornerVariants}
      >
        <StatesCard />
      </motion.div>

      {/* Sales Graph and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SalesAnalytics - Animate from Top Right */}
        <motion.div
          className="w-full"
          initial="hiddenTopRight"
          animate="visible"
          variants={cornerVariants}
        >
          <SalesAnalytics />
        </motion.div>

        {/* SalesGraph - Animate from Bottom Left */}
        <motion.div
          className="w-full"
          initial="hiddenBottomLeft"
          animate="visible"
          variants={cornerVariants}
        >
          <SalesGraph />
        </motion.div>
      </div>

      {/* Order List - Animate from Bottom Right */}
      <motion.div
        className="w-full"
        initial="hiddenBottomRight"
        animate="visible"
        variants={cornerVariants}
      >
        <OrderList />
      </motion.div>
    </div>
  );
};

export default Dashboard;
