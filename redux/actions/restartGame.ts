import { RESTART_GAME } from "../constants";

/**
 * Action creator that returns an object representing a game restart.
 * @returns An object with type `RESTART_GAME`.
 */

export default function restartGame() {
    return {
        type: RESTART_GAME
    }
}