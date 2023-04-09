import Card from "../../classes/Card";
import { PLAYER_STANDS } from "../constants";

/**
 * Action creator that returns an object representing the player's decision to stand.
 * @param dealerHand An array of `Card` objects representing the dealer's hand.
 * @param deck_id The deck id used to draw cards from the current deck (api logic).
 * @returns An object with type `PLAYER_STANDS` and a payload containing the dealer's hand and deck ID.
 */

export default function playerStands(dealerHand: Card[], deck_id) {
    return {
        type: PLAYER_STANDS,
        payload: {dealerHand: dealerHand, deck_id: deck_id}
    };
}