import fetchDeck from '../../redux/thunks/fetchDeck';
import setDeck from '../../redux/actions/setDeck';
import { apiRequestFailed } from '../../redux/actions/apiRequestFailed';

const mockDeckId = 'test_deck_id';

// mock the fetch function to return a deck object
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true, deck_id: mockDeckId }),
  })
);

describe('fetchDeck', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches a setDeck action on success', async () => {
    const dispatch = jest.fn();
    await fetchDeck()(dispatch);

    // verify fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );

    // verify that dispatch was called with the correct setDeck action
    expect(dispatch).toHaveBeenCalledWith(setDeck(mockDeckId));
  });

  it('dispatches apiRequestFailed if the API request fails', async () => {
    const error = new Error('could not fetch data from the api');
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false }),
      })
    );
    const dispatch = jest.fn();
    await fetchDeck()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(apiRequestFailed(error));
  });
});
