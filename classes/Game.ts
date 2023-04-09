/**
 * Represents the game logic of blackjack. 
 * The deckId is used to fetch the cards from the api, from a unique deck,
 * leaving the deck's logic for the api to handle.
 */

import Card from "./Card";
import { PlayerType } from "./PlayerType";

export default class Game {
  deckId: string;
  playerHand: Card[];
  dealerHand: Card[];
  dealerRevealed: boolean;
  gameEnded: boolean;
  whosTurn: PlayerType;
  gameWinner: PlayerType;
  playerTotalPoints: number;
  dealerTotalPoints: number;
  
  constructor(deckId?: string, playerH?: Card[], dealerH?: Card[]) {
      this.deckId = deckId;
      this.playerHand = playerH;
      this.dealerHand = dealerH;
      this.dealerRevealed = false;
  }

  Draw(card: Card, who: PlayerType.Player | PlayerType.Dealer): void {
    if (who == PlayerType.Player) { 
        this.playerHand.push(card);
    }
    else {
      this.dealerHand.push(card);
    }
  }

  Stand() : void {
    this.whosTurn = PlayerType.Player;
  }

  Reveal() : void {
    this.dealerRevealed = true;
  }

    // might be useless
  ChangeTurn() : void {
    this.whosTurn = (this.whosTurn === PlayerType.Dealer) ? PlayerType.Player : PlayerType.Dealer;
  }

  CalculateHandValue = (hand: Card[]) => {
    let value = 0;
    let hasAce = false;

    for (let card of hand) {
      // sommer la valeur de chaque carte
      value += Math.min(card.GetRealValue(), 10);

      // si carte c'est un ace set hasAce
      if (card.GetRealValue() == 1) {
        hasAce = true;
      }
    }
    // si ace et ne bust pas la main, ajouter
    if (hasAce && value + 10 <= 21) {
      value += 10;
    }

    return value;
  }

  DetermineWinner() {
    const playerPoints = this.CalculateHandValue(this.playerHand);
    const dealerPoints = this.CalculateHandValue(this.dealerHand);

    if (playerPoints > 21) {
      this.gameWinner = PlayerType.Dealer;
    } else if (dealerPoints > 21) {
      this.gameWinner = PlayerType.Player;
    } else if (dealerPoints > playerPoints) {
      this.gameWinner = PlayerType.Dealer;
    } else if (playerPoints > dealerPoints) {
      this.gameWinner = PlayerType.Player;
    } else {
      this.gameWinner = null;
    }
    this.gameEnded = true;
  }
  
   RestartGame() {
    // Reset the player and dealer hands
    this.playerHand = [];
    this.dealerHand = [];

    this.dealerRevealed = false;
    this.whosTurn = PlayerType.Player;
    this.playerTotalPoints = 0;
    this.dealerTotalPoints = 0;
  };

}
