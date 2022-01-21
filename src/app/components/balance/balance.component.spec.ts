import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count balance if no expence', () => {
    component.expences = [];
    component.budget = 10;
    component.ngOnChanges();
    expect(component.balance).toEqual(10);
  });

  it('should count balance if expence exist', () => {
    component.expences = [{ name: 'name', price: 5 , date: new Date()}];
    component.budget = 10;
    component.ngOnChanges();
    expect(component.balance).toEqual(5);
  });

  it('should count balance if two expences exist', () => {
    component.expences = [
      { name: 'name', price: 5, date: new Date() },
      { name: 'name2', price: 3, date: new Date()},
    ];
    component.budget = 10;
    component.ngOnChanges();
    expect(component.balance).toEqual(2);
  });

  it('should count balance if new expences passed', () => {
    component.expences = [{ name: 'name', price: 5, date: new Date() }];
    component.budget = 10;
    component.ngOnChanges();
    component.expences = [{ name: 'name', price: 5, date: new Date() }, {name: '2', price: 2, date: new Date()}];
    component.ngOnChanges();
    expect(component.balance).toEqual(3);
  });
});
