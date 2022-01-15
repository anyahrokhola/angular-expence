import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BtnIconComponent } from './components/btn-icon/btn-icon.component';
import { BtnNegativeComponent } from './components/btn-negative/btn-negative.component';
import { BtnPositiveComponent } from './components/btn-positive/btn-positive.component';


@NgModule({
  declarations: [
    BtnPositiveComponent,
    BtnNegativeComponent,
    BtnIconComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    BtnPositiveComponent,
    BtnNegativeComponent,
    BtnIconComponent
  ],
  providers: []
})
export class ButtonModule { }
