import { Pipe, PipeTransform } from '@angular/core';
import { backgroundColors } from 'src/app/modules/category/constants/colors.const';

@Pipe({
  name: 'iconBackgroundColor',
})
export class IconBackgroundColorPipe implements PipeTransform {
  transform(value: string): string {
    const background = backgroundColors[value];

    if (background) {
      return background;
    }
    
    return '#eee';
  }
}
