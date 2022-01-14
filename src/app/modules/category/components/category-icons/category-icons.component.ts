import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { icons } from '../../constants/icons.const';

@Component({
  selector: 'app-category-icons',
  templateUrl: './category-icons.component.html',
  styleUrls: ['./category-icons.component.scss']
})
export class CategoryIconsComponent implements OnInit {

  public readonly icons = icons;
  constructor(public ref: DialogRef) { }

  ngOnInit(): void {
  }

  clickIcon(iconName: string){
    console.log(this.ref.close(iconName));
    console.log(iconName);
  }
}
