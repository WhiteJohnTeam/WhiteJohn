import React from "react";
import PlayScreen from "../screens/Play";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("PlayScreen", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const initialState = {
    wjReducer: {
      deckId: "1",
      playerHand: [],
      dealerHand: [],
      gameEnded: false,
      gameWinner: "",
    },
  };
  const store = mockStore(initialState);

  it("displays the dealer's name", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const dealerName = getByText("Dealer");
    expect(dealerName).toBeDefined();
  });

  it("displays a 'Hit' button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const hitButton = getByText("Hit");
    expect(hitButton).toBeDefined();
  });

  it("displays a 'Stand' button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const standButton = getByText("Stand");
    expect(standButton).toBeDefined();
  });

  it("displays a 'Start Game' button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const startButton = getByText("Start Game");
    expect(startButton).toBeDefined();
  });

  it("calls the hit function when the 'Hit' button is pressed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const hitButton = getByText("Hit");
    fireEvent.press(hitButton);
    expect(hit).toHaveBeenCalled();
  });

  it("calls the stand function when the 'Stand' button is pressed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const standButton = getByText("Stand");
    fireEvent.press(standButton);
    expect(stand).toHaveBeenCalled();
  });

  it("calls the start function when the 'Start Game' button is pressed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayScreen />
      </Provider>
    );
    const startButton = getByText("Start Game");
    fireEvent.press(startButton);
    expect(start).toHaveBeenCalled();
  });
});
