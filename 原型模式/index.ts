/**
 * 继承
 * @param Parent
 * @param Child
 */
function extendsClass(Parent, Child) {
  function F() {}
  F.prototype = Parent.prototype
  Child.prototype = new F()
  Child.prototype.constrctor = Child
  return Child
}

function Animal(name) {
  this.name = name
}
Animal.prototype.getName = function() {
  return this.name
}
Animal.prototype.live = function() {
  console.log('live: 出生到死亡')
}

function Dog(name) {
  this.name = name
}
Dog.prototype.getName = function() {
  return this.name
}

// 原型式继承
extendsClass(Animal, Dog)

const dog = new Dog('旺财');

dog.live();
const dogName =dog.getName();
console.log(dogName)