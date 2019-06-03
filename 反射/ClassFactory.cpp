#include "ClassFactory.h"

// 单例指针
ClassFactory* ClassFactory::cf = NULL;

// 获取单例
ClassFactory* ClassFactory::getInstance() {
		if (cf == nullptr) {
			cf = new ClassFactory;
		}
		return cf;
	}

// 写入map
void ClassFactory::registerClass(string className, fn_create fn) {
	classMap[className] = fn;
}

// 从map中得到对应类
void* ClassFactory::getClassByName(string name) {
	map<string, fn_create>::const_iterator it = classMap.find(name);
	if (it == classMap.end()) {
		cout << "没有这个类: " + name << endl;
		return NULL;
	}
	// second为写入map时的value值
	fn_create fn = it->second;

	return fn == NULL ? NULL : fn();
}

ClassFactory::ClassFactory() {}

ClassFactory::~ClassFactory() {}