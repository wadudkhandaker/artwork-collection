import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArtworksRoutingModule } from './artworks-routing.module';
import { ArtworksComponent } from './artworks.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { FilterSortFormComponent } from './filter-sort-form/filter-sort-form.component';
import { ArtworkItemComponent } from './artwork-item/artwork-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromArtwork from '../store/reducers/artwork.reducer';
import { ArtworkEffects } from '../store/effects/artwork.effects';
import { ArtworkPaginatorComponent } from './artwork-paginator/artwork-paginator.component';

@NgModule({
  declarations: [
    ArtworksComponent,
    ArtworkListComponent,
    FilterSortFormComponent,
    ArtworkItemComponent,
    ArtworkPaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    ArtworksRoutingModule,
    StoreModule.forFeature(fromArtwork.artworkFeatureKey, fromArtwork.reducer),
    EffectsModule.forFeature([ArtworkEffects])
  ]
})
export class ArtworksModule { }