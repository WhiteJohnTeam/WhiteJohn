import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD } from "../constants";

export default function drawCard(image: String, value: String, suit: String, who: PlayerType)  {
    return {
        type: DRAW_CARD,
        payload: {cardImage: image, cardValue: value, cardSuit: suit, player: who}
    }
}