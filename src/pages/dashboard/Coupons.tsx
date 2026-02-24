import { useState } from 'react';
import { Plus, Ticket, Calendar, Users, MoreVertical } from 'lucide-react';

export default function DashboardCoupons() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Coupons & Discounts</h1>
          <p className="text-gray-400">Create and manage promotional codes.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#ff2d55] text-white font-bold rounded-xl hover:bg-[#ff2d55]/90 transition-colors shadow-[0_0_15px_rgba(255,45,85,0.3)]">
          <Plus className="w-5 h-5 mr-2" />
          Create Coupon
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { code: 'SUMMER20', type: 'Percentage', value: '20%', uses: '45/100', expires: 'Aug 31, 2024', active: true },
          { code: 'WELCOME5', type: 'Fixed', value: '$5.00', uses: '12/∞', expires: 'No expiry', active: true },
          { code: 'FLASH50', type: 'Percentage', value: '50%', uses: '100/100', expires: 'Expired', active: false },
        ].map((coupon) => (
          <div key={coupon.code} className={`p-6 rounded-2xl border ${coupon.active ? 'bg-[#141b2d] border-white/10' : 'bg-black/20 border-white/5 opacity-60'} relative group`}>
            <div className="absolute top-4 right-4">
              <button className="p-1 text-gray-500 hover:text-white rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${coupon.active ? 'bg-[#ff2d55]/20 text-[#ff2d55]' : 'bg-white/5 text-gray-500'}`}>
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">{coupon.code}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${coupon.active ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'}`}>
                  {coupon.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Discount</span>
                <span className="font-bold text-white">{coupon.value} ({coupon.type})</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center"><Users className="w-4 h-4 mr-1" /> Usage</span>
                <span className="font-medium text-white">{coupon.uses}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center"><Calendar className="w-4 h-4 mr-1" /> Expires</span>
                <span className="font-medium text-white">{coupon.expires}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
