export interface Destination {
  id: string;
  created_at: number; // ISO date bo‘lsa Date ham qilish mumkin
  country_id: string;
  name: string;
  name_uz: string;
  name_ru: string;
  slug: string;
  description: string;
  highlights?: string[];
  latitude: number;
  longitude: number;
  timezone: string;
  best_season: string;
  cover_image: string;
  is_popular: boolean;
  is_active: boolean;
  updated_at: number; // timestamp
}