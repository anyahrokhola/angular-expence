import { Action} from '@ngrx/store';
import { Expence } from 'src/app/interfaces/expence';

export enum ExpenceAction {
    AddExpence = '[Expence] Add expence',
    DeleteExpence = '[Expence] Delete expence',
    EditExpence = '[Expence] Edit expence'
}

export class AddExpence implements Action {
    readonly type = ExpenceAction.AddExpence;
  
    constructor(public expence: Omit<Expence, 'id'>) {}
}

export class DeleteExpence implements Action {
    readonly type = ExpenceAction.DeleteExpence;
  
    constructor(public expence: Expence) {}
}

export class EditExpence implements Action {
    readonly type = ExpenceAction.EditExpence;
  
    constructor(public expence: Expence, public newExpence: Partial<Expence>) {}
}

export type ExpenceUnion = AddExpence | DeleteExpence | EditExpence;