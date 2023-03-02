import setDeck  from "../actions/fetchDeck";
export default function fetchDeck () {
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

            try {
                console.warn("deck id is: ", deck_id);
                dispatch(setDeck(deck_id));
              } catch (error) {
                console.error(error);
              }

        } catch(error) {
            //dispatch(fetchDeckFailed(error));
        }
    }
}