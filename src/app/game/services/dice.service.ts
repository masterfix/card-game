import { Injectable } from '@angular/core';
import { Color } from '../models/color';
import { ColorService } from './color.service';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  constructor(private readonly colorService: ColorService) {}

  roll(): Color {
    return this.colorService.getRandomColor();
  }
}
