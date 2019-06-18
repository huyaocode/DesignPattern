import AttackBehavior from "./AttackBehavior";

//实现用剑杀敌行为的方法类
class AttackWithSword extends AttackBehavior {
  attack(name) {
    console.log(name + '用剑杀敌！')
  }
}

export default AttackWithSword