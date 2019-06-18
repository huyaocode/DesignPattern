import Hamburger from './Hamburger'
import Beef from './material/Beef'
import Lettuce from './material/Lettuce'

let hamburger: Hamburger = new Hamburger()

hamburger = new Beef(hamburger)
hamburger = new Lettuce(hamburger)

console.log('配料：' + hamburger.getDescription())
console.log('价钱：' + hamburger.cost())
