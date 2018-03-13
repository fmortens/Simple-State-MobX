'use strict';

import { observable, action, computed, toJS } from 'mobx';

class UXStore {
  @observable detailModalIsVisible = false;
  @observable cameraIsActive = false;
  @observable captureListEditable = false;

  @action
  toggleDetailModal() {
    this.detailModalIsVisible = !this.detailModalIsVisible;
  }

  @action
  toggleCamera() {
    this.cameraIsActive = !this.cameraIsActive;
  }

  @action
  toggleCaptureListEditable() {
    this.captureListEditable = !this.captureListEditable;
  }
}

const UX = new UXStore();

export default UX;
