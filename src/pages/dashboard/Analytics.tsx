import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, DollarSign, ShoppingBag, Users } from 'lucide-react';

const data = [
  { name: 'Mon', revenue: 4000, orders: 240 },
  { name: 'Tue', revenue: 3000, orders: 139 },
  { name: 'Wed', revenue: 2000, orders: 980 },
  { name: 'Thu', revenue: 2780, orders: 390 },
  { name: 'Fri', revenue: 1890, orders: 480 },
  { name: 'Sat', revenue: 2390, orders: 380 },
  { name: 'Sun', revenue: 3490, orders: 430 },
];

export default function DashboardAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-400">Track your restaurant's performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$12,450', change: '+15%', icon: DollarSign, color: 'text-[#00e5ff]' },
          { label: 'Total Orders', value: '1,240', change: '+8%', icon: ShoppingBag, color: 'text-[#ff2d55]' },
          { label: 'Average Order', value: '$35.50', change: '+2%', icon: TrendingUp, color: 'text-emerald-400' },
          { label: 'Unique Customers', value: '850', change: '+12%', icon: Users, color: 'text-amber-400' },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-[#141b2d] border border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-3xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5">
          <h2 className="text-xl font-bold mb-6">Revenue Overview</h2>
          <div className="h-[300px] w-full min-w-0">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0b0f19', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#00e5ff' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#00e5ff" strokeWidth={3} dot={{ r: 4, fill: '#00e5ff', strokeWidth: 2, stroke: '#0b0f19' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5">
          <h2 className="text-xl font-bold mb-6">Orders Volume</h2>
          <div className="h-[300px] w-full min-w-0">
            <ResponsiveContainer width="99%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0b0f19', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  cursor={{ fill: '#ffffff05' }}
                />
                <Bar dataKey="orders" fill="#ff2d55" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
