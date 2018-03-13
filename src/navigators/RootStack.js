import { StackNavigator } from 'react-navigation';
import { ItemList } from '../screens';

const RootStack = StackNavigator(
  {
    List: {
      screen: ItemList
    }
  },
  {
    initialRouteName: 'List',
    headerMode: 'screen'
  }
);

export default RootStack;
