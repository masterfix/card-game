import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameShellComponent } from './components/game-shell/game-shell.component';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
  declarations: [GameShellComponent, RankingComponent],
  imports: [CommonModule],
})
export class GameModule {}
