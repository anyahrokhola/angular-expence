import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPositiveComponent } from './btn-positive.component';

describe('BtnPositiveComponent', () => {
  let component: BtnPositiveComponent;
  let fixture: ComponentFixture<BtnPositiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPositiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
