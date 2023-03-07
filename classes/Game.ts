import { useEffect, useState } from "react";
import Card from "./Card";
import { PlayerType } from "./PlayerType";

export default class Game {
  deckId: string;
  playerHand: Card[];
  dealerHand: Card[];
  dealerRevealed: boolean;

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

  Reveal() {
    this.dealerRevealed = true;
  }

  toObject() {
    return {
      deckId: this.deckId,
    };
  }
}

// const [gameOver, setGameOver] = useState(false);
// const [turn, setTurn] = useState(PlayerType.Player);
// const [winner, setWinner] = useState("");


// const stand = () => {
//   setTurn(PlayerType.Dealer);
// };

// const calculateHandValue = (hand: Card[]) => {
//     let value = 0;
//     let hasAce = false;
//     for (let card of hand) {
//     if (card.value.toString() === "A") {
//     hasAce = true;
//     }
//     value += card.getValue();
//     }
//     if (hasAce && value <= 11) {
//     value += 10; // Ace can be worth 1 or 11, depending on the total hand value
//     }
//     return value;
// };

// const determineWinner = (playerHand: Card[], dealerHand: Card[]) => {
// const playerHandValue = calculateHandValue(playerHand);
// const dealerHandValue = calculateHandValue(dealerHand);
// if (playerHandValue > 21) {
//     return PlayerType.Dealer; // Player busts
// } else if (dealerHandValue > 21) {
//     return PlayerType.Player; // Dealer busts
// } else if (playerHandValue > dealerHandValue) {
//     return PlayerType.Player; // Player has a higher hand value than dealer
// } else if (dealerHandValue > playerHandValue) {
//     return PlayerType.Dealer; // Dealer has a higher hand value than player
// } else {
//     return "tie"; // The hands are equal in value
// }
// };

// const isGameOver = (playerHand: Card[], dealerHand: Card[]) => {
//     const playerHandValue = calculateHandValue(playerHand);
//     const dealerHandValue = calculateHandValue(dealerHand);
//     if (playerHandValue > 21 || dealerHandValue > 21) {
//     return true; // A player has busted
//     } else if (playerHand.length === 5 || dealerHand.length === 5) {
//     return true; // A player has a five-card hand
//     } else if (playerHandValue === 21 || dealerHandValue === 21) {
//     return true; // A player has a blackjack
//     } else {
//     return false; // The game continues
//     }
// };

// const restartGame = () => {
//     // Reset the player and dealer hands
//     playerHand = [];
//     dealerHand = [];
//     // Reset the game state
//     isPlaying = false;
//     isGameOver = false;
//     isDealerTurn = false;
//     winner = "";
// };

// export {
//     calculateHandValue,
//     determineWinner,
//     isGameOver,
//     restartGame,
// };
