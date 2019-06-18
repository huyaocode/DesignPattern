import AttackBehavior from "./AttackBehavior";

//实现用剑杀敌行为的方法类
class AttackWithFist extends AttackBehavior {
  attack(name) {
    console.log(name + '用拳头杀敌！')
  }
}

export default AttackWithFist