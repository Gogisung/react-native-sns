import React from 'react';
import {Image} from 'react-native';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Profile';
import Drawer from '~/Screens/Drawer';

const LoginNavigator = createStackNavigator({
  MyFeed,
});
const FeedsTab = createStackNavigator({
  Feeds,
  FeedListOnly,
});
const MainTabs = createBottomTabNavigator({
  Feeds: {
    screen: FeedsTab,
  }
});

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  }
);

export default createAppContainer(AppNavigator);
