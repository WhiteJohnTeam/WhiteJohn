import Card from "../../classes/Card";
import { PLAYER_STANDS } from "../constants";

export const playerStands = (dealerHand: Card[], deck_id) => {
    return {
        type: PLAYER_STANDS,
        payload: {dealerHand: dealerHand, deck_id: deck_id}
    };
}