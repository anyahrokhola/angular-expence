import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIconPickerComponent } from './category-icon-picker.component';

describe('CategoryIconPickerComponent', () => {
  let component: CategoryIconPickerComponent;
  let fixture: ComponentFixture<CategoryIconPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryIconPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIconPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
