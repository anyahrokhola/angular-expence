import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/modules/category/interfaces/category';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { Expence } from '../../interfaces/expence';

@Component({
  selector: 'app-expence-item',
  templateUrl: './expence-item.component.html',
  styleUrls: ['./expence-item.component.scss'],
})
export class ExpenceItemComponent implements OnInit {
  @Input() item: Expence;

  @Output() removeClick = new EventEmitter<Expence>();
  @Output() editClick = new EventEmitter<Expence>();

  public categories: Category[] = [];

  constructor(public categoryService: CategoryService) {}
  

  ngOnChanges(): void {
    
  } 

  ngOnInit(): void {}

  // getCategoriesName(id: number){
  //   this.categories = this.categoryService.categories;
  //   const category = this.categories.find(item => item.id === id);
  //   return category.name;

  // }

  removeItem() {
    this.removeClick.emit(this.item);
  }

  editItem() {
    this.editClick.emit(this.item);
  }
}
