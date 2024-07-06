import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromArtwork from './reducers/artwork.reducer';
import { ArtworkEffects } from './effects/artwork.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('artwork', fromArtwork.reducer),
    EffectsModule.forFeature([ArtworkEffects])
  ]
})
export class ArtworkStoreModule {}