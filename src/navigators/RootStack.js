import { StackNavigator } from 'react-navigation';
import {
  ItemList,
  Camera,
  Detail
} from '../screens';

const RootStack = StackNavigator(
  {
    List: {
      screen: ItemList
    },
    Camera: {
      screen: Camera
    },
    Detail: {
      screen: Detail
    }
  },
  {
    initialRouteName: 'List',
    headerMode: 'screen'
  }
);

export default RootStack;
