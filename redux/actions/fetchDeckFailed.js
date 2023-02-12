import { FETCH_DECK_FAILED } from "../constants"

export const fetchDeckFailed = (error) => {
    return {
        type: FETCH_DECK_FAILED,
        payload: error
    }
}