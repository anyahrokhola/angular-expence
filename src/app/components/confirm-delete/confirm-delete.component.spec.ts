import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogModule, DialogRef } from '@ngneat/dialog';
import { ButtonModule } from 'src/app/modules/buttons/buttons.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';

import { ConfirmDeleteComponent } from './confirm-delete.component';

describe('ConfirmDeleteComponent', () => {
  let component: ConfirmDeleteComponent;
  let fixture: ComponentFixture<ConfirmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule.forRoot(), ModalModule, ButtonModule],
      declarations: [ ConfirmDeleteComponent ],
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
    fixture = TestBed.createComponent(ConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
