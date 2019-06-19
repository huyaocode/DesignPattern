import IShape from "./IShape";

class Line implements IShape {
  public draw(): void {
    console.log(' draw line ')
  }
}

export default Line
