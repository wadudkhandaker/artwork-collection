import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromArtwork from './artwork.reducer';

export interface AppState {
  [fromArtwork.artworkFeatureKey]: fromArtwork.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromArtwork.artworkFeatureKey]: fromArtwork.reducer
};

export interface AppState {
    [fromArtwork.artworkFeatureKey]: fromArtwork.State;
  }
  
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];