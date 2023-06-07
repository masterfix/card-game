import { Color } from './color';

export class Card {
  visible = false;

  constructor(readonly color: Color) {}

  makeVisible() {
    this.visible = true;
  }
}
