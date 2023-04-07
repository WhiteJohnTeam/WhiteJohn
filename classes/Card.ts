export default class Card {
  value: number;
  suit: string;
  image: string;

  constructor(value: number, suit: string) {
    this.value = value;
    this.suit = suit;
    this.image = `https://deckofcardsapi.com/static/img/${this.SuitToImage()}${suit.charAt(0).toUpperCase()}.svg`;
  }

  
  GetRealValue() : number {
    if(this.value == "ACE")
      return 1;
    else if(this.value == "KING" || this.value == "QUEEN" || this.value == "JACK")
      return 10;
    return this.value;
  }

  SuitToImage(): string {
    switch (this.value.toString()) {
      case "10":
        return "0"
      case "KING":
        return "K"
      case "QUEEN":
        return "Q"
      case "JACK":
        return "J"
      case "ACE":
        return "A"
      default:
        return this.value.toString();
    }
  }
  
}
