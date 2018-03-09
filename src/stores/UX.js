import {
  observable,
  action,
  computed
} from 'mobx';

class UXStore {
  @observable detailModalIsVisible = false;

  @action toggleDetailModal() {
    this.detailModalIsVisible = !this.detailModalIsVisible;
  }
}

const UX = new UXStore();

export default UX;
