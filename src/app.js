/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

  import { AsyncStorage } from 'react-native';
  import { registerScreens } from './screens';
  import { startSingleApp, startTabBasedApp } from './luanch';
  registerScreens(); // this is where you register all of your app's screens

  if (!__DEV__) {
    global.console = {
      info:  () => {},
      log:   () => {},
      warn:  () => {},
      debug: () => {},
      error: () => {}
    }
  }

  AsyncStorage.getItem('Welcome', (err, result) => {
    let data = JSON.parse(result);
    if (data && data.isFirst) startTabBasedApp();
    else startSingleApp();
  })

 