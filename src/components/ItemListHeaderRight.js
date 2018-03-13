import React from 'react';
import {
  Button
} from 'react-native';
import {inject } from 'mobx-react';

const buttonColor = 'blue';

@inject('UX')
export default class HeaderRight extends React.Component {
  render() {
    const {
      navigation,
      UX
    } = this.props;

    return (
      <Button
        onPress={() => {
          UX.enableCamera();
          navigation.navigate({ routeName: 'Camera' });
        }}
        title="+"
        color={buttonColor}
      />
    );
  }
}
