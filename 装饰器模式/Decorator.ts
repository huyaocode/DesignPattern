import Hamburger from './Hamburger'

abstract class Decorator extends Hamburger {
  hamburger: Hamburger

  public abstract getDescription(): string

  public abstract cost(): number
}

export default Decorator
