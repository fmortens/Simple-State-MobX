import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Button
} from 'react-native';
import {
  observer,
  inject
} from 'mobx-react';

@inject(['UX'])
@observer
export default class DetailsModal extends React.Component {
  render() {
    const {
      UX
    } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={UX.detailModalIsVisible}
      >
        <TouchableWithoutFeedback onPress={() => UX.toggleDetailModal()}>
          <View style={styles.modalView}>
            <Text>Lorem ipsum</Text>
            <Button title="Close" onPress={() => UX.toggleDetailModal()} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  modalView: {
    padding: 40
  }
});
