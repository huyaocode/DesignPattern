import Weapon from '../weapon/Weapon'

abstract class WeaponFactory {
  abstract createWeapon(): Weapon

  getWeapon(): Weapon {
    const weapon: Weapon = this.createWeapon()
    return weapon
  }
}

export default WeaponFactory