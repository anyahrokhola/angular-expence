import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  colorChange(value: number): Boolean {
    if (value < 0) {
      return true;
    } else return false;
  }
}
