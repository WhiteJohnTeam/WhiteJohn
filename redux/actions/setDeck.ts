import { SET_DECK } from '../constants';
import Game from '../../classes/Game';

/* to start a game we need to retrieve
a new deck from the API
 */

export default function setDeck (deck_id: String) {
    return {
        type: SET_DECK,
        payload: {deckId: deck_id}, 
    }
}