import { Injectable } from '@angular/core';

export enum COLOR {
  RED = 0xff0000,
  BLUE = 0x0000ff,
  GREEN = 0x00ff00,
  YELLOW = 0xffff00,
  ORANGE = 0xffa500,
  PINK = 0xffc0cb,
}

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  getRandomColor(): COLOR {
    const colorCount = Object.keys(COLOR).length;
    return Math.floor(Math.random() * colorCount);
  }
}
