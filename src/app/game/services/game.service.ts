import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card';
import { Color } from '../models/color';
import { Player } from '../models/player';
import { ColorService } from './color.service';
import { DiceService } from './dice.service';

export enum GAME_PHASE {
  INTRO,
  MAIN_LOOP,
  RANKING,
}

const PLAYER_NAMES = ['Alice', 'Bob', 'Carol', 'Mario'];
const CARD_COUNT = 5;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  phase$: Observable<GAME_PHASE>;

  players: { player: Player; cards: Card[] }[] = [];

  private phaseSubject: BehaviorSubject<GAME_PHASE>;
  private round = 1;
  private currentPlayerIndex = 0;

  constructor(
    private readonly colorService: ColorService,
    private readonly diceService: DiceService
  ) {
    this.phaseSubject = new BehaviorSubject<GAME_PHASE>(GAME_PHASE.INTRO);
    this.phase$ = this.phaseSubject.asObservable();

    this.initializePlayers();
  }

  getRound(): number {
    return this.round;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  startGame() {
    this.phaseSubject.next(GAME_PHASE.MAIN_LOOP);
  }

  roll(): Color {
    const diceResult = this.diceService.roll();

    const player = this.getCurrentPlayer();
    player.cards.forEach((card) => {
      if (card.color.hexValue === diceResult.hexValue) {
        card.makeVisible();
      }
    });

    if (this.hasPlayerWon()) {
      this.phaseSubject.next(GAME_PHASE.RANKING);
    }

    return diceResult;
  }

  nextPlayer() {
    if (this.currentPlayerIndex < this.players.length - 1) {
      this.currentPlayerIndex++;
    } else {
      this.currentPlayerIndex = 0;
      this.round++;
    }
  }

  private initializePlayers() {
    for (const playerName of PLAYER_NAMES) {
      const cards: Card[] = [];
      while (cards.length < CARD_COUNT) {
        const color = this.colorService.getRandomColor();
        if (
          cards.findIndex((card) => card.color.hexValue === color.hexValue) ===
          -1
        ) {
          cards.push(new Card(color));
        }
      }
      this.players.push({
        player: new Player(playerName),
        cards: cards,
      });
    }
  }

  private hasPlayerWon(): boolean {
    return (
      this.getCurrentPlayer().cards.findIndex(
        (card) => card.visible === false
      ) === -1
    );
  }
}
