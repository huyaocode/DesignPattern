/**
 * 注册映射
 */

#include "ClassFactory.cpp"
#include "CRect.h"
#include "CCircle.h"

Shape *CreateCRect()
{
  return new CRect();
}

Shape *CreateCCircle()
{
  return new CCircle();
}

void registerClass()
{
  ClassFactory *cf = ClassFactory::getInstance();
  cf->registerClass("CRect", CreateCRect);
  cf->registerClass("CCircle", CreateCCircle);
}