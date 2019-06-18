/**
 * door 接口
 */
class Door {
  protected style: String

  public getStyle(): String {
    return this.style
  }
  public setStyle(style: String): void {
    this.style = style
  }
}

export default Door
