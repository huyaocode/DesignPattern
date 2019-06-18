import DVDPlayer from './application/DVDPlayer'
import Light from './application/Lights'
import Popcorn from './application/Popcorn'

class HomeThreaterFacade {
  private dvdPlayer: DVDPlayer
  private light: Light
  private popcorn: Popcorn

  constructor() {
    this.dvdPlayer = new DVDPlayer()
    this.light = new Light()
    this.popcorn = new Popcorn()
  }

  ready(): void {
    console.log('开始播放电影!')
    this.popcorn.get()
    this.light.off()
    this.dvdPlayer.on()
  }

  end(): void {
    console.log('电影播放完了。')
    this.light.on()
    this.dvdPlayer.off()
    this.popcorn.off()
  }
}

export default HomeThreaterFacade
