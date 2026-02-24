import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Plus, Minus, X, Info, MapPin, Phone, Clock } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function RestaurantMenu() {
  const { slug } = useParams();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const { items, addItem, removeItem, updateQuantity, getCartTotal } = useCartStore();

  // Mock data for preview
  const restaurant = {
    name: 'The Burger Joint',
    cover_url: 'https://picsum.photos/seed/burger-cover/1200/400',
    primary_color: '#00e5ff',
    secondary_color: '#ff2d55',
    is_open: true,
    opening_time: '09:00',
    closing_time: '22:00',
    address: '123 Burger Street, Food City',
    phone: '+1 234 567 8900',
  };

  const categories = ['All', 'Popular', 'Burgers', 'Sides', 'Drinks'];
  
  const menuItems = [
    { id: '1', name: 'Classic Cheeseburger', description: 'Double beef patty, cheddar cheese, lettuce, tomato, and our secret sauce.', price: 14.99, image_url: 'https://picsum.photos/seed/burger1/400/400', category: 'Burgers' },
    { id: '2', name: 'Spicy Chicken Sandwich', description: 'Crispy fried chicken breast, spicy mayo, pickles, on a brioche bun.', price: 12.99, image_url: 'https://picsum.photos/seed/burger2/400/400', category: 'Burgers' },
    { id: '3', name: 'Truffle Fries', description: 'Crispy shoestring fries tossed in truffle oil and parmesan cheese.', price: 6.99, image_url: 'https://picsum.photos/seed/fries1/400/400', category: 'Sides' },
    { id: '4', name: 'Onion Rings', description: 'Thick-cut, beer-battered onion rings with ranch dipping sauce.', price: 5.99, image_url: 'https://picsum.photos/seed/rings1/400/400', category: 'Sides' },
    { id: '5', name: 'Craft Cola', description: 'Artisanal cola made with real cane sugar.', price: 3.50, image_url: 'https://picsum.photos/seed/drink1/400/400', category: 'Drinks' },
    { id: '6', name: 'Vanilla Milkshake', description: 'Thick and creamy vanilla bean milkshake topped with whipped cream.', price: 5.50, image_url: 'https://picsum.photos/seed/shake1/400/400', category: 'Drinks' },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen pb-24 relative" style={{ '--primary': restaurant.primary_color, '--secondary': restaurant.secondary_color } as React.CSSProperties}>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent z-20" />
        <img src={restaurant.cover_url} alt={restaurant.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 z-30 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
              {restaurant.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-200">
              <div className="flex items-center bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Clock className="w-4 h-4 mr-2 text-[var(--primary)]" />
                {restaurant.is_open ? (
                  <span className="text-emerald-400">Open until {restaurant.closing_time}</span>
                ) : (
                  <span className="text-red-400">Closed • Opens at {restaurant.opening_time}</span>
                )}
              </div>
              <div className="flex items-center bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <MapPin className="w-4 h-4 mr-2 text-[var(--primary)]" />
                {restaurant.address}
              </div>
              <div className="flex items-center bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Phone className="w-4 h-4 mr-2 text-[var(--primary)]" />
                {restaurant.phone}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Search & Filter */}
        <div className="sticky top-4 z-40 mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[var(--primary)] text-black shadow-[0_0_20px_var(--primary)]/30 scale-105'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex gap-4 overflow-hidden"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 relative">
                  <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-bold text-xl text-white mb-1 tracking-tight">{item.name}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-black text-xl text-[var(--primary)]">${item.price.toFixed(2)}</span>
                    
                    <button
                      onClick={() => addItem(item as any, slug || 'default')}
                      disabled={!restaurant.is_open}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--primary)] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Info className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
            <p className="text-gray-400">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="pointer-events-auto flex items-center gap-4 px-6 py-4 bg-[var(--primary)] text-black rounded-full font-black text-lg shadow-[0_10px_40px_rgba(0,229,255,0.4)] hover:scale-105 transition-transform"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <span>View Order</span>
              <span>•</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            key="cart-drawer"
            className="fixed inset-0 z-50 flex justify-end"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative h-full w-full max-w-md bg-[#0b0f19] border-l border-white/10 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <h2 className="text-2xl font-black text-white flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3 text-[var(--primary)]" />
                  Your Order
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="text-center py-20 text-gray-400">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image_url || ''} alt={item.name} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{item.name}</h4>
                        <p className="text-[var(--primary)] font-bold mb-3">${(item.price * item.quantity).toFixed(2)}</p>
                        
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg w-fit p-1 border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-white/5 space-y-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black text-white">
                    <span>Total</span>
                    <span className="text-[var(--primary)]">${getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <button className="w-full py-4 rounded-xl bg-[var(--primary)] text-black font-black text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Checkout via WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
