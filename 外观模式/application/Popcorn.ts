class Popcorn {
  public static instance: Popcorn = null

  public static getInstance(): Popcorn {
    if (this.instance == null) {
      this.instance = new Popcorn()
    }
    return this.instance
  }

  public get(): void {
    console.log('拿爆米花')
  }
  public off(): void {
    console.log('把爆米花收起来')
  }
}

export default Popcorn
