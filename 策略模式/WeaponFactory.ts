import AttackBehavior from './attack/AttackBehavior'
import AttackWithFalchion from './attack/AttackWithFalchion'
import AttackWithSword from './attack/AttackWithSword'
import AttackWithFist from './attack/AttackWithFist'

/**
 * 武器的简单工厂
 */
class WeaponFactory {
  static createWeapon(type = 2): AttackBehavior {
    let attackBehavior: AttackBehavior = null
    switch (type) {
      case 1:
        attackBehavior = new AttackWithFalchion()
        break
      case 2:
        attackBehavior = new AttackWithSword()
        break
      default:
        attackBehavior = new AttackWithFist()
        break
    }
    return attackBehavior
  }
}

export default WeaponFactory