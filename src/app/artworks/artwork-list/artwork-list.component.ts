import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromArtwork from '../../store/reducers/artwork.reducer';
import * as ArtworkActions from '../../store/actions/artwork.actions';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';

/**
 * Component to display a list of artworks.
 */
@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit, OnChanges {
  @Input() filter: string[] = [];
  @Input() sort: string = '';

  artworks$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  pagination$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.artworks$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].filteredArtworks));
    this.loading$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].loading));
    this.error$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].error));
    this.pagination$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].pagination));
  }

  ngOnInit(): void {
    this.store.dispatch(ArtworkActions.loadArtworks({ page: 1 }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter'] || changes['sort']) {
      this.applyFilterSort();
    }
  }

  applyFilterSort(): void {
    this.store.dispatch(ArtworkActions.filterArtworks({ filter: this.filter, sort: this.sort }));
  }

  onPageChange(page: number): void {
    this.store.dispatch(ArtworkActions.loadArtworks({ page }));
  }
}