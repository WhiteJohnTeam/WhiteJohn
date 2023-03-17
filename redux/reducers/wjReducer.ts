import Card from "../../classes/Card";
import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD, PLAYER_STANDS, RESTART_GAME, SET_DECK, START_GAME } from "../constants"

const initialState = {
    deckId: "",
    playerHand: [],
    dealerHand: [],
    gameWinner: PlayerType.Dealer,
    gameEnded: false,
    playerTotal: 0
}

const EndOfGame = (state, player) => {
    return {
        ...state,
        gameEnded: true,
        gameWinner: player    
    };
}
  
  export default wjReducer = (state = initialState, action) => {
      switch (action.type) {
          case SET_DECK:
              return {
                  ...state,
                  deckId: action.payload.deckId
              };

          case DRAW_CARD:
            if(action.payload.player == PlayerType.Player) {
                
                // take the current hand and add new card
                let newHand : Card[] = [...state.playerHand];

                console.warn("newHand: ", newHand);
                newHand.push(new Card(action.payload.cardValue, action.payload.cardSuit));
                
                // check for win
                /* NOT ACTUAL CARD BEEING PASSED*/
                if(CalculateHandValue(newHand) == 21) {
                    return EndOfGame(state, PlayerType.Player)
                } else {
                    console.warn("cocou");
                    return {
                        
                        ...state,
                        playerHand: newHand,
                    };
                } 
            } else {
                let newHand = [...state.dealerHand];
                newHand.push(new Card(action.payload.cardValue, action.payload.cardSuit));
            
                return {
                    ...state,
                    dealerHand: newHand
                }
            }
                
        
          case START_GAME:
            //console.warn("reducing...")
            let newPlayerHand = [...state.playerHand];
            let newDealerHand = [...state.dealerHand];

            // Draw two cards for the player
            for (let i = 0; i < 2; i++) {
                const { value, suit } = action.payload[i];
                //console.warn("card: ", value)
                newPlayerHand.push(new Card(value, suit));
            }

            // Draw two cards for the dealer
            for (let i = 2; i < 4; i++) {
                const { value, suit } = action.payload[i];
                newDealerHand.push(new Card(value, suit));
            }

            // now we calculate the initial scores to check for an early blackjack:
            let playerScore = CalculateHandValue(newPlayerHand);
            let dealerScore = CalculateHandValue(newDealerHand);

            // if the player has instant blackJack, the game ends
            if(playerScore == 21) {
               return EndOfGame(state, PlayerType.Player)
            } else {
                return {
                    ...state,
                    playerHand: newPlayerHand,
                    dealerHand: newDealerHand
                };
            }

            case RESTART_GAME:
                return {
                    ...state,
                    playerHand: [],
                    dealerHand: [],
                    gameEnded: false,
                    gameWinner: PlayerType.Dealer
                };

            case PLAYER_STANDS:
                // check dealer score
                // determine winner  
                let delaerTotal = CalculateHandValue([...state.dealerHand]);
                
                return {

                };

              
          default:
              return state;
      }
  }

/* FUNCTIONS TO HANDLE GAME LOGIC */

function CalculateHandValue (hand: Card[]): number{
//console.warn(hand);
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

/* USE CASES :

# Game starts:
- player gets 21 => blackjack
- plater gets less then 21 => can hit or stand


*/