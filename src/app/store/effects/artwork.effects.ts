import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ArtworkActions from '../actions/artwork.actions';
import { ArtworkService } from '../../artworks/services/artwork.service';
import { Artwork } from '../../artworks/models/artwork.model';

@Injectable()
export class ArtworkEffects {

  loadArtworks$ = createEffect(() => this.actions$.pipe(
    ofType(ArtworkActions.loadArtworks),
    mergeMap(action => this.artworkService.getArtworks(action.page).pipe(
      map(({ artworks, pagination }) => {
        const styles = this.getStyleTitlesWithCount(artworks);
        return ArtworkActions.loadArtworksSuccess({ artworks, pagination, styles });
      }),
      catchError(error => of(ArtworkActions.loadArtworksFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private artworkService: ArtworkService
  ) {}

  private getStyleTitlesWithCount(artworks: Artwork[]): { [style: string]: number } {
    const styleCount: { [style: string]: number } = {};
    artworks.forEach(artwork => {
      if (artwork.style_titles) {
        artwork.style_titles.forEach((style: string) => {
          if (styleCount[style]) {
            styleCount[style]++;
          } else {
            styleCount[style] = 1;
          }
        });
      }
    });
    return styleCount;
  }
}