import Game from '../../classes/Game';
import setDeck  from "./setDeck";

export default function newGame () {
    return async dispatch => {
        try {
            console.warn("trying");
            // first we fetch data from api
            const deckPromise = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            // then we convert to json
            const deckJson = await deckPromise.json();
            // check if success
            if(!deckJson.success) {
                console.warn("api request failed");
                //throw new ApiError('There was an issue retrieving data from the API');
                throw new Error("could not fetch data");
            } else {
                console.warn("api request succeded");
            }
            /* this line allows to get exactly what we want from the 
            json (in the case the deck_id) */
            const {deck_id} = deckJson;
            
            /* now we can create a new game with
            the id and dispatch it with our setDeck
            action*/
            // console.warn("deck id is: ",deck_id)
            // const game = new Game(deck_id);
            // console.warn("affected: ", game.deckId);
            // dispatch(setDeck(game));

            try {
                console.warn("deck id is: ", deck_id);
                const game = new Game(deck_id);
                console.warn("affected: ", game.deckId);
                dispatch(setDeck(game));
              } catch (error) {
                console.error(error);
              }

        } catch(error) {
            //dispatch(fetchDeckFailed(error));
        }
    }
}