import Director from './Director'
import BuildCN from '../build/BuildCN'
import House from '../House'

class DirectorCN extends Director {
  windowNum: number = 2
	wallNum: number = 4
	
  constructor() {
    super()
    this.build = new BuildCN()
  }

  public construct(): House {
    console.log('建造中式房子')

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

export default DirectorCN