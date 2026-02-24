import { useState } from 'react';
import { Palette, Layout, Type, Image as ImageIcon, Save, Plus } from 'lucide-react';

export default function DashboardDesign() {
  const [primaryColor, setPrimaryColor] = useState('#00e5ff');
  const [secondaryColor, setSecondaryColor] = useState('#ff2d55');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Design Customizer</h1>
          <p className="text-gray-400">Customize your restaurant's digital menu appearance.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#00e5ff] text-black font-bold rounded-xl hover:bg-[#00e5ff]/90 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          {/* Colors */}
          <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5">
            <h2 className="text-xl font-bold mb-4 flex items-center"><Palette className="w-5 h-5 mr-2 text-[#00e5ff]" /> Colors</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Primary Accent</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00e5ff]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Secondary Accent</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                  />
                  <input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1 px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff2d55]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layout */}
          <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5">
            <h2 className="text-xl font-bold mb-4 flex items-center"><Layout className="w-5 h-5 mr-2 text-[#ff2d55]" /> Theme Engine</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Layout Style</label>
                <select className="w-full px-3 py-2.5 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 appearance-none">
                  <option value="classic">Classic List</option>
                  <option value="grid">Modern Grid</option>
                  <option value="minimal">Minimal Elegant</option>
                  <option value="glass">Glassmorphism</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Card Style</label>
                <select className="w-full px-3 py-2.5 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 appearance-none">
                  <option value="shadow">Soft Shadow</option>
                  <option value="border">Clean Border</option>
                  <option value="glass">Glass Effect</option>
                  <option value="neon">Neon Glow</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <div className="sticky top-8 p-6 rounded-3xl bg-[#0b0f19] border border-white/10 h-[800px] overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 inset-x-0 h-12 bg-black/40 backdrop-blur-md z-20 flex items-center justify-center border-b border-white/10">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Live Preview</span>
            </div>
            
            <div className="mt-12 h-full overflow-y-auto pb-20 scrollbar-hide">
              {/* Preview Content */}
              <div className="relative h-64 bg-gray-900 rounded-2xl mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent z-10" />
                <img src="https://picsum.photos/seed/restaurant/800/400" alt="Cover" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h1 className="text-4xl font-black text-white mb-2" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>The Burger Joint</h1>
                  <p className="text-gray-300 font-medium">Premium American Cuisine</p>
                </div>
              </div>

              <div className="px-4 space-y-6">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {['Popular', 'Burgers', 'Drinks', 'Sides'].map((cat, i) => (
                    <button key={cat} className={`px-5 py-2 rounded-full whitespace-nowrap font-bold text-sm transition-all ${i === 0 ? 'bg-white text-black' : 'bg-white/5 text-gray-400 border border-white/10'}`}>
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex gap-4 group hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                        <img src={`https://picsum.photos/seed/burger${item}/200/200`} alt="Food" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-bold text-lg text-white mb-1">Classic Cheeseburger</h3>
                          <p className="text-sm text-gray-400 line-clamp-2">Double beef patty, cheddar cheese, lettuce, tomato, and our secret sauce.</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-black text-lg" style={{ color: primaryColor }}>$14.99</span>
                          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white transition-colors hover:text-black">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
