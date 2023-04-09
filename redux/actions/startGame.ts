import Card from "../../classes/Card";
import { START_GAME } from "../constants";

/**
 * Action creator that returns an object representing the start of a game.
 * @param cardList An array of `Card` objects representing the initial cards dealt in the game.
 * @returns An object with type `START_GAME` and a payload containing the initial cards.
 */

export default function startGame(cardList : Card[]) {
    return {
        type: START_GAME,
        payload: cardList
    }
}