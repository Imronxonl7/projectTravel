export interface Faq {
  id: string;
  created_at: number; // ISO format bo‘lsa Date qilish mumkin
  entity_type: string;
  entity_id: number;
  question: string;
  question_uz: string;
  answer: string;
  answer_uz: string;
  sort_order: number;
  is_active: boolean;
}