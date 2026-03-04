export interface Hotel {
  id: string;
  created_at: number; // timestamp (ms)
  destination_id: string;
  name: string;
  slug: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  stars: number; // 1–5 oralig‘ida bo‘lishi mumkin
  price_per_night: number;
  currency: string; // ISO currency code (USD)
  phone: string;
  email: string;
  website: string;
  check_in_time: string; // "15:00"
  check_out_time: string; // "12:00"
  amenities: string[];
  cover_image: string; // base64 yoki image URL
  is_active: boolean;
  updated_at: number; // timestamp
}