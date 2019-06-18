import Observer from './IObserver';


class MyEvent {
  // 存储事件于其回调函数
   static clientList: {
    [propName: string]: Array<Observer>
  } = {}

  // 监听事件，为事件名添加回调函数
  listen(eventName: string, observer: Observer): void {
    if (!MyEvent.clientList[eventName]) {
      MyEvent.clientList[eventName] = []
    }
    MyEvent.clientList[eventName].push(observer) // 订阅的消息添加进缓存列表
  }

  // 出发某事件，调用其所有的回调函数
  trigger(eventName, ...args): boolean {
    var observers = MyEvent.clientList[eventName]
    if (!observers || observers.length === 0) {
      // 如果没有绑定对应的消息
      return false
    }
    for (var i = 0, observer; (observer = observers[i++]); ) {
      observer.update.apply(observer, args)
    }
    return true
  }

  // 为某个事件移除一个监听对象
  remove(eventName: string, observer: Observer): void {
    var observers = MyEvent.clientList[eventName]
    if (!observers) {
      // 如果 eventName 对应的消息没有被人订阅，则直接返回
      return
    }
    if (!observer) {
      // 如果没有传入具体的回调函数，表示需要取消 eventName 对应消息的所有订阅
      observers && (observers.length = 0)
    } else {
      for (var l = observers.length - 1; l >= 0; l--) {
        // 反向遍历订阅的回调函数列表
        var _observer = observers[l]
        if (_observer === observer) {
          observers.splice(l, 1) // 删除订阅者的回调函数
        }
      }
    }
  }
}

export default MyEvent
