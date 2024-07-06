import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterSortFormComponent } from './filter-sort-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('FilterSortFormComponent', () => {
  let component: FilterSortFormComponent;
  let fixture: ComponentFixture<FilterSortFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterSortFormComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        NoopAnimationsModule
      ],
      providers: [
        provideMockStore({ initialState: { artwork: { styles: { 'Style 1': 1, 'Style 2': 2 } } } })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterSortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filterChange event when filter changes', () => {
    jest.spyOn(component.filterChange, 'emit');
    component.selectedFilters = ['Style 1'];
    component.onFilterChange();

    expect(component.filterChange.emit).toHaveBeenCalledWith(['Style 1']);
  });

  it('should emit sortChange event when sort option changes', () => {
    jest.spyOn(component.sortChange, 'emit');
    component.selectedSort = 'artist_display';
    component.onSortChange();

    expect(component.sortChange.emit).toHaveBeenCalledWith('artist_display');
  });

  it('should display style options', () => {
    fixture.detectChanges();
    const filterSelect = fixture.debugElement.query(By.css('#filter-select'));
    filterSelect.nativeElement.click();
    fixture.detectChanges();
  
    const options = fixture.debugElement.queryAll(By.css('mat-option'));
  
    expect(options.length).toBe(2);
    expect(options[0].nativeElement.textContent.trim()).toBe('Style 1 (1)');
    expect(options[1].nativeElement.textContent.trim()).toBe('Style 2 (2)');
  });

  it('should display sort options', () => {
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('#sort-select'));
    select.nativeElement.click();
    fixture.detectChanges();
    
    const options = fixture.debugElement.queryAll(By.css('mat-option'));
    
    expect(options.length).toBe(3);
    expect(options[0].nativeElement.textContent.trim()).toBe('Title');
    expect(options[1].nativeElement.textContent.trim()).toBe('Artist');
    expect(options[2].nativeElement.textContent.trim()).toBe('Date');
  });
});