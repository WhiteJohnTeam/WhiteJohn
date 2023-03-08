export default class Card {
    value: number;
    suit: string;
    image: string;
  
    constructor(value: number, suit: string, image: string) {
      this.value = value;
      this.suit = suit;
      this.image = image;
    }

    toObject() {
      return {
        value : this.value, 
        suit : this.suit
      }
    }

    toString() {
      const suitSymbol = {
        "C": "♣",&
        "D": "♦",
        "H": "♥",
        "S": "♠",
      }[this.suit];
      const valueString = {
        1: "Ace",
        11: "Jack",
        12: "Queen",
        13: "King",
      }[this.value] || this.value.toString();
    
      return `${valueString} of ${suitSymbol}`;
    }
}
 