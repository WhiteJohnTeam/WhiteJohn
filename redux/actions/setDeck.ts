import { FETCH_DECK } from '../constants';
import Game from '../../classes/Game';

/* to start a game we need to retrieve
a new deck from the API
 */

export default function setDeck (game: Game) {
    return {
        type: FETCH_DECK,
        payload: game.toObject(), // too object needed ?
    }
}