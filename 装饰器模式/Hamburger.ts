import { BREAD_PRICE } from "./PRICE";

// 汉堡
class Hamburger {
  protected description: string = '汉堡组成： bread'
  public getDescription(): string {
    return this.description
  }
  public cost(): number {
    return BREAD_PRICE
  }
}

export default Hamburger