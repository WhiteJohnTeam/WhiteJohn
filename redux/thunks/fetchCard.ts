import { PlayerType } from "../../classes/PlayerType";
import { apiRequestFailed } from "../actions/apiRequestFailed";
import drawCard from "../actions/drawCard";

export const fetchCard = (who : PlayerType, deck_id: string) => {
    
    return async dispatch => {
        try {            
            const cardPromise = await fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?deck_count=1`);
          
            const cardJson = await cardPromise.json();
            // check if success
            if(!cardJson.success) {
                console.log("api request failed");
                throw new Error("could not fetch data from the api");
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
            console.log(error)
            dispatch(apiRequestFailed(error));
        }
    }
}