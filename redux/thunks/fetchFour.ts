import Card from "../../classes/Card";
import { apiRequestFailed } from "../actions/apiRequestFailed";
import startGame from "../actions/startGame";

export const fetchFour = (deckId: string) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
        );
        const data = await response.json();
        if(!data.success) {
          console.warn("api request failed");
          throw new Error("could not fetch data from the api");
        }   
        const cards = data.cards.map((card) => ({
          value: card.value,
          suit: card.suit,
        }));
        dispatch(startGame(cards));
      } catch (error) {
        dispatch(apiRequestFailed(error));
      }
    };
  };