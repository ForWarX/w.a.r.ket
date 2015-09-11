<?php 
 
/**
 * ECSHOP 
 * ============================================================================
 * * 2005-2012 
 * : http://www.ecshop.com
 * ----------------------------------------------------------------------------
 * 
 * 
 * ============================================================================
 * $Author: liubo $
 * $Id: fedex.php 17217 2011-01-19 06:29:08Z liubo $
 */

if (!defined('IN_ECS'))
{
    die('Hacking attempt');
}

$shipping_lang = ROOT_PATH.'languages/' .$GLOBALS['_CFG']['lang']. '/shipping/fedex.php';
if (file_exists($shipping_lang))
{
    global $_LANG;
    include_once($shipping_lang);
}


/* */
if (isset($set_modules) && $set_modules == TRUE)
{
    include_once(ROOT_PATH . 'languages/' . $GLOBALS['_CFG']['lang'] . '/admin/shipping.php');

    $i = (isset($modules)) ? count($modules) : 0;

    /* */
    $modules[$i]['code']    = basename(__FILE__, '.php');

    $modules[$i]['version'] = '1.0.0';

    /*  */
    $modules[$i]['desc']    = 'fedex_desc';

    /* */
    $modules[$i]['cod']     = false;

    /* */
    $modules[$i]['author']  = 'ECSHOP TEAM';

    /*  */
    $modules[$i]['website'] = 'http://www.ecshop.com';

    /*  */
    $modules[$i]['configure'] = array(
                                    array('name' => 'item_fee',     'value'=>15), /* */
                                    array('name' => 'base_fee',    'value'=>15), /* 1000           */
                                    array('name' => 'step_fee',     'value'=>5),  /* 000 */
                                );

    /* */
    $modules[$i]['print_model'] = 2;

    /* */
    $modules[$i]['print_bg'] = '/images/receipt/dly_fedex.jpg';

   /*  */
    $modules[$i]['config_lable'] = 't_shop_address,' . $_LANG['lable_box']['shop_address'] . ',235,48,131,152,b_shop_address||,||t_shop_name,' . $_LANG['lable_box']['shop_name'] . ',237,26,131,200,b_shop_name||,||t_shop_tel,' . $_LANG['lable_box']['shop_tel'] . ',96,36,144,257,b_shop_tel||,||t_customer_post,' . $_LANG['lable_box']['customer_post'] . ',86,23,578,268,b_customer_post||,||t_customer_address,' . $_LANG['lable_box']['customer_address'] . ',232,49,434,149,b_customer_address||,||t_customer_name,' . $_LANG['lable_box']['customer_name'] . ',151,27,449,231,b_customer_name||,||t_customer_tel,' . $_LANG['lable_box']['customer_tel'] . ',90,32,452,261,b_customer_tel||,||';

    return;
}

/**
 * 
 * ====================================================================================
 * - 115 -6 
 * - :    118 -6 
 * - 000
 * - (http://www.car365.cn/fee.asp :021-52238886)
 * -------------------------------------------------------------------------------------
 *
 */
class fedex
{
    /*------------------------------------------------------ */
    //-- PUBLIC ATTRIBUTEs
    /*------------------------------------------------------ */

    /**
     * 
     */
    var $configure;

    /*------------------------------------------------------ */
    //-- PUBLIC METHODs
    /*------------------------------------------------------ */

    /**
     * 
     *
     * @param: $configure[array]    
     *
     * @return null
     */
    function fedex($cfg=array())
    {
        foreach ($cfg AS $key=>$val)
        {
            $this->configure[$val['name']] = $val['value'];
        }
    }

    /**
     * 
     *
     * @param   float   $goods_weight   
     * @param   float   $goods_amount   
     * @param   float   $goods_amount   
     * @return  decimal
     */
    function calculate($goods_weight, $goods_amount, $goods_number)
    {
		if ($goods_amount < 49){
			return 10;
		}
		else
		{
			return 0;
		}
        if ($this->configure['free_money'] > 0 && $goods_amount >= $this->configure['free_money'])
        {
            return 0;
        }
        else
        {
            @$fee = $this->configure['base_fee'];
            $this->configure['fee_compute_mode'] = !empty($this->configure['fee_compute_mode']) ? $this->configure['fee_compute_mode'] : 'by_weight';

             if ($this->configure['fee_compute_mode'] == 'by_number')
            {
                $fee = $goods_number * $this->configure['item_fee'];
            }
            else
            {
                if ($goods_weight > 1)
                {
                    $fee += (ceil(($goods_weight - 1))) * $this->configure['step_fee'];
                }
            }
$fee = 0; 
            return $fee;
        }
    }

    /**
     * 
     *
     * @access  public
     * @param   string  $invoice_sn     
     * @return  string  
     */
    function query($invoice_sn)
    {
        $str = '<form style="margin:0px" methods="post" '.
            'action="http://115.238.100.211:8081/result.aspx" name="queryForm_' .$invoice_sn. '" target="_blank">'.
            '<input type="hidden" name="wen" value="' .str_replace("<br>","\n",$invoice_sn). '" />'.
            '<a href="javascript:document.forms[\'queryForm_' .$invoice_sn. '\'].submit();">' .$invoice_sn. '</a>'.
            '</form>';

        return $str;
    }
}

?>