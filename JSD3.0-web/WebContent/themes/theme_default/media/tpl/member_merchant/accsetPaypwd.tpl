{{#if result}}
<form class="y_forms" action="/member_borrow/security/modifyPaypwd.html" method="post" id="paypwdadd_forms">
	<label class="y_input_top_font"  style='color:#e86969'>8-16个字符，建议使用字母加数字或符号的组合密码</label><br/>
	<div><label class="y_input_label">新密码</label><input type="password" name="newPayPwd" id="newPayPwd" class="y_input_new"/><span class="y_spans"><div></div></span></div>
	<div><label class="y_input_label">确认密码</label><input type="password" name="confirmNewPayPwd"  class="y_input_new_yes"/><span class="y_spans"><div></div></span></div>
	<div><input type="submit" value="确认" class="y_submits" style="margin-right:140px;"/></div>
</form>
{{else}}
<form class="y_forms" action="/member_borrow/security/modifyPaypwd.html" method="post" id="paypwdupdate_forms">
	<label class="y_input_top_font" style='color:#e86969'>8-16个字符，建议使用字母加数字或符号的组合密码</label><br/>
	<div><label class="y_input_label">当前密码</label><input type="password" name="paypwd" class="y_input_now"/><span class="y_spans"><div></div></span></div>
	<div><label class="y_input_label">新密码</label><input type="password" name="newPayPwd" id="newPayPwd" class="y_input_new"/><span class="y_spans"><div></div></span></div>
	<div><label class="y_input_label">确认密码</label><input type="password" name="confirmNewPayPwd"  class="y_input_new_yes"/><span class="y_spans"><div></div></span></div>
	<div><input type="submit" value="确认" class="y_submits" style="margin-right:140px;"/><i class="c_find">找回交易密码</i></div>
</form>
{{/if}}
