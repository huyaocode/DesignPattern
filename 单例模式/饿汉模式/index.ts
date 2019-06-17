import Singleton from './Starving'

const obj_1: Singleton = Singleton.getInstance()
const obj_2: Singleton = Singleton.getInstance()

// 判断是否为同一对象
console.log(obj_1 === obj_2)