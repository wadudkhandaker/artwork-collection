import { createAction, props } from '@ngrx/store';

export const loadArtworks = createAction(
  '[Artwork List] Load Artworks',
  props<{ page: number }>()
);

export const loadArtworksSuccess = createAction(
  '[Artwork List] Load Artworks Success',
  props<{ artworks: any[], pagination: any, styles: { [style: string]: number } }>()
);

export const loadArtworksFailure = createAction(
  '[Artwork List] Load Artworks Failure',
  props<{ error: any }>()
);

export const filterArtworks = createAction(
  '[Artwork List] Filter Artworks',
  props<{ filter: string[], sort: string }>()
);