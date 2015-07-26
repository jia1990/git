<!-- 手机 -->
<div class="c_finds">
	<!-- 第一步 -->
	<div class="c_mobile_valid">
		<ul class="c_mobile_step">
			<li class="c_step_this" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<dl class="c_tel_info c_account_tel">
			<dd>
				<label style="float:left;">手机号码</label>
				<span class="c_telphone">{{mobile}}</span>
			</dd>
			<dd>
				<label style="float:left;">验&nbsp;&nbsp;证&nbsp;码</label>
				<span class="c_get_code">获取短信验证码</span>
				<input type="text" id="mobilecode" class="c_code_msg" style="margin-right: 10px;" />
				<b class="c_no_recieve">没收到短信验证码？<a href="" style="color:#0697da;font-size:12px;">再次发送</a></b>
			</dd>
			<dd style="font-size:12px;padding-left: 76px;height: 30px;margin-top: 6px;padding-left: 60px;line-height: 16px;"><i class="c_valid_instruc" style="margin:0;"></i>验证码已发送到您的手机，2分钟内输入有效，请勿泄露。</dd>
			<dd><input type="button" class="c_mobile_confirm mobile_next" value="下一步" style="margin-left:80px;"></dd>
			<dd style="margin-top:40px;padding: 0;"><span style="color:#0697da;margin:0;">温馨提示：</span>若您收不到短信或手机号码已停止使用，可点此联系客服：<a style="color:#005ea7;cursor:pointer;" onclick="javascript:window.open('http://b.qq.com/webc.htm?new=0&sid=4000803000&eid=218808P8z8p8K808R8x8x&o=&q=7&ref='+document.location, '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');">联系客服</a>申请人工更换绑定手机</dd>
		</dl>
	</div>
	<!-- 第二步 -->
   <div class="c_mobile_valid" style="display:none;">
		<ul class="c_mobile_step">
			<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two c_step_this"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<dl class="c_tel_info c_set_pwd">
			<form action="/member_borrow/account/setNewPaypwd.html" id="my_m_form" method="post">
				<dd style="height: 40px;"><label style="float:left;">账户</label><span class="c_telphone" style="color:#0697da;margin:0;">{{mobile}}</span></dd>
				<dd class="c_valid_hide"><label>新交易密码</label><input type="password" id="myMcNewPayPwd" name="newPayPwd" class="c_mobile_pwd"><span class="c_pwd_error"><div>请输入交易密码</div></span></dd>
				<dd class="c_valid_hide"><label>确认交易密码</label><input type="password"  name="confirmNewPayPwd" class="c_mobile_repwd"><span class="c_pwd_error"><div>请再次输入交易密码</div></span></dd>
				<dd><input type="submit" class="c_mobile_confirm" value="确认"></dd>
			</form>
		</dl>
	</div>
	<!-- 第三步 -->
	<div class="c_mobile_valid" style="display:none">
		<ul class="c_mobile_step">
			<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<div class="c_pwd_success">交易密码重置成功<a href="/member_borrow/account/asetpre.html">返回账户设置</a></div>
	</div>
</div>
<!-- 邮箱 -->
<div class="c_finds" style="display:none;">
	<!-- 第一步 -->
	<div class="c_mobile_valid">
		<ul class="c_mobile_step">
			<li class="c_step_this" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<div class="c_mobile_info" style="width:690px;margin-left:0;">您的邮箱为：<a href="" style="color:#0697da;display:inline;">{{email}}</a>，需要发送了一封验证邮件，请获取验证码，完成邮箱验证。<a href="" style="color:#0697da;display:inline;">点此发送邮件</a>
		</div>
		<div class="c_send_success">
			<label>邮箱验证码：</label><input type="text" id="emailcode" class="c_email_input"><a href="javascript:;" class="sendemailmsg" style="color:#0697da;margin-right:10px;">发送邮件</a>
		</div>
		<div class="c_go_look"><input type="button" class="c_mobile_confirm email_next" value="下一步"></div>
	</div>
	<!-- 第二步 -->
	<div class="c_mobile_valid" style="display:none;">
		<ul class="c_mobile_step">
			<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two c_step_this"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<dl class="c_tel_info c_set_pwd">
			<form action="/member_borrow/account/setNewPaypwd.html" id="my_e_form" method="post">
				<dd style="height: 40px;"><label style="float:left;">账户</label><span class="c_telphone" style="color:#0697da;margin:0;">{{email}}</span></dd>
				<dd class="c_valid_hide"><label>新交易密码</label><input type="password" id="myEcNewPayPwd" name="newPayPwd" class="c_mobile_pwd"><span class="c_pwd_error"><div>请输入交易密码</div></span></dd>
				<dd class="c_valid_hide"><label>确认交易密码</label><input type="password" name="confirmNewPayPwd" class="c_mobile_repwd"><span class="c_pwd_error"><div>请再次输入交易密码</div></span></dd>
				<dd><input type="submit" class="c_mobile_confirm" value="确认"></dd>
			</form>
		</dl>
	</div>
	<!-- 第三步 -->
	<div class="c_mobile_valid" style="display:none">
		<ul class="c_mobile_step">
			<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<div class="c_pwd_success">交易密码重置成功<a href="account_index.html">返回账户设置</a></div>
	</div>
</div>
<!-- 密保 -->
<div class="c_finds" style="display:none;">
	<!-- 第一步 -->
	<div class="c_mobile_valid">
		<ul class="c_mobile_step">
			<li class="c_step_this" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<dl class="c_tel_info" style="margin-top:50px;">
			{{#if que}}
				<dd style="margin-bottom:20px;">
					<label style="display:inline-block;width:84px;text-align:right;margin-right: 16px;">密保问题</label>
					<i style="font-style:normal;">您的生日是？</i>
				</dd>
				<dd><label style="display:inline-block;width:84px;text-align:right;">回答</label><input type="text" class="c_qa" /><span class="c_qa_msg"></span></dd>
				<dd><input type="button" class="c_mobile_confirm" value="下一步"></dd>
			{{else}}
				<dd>请先设置密保问题  点击设置</dd>
			{{/if}}
		</dl>
	</div>
	<!-- 第二步 -->
	<div class="c_mobile_valid" style="display:none;">
		<ul class="c_mobile_step">
			<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two c_step_this"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<dl class="c_tel_info c_set_pwd">
			<form>
				<dd style="height: 40px;"><label style="float:left;">账户</label><span class="c_telphone" style="color:#0697da;margin:0;">18734129872</span></dd>
				<dd class="c_valid_hide"><label>新交易密码</label><input type="password" class="c_mobile_pwd"><span class="c_pwd_error">请输入交易密码</span></dd>
				<dd class="c_valid_hide"><label>确认交易密码</label><inputd type="password" class="c_mobile_repwd"><span class="c_pwd_error">请再次输入交易密码</span></dd>
				<dd><input type="button" class="c_mobile_confirm" value="确认"></dd>
			</form>
		</dl>
	</div>
	<!-- 第三步 -->
	<div class="c_mobile_valid" style="display:none;">
		<ul class="c_mobile_step">
			<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
			<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 0;">重置交易密码</div></i><b></b></li>
			<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">找回成功</div></li>
			<div class="c_clear"></div>
		</ul>
		<div class="c_pwd_success">交易密码重置成功<a href="account_index.html">返回账户设置</a></div>
	</div>
</div>