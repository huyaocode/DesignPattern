/**
 * 1. 编写,调试通过
 * 2. 分模块， 函数
 * 3. OO设计模式，封装工厂，单利工厂
 */

#include "Shape.h"
#include "register.h"

// 做业务逻辑
void drawShape(ClassFactory *cf, string strClassName) {
	Shape *s = (Shape *)(cf->getClassByName(strClassName));
	if (s != NULL)
		s->draw();
}

int main()
{
	// 注册映射
	registerClass();

	// 从单例工厂中取出
	ClassFactory *cf = ClassFactory::getInstance();

	// 业务逻辑:
	drawShape(cf, "CRect");
	drawShape(cf, "CCircle");
	drawShape(cf, "errorClass");

	return 0;
}
