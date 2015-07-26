{{#equal size 0}}
<div class="c_mobile_valid">
	<dl class="c_tel_info" style="margin-top:0;">
	<form action="/member_borrow/account/setNewQuestion.html" method="post" id="setform">
		<dd style="margin-bottom:20px;">
			<div class="loanToDate common">
				<label class="leftLabel"  style="float:left;margin:0;">选择密保问题</label>
				<div class="dates">
					<span class="sely" id="jiek" style="height:28px;width:240px;line-height:28px;padding:4px 5px;margin-left: 10px;">请选择密保问题</span><b class="se_liy" style="right:-5px;"></b>
					<ul class="loan_typey" style="width: 240px;padding: 4px 5px;display: none;margin-left: 10px;top: 47px;">
						{{#each list}}
							<li data-val="{{id}}">{{name}}?</li>
						{{/each}}
					</ul>
				</div>
			</div>
		</dd>
		<input type="hidden" id="uqueid" name="quid1" />
		<dd><label style="display:inline-block;width:84px;text-align:right;">回答</label>
		<input type="text" name="answer1" class="c_qa" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/><span class="c_qa_msg" style="width:294px;" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"></span></dd>
		<dd><input type="button" class="c_mobile_confirm setque" value="确认"></dd>
	</form>
	</dl>
</div>
<div class="c_mobile_valid" style="display:none;">
	<ul class="c_mobile_step">
		<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
		<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left:12px;">修改密保</div></i><b></b></li>
		<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">修改成功</div></li>
		<div class="c_clear"></div>
	</ul>
	<div class="c_pwd_success">密保设置成功<a href="/member/useridentify/identify.html">返回账户设置</a></div>
</div> 
{{else}}
<!-- 第一步 -->
<div class="c_mobile_valid">
	<ul class="c_mobile_step">
		<li class="c_step_this" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
		<li class="c_step_two "><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text"  style="left:12px;">修改密保</div></i><b></b></li>
		<li class="c_step_last"><span>3</span><div class="c_flow_text">修改成功</div></li>
		<div class="c_clear"></div>
	</ul>
	<dl class="c_tel_info" style="margin-top:60px;">
		<dd style="margin-bottom:20px;">
		<label style="display:inline-block;width:84px;text-align:right;margin-right: 16px;">密保问题</label>
			{{#each questionlist}}
				<input type="hidden" id="cqueid" value="{{id}}">
				<i style="font-style:normal;">{{question}}?</i>
			{{/each}}
		</dd>
		<dd><label style="display:inline-block;width:84px;text-align:right;">回答</label><input type="text" id="cqanswer" name="answer1" class="c_qa" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/><span class="c_qa_msg" style="width:294px;"></span></dd>
		<dd><input type="submit" class="c_mobile_confirm quesub" value="确认"></dd>
	</dl>
</div>
<!-- 第二步 -->
<div class="c_mobile_valid" style="display:none;">
	<ul class="c_mobile_step">
		<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
		<li class="c_step_two c_step_this"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text"  style="left:12px;">修改密保</div></i><b></b></li>
		<li class="c_step_last"><span>3</span><div class="c_flow_text">修改成功</div></li>
		<div class="c_clear"></div>
	</ul>
	<dl class="c_tel_info" style="margin-top: 60px;">
			<input type="hidden" id="uqueid" name="quid1" />
			<dd style="margin-bottom:20px;">
				<div class="loanToDate common">
					<label class="leftLabel"  style="float:left;margin:0;">选择密保问题</label>
					<div class="dates">
						<span class="sely" id="jiek" style="height:28px;width:240px;line-height:28px;padding:4px 5px;margin-left: 10px;">请选择密保问题</span><b class="se_liy" style="right:-5px;"></b>
						<ul class="loan_typey" style="width: 240px;padding: 4px 5px;display: none;margin-left: 10px;top: 47px;">
							{{#each list}}
								<li data-val="{{id}}">{{name}}?</li>
							{{/each}}
						</ul>
					</div>
				</div>
			</dd>
			<dd><label style="display:inline-block;width:84px;text-align:right;">回答</label><input type="text" id="uqanswer" class="c_qa" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')"/><span class="c_qa_msg" style="width:294px;"></span></dd>
			<dd><input type="submit" class="c_mobile_confirm uquesub" value="确认"></dd>
	</dl>
</div>
<!-- 第三步 -->
<div class="c_mobile_valid" style="display:none;">
	<ul class="c_mobile_step">
		<li class="" style="width:310px;"><span>1</span><div class="c_flow_text">验证身份</div><b style="width: 280px;left: 48px;"></b><div class="c_clear"></div></li>
		<li class="c_step_two"><span>2</span><i style="font-style:normal;margin-left: 12px;"><div class="c_flow_text" style="left:12px;">修改密保</div></i><b></b></li>
		<li class="c_step_last c_step_this"><span>3</span><div class="c_flow_text">修改成功</div></li>
		<div class="c_clear"></div>
	</ul>
	<div class="c_pwd_success">密保修改成功<a href="/member/useridentify/identify.html">返回账户设置</a></div>
</div> 
{{/equal}}
