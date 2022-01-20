import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@ngneat/dialog';

import { CategoryIconsComponent } from './category-icons.component';

describe('CategoryIconComponent', () => {
  let component: CategoryIconsComponent;
  let fixture: ComponentFixture<CategoryIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryIconsComponent ],
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
    fixture = TestBed.createComponent(CategoryIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
