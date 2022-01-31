import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    const year = value.getFullYear();
    const month = this.getMonthName(value.getMonth());
    const day = value.getDate();
     

    if(this.isToday(value)) return `Today`;
    if(this.isYestarday(value)) return `Yestarday` ;
    
    return `${day} ${month} ${year}`;
  }

  private getMonthName(month: number): string {
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return '';
    }
  }

  private getDayName(day: number): string{
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return '';
    }
    
  }

  private isToday(date: Date): boolean {
    return this.isEqual(date, new Date());
  }

  private isYestarday(date: Date): boolean {
    const dayInMillisecond = 24 * 60 * 60 * 1000;
    const yestarday = new Date();
    yestarday.setTime(yestarday.getTime() - dayInMillisecond);

    return this.isEqual(date, yestarday);
  
  }

  private isEqual(date1: Date, date2: Date): boolean {
    const clearDate1 = new Date(date1);
    clearDate1.setHours(0, 0, 0, 0);

    const clearDate2 = new Date(date2);
    clearDate2.setHours(0, 0, 0, 0);

    return (
      clearDate1.getDate() === clearDate2.getDate() &&
      clearDate1.getMonth() === clearDate2.getMonth() &&
      clearDate1.getFullYear() === clearDate2.getFullYear()
    );
  }
}
