import {
  observable,
  action
} from 'mobx';

import Data from './instructions.json';

class Store {
  constructor() {
    this.getData = this.getData.bind(this);
  }

  @observable data;
  @observable loading = false;

  @action
  getData() {
    this.loading = true;

    setTimeout(() => {
      this.data = Data.instructions;
      this.loading = false;
    }, 1000);
  }
}

const store = new Store();

export default store;
