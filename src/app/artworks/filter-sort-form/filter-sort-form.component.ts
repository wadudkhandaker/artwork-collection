import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-filter-sort-form',
  templateUrl: './filter-sort-form.component.html',
  styleUrls: ['./filter-sort-form.component.scss']
})
export class FilterSortFormComponent implements OnInit {
  /**
   * Event emitted when the filter selection changes.
   */
  @Output() filterChange = new EventEmitter<string[]>();

  /**
   * Event emitted when the sort selection changes.
   */
  @Output() sortChange = new EventEmitter<string>();

  /**
   * Observable of styles with their respective counts.
   */
  styles$: Observable<{ [style: string]: number }>;

  /**
   * Array of selected filter styles.
   */
  selectedFilters: string[] = [];

  /**
   * Selected sort option.
   */
  selectedSort: string = '';

  /**
   * Constructor for FilterSortFormComponent.
   * @param store The NgRx store.
   */
  constructor(private store: Store<AppState>) {
    this.styles$ = this.store.pipe(select(state => state.artwork.styles));
  }

  /**
   * Angular lifecycle hook that is called after data-bound properties are initialized.
   */
  ngOnInit(): void {}

  /**
   * Method called when filter selection changes.
   * Emits the selected filters.
   */
  onFilterChange(): void {
    this.filterChange.emit(this.selectedFilters);
  }

  /**
   * Method called when sort selection changes.
   * Emits the selected sort option.
   */
  onSortChange(): void {
    this.sortChange.emit(this.selectedSort);
  }
}