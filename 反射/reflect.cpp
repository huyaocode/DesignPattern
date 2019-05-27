#include<iostream>
#include<map>
#include<string>
using namespace std;

class Shape {
public:
  virtual void draw()=0;
};

class CRect : public Shape {
  void draw() {
    cout << "this is rect" << endl;
  }
};

class CCircle : public Shape {
  void draw() {
    cout << "this is Circle" << endl;
  }
};

// 创建
Shape* CreateRect() {
  return new CRect();
}

Shape* CreateCircle() {
  return new CCircle();
}

typedef Shape*(*fn_CreateShape)(void);

int main() {

  map<string, fn_CreateShape> ShapeCreatorMap;
  ShapeCreatorMap.insert(pair<string, fn_CreateShape>("CRect", CreateRect));
  ShapeCreatorMap.insert(pair<string, fn_CreateShape>("CCircle", CreateCircle));

  Shape* pSh = NULL;
  string strClassName;
  cin >> strClassName;

  map<string, fn_CreateShape>::const_iterator itr = ShapeCreatorMap.find(strClassName);

  if(itr == ShapeCreatorMap.end()) {
    return 0;
  } else {
    pSh = itr->second();  // 这个second 就是插入时的第二个参数
    pSh->draw();
  }

  return 0;
}

/**
 * 1. 编写,调试通过
 * 2. 分模块， 函数
 * 3. OO设计模式，封装工厂，单利工厂
 * 4. 怎样用工厂类来代替全局的工厂函数
 * Class FactoryRect {
 *    CRect* CreteRect() {
 *      return new CRect();
 *    }
 * }
 * 
 * 5. 代码可以用宏定义减少代码重复工作么？
 * 6. 如何操作成员变量
 * 
 */
