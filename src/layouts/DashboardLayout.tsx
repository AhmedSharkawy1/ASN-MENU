import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { 
  LayoutDashboard, 
  MenuSquare, 
  ShoppingBag, 
  Ticket, 
  BarChart3, 
  Palette, 
  Settings,
  LogOut
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Menu Builder', href: '/dashboard/menu', icon: MenuSquare },
  { name: 'Orders', href: '/dashboard/orders', icon: ShoppingBag },
  { name: 'Coupons', href: '/dashboard/coupons', icon: Ticket },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Design', href: '/dashboard/design', icon: Palette },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout() {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-[#0b0f19]/50 backdrop-blur-xl flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <span className="text-xl font-bold bg-gradient-to-r from-[#00e5ff] to-[#ff2d55] bg-clip-text text-transparent">
            MenuVerse
          </span>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-[#00e5ff]' : ''}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
