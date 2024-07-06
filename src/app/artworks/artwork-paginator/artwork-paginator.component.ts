import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Custom paginator component for handling pagination.
 */
@Component({
  selector: 'app-artwork-paginator',
  templateUrl: './artwork-paginator.component.html',
  styleUrls: ['./artwork-paginator.component.scss']
})
export class ArtworkPaginatorComponent implements OnChanges {
  /**
   * Total number of items to paginate.ß
   */
  @Input() totalItems: number = 0;

  /**
   * Number of items to display per page.
   */
  @Input() itemsPerPage: number = 12;

  /**
   * Current active page number.
   */
  @Input() currentPage: number = 1;

  /**
   * Loading state to disable pagination buttons while fetching data.
   */
  @Input() loading: boolean = false;

  /**
   * Event emitted when the page changes.
   */
  @Output() pageChange = new EventEmitter<number>();

  /**
   * Total number of pages calculated from totalItems and itemsPerPage.
   */
  totalPages: number = 1;

  /**
   * Array of page numbers and ellipses for displaying pagination controls.
   */
  pages: (number | '...')[] = [];

  /**
   * Responds to changes in input properties and regenerates pagination pages if necessary.
   * @param changes - The changes in input properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage'] || changes['currentPage']) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.generatePages();
    }
  }

  /**
   * Generates the pagination pages array based on the current state.
   */
  generatePages(): void {
    this.pages = [];
    const maxPagesToShow = 5;
    const halfRange = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(this.currentPage - halfRange, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, this.totalPages);

    if (startPage > 1) {
      this.pages.push(1);
      if (startPage > 2) {
        this.pages.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }

    if (endPage < this.totalPages) {
      if (endPage < this.totalPages - 1) {
        this.pages.push('...');
      }
      this.pages.push(this.totalPages);
    }
  }

  /**
   * Sets the current page and emits a pageChange event.
   * @param page - The selected page number or ellipsis.
   */
  setPage(page: number | '...'): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  /**
   * Checks if the value is a number.
   * @param value - The value to check.
   * @returns True if the value is a number, false otherwise.
   */
  isNumber(value: number | '...'): boolean {
    return typeof value === 'number';
  }
}