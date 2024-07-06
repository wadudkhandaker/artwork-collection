import { createReducer, on } from '@ngrx/store';
import * as ArtworkActions from '../actions/artwork.actions';

export interface State {
  artworks: any[];
  filteredArtworks: any[];
  loading: boolean;
  error: any;
  pagination: any;
  styles: { [style: string]: number };
}

export const initialState: State = {
  artworks: [],
  filteredArtworks: [],
  loading: false,
  error: null,
  pagination: null,
  styles: {}
};

export const artworkFeatureKey = 'artwork';

export const reducer = createReducer(
  initialState,
  on(ArtworkActions.loadArtworks, state => ({ ...state, loading: true })),
  on(ArtworkActions.loadArtworksSuccess, (state, { artworks, pagination, styles }) => ({
    ...state,
    loading: false,
    artworks,
    filteredArtworks: artworks,
    pagination,
    styles
  })),
  on(ArtworkActions.loadArtworksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ArtworkActions.filterArtworks, (state, { filter, sort }) => {
    let filteredArtworks = [...state.artworks];
    
    if (filter && filter.length > 0) {
      filteredArtworks = filteredArtworks.filter(artwork => 
        filter.some(f => artwork.style_titles.includes(f))
      );
    }

    if (sort) {
      filteredArtworks = filteredArtworks.sort((a, b) => {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
      });
    }

    return {
      ...state,
      filteredArtworks
    };
  })
);