import { useState } from 'react';
import { Clock, CheckCircle, Truck, XCircle, Search, Filter } from 'lucide-react';

export default function DashboardOrders() {
  const [activeTab, setActiveTab] = useState('pending');

  const tabs = [
    { id: 'pending', label: 'Pending', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { id: 'confirmed', label: 'Confirmed', icon: CheckCircle, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'delivered', label: 'Delivered', icon: Truck, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { id: 'cancelled', label: 'Cancelled', icon: XCircle, color: 'text-red-400', bg: 'bg-red-400/10' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Live Orders</h1>
          <p className="text-gray-400">Manage incoming orders in real-time.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 bg-[#141b2d] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/50 text-white w-64"
            />
          </div>
          <button className="p-2 bg-[#141b2d] border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? `${tab.bg} ${tab.color} shadow-[0_0_15px_rgba(0,0,0,0.2)]`
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
            <span className="ml-2 bg-black/20 px-2 py-0.5 rounded-md text-xs">12</span>
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {[1, 2, 3, 4].map((order) => (
          <div key={order} className="bg-[#141b2d] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center hover:border-white/10 transition-colors">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">Order #100{order}</h3>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-400/10 text-amber-400">
                  Pending
                </span>
                <span className="text-sm text-gray-500">10 mins ago</span>
              </div>
              <p className="text-gray-400 mb-4">John Doe • +1 234 567 8900</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">2x Double Cheeseburger</span>
                  <span className="font-medium">$25.98</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">1x Large Fries</span>
                  <span className="font-medium">$4.99</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-4 min-w-[200px] border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Total Amount</p>
                <p className="text-3xl font-black text-[#00e5ff]">$30.97</p>
              </div>
              <div className="flex gap-2 w-full">
                <button className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors border border-white/10">
                  Decline
                </button>
                <button className="flex-1 px-4 py-2 bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black rounded-xl font-bold transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
