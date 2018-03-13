import { observable, action, computed, toJS } from 'mobx';
import { QRCapture } from '../models';
import UUIDGenerator from 'react-native-uuid-generator';

class QRStore {
  @observable captures = [];

  @action
  capture(data) {
    if (!this.existsInArray(data)) {
      const capture = new QRCapture(data);
      UUIDGenerator.getRandomUUID((uuid) => {
        capture.uuid = uuid;
        this.captures.push(capture);
      });
    }
  }

  existsInArray(newCapture) {
    let exists = false;
    this.captures.forEach((capture) => {
      if (capture.content.data === newCapture.data) {
        exists = true;
      }
    });

    return exists;
  }

  @action
  remove(item) {
    this.captures = this.captures
      .filter(capture => (capture.uuid !== item.uuid));
  }
}

const QR = new QRStore();

export default QR;
