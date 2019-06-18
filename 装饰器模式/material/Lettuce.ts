import Decorator from '../Decorator'
import Hamburger from '../Hamburger'
import { LETTUCE_PRICE } from '../PRICE';

class Lettuce extends Decorator {
  constructor(ham: Hamburger) {
    super()
    this.hamburger = ham
  }

  public getDescription(): string {
    return this.hamburger.getDescription() + ', lettuce'
  }

  public cost(): number {
    return this.hamburger.cost() + LETTUCE_PRICE
  }
}

export default Lettuce