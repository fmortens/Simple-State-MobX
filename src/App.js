import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'mobx-react';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import * as stores from './stores';
import {
  ItemList,
  Camera
} from './screens';
import Icon from 'react-native-vector-icons/Foundation';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Module RCTImageLoader requires',
  'FaceDetector not integrated, stub used!',
  'Class RCTCxxModule was not exported. Did you forget to use RCT_EXPORT_MODULE()',
  'MobX Provider: Provided store \'QR\' has changed.'
]);

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <TabNav />
      </Provider>
    );
  }
}

const TabNav = TabNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="camera" style={styles.itemListTabBarIcon} />,
    }),
  },
  ItemList: {
    screen: ItemList,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="list-thumbnails" style={styles.itemListTabBarIcon} />,
    }),
  }
},{
  initialRouteName: 'ItemList',
  tabBarOptions: {
    showLabel: false,
    tabStyle: {
      width: '100%',
      backgroundColor: '#eaeaea'
    },
  }
});

const tabBarIconColor = 'black';
const styles = StyleSheet.create({
  itemListTabBarIcon: {
    color: tabBarIconColor,
    fontSize: 80,
  }
});
