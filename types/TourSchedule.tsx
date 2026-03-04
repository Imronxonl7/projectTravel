export interface TourSchedule {
  id: string;
  created_at: number;
  tour_id: string;
  start_date: string;
  end_date: string;
  available_seats: number;
  booked_seats: number;
  price_override: number;
  status: string;
}
