export interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  date_start: number;
  date_end: number;
  place_of_origin: string;
  medium_display: string;
  style_titles: string[];
  image_id: string;
  imageUrl?: string;
  creationPeriod?: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  material_titles: string[];
}