import Card from "../../classes/Card";
import { START_GAME } from "../constants";

export default function startGame(cardList : Card[]) {
    //console.warn("stating ...");
    return {
        type: START_GAME,
        payload: cardList
    }
}