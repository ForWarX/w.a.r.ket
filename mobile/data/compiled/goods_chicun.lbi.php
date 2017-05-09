<?php if ($this->_var['related_goods']): ?>
<?php $_from = $this->_var['related_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'releated_goods_data');if (count($_from)):
    foreach ($_from AS $this->_var['releated_goods_data']):
?>

   <a style="color:#000; text-decoration:none; outline: 0px none;" rev="images/201405/1400657882250360796.jpg" rel="zoom1"  href="<?php echo $this->_var['releated_goods_data']['url']; ?>" class="catcolor"  onclick="changeAtt(this , 1)" href="<?php echo $this->_var['releated_goods_data']['url']; ?>"><label><?php echo $this->_var['releated_goods_data']['bb_chicun']; ?></label></a>

<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
<?php endif; ?>
