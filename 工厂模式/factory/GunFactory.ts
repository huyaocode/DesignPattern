import WeaponFactory from './WeaponFactory'
import Weapon from '../weapon/Weapon'
import Gun from '../weapon/Gun'

class GunFactory extends WeaponFactory {
  createWeapon(): Weapon {
    console.log('use gun')
    return new Gun()
  }
}

export default GunFactory