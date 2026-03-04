export interface Booking {
  id: string;
  created_at: number; // agar ISO date bo‘lsa keyin Date qilib o‘zgartirish mumkin
  booking_ref: string;
  booking_type: string;
  tour_id: string;
  package_id: string;
  schedule_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_notes: string;
  adults: number;
  children: number;
  travel_date: string; // "2026-03-04" format
  base_amount: number;
  discount_amount: number;
  total_amount: number;
  currency: string;
  status: string;
  payment_status: string;
  updated_at: number; // timestamp ko‘rinishda
}