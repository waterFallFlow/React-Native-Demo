
import React, { Component, PropTypes } from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  AsyncStorage, 
  TouchableHighlight
} from 'react-native';
import Animation from 'lottie-react-native';
import { Navigation } from 'react-native-navigation';

const SCREEN_WIDTH  = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class FirstPage extends Component {

  static propTypes = {

  };

  componentDidMount() {
    console.log('first page mount');
    this.animation.play();
  }

  render() {
    return (
      <TouchableHighlight 
        underlayColor={'#FFFFFF'} 
        onPress={() => { AsyncStorage.removeItem('Welcome') }}
        style={[styles.center, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT-64-49 }]}
      >
        <View>
          <Animation
            ref={animation => { this.animation = animation; }}
            style={styles.lottie}
            source={require('./lotties/guide8.json')}
          />
        </View>
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
