export interface PackageHotel {
  id: string;
  created_at: number;
  package_id: string;
  hotel_id: string;
  night_from: number;
  night_to: number;
  room_type: string;
  sort_order: number;
}