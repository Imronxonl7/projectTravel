export interface Category {
  id: string;
  created_at: number; // agar ISO date bo‘lsa Date qilib o‘zgartirish mumkin
  name: string;
  name_uz: string;
  name_ru: string;
  slug: string;
  icon: string;
  description: string;
  parent_id: string | null; // agar null bo‘lishi mumkin bo‘lsa: string | null
  sort_order: number;
  is_active: boolean;
}