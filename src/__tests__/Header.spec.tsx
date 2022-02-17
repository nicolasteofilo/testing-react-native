/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../components/Header';
import {render} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Header />);
    const text = getByText('Header Section');
    expect(text).toBeTruthy();
  });
});
