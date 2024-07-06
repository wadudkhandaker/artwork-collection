import { Artwork } from './artwork.model';

export interface ArtworkResponse {
  data: Artwork[];
  config: {
    iiif_url: string;
  };
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string
  };
}