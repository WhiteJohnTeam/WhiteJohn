
import { PlayerType } from '../../classes/PlayerType';
import { apiRequestFailed } from '../../redux/actions/apiRequestFailed';
import drawCard from '../../redux/actions/drawCard';
import { fetchCard } from '../../redux/thunks/fetchCard';

// mock the fetch function to return a card object
const mockCard = {
  value: 'ACE',
  suit: 'SPADES',
};
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true, cards: [mockCard] }),
  })
);

describe('fetchCard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches a drawCard action on succes', async () => {
    const dispatch = jest.fn();
    const deckId = 'test_deck_id';
    const player = PlayerType.Player;
    await fetchCard(player, deckId)(dispatch);

    // verify fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?deck_count=1`
    );

    // verify that dispatch was called with the correct drawCard action
    expect(dispatch).toHaveBeenCalledWith(drawCard(mockCard.value, mockCard.suit, player));
  });

  it('dispatches apiRequestFailed if the API request fails', async () => {
    const error = new Error("could not fetch data from the api");
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false }),
      })
    );
    const dispatch = jest.fn();
    const deckId = 'test_deck_id';
    const player = PlayerType.Player;
    await fetchCard(player, deckId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(apiRequestFailed(error));
  });  
});
