import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../screens/Settings';
import { ColorContext } from '../context/ColorContext';
import { DealerContext } from '../context/DealerContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mocking AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('<SettingsScreen />', () => {
  const toggleTheme = jest.fn();
  const setDealerName = jest.fn();
  const dealerName = 'John';

  it('renders correctly', () => {
    const { getByTestId } = render(
      <ColorContext.Provider value={{ isDarkMode: false, toggleTheme }}>
        <DealerContext.Provider value={{ dealerName, setDealerName }}>
          <SettingsScreen />
        </DealerContext.Provider>
      </ColorContext.Provider>
    );

    expect(getByTestId('settings-screen')).toBeDefined();
  });

  it('shows the correct title', () => {
    const { getByTestId } = render(
      <ColorContext.Provider value={{ isDarkMode: false, toggleTheme }}>
        <DealerContext.Provider value={{ dealerName, setDealerName }}>
          <SettingsScreen />
        </DealerContext.Provider>
      </ColorContext.Provider>
    );

    expect(getByTestId('title').props.children).toBe('Settings');
  });

  it('renders the dealer name correctly', () => {
    const { getByTestId } = render(
      <ColorContext.Provider value={{ isDarkMode: false, toggleTheme }}>
        <DealerContext.Provider value={{ dealerName, setDealerName }}>
          <SettingsScreen />
        </DealerContext.Provider>
      </ColorContext.Provider>
    );

    expect(getByTestId('dealer-name').props.children).toBe(dealerName);
  });

  it('sets the dealer name correctly on input change', () => {
    const { getByTestId } = render(
      <ColorContext.Provider value={{ isDarkMode: false, toggleTheme }}>
        <DealerContext.Provider value={{ dealerName, setDealerName }}>
          <SettingsScreen />
        </DealerContext.Provider>
      </ColorContext.Provider>
    );

    const input = getByTestId('dealer-name-input');
    const newDealerName = 'Jane';

    fireEvent.changeText(input, newDealerName);

    expect(setDealerName).toHaveBeenCalledWith(newDealerName);
    expect(input.props.value).toBe(newDealerName);
  });

  it('saves the dealer name correctly on submit editing', async () => {
    const { getByTestId } = render(
      <ColorContext.Provider value={{ isDarkMode: false, toggleTheme }}>
        <DealerContext.Provider value={{ dealerName, setDealerName }}>
          <SettingsScreen />
        </DealerContext.Provider>
      </ColorContext.Provider>
    );

    const input = getByTestId('dealer-name-input');
    const newDealerName = 'Jane';

    fireEvent.changeText(input, newDealerName);

    await fireEvent(input, 'onSubmitEditing');

    expect(setDealerName).toHaveBeenCalledWith(newDealerName);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('dealerName', newDealerName);
  });
});
