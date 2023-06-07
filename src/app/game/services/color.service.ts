import { Injectable } from '@angular/core';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors: Color[] = [
    new Color('Rot', '#ff0000'),
    new Color('Grün', '#00ff00'),
    new Color('Blau', '#0000ff'),
    new Color('Gelb', '#ffff00'),
    new Color('Orange', '#ffa500'),
    new Color('Pink', '#ffc0cb'),
  ];

  getRandomColor(): Color {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
