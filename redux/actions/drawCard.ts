import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD } from "../constants";

export default function drawCard(value: String, suit: String, who: PlayerType)  {
    return {
        type: DRAW_CARD,
        payload: {cardValue: value, cardSuit: suit, player: who}
    }
}