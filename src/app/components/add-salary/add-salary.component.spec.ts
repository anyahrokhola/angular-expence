import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@ngneat/dialog';
import { ButtonModule } from 'src/app/modules/buttons/buttons.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';

import { AddSalaryComponent } from './add-salary.component';

describe('AddSalaryComponent', () => {
  let component: AddSalaryComponent;
  let fixture: ComponentFixture<AddSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalModule, ButtonModule],
      declarations: [AddSalaryComponent],
      providers: [
        {
          provide: DialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
