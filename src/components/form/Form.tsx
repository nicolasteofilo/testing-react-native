import 'react-native';
import React from 'react';
import {View} from 'react-native';

const Form = () => {
  return (
    <>
      <View>
        <form>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </View>
    </>
  );
};

export default Form;
