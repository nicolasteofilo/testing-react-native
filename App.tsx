/**
 * @format
 */

import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  const [name, setUser] = React.useState('');
  const [show, setShow] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text style={styles.textTypeUser}>Type user</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setUser}
        testID="input"
      />
      <Button
        title="Print Username"
        onPress={() => {
          setShow(!show);
        }}
      />
      {show && (
        <Text style={styles.textTypeUser} testID="printed-username">
          {name}
        </Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTypeUser: {
    color: '#FFF',
    fontSize: 20,
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#FFF',
    borderRadius: 4,
    margin: 15,
  },
  button: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 4,
    marginBottom: 10,
  },
});
