import Observer from '../IObserver';

class Farmer extends Observer {
  update() {
    this.escape();
  }
  escape() {
    console.log('逃跑')
  }
}

export default Farmer