<?php

function remove_head_eng($str){
		
		if($str == ''){$str = '';return $str;}
		$lower = strtolower($str);
		$split = str_split($lower);
		$position = 0;
		foreach($split as $value){
			
			$position = $position + 1;
			if(ord($value) > 126 || ord($value) < 32){
				break;
			}
		}
		$count_char = count($split);
		$length = $count_char - $position;
		$str = mb_substr($str, $position-1, $length,'utf8');
		return $str;
	}



function ellipsis($string, $limitation=''){
	
  $defaultstringlimitation = 100; // Define the default limitation of a string //
  if ($limitation == '') {
      $limitation = $defaultstringlimitation;
  }
  $str = $string; //要截取的字符串
  $limitation = $limitation; //要截取的长度
  $strleng = strlen($str); //字符串长度
  if ($limitation > $strleng) return $str; //字符串长度小于规定字数时,返回字符串本身
  $notchinanum = 0; //初始不是汉字的字符数
  for ($i = 0; $i < $limitation; $i++) {
      if (ord(substr($str, $i, 1)) <= 128) {
          $notchinanum++;
      }
  }
  if (($limitation % 2 == 1) && ($notchinanum % 2 == 0)) //如果要截取奇数个字符，所要截取长度范围内的字符必须含奇数个非汉字，否则截取的长度加一
  {
      $limitation++;
  }
  if (($limitation % 2 == 0) && ($notchinanum % 2 == 1)) //如果要截取偶数个字符，所要截取长度范围内的字符必须含偶数个非汉字，否则截取的长度加一
  {
      $limitation++;
  }
  //$str = substr($str,0,$limitation);
  $str = mb_substr($str, 0, $limitation, 'utf8');
  if ($str == $string) {
      return $string;
  } else {
      return $str.
      ' ...';
  }
  
}

function showr($arry){
	if ($arry == ""){$arry = array();}
	print "<pre>";
	print_r ($arry);
	print "</pre>";
	return true;
}



function language_handler($language='',$overwrite=false){

	if ($overwrite === true){
		if ($language == 'en'){$language = '_en';}
		if ($language == 'cht'){$language = '_cht';}
		if (isset($_SESSION['language']) === false){
			if ($language == ""){$_SESSION['language'] = "";}
			else if ($language == 'en'){$_SESSION['language'] = '_en';}
			else if ($language == 'cht'){$_SESSION['language'] = '_cht';}
		}
		else {$_SESSION['language'] = $language;}
	}
	else {
		if (isset($_SESSION['language']) === false){
			if ($language == ""){$_SESSION['language'] = "";}
			else if ($language == 'en'){$_SESSION['language'] = '_en';}
			else if ($language == 'cht'){$_SESSION['language'] = '_cht';}
		}
	}
		
	
	return true;
}

function anonymous_name($str)
{

	//preg_match_all('/./u', $str, $split);
	$split = utf8_str_split($str);
	$strleng = mb_strlen($str,'utf8');
	$temp = '';
	foreach ($split as $key => $value)
	{
		if ($key == 0){$temp = $temp . $value;}
		else
		{	if ($key != $strleng - 1)
			{
				$temp = $temp . '*';
			}
			else
			{
				$temp = $temp . $value;
			}
		}
	}
	return $temp;
}

function utf8_str_split($str='',$len=1){
    preg_match_all("/./u", $str, $arr);
    $arr = array_chunk($arr[0], $len);
    $arr = array_map('implode', $arr);
    return $arr;
}

function remove_ks($name){
	if (strpos($name,'KIRKLAND SIGNATURE柯克兰') !== false){
			return str_replace('KIRKLAND SIGNATURE柯克兰','',$name);
		}
		if (strpos($name,'KIRKLAND柯克兰') !== false){
			return str_replace('KIRKLAND柯克兰','',$name);
		}
		if (strpos($name,'KIRKLAND柯蓝') !== false){
			return str_replace('KIRKLAND柯蓝','',$name);
		}
		if (strpos($name,'柯蓝') !== false){
			return str_replace('柯蓝','',$name);
		}
		if (strpos($name,'柯克兰') !== false){
			return str_replace('柯克兰','',$name);
		}
		if (strpos($name,'KIRKLAND SUNSWEET') !== false){
			return str_replace('KIRKLAND SUNSWEET','',$name);
		}
		return $name; 
}

/**
 * 把obj转换成数组
 * @param $obj
 * @return array
 */
function object_to_array($obj) {
	$arr = is_object($obj) ? get_object_vars($obj) : $obj;
	if (is_array($arr)) {
		return array_map(__FUNCTION__, $arr);
	} else {
		return $arr;
	}
}
?>