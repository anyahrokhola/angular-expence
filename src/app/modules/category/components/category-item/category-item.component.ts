import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() itemCategory: Category;

  @Output() removeClick = new EventEmitter<Category>();
  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    this.removeClick.emit(this.itemCategory)
  }

}
