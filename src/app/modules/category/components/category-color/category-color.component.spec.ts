import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@ngneat/dialog';

import { CategoryColorComponent } from './category-color.component';

describe('CategoryColorComponent', () => {
  let component: CategoryColorComponent;
  let fixture: ComponentFixture<CategoryColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryColorComponent ],
      providers: [
        {
          provide: DialogRef,
          useValue: {},
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
