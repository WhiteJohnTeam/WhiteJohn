import Card from "../classes/Card";
import { PlayerType } from "../classes/PlayerType";
import { DRAW_CARD, PLAYER_STANDS, SET_DECK, START_GAME } from "../redux/constants";
import wjReducer from "../redux/reducers/wjReducer";


describe('wjReducer', () => {
  const initialState = {
    deckId: '',
    playerHand: [],
    dealerHand: [],
    gameWinner: PlayerType.Dealer,
    gameEnded: false,
    playerTotal: 0,
  };

  test('should return the initial state', () => {
    expect(wjReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle SET_DECK', () => {
    const deckId = 'test-deck-id';
    const action = {
      type: SET_DECK,
      payload: {
        deckId,
      },
    };

    const expectedState = {
      ...initialState,
      deckId,
    };

    expect(wjReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle DRAW_CARD for player', () => {
    const state = {
      ...initialState,
      playerHand: [new Card('10', 'H'), new Card('A', 'C')],
      dealerHand: [new Card('9', 'S')],
    };

    const action = {
      type: DRAW_CARD,
      payload: {
        player: PlayerType.Player,
        cardValue: '2',
        cardSuit: 'D',
      },
    };

    const expectedState = {
      ...state,
      playerHand: [
        new Card('10', 'H'),
        new Card('A', 'C'),
        new Card('2', 'D'),
      ],
    };

    expect(wjReducer(state, action)).toEqual(expectedState);
  });

  test('should handle DRAW_CARD for dealer', () => {
    const state = {...initialState, dealerHand: [new Card('10', 'H'), new Card('A', 'C')]};
    const action = {type: DRAW_CARD, payload: {player: PlayerType.Dealer, cardValue: '2', cardSuit: 'D'}};
    const expectedState = {...state, dealerHand: [new Card('10', 'H'), new Card('A', 'C'), new Card('2', 'D')]};
    expect(wjReducer(state, action)).toEqual(expectedState);
  });

  test('should handle START_GAME with initial score of 21', () => {
    const cards = [
      { value: 'A', suit: 'H' },
      { value: '10', suit: 'D' },
      { value: 'K', suit: 'S' },
      { value: 'Q', suit: 'C' }
    ];
    const action = {type: START_GAME, payload: cards};
    const expectedState = {...initialState, gameEnded: true, gameWinner: PlayerType.Player};
    expect(wjReducer(initialState, action)).toEqual(expectedState);
  });
  
  test('should handle PLAYER_STANDS with a tie', () => {
    const state = {...initialState, playerHand: [new Card('10', 'H'), new Card('A', 'C')], dealerHand: [new Card('10', 'D'), new Card('A', 'S')]};
    const action = {type: PLAYER_STANDS, payload: {dealerHand: [new Card('10', 'D'), new Card('A', 'S')]}}
    const expectedState = {...state, gameEnded: true, gameWinner: PlayerType.Player};
    expect(wjReducer(state, action)).toEqual(expectedState);
  });
  
  
});