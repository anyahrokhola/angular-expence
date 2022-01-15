import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMainComponent } from './components/modal-main/modal-main.component';

@NgModule({
  declarations: [
    ModalMainComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports:[
    ModalMainComponent
  ]
})
export class ModalModule { }
