import Card from "../../classes/Card";
import playerStands from "../actions/playerStands";
import { CalculateHandValue } from "../reducers/wjReducer";

export const fetchAfterStand = (dealerHand: Card[], deck_id) => {
    return async dispatch => {
      while (CalculateHandValue(dealerHand) < 17) {
        try {
          const cardPromise = await fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?deck_count=1`);
  
          const cardJson = await cardPromise.json();
          // check if success
          if (!cardJson.success) {
            console.log("api request failed");
            //throw new ApiError('There was an issue retrieving data from the API');
            throw new Error("could not fetch data");
          } else {
            console.log("api request succeded");
          }
  
          const card_info = cardJson.cards[0];
          var newCard = new Card(card_info.value, card_info.suit);
        } catch (error) {
          //dispatch(fetchDeckFailed(error));
        }
        dealerHand = [...dealerHand, newCard];
      }
      try {
        console.warn(dealerHand)
        dispatch(playerStands(dealerHand, deck_id));
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  