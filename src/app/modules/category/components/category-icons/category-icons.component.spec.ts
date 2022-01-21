import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { CategoryColorComponent } from '../category-color/category-color.component';

import { CategoryIconsComponent } from './category-icons.component';

describe('CategoryIconComponent', () => {
  let component: CategoryIconsComponent;
  let fixture: ComponentFixture<CategoryIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [CategoryIconsComponent, CategoryColorComponent],
      providers: [
        {
          provide: DialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
