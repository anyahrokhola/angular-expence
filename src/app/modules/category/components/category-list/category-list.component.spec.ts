import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogModule, DialogRef } from '@ngneat/dialog';
import { ButtonModule } from 'src/app/modules/buttons/buttons.module';

import { CategoryListComponent } from './category-list.component';

describe('ListCategoryComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule.forRoot(), ButtonModule],
      declarations: [CategoryListComponent],
      providers: [
        {
          provide: DialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
