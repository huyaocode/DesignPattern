import Build from './Build'
import House from '../House'
import WallCN from '../components/wall/WallCN'
import WindowCN from '../components/window/WindowCN'
import DoorCN from '../components/door/DoorCN'

class BuildCN extends Build {
  private house: House = new House()

  public getHourse(): House {
    return this.house
  }

  public creatWall(): void {
    this.house.addWall(new WallCN())
  }
  public creatWindow(): void {
    this.house.addWindows(new WindowCN())
  }
  public creatDoor(): void {
    this.house.addDoor(new DoorCN())
  }
}

export default BuildCN