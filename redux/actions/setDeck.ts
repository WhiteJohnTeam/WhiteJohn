import { SET_DECK } from '../constants';
import Game from '../../classes/Game';

/**
 * Action creator that returns an object representing the setting of a deck ID.
 * @param deck_id The deck's Id used by the api to handle card logic.
 * @returns An object with type `SET_DECK` and a payload containing the deck ID.
 */
export default function setDeck (deck_id: String) {
    return {
        type: SET_DECK,
        payload: {deckId: deck_id}, 
    }
}