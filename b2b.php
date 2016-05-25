<?php

define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(ROOT_PATH . 'includes/lib_order.php');
if ((DEBUG_MODE & 2) != 2)
{
    $smarty->caching = true;
}
//导航
assign_template();

//分类树
$cat_arry = get_left_goods_nav($cat_id,1,true);//type: 0 means its based on sub_cat_id, 1 means its based on cat_id,true:only show the is_show == 1
$smarty->assign('categories',       $cat_arry); // 分类树

$smarty->display('b2b.dwt'); //diaplay


