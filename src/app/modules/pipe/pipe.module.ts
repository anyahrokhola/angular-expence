import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatPipe } from './time-format/time-format.pipe';
import { IconBackgroundColorPipe } from './icon-background-color/icon-background-color.pipe';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { DateDayPipe } from './date-day/date-day.pipe';

@NgModule({
  declarations: [TimeFormatPipe, IconBackgroundColorPipe, DateFormatPipe, DateDayPipe],
  imports: [CommonModule],
  providers: [],
  exports: [TimeFormatPipe, IconBackgroundColorPipe, DateFormatPipe, DateDayPipe],
})
export class PipeModule {}
