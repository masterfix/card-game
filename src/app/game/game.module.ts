import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsComponent } from './components/cards/cards.component';
import { GameShellComponent } from './components/game-shell/game-shell.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainLoopComponent } from './components/main-loop/main-loop.component';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    GameShellComponent,
    RankingComponent,
    IntroComponent,
    MainLoopComponent,
    CardsComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [GameShellComponent],
})
export class GameModule {}
