import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'mobx-react';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import stores from './stores';
import {
  ItemList,
  Camera
} from './screens';
import Icon from 'react-native-vector-icons/Foundation';

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
  List: {
    screen: ItemList,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="thumbnails" style={styles.itemListTabBarIcon} />,
    }),
  },
  List2: {
    screen: Camera,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="camera" style={styles.itemListTabBarIcon} />,
    }),
  },
},{
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
