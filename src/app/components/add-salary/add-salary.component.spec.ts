import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@ngneat/dialog';

import { AddSalaryComponent } from './add-salary.component';

describe('AddSalaryComponent', () => {
  let component: AddSalaryComponent;
  let fixture: ComponentFixture<AddSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalaryComponent ],
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
    fixture = TestBed.createComponent(AddSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
