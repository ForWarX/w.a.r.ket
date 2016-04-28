<?php

define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(ROOT_PATH . 'includes/lib_order.php');
if ((DEBUG_MODE & 2) != 2)
{
    $smarty->caching = true;
}

$smarty->display('b2b.dwt'); //diaplay



