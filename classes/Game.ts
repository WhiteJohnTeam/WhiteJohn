export default class Game {
  deckId: string;
  playerHand: Card[];
  dealerHand: Card[];

  constructor(deckId: string) {
    console.warn('I am inside the constructor!');
    try {
      this.deckId = deckId;
      this.playerHand = [];
      this.dealerHand = [];
    } catch (error) {
      console.error(error);
    }
  }

  Draw(card: Card, who: 'player' | 'dealer') {
    if (who == 'player') this.playerHand.push(card);
    else this.dealerHand.push(card);
  }

  toObject() {
    return {
      deckId: this.deckId,
    };
  }
}
