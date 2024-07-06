import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ArtworkListComponent } from './artwork-list.component';
import * as fromArtwork from '../../store/reducers/artwork.reducer';
import * as ArtworkActions from '../../store/actions/artwork.actions';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkListComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromArtwork.artworkFeatureKey, fromArtwork.reducer)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    jest.spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch artworks on init', () => {
    const action = ArtworkActions.loadArtworks({ page: 1 });
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should apply filter and sort on changes', () => {
    component.filter = ['style1'];
    component.sort = 'title';
    component.ngOnChanges({
      filter: new SimpleChange(null, component.filter, true),
      sort: new SimpleChange(null, component.sort, true)
    });
    const action = ArtworkActions.filterArtworks({ filter: component.filter, sort: component.sort });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should handle page change correctly', () => {
    const pageIndex = 2; // Example page index
    component.onPageChange(pageIndex);
    expect(store.dispatch).toHaveBeenCalledWith(ArtworkActions.loadArtworks({ page: pageIndex }));
  });
});