import setDeck  from "../actions/setDeck";
export default function fetchDeck () {
    return async dispatch => {
        try {
            // first we fetch data from api
            const deckPromise = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            // then we convert to json
            const deckJson = await deckPromise.json();
            // check if success
            if(!deckJson.success) {
                console.warn("api request failed");
                //throw new ApiError('There was an issue retrieving data from the API');
                throw new Error("could not fetch data");
            }            
            const {deck_id} = deckJson;

            try {
                dispatch(setDeck(deck_id));
              } catch (error) {
                console.error(error);
              }

        } catch(error) {
            //dispatch(fetchDeckFailed(error));
        }
    }
}