import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceItemComponent } from './expence-item.component';

describe('ExpenceItemComponent', () => {
  let component: ExpenceItemComponent;
  let fixture: ComponentFixture<ExpenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenceItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceItemComponent);
    component = fixture.componentInstance;
    component.item = {
      name: 'test Name',
      price: 0,
      categoryId: -1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
