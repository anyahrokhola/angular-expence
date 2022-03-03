import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxBulkComponent } from './check-box-bulk.component';

describe('CheckBoxBulkComponent', () => {
  let component: CheckBoxBulkComponent;
  let fixture: ComponentFixture<CheckBoxBulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxBulkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
