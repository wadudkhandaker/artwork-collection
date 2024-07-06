import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworksComponent } from './artworks.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ArtworksComponent', () => {
  let component: ArtworksComponent;
  let fixture: ComponentFixture<ArtworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworksComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update filter when filterChanged is called', () => {
    const filter = ['Style 1'];
    component.filterChanged(filter);
    expect(component.filter).toEqual(filter);
  });

  it('should update sort when sortChanged is called', () => {
    const sort = 'artist_display';
    component.sortChanged(sort);
    expect(component.sort).toEqual(sort);
  });
});