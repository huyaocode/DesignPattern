import Windows from "./Window";

class WindowEN extends Windows {
  constructor() {
    super()
    this.style = '欧式'
    console.log(`${this.style}的窗`)
	}
	
  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default WindowEN
