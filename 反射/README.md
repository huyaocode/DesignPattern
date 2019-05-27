# 反射

### 简单工厂
ShapeFactory  
简单工厂中有很多case
 - case 1...n
 - new CRect, new CCircle, new Triangle


### factory Pattern
new FactoryRect,  new FactoryCircle

```cpp
void main() {
  // 简单工厂（用switch Case）
  ShapeFactory Sh = new ShapeFactory();
  CRect rc = sh->CreateShape(0);
  // 抽象工厂 
  FactoryRect frc = new FacrotyRect();
  CRect = frc->CreateShape();

  //反射
  String ClassName;
  cin >> ClassName; // 'Rect'
  CShape rc = new ClassName;
  // 但上面的输入不能随便输入，用一个配置文件
  // *.ini *.json *.xml
  ID  className
  1   CRect
  2   CCircle
  3   CTriangle

}
```

好处： 拓展但不变代码

### 目标
建立下面对应关系：
```
"CRect":    CreateRect{return new Crect();}
"CCircle":    CreateCircle{return new CCircle();}
```

在C++中使用map 来实现这种映射
```
Map<key, value> m_map;
m_map.inset(k1,v1);
```

相关知识点：
```cpp
//  哈希表 map  ：类名与类创建的映射
//  函数指针    ：返回值（函数指针名字*）（参数列表）

int Add(int a, int b);

typedef int (fn_ptr_add*)(int, int);

fn_ptr_add fnAdd = Add;
fnAdd(2, 5);
```

```cpp
Class CRect {
  void draw() {
    cout << "this is rect" << endl;
  }
}

Class FactoryRect {
  // 编译后 CRect* CreateRect(const FactoryRect* this)
  CRect* CreateRect() {
    return new CRect();
  }
}

typedef CRect* (fn_CreateRect*)(void);

// 绕过方法
CRect* CreateRect() {
  return new CRect();
}

void main() {

  Map<string, fn_CreateRect> ShapeCreatorMap;
  ShapeCreatotMap.insert(pair<string, fn_CreatRect>("CRect", CreateRect))


  CRect rc = new CRect();
  rc.draw();
}
```