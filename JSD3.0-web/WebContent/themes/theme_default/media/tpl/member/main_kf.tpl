<div class="MemberCenter_con3_right">
	{{#if kefu}}
		<a target="_blank" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=938029566" title="联系客服">
			<img style="margin-left:20px;margin-bottom:19px;width:156px;height:153px;" src="{{urlAddNew url kefu.path}}">
		</a>
		<ul><!-- // JSDP-126 20150519 sxy start -->
			<li class="y_service_names" style="margin-left: 11px;"><a style="color: #0697da;" target="_blank" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=938029566" title="联系客服">联系我 {{kefu.no}}</a></li>
			{{#if haveRecorde}}
				<li class="y_service_names2">{{{changeKf cstatus}}}</li>
			{{else}}
				<li class="y_service_names2"><span style="padding-left:10px;"></span><span style="padding-left:10px;"></span><a hidefocus href="javascript:;" class="c_cf_re c_cf_re2">更换</a></li>
			{{/if}}
		</ul>
		<div class="c_clear"></div>
	{{else}}
		<img style="margin-left:20px;margin-bottom:19px;width:156px;height:153px;" src="{{url}}/images/MemberCenter/MemberCenter_05.jpg">
		<ul>
			<li class="y_service_names changekf" style="width:160px;border:none;cursor:pointer;text-align:center;">选择客服</li>
		</ul>
	{{/if}}
	<a href="/member/recharge/newRecharge.html" hidefocus class="y_service_namesrecharge">充值</a>
	<a href="/member/cash/newCash.html" hidefocus class="y_service_namesdeposit">提现</a>
</div>
