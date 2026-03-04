export interface Country {
  id: string;
  created_at: number; // timestamp (ms)
  name: string;
  name_uz: string;
  name_ru: string;
  code: string; // ISO country code (UZ)
  flag_url: string;
  continent: string; // xohlasang union type qilib beraman
  currency: string; // ISO currency code (UZS)
  language: string;
  visa_required: boolean;
  description: string;
  is_popular: boolean;
  is_active: boolean;
  updated_at: number; // timestamp
}