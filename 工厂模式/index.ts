import WeaponFactory from './factory/WeaponFactory'
import GunFactory from './factory/GunFactory'
import MachineGunFactory from './factory/MachineGunFactory'
import Weapon from './weapon/Weapon'

const gunFactory: WeaponFactory = new GunFactory()
const machineGunFactory: WeaponFactory = new MachineGunFactory()

const gun: Weapon = gunFactory.getWeapon()
console.log('I hava a ' + gun.getName())

const machineGun: Weapon = machineGunFactory.getWeapon()
console.log('I have a ' + machineGun.getName())
