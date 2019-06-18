import Build from './Build'
import House from '../House'
import WallEU from '../components/wall/WallEU'
import WindowEU from '../components/window/WindowEU'
import DoorEU from '../components/door/DoorEU'

class BuildEU extends Build {
  private house: House = new House()

  public getHourse(): House {
    return this.house
  }

  public creatWall(): void {
    this.house.addWall(new WallEU())
  }
  public creatWindow(): void {
    this.house.addWindows(new WindowEU())
  }
  public creatDoor(): void {
    this.house.addDoor(new DoorEU())
  }
}

export default BuildEU