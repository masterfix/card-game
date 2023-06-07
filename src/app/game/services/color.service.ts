import { Injectable } from '@angular/core';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors: Color[] = [
    new Color('red', 0xff0000),
    new Color('green', 0x00ff00),
    new Color('blue', 0x0000ff),
    new Color('yellow', 0xffff00),
    new Color('orange', 0xffa500),
    new Color('pink', 0xffc0cb),
  ];

  getRandomColor(): Color {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
