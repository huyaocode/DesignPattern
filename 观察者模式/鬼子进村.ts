import MyEvent from './Event'

const myEvent = new MyEvent();

// 小明订阅消息
myEvent.listen('squareMeter88', function(price, s) {

  console.log('价格= ' + price + ' ' + s)
})


myEvent.listen('squareMeter100', function(price, s) {
  // 小红订阅消息
  console.log('价格= ' + price + ' ' + s)
})



myEvent.trigger('squareMeter88', 2000000, 'asdf') // 输出： 2000000
myEvent.trigger('squareMeter100', 3000000, 'asdfasdf') // 输出： 3000000
