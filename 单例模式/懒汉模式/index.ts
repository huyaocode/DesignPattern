import Singleton from './Slacker'

const obj_1: Singleton = new Singleton().getInstance()
const obj_2: Singleton = new Singleton().getInstance()

// 判断是否为同一对象
console.log(obj_1 === obj_2)
