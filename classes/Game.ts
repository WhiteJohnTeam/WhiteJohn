import Card from "./Card";
import { PlayerType } from "./PlayerType";

export default class Game {
  deckId: string;
  playerHand: Card[];
  dealerHand: Card[];

  constructor(deckId?: string, playerH?: Card[], dealerH?: Card[]) {
      this.deckId = deckId;
      this.playerHand = playerH;
      this.dealerHand = dealerH;
  }

  Draw(card: Card, who: PlayerType.Player | PlayerType.Dealer): void {
    if (who == PlayerType.Player) { 
        this.playerHand.push(card);
    }
    else {
      this.dealerHand.push(card);
    }
  }

  toObject() {
    return {
      deckId: this.deckId,
    };
  }
}
