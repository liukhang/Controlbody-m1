<?php
 
class Lkcode_MySuccess_Block_Index extends Mage_Core_Block_Template
{
 	public function _prepareLayout()
 	{ 
     	return parent::_prepareLayout();
 	}
    public function sayWorld()
    {
        return "Hello, World!";
    }
 
}