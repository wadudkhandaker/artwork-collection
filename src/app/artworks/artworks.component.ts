import { Component } from '@angular/core';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.scss']
})
export class ArtworksComponent {
  filter: string[] = [];
  sort: string = '';

  filterChanged(selectedStyles: string[]): void {
    this.filter = selectedStyles;
  }

  sortChanged(sort: string): void {
    this.sort = sort;
  }
}