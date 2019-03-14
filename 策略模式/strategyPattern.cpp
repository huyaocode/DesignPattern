#include <iostream>
using namespace std;

// 攻击方式，用抽象类表示
class AttackBehavior{
public:
   virtual ~AttackBehavior(){};
   virtual void attack() = 0;
};

//实现用剑杀敌行为的方法类
class AttackWithSword : public AttackBehavior {
public:
   void attack(){
      std::cout<< ("我用剑杀敌！")<<std::endl;
   }
};
 
class AttackWithFalchion : public AttackBehavior {
public:
   void attack(){
      std::cout<< ("我用青龙偃月刀杀敌！")<<std::endl;
   }
};

class AttackWithFist : public AttackBehavior {
public:
   void attack(){
      std::cout << ("我用拳头杀敌！") << std::endl;
   }
};

/**
 * 武器的简单工厂
 */
class WeaponFactory {
public:
   static AttackBehavior * createWeapon(int type = 2) {
      AttackBehavior *pAttackBehavior;
      switch(type)
      {
         case 1:
            pAttackBehavior = new AttackWithFalchion(); break;
         case 2:
            pAttackBehavior = new AttackWithSword(); break;
         default :
            pAttackBehavior = new AttackWithFist(); break;
      }
      return pAttackBehavior;
   }
};


/**
 * 关二爷类（其实关二爷是一个具体的人了，不应该作为类）
 */
class GuanErYe {

private:
   AttackBehavior *pAttackBehavior; //武器抽象类型指针

public:
   GuanErYe()
   {
      pAttackBehavior = WeaponFactory::createWeapon();   //开局默认创建武器
   }
   // 使用武器
   void performAttack()
   {
      pAttackBehavior->attack();
   }
   // 切换武器
   void setWeapon(int type) {
      pAttackBehavior = WeaponFactory::createWeapon(type);
   }
   // 其他函数
   void riding()
   {
      std::cout<<("骑马。骑马的汉子威武雄壮~")<< std::endl;
   }
};


int main()
{
   AttackBehavior* attack_behavior = new AttackWithSword();

   GuanErYe *erye = new GuanErYe();
   erye->performAttack();
   
   // 关二爷切换装备
   erye->setWeapon(1);
   erye->performAttack();

   return 0;
}