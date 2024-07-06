import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtwork from '../reducers/artwork.reducer';

export const selectArtworkState = createFeatureSelector<fromArtwork.State>(fromArtwork.artworkFeatureKey);

export const selectAllArtworks = createSelector(
  selectArtworkState,
  (state: fromArtwork.State) => state.artworks
);

export const selectLoading = createSelector(
  selectArtworkState,
  (state: fromArtwork.State) => state.loading
);

export const selectError = createSelector(
  selectArtworkState,
  (state: fromArtwork.State) => state.error
);