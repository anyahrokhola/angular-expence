import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemComponent } from './category-item.component';

describe('CategoryItemComponent', () => {
  let component: CategoryItemComponent;
  let fixture: ComponentFixture<CategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemComponent);
    component = fixture.componentInstance;
    component.itemCategory = {
      id: -1,
      name: 'test Category',
      icon: 'ri-brush-2-line',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
