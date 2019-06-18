import Door from './Door'

class DoorUN extends Door {
  constructor() {
    super()
    this.style = '美式'
    console.log(`${this.style}的门`)
  }

  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default DoorUN
