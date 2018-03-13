import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { observer, inject } from 'mobx-react';

@inject('QR', 'UX')
@observer
export default class Camera extends React.Component {
  render() {
    const {
      QR,
      UX
    } = this.props;

    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.camera}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onBarCodeRead={(data) => {
              if (UX.cameraStopped || QR.existsInArray(data)) {
                return;
              }

              UX.disableCamera();
              this.props.navigation.navigate('Detail', {
                data
              });
            }}>
          <View style={styles.overlay}></View>
        </RNCamera>
      </View>
    );
  }
};

const containerBackgroundColor = 'black';
const overlayBorderColor = 'white';
const previewTextColor = 'white';
const previewTextBackground = 'rgba(52, 52, 52, 0.8)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: containerBackgroundColor
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 0,
    height: 200,
    width: 200,
    borderColor: overlayBorderColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
