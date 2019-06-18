import Build from './Build'
import House from '../House'
import WallUS from '../components/wall/WallUS'
import WindowUS from '../components/window/WindowUS'
import DoorUS from '../components/door/DoorUS'

class BuildUS extends Build {
  private house: House = new House()

  public getHourse(): House {
    return this.house
  }

  public creatWall(): void {
    this.house.addWall(new WallUS())
  }
  public creatWindow(): void {
    this.house.addWindows(new WindowUS())
  }
  public creatDoor(): void {
    this.house.addDoor(new DoorUS())
  }
}

export default BuildUS