import React from 'react';
import { observer, inject } from 'mobx-react';
import {
  View,
  Text,
  Button
} from 'react-native';

@inject('QR', 'UX')
@observer
export default class Details extends React.Component {
  constructor(props) {
    super(props);

    this.storeQR = this.storeQR.bind(this);
    this.deleteQR = this.deleteQR.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.UX.closeCamera();
  }

  storeQR() {
    const {
      QR,
      navigation,
    } = this.props;

    const {
      state: {
        params: {
          data
        }
      }
    } = navigation;

    QR.capture(data);
    navigation.navigate('List');
  }

  deleteQR() {
    const {
      QR,
      navigation,
    } = this.props;

    const {
      state: {
        params: {
          data
        }
      }
    } = navigation;

    QR.remove(data);
    navigation.navigate('List');
  }

  render() {
    const {
      navigation: {
        state: {
          params: {
            data,
            mode
          }
        }
      }
    } = this.props;

    console.log('DEBUG', mode);

    const action = mode !== 'view' ? <Button title="Store" onPress={this.storeQR} /> : <Button title="Delete" onPress={this.deleteQR} />;
    return <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      {action}
    </View>
  }
}
