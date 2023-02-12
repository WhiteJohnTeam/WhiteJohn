import { FETCH_DECK } from '../constants';
import Game from '../../classes/Game';

/* to start a game we need to retrieve
a new deck from the API
 */

export const setDeck = (game) => {
    return {
        type: FETCH_DECK,
        payload: game,
    }
}