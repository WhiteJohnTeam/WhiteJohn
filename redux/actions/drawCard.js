import Game from '../../classes/Game';
import { setDeck } from "./setDeck";

export const drawCard = (deckid) => {
    return async dispatch => {
        try {
            console.log("fetch card started ...");
            // first we fetch data from api
            const cardPromise = await fetch('https://www.deckofcardsapi.com/api/deck/${deckid}/draw/?deck_count=1');
            // then we convert to json
            const cardJson = await cardPromise.json();
            // check if success
            if(!cardJson.success) {
                console.log("api request failed");
                //throw new ApiError('There was an issue retrieving data from the API');
                throw new Error("could not fetch data");
            } else {
                console.log("api request succeded");
            }
            /* this line allows to get exactly what we want from the 
            json (in the case the deck_id) */
            const {card_id} = cardJson;
            
            /* now we can create a new game with
            the id and dispatch it with our setDeck
            action*/
            // console.warn("deck id is: ",deck_id)
            // const game = new Game(deck_id);
            // console.warn("affected: ", game.deckId);
            // dispatch(setDeck(game));

            try {
                console.log("deckid: ", deckid);
                console.log("cardid: ", card_id);
                
                console.warn("affected: ", game.deckId);
                dispatch(setDeck(game.toObject()));
              } catch (error) {
                console.error(error);
              }

        } catch(error) {
            //dispatch(fetchDeckFailed(error));
        }
    }
}