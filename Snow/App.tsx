import React from 'react';
import {View, Text} from 'react-native';

// This is the react class component named with the Mycomponent  which uses state to manage the data.
class MyComponent extends React.Component {
  uwuw = {
    year: 2016,
    name: 'Kaushik',
    colors: ['Red'],
  };

  render() {
    return (
      <View>
        <Text>My name is: {this.uwuw.name}</Text>
        <Text>The year is: {this.uwuw.year}</Text>
        <Text>Favorite color is: {this.uwuw.colors[0]}</Text>
      </View>
    );
  }
}

export default MyComponent;
