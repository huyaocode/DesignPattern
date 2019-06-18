import Observer from '../IObserver';

class Mine extends Observer {
  update(): void {
    this.ready();
  }
  ready() {
    console.log('地雷挂线')
  }
}

export default Mine