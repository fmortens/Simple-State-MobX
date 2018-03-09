import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  CameraRoll,
  Image
} from 'react-native';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };

    render() {
  return (
    <View style={styles.cameraView}>
      <ScrollView style={styles.scrollView}>
        {this.state.photos.map((p, i) => {
        return (
          <Image
            key={i}
            style={{
              width: 300,
              height: 100,
            }}
            source={{ uri: p.node.image.uri }}
          />
        );
      })}
      </ScrollView>
      <View style={styles.cameraButtonView}>
        <TouchableOpacity onPress={this._handleButtonPress}>
          <Text style={styles.cameraButton}>Load Images</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
 }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Soon</Text>
  //     </View>
  //   );
  // }
};

const backgroundColor = '#ffe';
const red = 'red';
const green = 'green';
const blue = 'blue';
const styles = StyleSheet.create({
  cameraView: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
    borderWidth: 2,
    borderColor: blue
  },
  cameraButtonView: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraButton: {
    textAlign: 'center',
    fontSize: 20
  }
});
