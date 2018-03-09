import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { DetailsModal, TestView } from '../components';

export default class ItemList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DetailsModal />
        <TestView />
      </View>
    );
  }
};

const white = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  }
});
