import Card from "../../classes/Card";
import startGame from "../actions/startGame";

export const fetchFour = (deckId: string) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
        );
        const data = await response.json();
        const cards = data.cards.map(
          (card) => new Card(card.value, card.suit, card.image)
        );
        dispatch(startGame(cards));
      } catch (error) {
        dispatch({ type: "FETCH_CARDS_FAILURE", payload: error.message });
      }
    };
  };