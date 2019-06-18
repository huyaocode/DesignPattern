import Door from "./components/door/Door";
import Wall from "./components/wall/Wall";
import Windows from "./components/window/Window";

class House {
  private door: Array<Door> = []
  private wall: Array<Wall> = []
  private windows: Array<Windows> = []

  public addDoor(door: Door): void {
    this.door.push(door)
  }
  public addWall(wall: Wall): void {
    this.wall.push(wall)
  }
  public addWindows(windows: Windows): void {
    this.windows.push(windows)
  }
}

export default House
