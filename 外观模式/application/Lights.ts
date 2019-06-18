class Light {
  public static instance: Light = null

  public static getInstance(): Light {
    if (this.instance == null) {
      this.instance = new Light()
    }
    return this.instance
  }

  public on(): void {
    console.log('打开电灯')
  }
  public off(): void {
    console.log('关闭电灯')
  }
}

export default Light
