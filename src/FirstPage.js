
import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Dimensions, 
  AsyncStorage, 
  TouchableHighlight
} from 'react-native';
import { Navigation } from 'react-native-navigation';

const SCREEN_WIDTH  = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class FirstPage extends Component {

  static propTypes = {

  };

  componentDidMount() {
    console.log('first page mount');
  }

  render() {
    return (
      <TouchableHighlight 
        underlayColor={'#FFFFFF'} 
        onPress={() => { AsyncStorage.removeItem('Welcome') }}
        style={[styles.center, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT-64-49 }]}
      >
        <Text>
          dfsfsd
        </Text>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottie: {
    width: 200, 
    height: 200, 
    backgroundColor: '#33333333',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    shadowColor: 'red'
  }
})
