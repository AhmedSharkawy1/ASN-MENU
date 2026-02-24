import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Database } from '../types/database';

type Item = Database['public']['Tables']['items']['Row'];

interface CartItem extends Item {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  restaurantId: string | null;
  addItem: (item: Item, restaurantId: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      restaurantId: null,
      addItem: (item, restaurantId) => {
        set((state) => {
          if (state.restaurantId !== restaurantId && state.items.length > 0) {
            // If adding from a different restaurant, clear cart first
            return { items: [{ ...item, quantity: 1 }], restaurantId };
          }
          
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              restaurantId,
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }], restaurantId };
        });
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }));
      },
      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === itemId ? { ...i, quantity: Math.max(0, quantity) } : i
          ).filter(i => i.quantity > 0),
        }));
      },
      clearCart: () => set({ items: [], restaurantId: null }),
      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'menuverse-cart',
    }
  )
);
