import { Component, Input, OnChanges} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnChanges {
  @Input() errors: ValidationErrors | null;
  public error: string | null = null;

  constructor() { }

  ngOnChanges(): void {
    const keys = this.errors ? Object.keys(this.errors) : [];
    this.error = keys[0];
  }
}
