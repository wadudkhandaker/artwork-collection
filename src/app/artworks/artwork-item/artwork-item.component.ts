import { Component, Input } from '@angular/core'
import { Artwork } from '../models/artwork.model';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.scss']
})

export class ArtworkItemComponent {
  @Input() artwork!: Artwork;
}