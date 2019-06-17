import Weapen from './IWeapen'
import Gun from './weapen/Gun'
import Cannon from './weapen/Cannon'

class WeapenFactory {
  getWeapen(w_type: string): Weapen | null {
    switch(w_type) {
      case 'Gun' :
        return new Gun()
      case 'Cannon':
        return new Cannon()
      default:
        return null
    }
  }
}

export default WeapenFactory

