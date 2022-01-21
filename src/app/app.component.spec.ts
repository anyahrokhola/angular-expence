import { TestBed } from '@angular/core/testing';
import { DialogModule } from '@ngneat/dialog';
import { AppComponent } from './app.component';
import { ExpenceComponent } from './components/expence/expence.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule.forRoot()],
      declarations: [AppComponent, ExpenceComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
