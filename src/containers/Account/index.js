
import React, { Component, PropTypes } from 'react';
import { View, Dimensions, TouchableHighlight, StyleSheet, Text } from 'react-native';

import { Navigation } from 'react-native-navigation';

const SCREEN_WIDTH  = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Account extends Component {

  componentDidMount() {
    console.log('second page mount');
  }

  goToWelcome = () => {
    console.log(' go to welcome ');
    this.props.navigator.toggleTabs({
      to: 'hidden', 
      animated: true 
    });
    this.props.navigator.toggleNavBar({
      to: 'hidden', 
      animated: true 
    });
    this.props.navigator.push({
      screen: "demo.Welcome",
      passProps: {
        tag: 'demo.SecondPage',
        callback: this.callbackFromWelcome.bind(this)
      }
    });
  }

  callbackFromWelcome(args) {
    console.log(' I get back from %s page ', args);
  }

  render() {
    return (
      <View style={[styles.center, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 64 - 49 }]}>
        <TouchableHighlight onPress={this.goToWelcome} style={[{ width: 130, height: 44 }, styles.center]}>
          <Text> 前往引导页 </Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  } 
})
