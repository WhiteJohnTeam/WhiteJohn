import Game from '../classes/Game';
import Card from '../classes/Card';
import fetchDeck from '../redux/actions/setDeck';
import drawCard from '../redux/actions/drawCard';
import wjReducer from '../redux/reducers/wjReducer';
import { PlayerType } from '../classes/PlayerType';

describe('wjReducer', () => {
    let initialState;
  
    beforeEach(() => {
      initialState = {
        game: new Game(),
      };
    });
  
    it.skip('should handle FETCH_DECK', () => {
      const deckId = 'deck_id_123';
      const action = fetchDeck(new Game(deckId));
      const nextState = wjReducer(initialState, action);
      expect(nextState.game.deckId).toEqual(deckId);
    });
  
    it.skip('should handle DRAW_CARD', () => {
      const card = new Card(6, "hearts", "image_url");
      const action = drawCard(PlayerType.Player, card, 'deck_id_123');
      const nextState = wjReducer(initialState, action);
  
      expect(nextState.game.playerHand.length).toEqual(1);
      expect(nextState.game.playerHand[0]).toEqual(card);
  
      expect(nextState.game.dealerHand.length).toEqual(0);
    });
  });