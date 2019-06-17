import Weapen from './IWeapen'
import WeapenFactory from './WeapenFactory'

const weapenFactory: WeapenFactory = new WeapenFactory()

// 获取 Gun 的对象，并调用
const gun: Weapen = weapenFactory.getWeapen('Gun');
gun.fire()

// 获取 Cannon 的对象，并调用
const cannon: Weapen = weapenFactory.getWeapen('Cannon');
cannon.fire()