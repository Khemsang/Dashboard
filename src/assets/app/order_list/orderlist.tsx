import React from 'react';
import { orderData, type Order } from '../../../Constants/orderData';

const Order_List: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md dark:bg-slate-400 dark:text-white">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Order List</h2>
      <p className="text-gray-500 text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
      </p>

      {/* Make table horizontally scrollable in small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:text-white">
          <thead className="bg-gray-50 dark:bg-slate-500">
            <tr>
              {['Customer', 'Product', 'Order Number', 'Date', 'Status', 'Confirmation'].map(header => (
                <th
                  key={header}
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 dark:bg-slate-400">
            {orderData.map((order: Order) => (
              <tr key={order.orderNumber}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{order.customer}</div>
                  <div className="text-sm text-gray-500">{order.email}</div>
                </td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">{order.product}</td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">{order.orderNumber}</td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">{order.date}</td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'Cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right">
                  {order.confirmation && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs sm:text-sm"
                      type="button"
                    >
                      {order.confirmation}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order_List;
