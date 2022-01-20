import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogModule } from '@ngneat/dialog';
import { CategoryService } from '../../services/category.service';

import { CategoryViewComponent } from './category-view.component';

describe('CategoryViewComponent', () => {
  let component: CategoryViewComponent;
  let fixture: ComponentFixture<CategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule.forRoot()],
      declarations: [ CategoryViewComponent ],
      providers:[CategoryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
