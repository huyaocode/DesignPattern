abstract class Shape {
  abstract draw(): void
  add(shape): Shape {
    console.log('add shape')
    return this
  }
  remove(shape): Shape {
    console.log('remove shape')
    return this
  }
  getChild(shape): Shape {
    console.log('remove shape')
    return null
  }
}

export default Shape
