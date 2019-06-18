import EN_Sokect from './EN_Socket'
import CN_Sokect from './CN_Socket'

class EN_Adapter implements EN_Sokect {
  private cnSokect: CN_Sokect
  constructor(cnSoket: CN_Sokect) {
    this.cnSokect = cnSoket
  }
  power(): void {
    this.cnSokect.power();
  }
}

export default EN_Adapter