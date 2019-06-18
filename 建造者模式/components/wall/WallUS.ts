import Wall from "./Wall";

class WallUN extends Wall {
  constructor() {
    super()
    this.style = '美式'
    console.log(`${this.style}的墙`)
  }

  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default WallUN
