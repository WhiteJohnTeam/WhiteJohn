export default class Game {
    constructor(deckId) {
        console.warn("I am inside the constructor!")
        try {
            this.deckId = deckId;
            this.playerHand = [];
            this.dealerHand = [];
          } catch (error) {
            console.error(error);
          }
    }

    Draw(card, who) {
        if(who == 'player')
            this.playerHand.push(card);
        else
            this.dealerHand.push(card);
    }

    toObject() {
        return {
          deckId: this.deckId,
        };
    }
}