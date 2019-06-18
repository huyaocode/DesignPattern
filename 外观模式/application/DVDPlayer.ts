class DVDPlayer {
  public static instance: DVDPlayer = null

  public static getInstance(): DVDPlayer {
    if (this.instance == null) {
      this.instance = new DVDPlayer()
    }
    return this.instance
  }

  public on(): void {
    console.log('DVD打开')
  }
  public off(): void {
    console.log('DVD关闭')
  }
}

export default DVDPlayer
