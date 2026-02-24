export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      restaurants: {
        Row: {
          id: string
          owner_id: string
          name: string
          slug: string
          logo_url: string | null
          cover_url: string | null
          primary_color: string
          secondary_color: string
          theme_layout: string
          card_style: string
          header_style: string
          whatsapp_number: string | null
          phone_1: string | null
          phone_2: string | null
          facebook_url: string | null
          instagram_url: string | null
          tiktok_url: string | null
          google_maps_url: string | null
          order_enabled: boolean
          is_open: boolean
          opening_time: string | null
          closing_time: string | null
          created_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          slug: string
          logo_url?: string | null
          cover_url?: string | null
          primary_color?: string
          secondary_color?: string
          theme_layout?: string
          card_style?: string
          header_style?: string
          whatsapp_number?: string | null
          phone_1?: string | null
          phone_2?: string | null
          facebook_url?: string | null
          instagram_url?: string | null
          tiktok_url?: string | null
          google_maps_url?: string | null
          order_enabled?: boolean
          is_open?: boolean
          opening_time?: string | null
          closing_time?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          slug?: string
          logo_url?: string | null
          cover_url?: string | null
          primary_color?: string
          secondary_color?: string
          theme_layout?: string
          card_style?: string
          header_style?: string
          whatsapp_number?: string | null
          phone_1?: string | null
          phone_2?: string | null
          facebook_url?: string | null
          instagram_url?: string | null
          tiktok_url?: string | null
          google_maps_url?: string | null
          order_enabled?: boolean
          is_open?: boolean
          opening_time?: string | null
          closing_time?: string | null
          created_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          restaurant_id: string
          name: string
          order_index: number
        }
        Insert: {
          id?: string
          restaurant_id: string
          name: string
          order_index?: number
        }
        Update: {
          id?: string
          restaurant_id?: string
          name?: string
          order_index?: number
        }
      }
      items: {
        Row: {
          id: string
          restaurant_id: string
          category_id: string
          name: string
          description: string | null
          price: number
          image_url: string | null
          available: boolean
          is_featured: boolean
          order_index: number
        }
        Insert: {
          id?: string
          restaurant_id: string
          category_id: string
          name: string
          description?: string | null
          price: number
          image_url?: string | null
          available?: boolean
          is_featured?: boolean
          order_index?: number
        }
        Update: {
          id?: string
          restaurant_id?: string
          category_id?: string
          name?: string
          description?: string | null
          price?: number
          image_url?: string | null
          available?: boolean
          is_featured?: boolean
          order_index?: number
        }
      }
      orders: {
        Row: {
          id: string
          restaurant_id: string
          customer_name: string
          phone: string
          address: string | null
          items: Json
          subtotal: number
          discount: number
          total: number
          status: 'pending' | 'confirmed' | 'delivered' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          customer_name: string
          phone: string
          address?: string | null
          items: Json
          subtotal: number
          discount?: number
          total: number
          status?: 'pending' | 'confirmed' | 'delivered' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          restaurant_id?: string
          customer_name?: string
          phone?: string
          address?: string | null
          items?: Json
          subtotal?: number
          discount?: number
          total?: number
          status?: 'pending' | 'confirmed' | 'delivered' | 'cancelled'
          created_at?: string
        }
      }
      coupons: {
        Row: {
          id: string
          restaurant_id: string
          code: string
          discount_type: 'percentage' | 'fixed'
          discount_value: number
          expires_at: string | null
          usage_limit: number | null
          used_count: number
          active: boolean
        }
        Insert: {
          id?: string
          restaurant_id: string
          code: string
          discount_type: 'percentage' | 'fixed'
          discount_value: number
          expires_at?: string | null
          usage_limit?: number | null
          used_count?: number
          active?: boolean
        }
        Update: {
          id?: string
          restaurant_id?: string
          code?: string
          discount_type?: 'percentage' | 'fixed'
          discount_value?: number
          expires_at?: string | null
          usage_limit?: number | null
          used_count?: number
          active?: boolean
        }
      }
    }
  }
}
