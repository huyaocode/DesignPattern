import WeaponFactory from './WeaponFactory'
import Weapon from '../weapon/Weapon'
import MachineGun from '../weapon/MachineGun'

class MachineGunFactory extends WeaponFactory {
  createWeapon(): Weapon {
    console.log('use machine gun')
    return new MachineGun()
  }
}

export default MachineGunFactory