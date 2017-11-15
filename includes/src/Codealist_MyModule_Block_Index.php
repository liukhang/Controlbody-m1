<?php
 
class Codealist_MyModule_Block_Index extends Mage_Core_Block_Template
{
 	public function _prepareLayout()
 	{ 
     	return parent::_prepareLayout();
 	}
    public function sayHelloWorld()
    {
        return "Hello, World!";
    }
 
}