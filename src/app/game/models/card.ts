import { COLOR } from '../services/color.service';

export class Card {
  visible = false;

  constructor(readonly color: COLOR) {}

  makeVisible() {
    this.visible = true;
  }
}
