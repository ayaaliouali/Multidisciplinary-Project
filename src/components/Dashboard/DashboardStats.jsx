import React from 'react';
import { Package, DollarSign, AlertTriangle, Star, TrendingUp } from 'lucide-react';

const DashboardStats = ({ products }) => {
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const lowStockItems = products.filter(p => p.stock <= 5).length;
  const outOfStockItems = products.filter(p => p.stock === 0).length;
  const featuredItems = products.filter(p => p.featured).length;

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      title: 'Total Stock',
      value: totalStock.toLocaleString(),
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      title: 'Inventory Value',
      value: `${totalValue.toFixed(2)}dz`,
      icon: DollarSign,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      title: 'Low Stock Alert',
      value: lowStockItems,
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      title: 'Out of Stock',
      value: outOfStockItems,
      icon: AlertTriangle,
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      title: 'Featured Items',
      value: featuredItems,
      icon: Star,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <Icon size={20} className={stat.color} />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardStats;