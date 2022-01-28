import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: Date): string {
    const hour = value.getHours();
    const minute = value.getMinutes();

    return `${hour}:${minute}`;
  }

}
