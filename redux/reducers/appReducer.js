import { FETCH_DECK } from "../constants"

const initialState = {
    game: null
}

export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DECK:
            return {...state, game: action.payload };
        default:
            return state;
    }
}