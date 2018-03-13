'use strict';

import { observable, action, computed, toJS } from 'mobx';

class UXStore {
  @observable detailModalIsVisible = false;
  @observable cameraStopped = false;
  @observable captureListEditable = false;

  @action
  toggleDetailModal() {
    this.detailModalIsVisible = !this.detailModalIsVisible;
  }

  @action
  disableCamera() {
    this.cameraStopped = true;
  }

  @action
  enableCamera() {
    this.cameraStopped = false;
  }

  @action
  toggleCaptureListEditable() {
    this.captureListEditable = !this.captureListEditable;
  }

  @computed
  get editListButtonTitle() {
    return this.captureListEditable ? 'Done' : 'Edit';
  }
}

const UX = new UXStore();

export default UX;
