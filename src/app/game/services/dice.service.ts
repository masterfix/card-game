import { Injectable } from '@angular/core';
import { COLOR, ColorService } from './color.service';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor(private readonly colorService: ColorService) { }

  roll(): COLOR {
    return this.colorService.getRandomColor(;
  }
}
