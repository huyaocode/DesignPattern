import Decorator from '../Decorator'
import Hamburger from '../Hamburger'
import { BEEF_PRICE } from '../PRICE';

class Beef extends Decorator {
  constructor(ham: Hamburger) {
    super()
    this.hamburger = ham
  }

  public getDescription(): string {
    return this.hamburger.getDescription() + ', beef'
  }

  public cost(): number {
    return this.hamburger.cost() + BEEF_PRICE
  }
}

export default Beef