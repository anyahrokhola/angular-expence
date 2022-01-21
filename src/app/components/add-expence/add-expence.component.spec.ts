import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogModule, DialogRef } from '@ngneat/dialog';
import { ButtonModule } from 'src/app/modules/buttons/buttons.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';

import { AddExpenceComponent } from './add-expence.component';

describe('AddExpenceComponent', () => {
  let component: AddExpenceComponent;
  let fixture: ComponentFixture<AddExpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule.forRoot(), ModalModule, ButtonModule, NgSelectModule],
      declarations: [AddExpenceComponent],
      providers: [
        {
          provide: DialogRef,
          useValue: {},
        },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
