import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD } from "../constants";

/**
 * Action creator that dispatches a DRAW_CARD action with the specified parameters.
 * @param value The value of the card that was drawn.
 * @param suit The suit of the card that was drawn.
 * @param who The player type that drew the card (either "Player" or "Dealer").
 * @returns A DRAW_CARD action object with the specified parameters.
 */

export default function drawCard(value: String, suit: String, who: PlayerType)  {
    return {
        type: DRAW_CARD,
        payload: {cardValue: value, cardSuit: suit, player: who}
    }
}