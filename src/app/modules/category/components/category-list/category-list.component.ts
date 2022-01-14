import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public icon: string = "";
  public name: string = "";
  public count: number = 0;

  @Output() remove = new EventEmitter<number>();

  constructor(private dialog: DialogService, public ref: DialogRef, public categoryService: CategoryService) { }

  ngOnInit(): void {
    console.log(this.categoryService.categories);
  }

  openAddCategory(){
    const dialogRef = this.dialog.open(AddCategoryComponent);
  }
}
