import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogModule, DialogRef } from '@ngneat/dialog';

import { AddExpenceComponent } from './add-expence.component';

describe('AddExpenceComponent', () => {
  let component: AddExpenceComponent;
  let fixture: ComponentFixture<AddExpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule.forRoot()],
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
