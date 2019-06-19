import IShape from "./IShape";

class Rect implements IShape {
  public draw(): void {
    console.log(' draw rect')
  }
}

export default Rect