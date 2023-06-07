import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameShellComponent } from './game-shell/game-shell.component';
import { RankingComponent } from './ranking/ranking.component';



@NgModule({
  declarations: [
    GameShellComponent,
    RankingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
