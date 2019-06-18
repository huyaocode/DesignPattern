import Door from './Door'

class DoorEU extends Door {
  constructor() {
    super()
    this.style = '欧式'
    console.log(`${this.style}的门`)
  }

  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default DoorEU
