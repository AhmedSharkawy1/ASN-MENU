import { useState } from 'react';
import { Save, Store, Link as LinkIcon, Phone, MapPin, Clock } from 'lucide-react';

export default function DashboardSettings() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Restaurant Settings</h1>
          <p className="text-gray-400">Manage your restaurant details and configuration.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#00e5ff] text-black font-bold rounded-xl hover:bg-[#00e5ff]/90 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
          <Save className="w-5 h-5 mr-2" />
          Save Settings
        </button>
      </div>

      <div className="space-y-6">
        {/* General Info */}
        <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5 space-y-6">
          <h2 className="text-xl font-bold flex items-center border-b border-white/10 pb-4">
            <Store className="w-5 h-5 mr-3 text-[#00e5ff]" />
            General Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Restaurant Name</label>
              <input
                type="text"
                defaultValue="The Burger Joint"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">URL Slug</label>
              <div className="flex items-center">
                <span className="px-4 py-3 bg-black/40 border border-r-0 border-white/10 rounded-l-xl text-gray-500 text-sm">
                  menuverse.com/
                </span>
                <input
                  type="text"
                  defaultValue="burger-joint"
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-r-xl text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5 space-y-6">
          <h2 className="text-xl font-bold flex items-center border-b border-white/10 pb-4">
            <Phone className="w-5 h-5 mr-3 text-[#ff2d55]" />
            Contact & Social
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff2d55] transition-colors"
              />
              <p className="text-xs text-gray-500 mt-2">Used for receiving orders via WhatsApp.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff2d55] transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Google Maps URL</label>
              <div className="relative">
                <MapPin className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="url"
                  placeholder="https://maps.google.com/..."
                  className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff2d55] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Instagram URL</label>
              <div className="relative">
                <LinkIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="url"
                  placeholder="https://instagram.com/..."
                  className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff2d55] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Facebook URL</label>
              <div className="relative">
                <LinkIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="url"
                  placeholder="https://facebook.com/..."
                  className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff2d55] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="p-6 rounded-2xl bg-[#141b2d] border border-white/5 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold flex items-center">
              <Clock className="w-5 h-5 mr-3 text-emerald-400" />
              Operating Status
            </h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500"></div>
              <span className="ml-3 text-sm font-medium text-gray-300">Currently Open</span>
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Opening Time</label>
              <input
                type="time"
                defaultValue="09:00"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Closing Time</label>
              <input
                type="time"
                defaultValue="22:00"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
