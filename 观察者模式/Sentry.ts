import MyEvent from './Event'
/**
 * 哨兵
 */
class Sentry extends MyEvent {

  // 为某个事件添加一个监听对象
  addNotice(eventName: string, observer) {
    this.listen(eventName, observer)
  }
  
  // 为某个事件移除一个监听对象
  removeNotice(eventName: string, observer) {
    this.remove(eventName, observer)
  }
}

export default Sentry
