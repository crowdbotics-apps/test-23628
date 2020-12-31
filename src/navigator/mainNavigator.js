import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings189496Navigator from '../features/Settings189496/navigator';
import Settings189481Navigator from '../features/Settings189481/navigator';
import NotificationList189480Navigator from '../features/NotificationList189480/navigator';
import Maps189479Navigator from '../features/Maps189479/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings189496: { screen: Settings189496Navigator },
Settings189481: { screen: Settings189481Navigator },
NotificationList189480: { screen: NotificationList189480Navigator },
Maps189479: { screen: Maps189479Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
