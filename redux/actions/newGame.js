import { fetchDeckFailed } from "./fetchDeckFailed";

export const newGame = () => {
    return async dispatch => {
        try {
            // first we fetch data from api
            const deckPromise = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            // then we convert to json
            const deckJson = await deckPromise.json();
            // check if success
            if(!deckJson.success) {
                throw new ApiError('There was an issue retrieving data from the API');
            }
            /* this line allows to get exactly what we want from the 
            json (in the case the deck_id) */
            const {deck_id} = deckJson;
            
            /* now we can create a new game with
            the id and dispatch it with our setDeck
            action*/
            
            const game = new Game(deck_id);
            dispatch(setDeck(game));

        } catch(error) {
            dispatch(fetchDeckFailed(error));
        }
    }
}