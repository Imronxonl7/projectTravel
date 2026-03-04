export interface Media {
  id: string;
  created_at: number; // timestamp (ms)
  entity_type: string; // masalan: "tour", "hotel", "destination"
  entity_id: number;
  media_type: string;
  url: string;
  thumbnail: string;
  title: string;
  sort_order: number;
  is_cover: boolean;
}