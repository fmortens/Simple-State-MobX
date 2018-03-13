import { observable, action, computed, toJS } from 'mobx';
import { QRCapture } from '../models';

class QRStore {
  @observable captures = [
    {
      uuid: 1,
      content: {
        data: 'item 1'
      }
    },
    {
      uuid: 2,
      content: {
        data: 'item 2'
      }
    },
    {
      uuid: 3,
      content: {
        data: 'item 3'
      }
    },
    {
      uuid: 4,
      content: {
        data: 'item 4'
      }
    },
    {
      uuid: 5,
      content: {
        data: 'item 5'
      }
    }
  ];

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

  @action
  remove(item) {
    this.captures = this.captures
      .filter(capture => (capture.uuid !== item.uuid));
  }
}

const QR = new QRStore();

export default QR;
