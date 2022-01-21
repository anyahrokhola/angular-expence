import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule, DialogRef } from '@ngneat/dialog';
import { ButtonModule } from 'src/app/modules/buttons/buttons.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { CategoryIconPickerComponent } from '../category-icon-picker/category-icon-picker.component';

import { AddCategoryComponent } from './add-category.component';

describe('AddCategoryComponent', () => {
  let component: AddCategoryComponent;
  let fixture: ComponentFixture<AddCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogModule.forRoot(),
        ModalModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AddCategoryComponent, CategoryIconPickerComponent],
      providers: [
        {
          provide: DialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
