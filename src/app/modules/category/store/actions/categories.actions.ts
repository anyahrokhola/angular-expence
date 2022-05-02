import { Action} from '@ngrx/store';
import { Category } from '../../interfaces/category';

export enum CategoryAction {
    AddCategory = '[Category] Add category',
    DeleteCategory = '[Category] Delete category',
    EditCategory = '[Category] Edit category'
}

export class AddCategory implements Action {
    readonly type = CategoryAction.AddCategory;
  
    constructor(public category: Omit<Category, 'id'>) {}
}

export class DeleteCategory implements Action {
    readonly type = CategoryAction.DeleteCategory;
  
    constructor(public category: Category) {}
}

export class EditCategory implements Action {
    readonly type = CategoryAction.EditCategory;
  
    constructor(public category: Category, public newCategory: Partial<Category>) {}
}

export type CategoryUnion = AddCategory | DeleteCategory | EditCategory;