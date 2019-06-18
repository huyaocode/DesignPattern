import Observer from '../IObserver';

class Army extends Observer {
  update(): void {
    this.fight();
  }
  fight() {
    console.log('准备战斗')
  }
}

export default Army