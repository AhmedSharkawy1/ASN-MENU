import { motion } from 'framer-motion';
import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign },
    { name: 'Orders', value: '356', change: '+12.5%', icon: ShoppingBag },
    { name: 'Active Customers', value: '2,345', change: '+18.2%', icon: Users },
    { name: 'Conversion Rate', value: '4.3%', change: '+4.1%', icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-[#141b2d] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon className="w-16 h-16 text-[#00e5ff]" />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-400 mb-1">{stat.name}</p>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <span className="inline-flex items-center text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">
                <TrendingUp className="w-4 h-4 mr-1" />
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#141b2d] border border-white/5 min-h-[400px]">
          <h2 className="text-xl font-bold mb-4">Revenue Overview</h2>
          <div className="flex items-center justify-center h-[300px] text-gray-500 border border-dashed border-white/10 rounded-xl">
            Chart Placeholder (Recharts)
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5 min-h-[400px]">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="font-medium text-white">Order #{1000 + i}</p>
                  <p className="text-sm text-gray-400">2 items • Just now</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#00e5ff]">$34.50</p>
                  <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md">Pending</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
