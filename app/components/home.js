import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Button
} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Home extends React.Component {
  renderItem({ item, index }) {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {parseInt(index) + 1}
          {'. '}
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }

  render () {
    if (this.props.store.loading) {
      return (
        <SafeAreaView style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </SafeAreaView>
      );
    } else if (this.props.store.data) {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
          <FlatList
            ref="listRef"
            data={this.props.store.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', alignContent: 'center', justifyContent: 'center'}}>
          <Button title="Load data" onPress={this.props.store.getData} />
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },

  title: {
    fontSize: 15,
    fontWeight: '600'
  },

  description: {
    marginTop: 5,
    fontSize: 14
  }
});
