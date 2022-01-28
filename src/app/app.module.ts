import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DialogModule } from '@ngneat/dialog';

import { AppComponent } from './app.component';
import { AddSalaryComponent } from './components/add-salary/add-salary.component';
import { AddExpenceComponent } from './components/add-expence/add-expence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceComponent } from './components/balance/balance.component';
import { ExpenceListComponent } from './components/expence-list/expence-list.component';
import { ExpenceItemComponent } from './components/expence-item/expence-item.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { ExpenceComponent } from './components/expence/expence.component';
import { CategoryModule } from './modules/category/category.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from './modules/modal/modal.module';
import { ButtonModule } from './modules/buttons/buttons.module';
import { SharedModule } from './modules/shared/shared.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TimeFormatPipe } from './pipes/time-format/time-format.pipe';
import { InputsModule } from './modules/inputs/inputs.module';
import { InputTextComponent } from './modules/inputs/components/input-text/input-text.component';
import { IconBackgroundColorPipe } from './pipes/icon-background-color/icon-background-color.pipe';

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
    DateFormatPipe,
    TimeFormatPipe,
  ],
  imports: [
    BrowserModule,
    DialogModule.forRoot({
      minHeight: 300,
      width: 600,
      maxHeight: '80%',
    }),
    FormsModule,
    ReactiveFormsModule,
    CategoryModule,
    NgSelectModule,
    ModalModule,
    ButtonModule,
    SharedModule,
    InputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
