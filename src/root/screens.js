import { Navigation } from 'react-native-navigation';

import Guide from '../containers/Guide';
import Home from '../containers/Home';
import Account from '../containers/Account';

// register all screens of the app (including internal ones)
export const registerScreens = () => {
  Navigation.registerComponent('demo.Guide', () => Guide);
  Navigation.registerComponent('demo.Home', () => Home);
  Navigation.registerComponent('demo.Account', () => Account);
}
