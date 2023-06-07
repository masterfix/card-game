import { Component } from '@angular/core';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  faCrwon = faCrown;

  constructor(readonly gameService: GameService) {}
}
