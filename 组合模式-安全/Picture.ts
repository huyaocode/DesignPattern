import Shape from './IShape';

class Picture implements Shape {
  private picList: Array<Shape> = []
  private name: String

  constructor(name) {
    this.name = name
  }

  public add(shape: Shape): Picture {
    this.picList.push(shape)
    return this
  }

  public remove(picture): Picture {
    for (let i = 0; i < this.picList.length; i++) {
      if (picture === this.picList[i]) {
        this.picList.splice(i, 1)
      }
    }
    return this
  }

  public getChild(i: number): Shape {
    return this.picList[i]
  }

  public draw(): void {
    console.log(this.name)
    this.picList.forEach(picture => {
      picture.draw()
    })
  }
}


export default Picture