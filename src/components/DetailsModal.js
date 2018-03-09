import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/EvilIcons';

@inject(['UX'])
@observer
export default class DetailsModal extends React.Component {
  render() {
    const { UX } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={UX.detailModalIsVisible}
        style={styles.modal}
      >
        <View style={styles.modal}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => UX.toggleDetailModal()}>
              <Icon name="close" style={styles.closeWidget}/>
            </TouchableOpacity>
          </View>
          <View style={styles.view}>
            <Text>Lorem ipsum</Text>
            <Button title="Close" onPress={() => UX.toggleDetailModal()} />
          </View>
        </View>
      </Modal>
    );
  }
}

const blue = '#00f';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    paddingTop: 45
  },
  header: {
    justifyContent: 'center',
  },
  closeWidget: {
    color: blue,
    fontSize: 32,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  view: {
    padding: 15,
    flexDirection: 'column',
    flex: 1,
  }
});
