import Card from "../../classes/Card";
import { PLAYER_STANDS } from "../constants";

export default function playerStands(dealerHand: Card[], deck_id) {
    console.warn("ACTION player stands")
    return {
        type: PLAYER_STANDS,
        payload: {dealerHand: dealerHand, deck_id: deck_id}
    };
}