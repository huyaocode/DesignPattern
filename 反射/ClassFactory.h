
#include<functional>
#include <string>
#include <map>

typedef function<void* ()> fn_create;

class ClassFactory
{
private:
	map<string, fn_create> classMap;
	static ClassFactory *cf;
public:
	// 根据类名得到对应类
	void* getClassByName(string name);

	// 注册类的映射
	void registerClass(string className, fn_create fn);

	// 单例工厂
	static ClassFactory* getInstance();

	ClassFactory();
	~ClassFactory();
};
