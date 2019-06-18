import Decorator from '../Decorator'
import Hamburger from '../Hamburger'
import { CHIKEN_PRICE } from '../PRICE';

class Chicken extends Decorator {
  constructor(ham: Hamburger) {
    super()
    this.hamburger = ham
  }

  public getDescription(): string {
    return this.hamburger.getDescription() + ', chicken'
  }

  public cost(): number {
    return this.hamburger.cost() + CHIKEN_PRICE
  }
}

export default Chicken