import { observable, action, computed, toJS } from 'mobx';
import { QRCapture } from '../models';

class QRStore {
  @observable captures = [{
    content: {
      data: 'blubb'
    }
  }];

  @action
  capture(data) {
    if (!this.existsInArray(data)) {
      const capture = new QRCapture(data);
      this.captures.push(capture);
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
}

const QR = new QRStore();

export default QR;
