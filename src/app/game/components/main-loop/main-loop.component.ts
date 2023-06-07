import { Component } from '@angular/core';
import { Color } from '../../models/color';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-main-loop',
  templateUrl: './main-loop.component.html',
  styleUrls: ['./main-loop.component.scss'],
})
export class MainLoopComponent {
  diceResult: Color | null = null;
  diceDisabled = false;

  constructor(readonly gameService: GameService) {}

  rollDice() {
    this.diceDisabled = true;
    this.diceResult = this.gameService.roll();
  }

  nextPlayer() {
    this.gameService.nextPlayer();
    this.diceDisabled = false;
    this.diceResult = null;
  }
}
