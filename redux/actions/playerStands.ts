import Card from "../../classes/Card";
import { PLAYER_STANDS } from "../constants";

export default function playerStands(dealerHand: Card[], deck_id) {
    return {
        type: PLAYER_STANDS,
        payload: {dealerHand: dealerHand, deck_id: deck_id}
    };
}