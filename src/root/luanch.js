import { Navigation } from 'react-native-navigation';
import Images from '../images';

export const startSingleApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
    screen: 'demo.Guide', // unique ID registered with Navigation.registerScreen
    navigatorStyle: { navBarHidden: true } // override the navigator style for the screen, see "Styling the navigator" below (optional)
    },
    animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
}
 
export const startTabBasedApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One', // tab label as appears under the icon in iOS (optional)
        screen: 'demo.Home', // unique ID registered with Navigation.registerScreen
        icon: Images.firstTab, // local image asset for the tab icon unselected state (optional on iOS)
        selectedIcon: Images.firstTabSelected, // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        title: 'Screen One', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'Two',
        screen: 'demo.Account',
        icon: Images.secondTab,
        selectedIcon: Images.secondTabSelected,
        title: 'Screen Two'
      }
    ],
    tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
      tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      tabBarBackgroundColor: '#33333333', // optional, change the background color of the tab bar
      initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    appStyle: {
      orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
      bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
      bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
      hideBackButtonTitle: true // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
    },
    animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
}
 