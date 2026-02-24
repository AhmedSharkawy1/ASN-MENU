import { useState } from 'react';
import { Plus, GripVertical, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';

export default function DashboardMenu() {
  const [categories] = useState([
    { id: '1', name: 'Popular Items' },
    { id: '2', name: 'Main Course' },
    { id: '3', name: 'Drinks' },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Menu Builder</h1>
          <p className="text-gray-400">Manage your categories and items.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#00e5ff] text-black font-bold rounded-xl hover:bg-[#00e5ff]/90 transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Add Category
        </button>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-[#141b2d] border border-white/5 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-white/5 border-b border-white/5">
              <div className="flex items-center">
                <GripVertical className="w-5 h-5 text-gray-500 mr-3 cursor-grab" />
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="ml-2 flex items-center px-3 py-1.5 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Item
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded-xl group hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <GripVertical className="w-5 h-5 text-gray-600 cursor-grab" />
                    <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
                      <ImageIcon className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Delicious Burger</h3>
                      <p className="text-sm text-gray-400 line-clamp-1">Premium beef patty with secret sauce and fresh veggies.</p>
                      <p className="text-[#00e5ff] font-bold mt-1">$12.99</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
