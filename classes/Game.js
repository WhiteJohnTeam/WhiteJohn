class Game {
    constructor(deckId) {
        this.deckId = deckId;
        this.playerHand = [];
        this.dealerHand = [];
    }

    Draw(card, who) {
        if(who == 'player')
            this.playerHand.push(card);
        else
            this.dealerHand.push(card);
    }
}