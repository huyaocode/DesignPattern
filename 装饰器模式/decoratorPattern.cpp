#include <iostream>
#include <string>
using namespace std;

//定义各原料的价格
const int BREAD_PRICE = 3;
const int BEEF_PRICE = 10;
const int CHIKEN_PRICE = 8;
 
// 汉堡 - 抽象
class Hamburger {
protected:
	string description;
public:
	virtual string getDescription() {//这里virtual不能省，不然找不到上一级的Hamburger的了
		return description;
	}
	virtual int cost() = 0;
};

/**
 * 原料装饰器
 */
class MaterialDecorator : public Hamburger {
protected:
	Hamburger *hamburger; //这个指针，用于回溯之前已经存在的内容
};


//其构造函数皆没有*hamburger; 也就是说，这个类只能作为基础，不能作为叠加上去的配件。
class Bread : public Hamburger {
public:
	Bread(){ 
		description = "面包片"; 
	}
	int cost(){ 
		return BREAD_PRICE; 
	}
};
 
//对比起上述“基类”，这两种东西构造函数皆存在Hamburger *hamburger; 他们就可以叠加
class Beef : public MaterialDecorator {//牛肉
public:
	Beef(Hamburger* hamburger){ 
		this->hamburger = hamburger; 
	}
	string getDescription(){ 
		return hamburger->getDescription()+", 牛肉"; 
	}
	int cost(){ 
		return BEEF_PRICE+hamburger->cost(); 
	}
};

//鸡肉
class Chiken : public MaterialDecorator {  
public:
	Chiken(Hamburger* hamburger){
		this->hamburger=hamburger; 
	}
	string getDescription() {
		return hamburger->getDescription()+", 鸡肉"; 
	}
	int cost() { 
		return CHIKEN_PRICE + hamburger->cost(); 
	}
};
 
//主函数
int main() {
  
	Hamburger* hamburger = new Bread();

  // 先加个牛肉
	hamburger = new Beef(hamburger);
  cout << hamburger->getDescription() << "  ￥:" << hamburger->cost() << endl;
  // 再加个鸡肉
	hamburger = new Chiken(hamburger);
	cout << hamburger->getDescription() << "  ￥:" << hamburger->cost() << endl;
  // 再加个鸡肉
	hamburger = new Chiken(hamburger);
	cout << hamburger->getDescription() << "  ￥:" << hamburger->cost() << endl;

	return 0;
}