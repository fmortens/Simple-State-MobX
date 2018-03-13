import React from 'react';
import {
  Button
} from 'react-native';
import { observer, inject } from 'mobx-react';

const buttonColor = 'blue';

@inject('QR', 'UX')
@observer
export default class HeaderRight extends React.Component {
  render() {
    const {UX} = this.props;

    return (
      <Button
        onPress={() => alert('This is a button!')}
        title="+"
        color={buttonColor}
      />
    );
  }
}
