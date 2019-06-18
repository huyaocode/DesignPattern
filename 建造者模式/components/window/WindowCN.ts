import Windows from "./Window";

class WindowCN extends Windows {
  constructor() {
    super()
    this.style = '中式'
    console.log(`${this.style}的窗`)
	}
	
  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default WindowCN
