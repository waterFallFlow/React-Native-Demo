import Dimensions from 'Dimensions';
import { Platform } from 'react-native';

export const SCREEN_WIDTH  = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const FontScale     = (size)    => { return Math.round(size * SCREEN_WIDTH / 375) };
export const WidthPercent  = (percent) => { return SCREEN_WIDTH * percent / 100 };
export const HeightPercent = (percent) => { return SCREEN_HEIGHT * percent / 100 };
export const NavbarHeight  = Platform.OS == 'ios' ? 64 : 44;
export const TabbarHeight  = Platform.OS == 'ios' ? 49 : 56;
