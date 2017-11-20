import { Navigation } from 'react-native-navigation';

import Welcome from './Welcome';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

// register all screens of the app (including internal ones)
export const registerScreens = () => {
  Navigation.registerComponent('demo.Welcome', () => Welcome);
  Navigation.registerComponent('demo.FirstPage', () => FirstPage);
  Navigation.registerComponent('demo.SecondPage', () => SecondPage);
}
