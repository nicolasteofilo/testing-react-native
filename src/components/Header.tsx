import React from 'react';
import {Text} from 'react-native';

interface HeaderProps {
  title?: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <>
      <Text>Page: {title}</Text>
      <Text>Header Section</Text>
    </>
  );
};

export default Header;
