import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ArtworkPaginatorComponent } from './artwork-paginator.component';
import { SimpleChange } from '@angular/core';

describe('CustomPaginatorComponent', () => {
  let component: ArtworkPaginatorComponent;
  let fixture: ComponentFixture<ArtworkPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkPaginatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total pages correctly', () => {
    component.totalItems = 50;
    component.itemsPerPage = 10;
    component.ngOnChanges({
      totalItems: new SimpleChange(null, component.totalItems, false),
      itemsPerPage: new SimpleChange(null, component.itemsPerPage, false)
    });
    fixture.detectChanges();
    expect(component.totalPages).toBe(5);
  });

  it('should emit pageChange event when page is changed', () => {
    jest.spyOn(component.pageChange, 'emit');
    component.setPage(1);
    expect(component.pageChange.emit).toHaveBeenCalledWith(1);
  });

  it('should disable previous button on the first page', () => {
    component.currentPage = 1;
    fixture.detectChanges();
    const prevButton = fixture.debugElement.query(By.css('#prev-page')).nativeElement;
    expect(prevButton.disabled).toBe(true);
  });

});