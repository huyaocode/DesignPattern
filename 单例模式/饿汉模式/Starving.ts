class Singleton {
  private static instance: Singleton = new Singleton()
  constructor() {
    console.log('懒汉单例')
  }
  public static getInstance() {
    return Singleton.instance
  }
}

export default Singleton
