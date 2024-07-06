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
  /**
   * Filter criteria for artworks.
   */
  @Input() filter: string[] = [];
  
  /**
   * Sort criteria for artworks.
   */
  @Input() sort: string = '';

  /**
   * Observable stream of artworks.
   */
  artworks$: Observable<any[]>;
  
  /**
   * Observable stream indicating the loading state.
   */
  loading$: Observable<boolean>;
  
  /**
   * Observable stream of any errors.
   */
  error$: Observable<any>;
  
  /**
   * Observable stream of pagination information.
   */
  pagination$: Observable<any>;

  /**
   * Constructor for ArtworkListComponent.
   * @param store - The NgRx store for state management.
   */
  constructor(private store: Store<AppState>) {
    this.artworks$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].filteredArtworks));
    this.loading$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].loading));
    this.error$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].error));
    this.pagination$ = this.store.pipe(select(state => state[fromArtwork.artworkFeatureKey].pagination));
  }

  /**
   * Initializes the component and dispatches the action to load artworks.
   */
  ngOnInit(): void {
    this.store.dispatch(ArtworkActions.loadArtworks({ page: 1 }));
  }

  /**
   * Detects changes in input properties and applies the filter and sort criteria.
   * @param changes - The changes in input properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter'] || changes['sort']) {
      this.applyFilterSort();
    }
  }

  /**
   * Applies the filter and sort criteria by dispatching an action.
   */
  applyFilterSort(): void {
    this.store.dispatch(ArtworkActions.filterArtworks({ filter: this.filter, sort: this.sort }));
  }

  /**
   * Handles page change events by dispatching an action to load the artworks for the selected page.
   * @param page - The selected page number.
   */
  onPageChange(page: number): void {
    this.store.dispatch(ArtworkActions.loadArtworks({ page }));
  }
}