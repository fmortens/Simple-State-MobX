import React from 'react';
import {
  Button
} from 'react-native';
import {
  observer,
  inject
} from 'mobx-react';

@inject(['UX'])
export default class TestView extends React.PureComponent {
  render() {
    const {
      UX
    } = this.props;

    return <Button title="Open" onPress={() => UX.toggleDetailModal()} />;
  }
}
