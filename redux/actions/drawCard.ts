import { setDeck } from "./setDeck";
import { Dispatch } from "redux";

export const drawCard = (deckid: string) => {
    return async (dispatch: Dispatch) => {
        try {
            console.log("fetch card started ...");
            // first we fetch data from api
            const cardPromise = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckid}/draw/?deck_count=1`);
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

            const { card_id } = cardJson.cards[0];

            try {
                console.log("deckid: ", deckid);
                console.log("cardid: ", card_id);
                
                //console.warn("affected: ", game.deckId);
               // dispatch(setDeck(game.toObject())); // assumes that game object is defined somewhere in the component
              } catch (error) {
                console.error(error);
              }

        } catch(error) {
            //dispatch(fetchDeckFailed(error));
        }
    }
}