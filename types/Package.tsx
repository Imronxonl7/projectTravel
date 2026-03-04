
export interface Package {
  id: string;
  created_at: number; // timestamp (ms)
  title: string;
  title_uz: string;
  title_ru: string;
  slug: string;
  description: string;
  package_type: string;
  country_id: string;
  destination_id: string;
  duration_days: number;
  duration_nights: number;
  total_price: number;
  original_price: number;
  currency: string; // ISO currency code (USD)
  discount_pct: number;
  min_people: number;
  max_people: number;
  includes: string[];
  excludes: string[];
  itinerary: string;
  departure_city: string;
  departure_date: string; // "YYYY-MM-DD"
  is_flexible: boolean;
  cover_image: string;
  is_featured: boolean;
  is_active: boolean;
  updated_at: number; // timestamp
}