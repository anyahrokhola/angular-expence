import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DialogModule } from '@ngneat/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { InputsModule } from './modules/inputs/inputs.module';
import { PipeModule } from './modules/pipe/pipe.module';
import { SetDateComponent } from './components/set-date/set-date.component';
import { BulkModule } from './modules/bulk/bulk.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { expencesReducer } from './store/reducers/expence.reducer';

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
		SetDateComponent,
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
		PipeModule,
		BulkModule,
		DragDropModule,
		StoreModule.forRoot({ expences: expencesReducer }, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
