import { Action} from '@ngrx/store';
import { Expence } from 'src/app/interfaces/expence';

export enum ExpenceAction {
    AddExpence = '[Expence] Add expence',
    DeleteExpence = '[Expence] Delete expence',
    EditExpence = '[Expence] Edit expence',
    CheckExpence = '[Expence] Check expence',
    CheckAllExpences = '[Expence] Check all expences',
}

export interface EditExpenceData extends Action {
    expence: Expence | Expence[],
    newExpence: Partial<Expence>,
}

export class AddExpence implements Action {
    public readonly type = ExpenceAction.AddExpence;
  
    constructor(public readonly expence: Omit<Expence, 'id'>) {}
}

export class DeleteExpence implements Action {
    public readonly type = ExpenceAction.DeleteExpence;
  
    constructor(public readonly expence: Expence | Expence[]) {}
}

export class EditExpence implements Action, EditExpenceData {
    public readonly type = ExpenceAction.EditExpence;
  
    constructor(public readonly expence: Expence | Expence[], public readonly newExpence: Partial<Expence>) {}
}

export class CheckExpence implements Action, EditExpenceData{
    public readonly type = ExpenceAction.CheckExpence;

    public readonly newExpence: Partial<Expence> = { isChecked: this.checked }
  
    constructor(public readonly expence: Expence | Expence[], private readonly checked: boolean) {}
}

export class CheckAllExpences implements Action{
    public readonly type = ExpenceAction.CheckAllExpences;
  
    constructor(public readonly isAllChecked: boolean) {}
}

export type ExpenceUnion = AddExpence | DeleteExpence | EditExpence | CheckExpence | CheckAllExpences;