<?php exit;?>a:3:{s:8:"template";a:1:{i:0;s:58:"/var/www/html/warket/mobile/themes/default/article_cat.dwt";}s:7:"expires";i:1439882915;s:8:"maketime";i:1439879315;}<!DOCTYPE html>
<html>
<head>
<meta name="Generator" content="ECSHOP v2.7.3" />
<meta charset="utf-8" />
<title>网店帮助分类_系统分类_ECTouch企业版演示站 触屏版</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection" content="telephone=no" />
<link href="themes/default/images/touch-icon.png" rel="apple-touch-icon-precomposed" />
<link href="themes/default/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<link href="themes/default/ectouch.css" rel="stylesheet" type="text/css" />
</head>
<body>
<header id="header">
  <div class="header_l header_return"> <a class="ico_10" href="index.php"> 返回 </a> </div>
  <h1> 文章分类 </h1>
  <div class="header_r header_search"> <a class="ico_03"  onClick="showSearch()"> 搜索 </a> </div>
  <div id="search_box">
    <div class="search_box">
      <form action="" name="searchForm" id="searchForm_id" method="post">
        <input placeholder="请输入关键词" name="keywords" type="text" id="keywordBox" value="" />
        <input name="id" type="hidden" value="3" />
        <button class="ico_07" type="submit" onclick="return check('keywordBox')"> </button>
      </form>
    </div>
    <a class="ico_08" onClick="closeSearch()"></a> </div>
</header>
<div class="blank3"></div>
<section class="wrap">
  <div class="list_box padd1 radius10" style="padding-top:0;padding-bottom:0;"> 
     
     
    <a href="article-23.html" class="clearfix"> <span>产品质量保证</span><i></i> </a> 
     
    <a href="article-12.html" class="clearfix"> <span>如何分辨原装电池</span><i></i> </a> 
     
    <a href="article-36.html" class="clearfix"> <span>隐私声明</span><i></i> </a> 
     
    <a href="article-26.html" class="clearfix"> <span>投诉与建议</span><i></i> </a> 
     
    <a href="article-25.html" class="clearfix"> <span>选机咨询</span><i></i> </a> 
     
    <a href="article-24.html" class="clearfix"> <span>网站故障报告</span><i></i> </a> 
     
    <a href="article-22.html" class="clearfix"> <span>售后服务保证</span><i></i> </a> 
     
    <a href="article-21.html" class="clearfix"> <span>退换货原则</span><i></i> </a> 
     
    <a href="article-20.html" class="clearfix"> <span>我的订单</span><i></i> </a> 
     
    <a href="article-19.html" class="clearfix"> <span>我的收藏</span><i></i> </a> 
     
     
  </div>
  
</section>
<script type="text/javascript">
/*头部搜索点击关闭或者弹出搜索框*/  
function showSearch( ){
	document.getElementById("search_box").style.display="block";
}
function closeSearch(){
	document.getElementById("search_box").style.display="none";
}
/* 搜索验证 */
function check(Id){
	var strings = document.getElementById(Id).value;
	if(strings.replace(/(^\s*)|(\s*$)/g, "").length == 0){
		return false;
	}
	return true;
}
</script>
</body>
</html>