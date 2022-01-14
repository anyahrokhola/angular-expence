import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DialogModule } from '@ngneat/dialog';

import { AppComponent } from './app.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddExpenceComponent } from './add-expence/add-expence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceComponent } from './balance/balance.component';
import { ExpenceListComponent } from './expence-list/expence-list.component';
import { ExpenceItemComponent } from './expence-item/expence-item.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ExpenceComponent } from './expence/expence.component';
import { CategoryModule } from './modules/category/category.module'
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AddSalaryComponent,
    AddExpenceComponent,
    BalanceComponent,
    ExpenceListComponent,
    ExpenceItemComponent,
    ConfirmDeleteComponent,
    ExpenceComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    CategoryModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
