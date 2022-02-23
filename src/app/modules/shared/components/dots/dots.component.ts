import { Component, Input } from '@angular/core';
import { DortOption } from '../../interfaces/dort-option';


@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss']
})
export class DotsComponent {
  @Input() options: DortOption[] = [];
  public isOpen: boolean = false;

  onItemClick(option: DortOption){
    option.action();
    this.isOpen = false;
  }
}
