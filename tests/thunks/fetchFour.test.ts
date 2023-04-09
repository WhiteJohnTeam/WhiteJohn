import { fetchFour } from '../../redux/thunks/fetchFour';
import startGame from '../../redux/actions/startGame';
import Card from '../../classes/Card';
import { apiRequestFailed } from '../../redux/actions/apiRequestFailed';

const mockDeckId = 'test_deck_id';

// mock the fetch function to return an array of cards

const mockCards = [
    {
      value: 'ACE',
      suit: 'SPADES',
      image: "https://deckofcardsapi.com/static/img/AS.svg"
    },
    {
      value: '3',
      suit: 'DIAMONDS',
      image: "https://deckofcardsapi.com/static/img/3D.svg"
    },
    {
      value: 'KING',
      suit: 'HEARTS',
      image: "https://deckofcardsapi.com/static/img/KH.svg"
    },
    {
      value: '7',
      suit: 'CLUBS',
      image: "https://deckofcardsapi.com/static/img/7C.svg"
    },
  ];
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true, cards: mockCards }),
  })
);

describe('fetchFour', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test.skip('Fetch four cannot be test because it needs an ongoing deckId, valid by the api :(', async () => {
    const dispatch = jest.fn();
    await fetchFour(mockDeckId)(dispatch);

    // verify fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://deckofcardsapi.com/api/deck/${mockDeckId}/draw/?count=4`
    );

    // verify that dispatch was called with the correct startGame action
    //const expectedAction = startGame(/*mockCards*/);
    //expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('dispatches an error action if the API request fails', async () => {
    const error = new Error('could not fetch data from the api');
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false }),
      })
    );
    const dispatch = jest.fn();
    await fetchFour(mockDeckId)(dispatch);

    // verify that dispatch was called with the correct error action
    expect(dispatch).toHaveBeenCalledWith(apiRequestFailed(error));
  });
});
