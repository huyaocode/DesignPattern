class Wall {
  protected height: number
  protected width: number
  protected style: String

	constructor() {
    this.height = 3.5
    this.width = 10.5
    this.style = '普通'
  }

  public getHeight() {
    return this.height
  }
  public setHeight(height): void {
    this.height = height
  }

  public getWidth(): number {
    return this.width
  }
  public setWidth(width): void {
    this.width = width
  }

  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default Wall