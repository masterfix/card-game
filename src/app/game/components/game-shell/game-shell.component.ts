import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GAME_PHASE, GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-shell',
  templateUrl: './game-shell.component.html',
  styleUrls: ['./game-shell.component.scss'],
})
export class GameShellComponent implements OnInit {
  showIntro = false;
  showMainLoop = false;
  showRanking = false;

  constructor(
    private readonly gameService: GameService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.gameService.phase$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((phase) => {
        this.setShowFlagsFromPhase(phase);
      });
  }

  private setShowFlagsFromPhase(phase: GAME_PHASE) {
    switch (phase) {
      case GAME_PHASE.MAIN_LOOP:
        this.showIntro = false;
        this.showMainLoop = true;
        this.showRanking = false;
        break;
      case GAME_PHASE.RANKING:
        this.showIntro = false;
        this.showMainLoop = false;
        this.showRanking = true;
        break;
      default:
        // intro
        this.showIntro = true;
        this.showMainLoop = false;
        this.showRanking = false;
    }
  }
}
