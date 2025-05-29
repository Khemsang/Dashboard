import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  sold: number;
  profit: string;
  checked: boolean;
}

const Device_Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Apple Watch Series 7",
      category: "Electronics",
      price: "$269",
      sold: 22,
      profit: "$45",
      checked: false,
    },
    {
      id: 2,
      name: "Macbook Pro M1",
      category: "Electronics",
      price: "$546",
      sold: 34,
      profit: "$125",
      checked: false,
    },
    {
      id: 3,
      name: "Dell Inspiron 15",
      category: "Electronics",
      price: "$444",
      sold: 64,
      profit: "$247",
      checked: false,
    },
    {
      id: 4,
      name: "HP Probook 450",
      category: "Electronics",
      price: "$499",
      sold: 72,
      profit: "$103",
      checked: false,
    },
  ]);

  const toggleCheck = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, checked: !product.checked }
          : product
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Top Products</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sold
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className={product.checked ? "bg-blue-50" : ""}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={product.checked}
                      onChange={() => toggleCheck(product.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
                    />
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.sold}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Device_Product;