import Director from './Director'
import BuildEU from '../build/BuildEU'
import House from '../House'

class DirectorEU extends Director {
  windowNum: number = 2
	wallNum: number = 4
	
  constructor() {
    super()
    this.build = new BuildEU()
  }

  public construct(): House {
    console.log('建造欧式房子')

    this.build.creatDoor()
    for (let i = 0; i < this.windowNum; i++) {
      this.build.creatWindow()
    }
    for (let i = 0; i < this.wallNum; i++) {
      this.build.creatWall()
    }

    return this.build.getHourse()
  }
}

export default DirectorEU