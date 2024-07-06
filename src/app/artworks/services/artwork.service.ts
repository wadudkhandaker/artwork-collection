import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artwork } from '../models/artwork.model';
import { ArtworkResponse } from '../models/artwork-response.model';

/**
 * Service to handle API calls related to artworks.
 */
@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) { }

  /**
   * Fetches a list of artworks from the API.
   * 
   * @param page - The page number to fetch.
   * @param size - The number of artworks per page. Defaults to 12.
   * @returns An observable containing the artworks and pagination information.
   */
  getArtworks(page: number, size: number = 12): Observable<{ artworks: Artwork[], pagination: any }> {
    const from = (page - 1) * size; // Assuming 12 results per page
    let params = new HttpParams()
      .set('fields', 'id,title,artist_display,date_start,date_end,place_of_origin,medium_display,style_titles,thumbnail,image_id,material_titles') // Include material_titles field
      .set('page', page.toString())
      .set('limit', size.toString());

    return this.http.get<ArtworkResponse>(this.apiUrl, { params }).pipe(
      map(response => {
        const iiifUrl = response.config.iiif_url;
        const artworks = response.data.map(artwork => ({
          ...artwork,
          imageUrl: artwork.image_id ? `${iiifUrl}/${artwork.image_id}/full/843,/0/default.jpg` : 'https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg',
          creationPeriod: this.getCreationPeriod(artwork.place_of_origin, artwork.date_start, artwork.date_end),
          material_titles: artwork.material_titles || []
        }));
        return {
          artworks,
          pagination: response.pagination
        };
      })
    );
  }

  /**
   * Determines the creation period of an artwork.
   * 
   * @param placeOfOrigin - The place of origin of the artwork.
   * @param dateStart - The start date of the artwork.
   * @param dateEnd - The end date of the artwork.
   * @returns A string representing the creation period.
   */
  private getCreationPeriod(placeOfOrigin: string, dateStart: number | null, dateEnd: number | null): string {
    if (dateStart && dateEnd) {
      return dateStart === dateEnd
        ? `${placeOfOrigin} (${dateStart})`
        : `${placeOfOrigin} (${dateStart} - ${dateEnd})`;
    }
    return placeOfOrigin;
  }
}