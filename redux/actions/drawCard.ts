import { DRAW_CARD } from "../constants";

export default function drawCard(who : PlayerType, card: Card, deck_id : String)  {
    return {
        type: DRAW_CARD,
        payload: {who, card}
    }
}