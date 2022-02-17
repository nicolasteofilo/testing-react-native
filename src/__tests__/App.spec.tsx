/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../../App';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(<App />);
    const text = getByText('Type user');
    expect(text).toBeTruthy();
  });
  it('should be able type user and show user', async () => {
    const {getByTestId, queryByTestId, getByText} = render(<App />);
    const input = getByTestId('input');
    const famousProgrammerInHistory = 'Ada Lovelace';

    fireEvent.changeText(input, famousProgrammerInHistory);

    const button = getByText('Print Username');
    fireEvent.press(button);

    await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy());

    const printedUsername = getByTestId('printed-username');
    expect(printedUsername.props.children).toBe(famousProgrammerInHistory);
  });
});
