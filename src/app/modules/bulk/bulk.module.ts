import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxBulkComponent } from './components/check-box-bulk/check-box-bulk.component';
import { InputsModule } from '../inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [CheckBoxBulkComponent],
	imports: [CommonModule, InputsModule, ReactiveFormsModule, StoreModule.forFeature('checkeds', [])],
	providers: [],
	exports: [CheckBoxBulkComponent],
})
export class BulkModule {}
