import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryIconsComponent } from './components/category-icons/category-icons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryIconPickerComponent } from './components/category-icon-picker/category-icon-picker.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { ModalModule } from '../modal/modal.module';
import { ButtonModule } from '../buttons/buttons.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryColorComponent } from './components/category-color/category-color.component';
import { PipeModule } from '../pipe/pipe.module';
import { InputsModule } from '../inputs/inputs.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { categoriesReducer } from './store/reducers/categories.reducer';

@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryListComponent,
    CategoryItemComponent,
    CategoryIconsComponent,
    CategoryIconPickerComponent,
    CategoryViewComponent,
    CategoryColorComponent,
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    ModalModule,
    ButtonModule,
    SharedModule,
    PipeModule,
    InputsModule,
    StoreModule.forFeature('categories', categoriesReducer),
		EffectsModule.forFeature([]),
  ],
  providers: [],
  exports:[
    CategoryViewComponent,
  ]
})
export class CategoryModule { }
