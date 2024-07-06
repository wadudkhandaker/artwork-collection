import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworkItemComponent } from './artwork-item.component';
import { Artwork } from '../models/artwork.model';

describe('ArtworkItemComponent', () => {
  let component: ArtworkItemComponent;
  let fixture: ComponentFixture<ArtworkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkItemComponent);
    component = fixture.componentInstance;
    component.artwork = {
      id: 1,
      title: 'Artwork Title',
      artist_display: 'Artist Name',
      date_start: 1900,
      date_end: 1910,
      place_of_origin: 'Origin Place',
      medium_display: 'Medium',
      style_titles: ['Style1'],
      image_id: 'image-id',
      thumbnail: {
        lqip: '',
        width: 0,
        height: 0,
        alt_text: 'Image Alt Text'
      },
      material_titles: ['oil paint (paint)', 'canvas, paint, painting']
    } as Artwork; // Provide a mock artwork object
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display artwork details correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Artwork Title');
    expect(compiled.querySelector('p').textContent).toContain('Artist Name');
  });
});