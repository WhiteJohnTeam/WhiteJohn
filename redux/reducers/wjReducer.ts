import Card from "../../classes/Card";
import Game from "../../classes/Game";
import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD, SET_DECK } from "../constants"

const initialState = {
    deckId: "",
    playerHand: [],
    dealerHand: []
}

export default wjReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DECK:
            return {
                ...state,
                deckId: action.payload.deckId
            };
        case DRAW_CARD:
            const { cardImage, cardValue, cardSuit, player } = action.payload;
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
                    
        default:
            return state;
    }
  }