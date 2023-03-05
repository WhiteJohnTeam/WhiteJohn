import Card from "../../classes/Card";
import Game from "../../classes/Game";
import { DRAW_CARD, SET_DECK } from "../constants"

const initialState = {
    game: new Game(),
}

export default wjReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DECK:
            return {
            ...state,
            game: {
                ...state.game,
                deckId: action.payload.deckId
            }
            };
        case DRAW_CARD:
            const { cardImage, cardValue, cardSuit, player } = action.payload;
            const card = new Card(cardValue,cardSuit,cardImage);
            // get a copy of the current galme and
            // setup a updated game with the new card
            const game = {...state.game};
            const updated = new Game(game.deckId);

            updated.playerHand = game.dealerHand;
            updated.dealerHand = game.playerHand;
            
            updated.Draw(card, player);

            return {
                ...state,
                game : updated,
            };
            
        default:
            return state;
    }
  }