import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(['UX'])
export default class TestView extends React.PureComponent {
  render() {
    const { UX } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => UX.toggleDetailModal()}>
          <Text style={styles.testButton}>[ Open ]</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  testButton: {
    fontSize: 56
  }
});
