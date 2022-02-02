import { Component,OnInit} from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
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
  
  constructor(private dialog: DialogService, public ref: DialogRef, public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  openAddCategory(){
    this.dialog.open(AddCategoryComponent);
  }
  
}
