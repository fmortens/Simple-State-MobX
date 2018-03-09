import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  DetailsModal,
  TestView
} from './components';

import {
  observer,
  Provider
} from 'mobx-react';

import stores from './stores';

@observer
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={styles.container}>
          <DetailsModal />
          <TestView />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  }
});
