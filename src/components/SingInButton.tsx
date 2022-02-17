import 'react-native';
import React from 'react';
import {Button, Text} from 'react-native';

interface SingInButtonProps {
  user?: {
    name: string;
    email: string;
  };
}

const SingInButton = ({user}: SingInButtonProps) => {
  return user ? (
    <>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </>
  ) : (
    <Button title="SingIn" testID="button-singin" />
  );
};

export default SingInButton;
