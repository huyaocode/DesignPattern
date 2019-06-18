import AttackBehavior from './attack/AttackBehavior'
import WeaponFactory from './WeaponFactory'

/**
 * 战士类
 */
class Soldier {
  name: string
  private attackBehavior: AttackBehavior //武器抽象类型指针

  constructor(name = '士兵') {
    this.name = name
    this.attackBehavior = WeaponFactory.createWeapon() //开局默认创建武器
  }

  // 使用武器
  performAttack(): void {
    this.attackBehavior.attack(this.name)
  }
  // 切换武器
  setWeapon(type: number): void {
    this.attackBehavior = WeaponFactory.createWeapon(type)
  }
  // 其他函数
  riding(): void {
    console.log('骑马。骑马的汉子威武雄壮~')
  }
}

export default Soldier