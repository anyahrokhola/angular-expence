import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatPipe } from './time-format/time-format.pipe';
import { IconBackgroundColorPipe } from './icon-background-color/icon-background-color.pipe';
import { DateFormatPipe } from './date-format/date-format.pipe';

@NgModule({
  declarations: [TimeFormatPipe, IconBackgroundColorPipe, DateFormatPipe],
  imports: [CommonModule],
  providers: [],
  exports: [TimeFormatPipe, IconBackgroundColorPipe, DateFormatPipe],
})
export class PipeModule {}
