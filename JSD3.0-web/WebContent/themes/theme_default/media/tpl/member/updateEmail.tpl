	<div class="c_by_way2">
									<!-- 第一步 -->
									<div class="c_mobile_valid" style="display:block;">
										<ul class="c_mobile_step">
											<li class="c_step_this" style="width:310px;"><span>1</span><div class="c_flow_text">验证邮箱</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
											<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 14px;">修改邮箱</div></i><b></b></li>
											<li class="c_step_last"><span>3</span><div class="c_flow_text">修改成功</div></li>
											<div class="c_clear"></div>
										</ul>
										<div class="c_mobile_info" style="width:690px;margin-left:0;">我们给您的邮箱<a href="javascript:void(0);" style="color:#0697da;display:inline;" class="userEmail">{{user.email}}</a>发送了一封验证邮件,请获取验证码，完成邮箱验证。
										</div>
										<div class="c_send_success">
											<label style="float:left;">邮箱验证码：</label><input type="text" id="upemailcode" class="c_email_input" style="float:left;"  onkeyup="this.value=this.value.replace(/^ +| +$/g,'')">
											<span class="c_get_code oldsendEmail" style="float: left;margin-left:0px;margin-top: 3px;">获取邮件验证码</span>
											<i style="float:right; line-height: 38px;margin-right: 90px;color:#e86969;" class="update_email_11"></i>
											<div class="c_clear"></div>
										</div>
										<div class="c_go_look"><input type="button" class="c_mobile_confirm upemail_next" value="下一步"></div>
									</div>
									<!-- 第二步 -->
									<div class="c_mobile_valid" style="display:none;">
										<ul class="c_mobile_step">
											<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证邮箱</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
											<li class="c_step_two c_step_this"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 14px;">修改邮箱</div></i><b></b></li>
											<li class="c_step_last"><span>3</span><div class="c_flow_text">修改成功</div></li>
											<div class="c_clear"></div>
										</ul>
										<div class="c_mobile_info" style="width:690px;margin-left:0;">原邮箱已验证通过，请填写您的新邮箱</div>
										<dl class="c_tel_info" style="margin-top:40px;">
											<dd>
												<label style="display:inline-block;width:84px;text-align:right;float:left;">新邮箱</label><input type="text" class="c_email_number" style="float:left;" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/>
												<span class="c_email_msg" style="float:left;width:280px;color: #e86969;"></span>
												<div class="c_clear"></div>
											</dd>
											<dd class="c_send_success" style="margin-left: 0;margin-top: 20px;">
												<label style="display:inline-block;width:84px;text-align:right;float:left;">邮箱验证码</label><input type="text" id="newEmailcode" class="c_email_input" style="float:left;" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')">
												<span class="c_get_code newsendEmail" style="float: left;margin-left:0px;margin-top: 3px;">获取邮件验证码</span>
												<i style="float:right; line-height: 38px;margin-right: 70px;color:#e86969;" class="update_email_12"></i>
												<div class="c_clear"></div>
											</dd>
											<dd><input type="button" class="c_mobile_confirm upNewEmail" value="更换"></dd>
										</dl>
									</div>
									<!-- 第三步 -->
									<div class="c_mobile_valid" style="display:none;">
										<ul class="c_mobile_step">
											<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证邮箱</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
											<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left:12px;">修改邮箱</div></i><b></b></li>
											<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">修改成功</div></li>
											<div class="c_clear"></div>
										</ul>
										<div class="c_pwd_success">邮箱修改成功<a href="/member/useridentify/identify.html">返回账户设置</a></div>
									</div>
								</div>
								<!-- 通过手机找回 -->
								<div class="c_by_way2" style="display:none;">
									<!-- 第一步 -->
									<div class="c_mobile_valid">
											<ul class="c_mobile_step">
												<li class="c_step_this" style="width:310px;"><span>1</span><div class="c_flow_text">验证手机</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
												<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 14px;">修改邮箱</div></i><b></b></li>
												<li class="c_step_last"><span>3</span><div class="c_flow_text">修改成功</div></li>
												<div class="c_clear"></div>
											</ul>
											<dl class="c_tel_info c_account_tel">
												<dd>
													<label style="float:left;">手机号码</label>
													<span class="c_telphone">{{user.mobilePhone}}</span>
												</dd>
												<dd>
													<label style="float:left;">验&nbsp;&nbsp;证&nbsp;码</label>
													<input type="text" class="c_code_msg" id="upEmobilecode" style="margin-right: 10px;float:left;" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/>
													<span class="c_get_code c_get_msgs upEgetcode" style="float: left;margin-top: 3px;">获取短信验证码</span>
													<i style="float:right; line-height: 38px;margin-right: 50px;color:#e86969;"  class="update_email_21"></i>
													<div class="c_clear"></div>
												</dd>
												<dd style="display:none;font-size:12px;padding-left: 76px;height: 30px;margin-top: 6px;padding-left: 60px;line-height: 16px;"><i class="c_valid_instruc" style="margin:0;"></i>验证码已发送到您的手机，2分钟内输入有效，请勿泄露。</dd>
												<dd><input type="button" class="c_mobile_confirm upEmobile_next" value="下一步" style="margin-left:80px;"></dd>
												<dd style="margin-top:40px;padding: 0;"><span style="color:#0697da;margin:0;">温馨提示：</span>若您收不到短信或手机号码已停止使用，可点此联系客服：<a style="color:#005ea7;cursor:pointer;" onclick="javascript:window.open('http://b.qq.com/webc.htm?new=0&sid=4000803000&eid=218808P8z8p8K808R8x8x&o=&q=7&ref='+document.location, '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');">联系客服</a>申请人工更换绑定手机</dd>
											</dl>
									</div>
									<!-- 第二步 -->
									<div class="c_mobile_valid" style="display:none;">
										<ul class="c_mobile_step">
											<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证手机</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
											<li class="c_step_two c_step_this"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left: 14px;">修改邮箱</div></i><b></b></li>
											<li class="c_step_last"><span>3</span><div class="c_flow_text">修改成功</div></li>
											<div class="c_clear"></div>
										</ul>
										<div class="c_mobile_info" style="width:690px;margin-left:0;">手机验证已通过，请填写您的新邮箱</div>
										<dl class="c_tel_info" style="margin-top:40px;">
											<dd><label style="display:inline-block;width:84px;text-align:right;float:left;">新邮箱</label>
											<input type="text" id="upEmailForMA" class="c_email_number" style="float:left;" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/>
											<span class="c_email_msg c_email_msg1" style="color:#e86969;float:left; width:280px;"></span>
											<div class="c_clear"></div>
											</dd>
											<dd class="c_send_success" style="margin-left: 0;margin-top: 20px;">
												<label style="display:inline-block;width:84px;text-align:right;float:left;">邮箱验证码</label>
												<input type="text" id="newMEmailcode" class="c_email_input" style="float:left;" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')">
												<span class="c_get_code newsendEmail3" style="float: left;margin-left:0px;margin-top: 3px;">获取邮件验证码</span>
												<i style="float:right; line-height: 38px;margin-right: 70px;color:#e86969;"  class="update_email_22"></i>
												<div class="c_clear"></div>
											</dd>
											<dd><input type="button" class="c_mobile_confirm upMNewEmail" value="更换"></dd>
										</dl>
									</div>
									<!-- 第三步 -->
									<div class="c_mobile_valid" style="display:none ;">
										<ul class="c_mobile_step">
											<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证手机</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
											<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left:12px;">修改邮箱</div></i><b></b></li>
											<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">修改成功</div></li>
											<div class="c_clear"></div>
										</ul>
										<div class="c_pwd_success">邮箱修改成功<a href="/member/useridentify/identify.html">返回账户设置</a></div>
									</div>
								</div>