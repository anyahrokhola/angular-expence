import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PipeModule } from '../pipe/pipe.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [InputTextComponent, InputDateComponent, InputNumberComponent, InputSelectComponent],
  imports: [
    BrowserModule,   
    NgSelectModule, 
    PipeModule,
    SharedModule
  ],
  exports:[
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent
  ],
  providers: [
    
  ]
})
export class InputsModule { }
