<form class="y_forms" action="/member_borrow/security/borrowModifyPwd.html" method="post" id="pwd_forms">
		<label class="y_input_top_font" style='color:#e86969'>8-16个字符，建议使用字母加数字或符号的组合密码</label><br/>
		<div><label class="y_input_label">当前密码</label><input type="password" name="password" class="y_input_now" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/><span class="y_spans"><div></div></span></div>
		<div><label class="y_input_label">新密码</label><input type="password" name="newPwd" id="newPwd" class="y_input_new" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/><span class="y_spans"><div></div></span></div>
		<div><label class="y_input_label">确认密码</label><input type="password" name="confirmNewPwd"  class="y_input_new_yes" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/><span class="y_spans"><div></div></span></div>
		<div><input type="submit" value="确认" class="y_submits"/></div>
		
</form>