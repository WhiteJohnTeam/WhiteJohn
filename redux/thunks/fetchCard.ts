import { Dispatch } from "redux";
import Card from "../../classes/Card";
import { PlayerType } from "../../classes/PlayerType";
import drawCard from "../actions/drawCard";

export const fetchCard = (who : PlayerType, deck_id: string) => {
    return async dispatch => {
        try {
            console.log("fetch card started ...");
            
            const cardPromise = await fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?deck_count=1`);
          
            const cardJson = await cardPromise.json();
            // check if success
            if(!cardJson.success) {
                console.log("api request failed");
                //throw new ApiError('There was an issue retrieving data from the API');
                throw new Error("could not fetch data");
            } else {
                console.log("api request succeded");
            }

            const card_info = cardJson.cards[0];

            try {
                dispatch(drawCard(card_info.value, card_info.suit, who))
              } catch (error) {
                console.error(error);
              }

        } catch(error) {
            //dispatch(fetchDeckFailed(error));
        }
    }
}