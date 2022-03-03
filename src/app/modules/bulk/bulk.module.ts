import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxBulkComponent } from './components/check-box-bulk/check-box-bulk.component';

@NgModule({
  declarations: [
    CheckBoxBulkComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [CheckBoxBulkComponent],
})
export class BulkModule {}
