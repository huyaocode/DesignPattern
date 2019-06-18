import AttackBehavior from "./AttackBehavior";

//实现用剑杀敌行为的方法类
class AttackWithFalchion extends AttackBehavior {
  attack(name) {
    console.log(name + '用青龙偃月刀杀敌！')
  }
}

export default AttackWithFalchion