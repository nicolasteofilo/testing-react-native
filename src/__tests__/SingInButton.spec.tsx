/**
 * @format
 */

import 'react-native';
import React from 'react';
import SingInButton from '../components/SingInButton';
import {render} from '@testing-library/react-native';

describe('Sing In Button', () => {
  it('render correctly', () => {
    const {getByTestId} = render(<SingInButton />);
    const button = getByTestId('button-singin');
    expect(button).toBeTruthy();
  });
  it('show user', () => {
    const user = {
      name: 'John',
      email: 'johndoe@hotmail.com',
    };
    const {getByText} = render(<SingInButton user={user} />);
    const name = getByText('John');
    const email = getByText('johndoe@hotmail.com');

    expect(name).toBeTruthy();
    expect(email).toBeTruthy();
  });
});
