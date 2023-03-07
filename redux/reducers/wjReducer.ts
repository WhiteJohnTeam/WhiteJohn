import Card from "../../classes/Card";
import Game from "../../classes/Game";
import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD, SET_DECK, START_GAME } from "../constants"

const initialState = {
    deckId: "",
    playerHand: [],
    dealerHand: []
}


const drawCardAndUpdateHand = (state, card, player) => {
    const { cardImage, cardValue, cardSuit } = card;
    const updatedPlayerHand = [...state.playerHand];
    const updatedDealerHand = [...state.dealerHand];
  
    if (player === PlayerType.Player) {
        updatedPlayerHand.push({ image: cardImage, value: cardValue, suit: cardSuit });
    } else {
        updatedDealerHand.push({ image: cardImage, value: cardValue, suit: cardSuit });
    }
  
    return {
        ...state,
        playerHand: updatedPlayerHand,
        dealerHand: updatedDealerHand
    };
  };
  
  export default wjReducer = (state = initialState, action) => {
      switch (action.type) {
          case SET_DECK:
              return {
                  ...state,
                  deckId: action.payload.deckId
              };

          case DRAW_CARD:
              return drawCardAndUpdateHand(state, action.payload, action.player);
        
        
          case START_GAME:
            //console.warn("reducing...")
            let newPlayerHand = [...state.playerHand];
            let newDealerHand = [...state.dealerHand];

            // Draw two cards for the player
            for (let i = 0; i < 2; i++) {
                const { value, suit } = action.payload[i];
                //console.warn("card: ", value)
                newPlayerHand.push({ image: "", value: value, suit: suit });
            }

            // Draw two cards for the dealer
            for (let i = 2; i < 4; i++) {
                const { value, suit } = action.payload[i];
                newDealerHand.push({ image: "", value: value, suit: suit });
            }

            return {
            ...state,
            playerHand: newPlayerHand,
            dealerHand: newDealerHand
            };
              
          default:
              return state;
      }
  }

  function updateHand(hand, card, player) {
    const updatedHand = [...hand];
    if (player === PlayerType.Player) {
      updatedHand.push(card);
    } else {
      updatedHand.push(card);
    }
    return updatedHand;
  }