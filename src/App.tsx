import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/useAuthStore';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import RestaurantMenu from './pages/RestaurantMenu';
import DashboardOverview from './pages/dashboard/Overview';
import DashboardMenu from './pages/dashboard/Menu';
import DashboardOrders from './pages/dashboard/Orders';
import DashboardCoupons from './pages/dashboard/Coupons';
import DashboardAnalytics from './pages/dashboard/Analytics';
import DashboardDesign from './pages/dashboard/Design';
import DashboardSettings from './pages/dashboard/Settings';

export default function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
        {/* Restaurant Public Menu */}
        <Route path="/:slug" element={<PublicLayout />}>
          <Route index element={<RestaurantMenu />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="menu" element={<DashboardMenu />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="coupons" element={<DashboardCoupons />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="design" element={<DashboardDesign />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
