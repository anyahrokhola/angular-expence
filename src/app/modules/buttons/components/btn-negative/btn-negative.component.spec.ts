import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNegativeComponent } from './btn-negative.component';

describe('BtnNegativeComponent', () => {
  let component: BtnNegativeComponent;
  let fixture: ComponentFixture<BtnNegativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnNegativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
