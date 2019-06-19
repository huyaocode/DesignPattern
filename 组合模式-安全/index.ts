import Circle from './shape/Circle'
import Rect from './shape/Rect'
import Line from './shape/Line'
import Picture from './Picture'

const r1 = new Rect()
const l1 = new Line()
const c1 = new Circle()
const c2 = new Circle()

const p1 = new Picture('picture1')
p1.add(c1).add(r1)

const p2 = new Picture('picture2')
p2.add(c1)
  .add(l1)
  .add(c2)

const p3 = new Picture('picture3')
p3.add(c1)
  .add(r1)
  .add(c2)

const pic = new Picture('组合其他的 pic')
pic
  .add(p1)
  .add(p2)
  .add(p3)

pic.draw()
