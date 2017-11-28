
import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, StyleSheet, Dimensions, Animated, Text, Easing, AsyncStorage } from 'react-native';
import { startTabBasedApp } from '../../root/luanch';


const SCREEN_WIDTH  = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Guide extends Component {

  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props) {
    super(props);
    console.log('======', props);
    this.state = {
      visible: new Animated.Value(0)
    }
  }

  componentWillUnmount() {
    const { callback } = this.props;
    callback && callback('welcome');

    this.props.navigator.toggleTabs({
      to: 'shown', 
      animated: true 
    });
    this.props.navigator.toggleNavBar({
      to: 'shown', 
      animated: true 
    });
  }

  componentDidMount() {
    console.log('=======', this.props.tag);
    Animated.timing(this.state.visible, {
      toValue: 1,
      easing: Easing.bounce,
      duration: 500
    }).start();
  }

  clearStorage() {
    AsyncStorage.setItem('Welcome', JSON.stringify({ isFirst: true }), (err, result) => {
      startTabBasedApp();
    });
  }

  render() {
    let transform = {
      transform: [{
        translateY: this.state.visible.interpolate({
          inputRange: [0, 1],
          outputRange: [110, 0]
        }),
      }]
    };
    return (
      <View style={[styles.center, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }]}>
        <Animated.View style={[styles.guideBtn, transform]}>
          <TouchableHighlight 
            underlayColor={'#rgba(0,209,193,0.8)'} 
            onPress={() => { this.clearStorage() }} 
            style={[styles.center, { flex: 1 }]}
          >
            <Text style={styles.text}> 立即体验 </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  guideBtn: {
    position: 'absolute',
    bottom: 60,
    left: (SCREEN_WIDTH - 140)/2,
    width: 140,
    height: 50,
    backgroundColor: '#rgb(0,209,193)',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 17
  }
})
