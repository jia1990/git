
	<div class="MemberCenter_con3">
		<div class="MemberCenter_con3_left c_guarantee_index">
			<dl class="c_guarantee_project">
				<dd style="margin-right:22px;">完成订单数<div><span>{{orderCount}}</span>  个</div></dd>
				<dd style="border:none;padding-left: 6px;">账户总金额<div><span>{{{UsableMount}}}</span>  元</div></dd>
				<div class="c_clear"></div>
			</dl>
			<dl class="c_guarantee_money">
				<dd>完成订单项目总金额&nbsp;&nbsp;<span>{{moneyFormat orderMoneyCount}}</span>  元</dd>
				<dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;累计提现金额&nbsp;&nbsp;<span>{{moneyFormat cashTotal}}</span>  元</dd>
				
			</dl>
		</div>
		<div class="MemberCenter_con3_right c_INC">
				{{#if kefu}}
					<img style="margin-left:20px;margin-bottom:19px;width:156px;height:153px;" src="{{urlAddNew url kefu.path}}">
					<ul><!-- // JSDP-126 20150519 sxy start -->
						<li class="y_service_names" style="margin-left: 11px;"><a target="_blank" style="color: #0697da;" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=938029566" title="联系客服">联系我 {{kefu.no}}</a></li>
						{{#if haveRecorde}}
							<li class="y_service_names2">{{{changeKf cstatus}}}</li>
						{{else}}
							<li class="y_service_names2"><span style="padding-left:10px;"></span><a hidefocus href="javascript:;" class="c_cf_re c_cf_re2"> 更换</a></li>
						{{/if}}
					</ul>
				{{else}}
					<img style="margin-left:20px;margin-bottom:19px;width:156px;height:153px;" src="{{imgpath}}/images/MemberCenter/MemberCenter_05.jpg">
					<ul>
						<li class="y_service_names changekf" style="width:160px;border:none;cursor:pointer;text-align:center;">选择客服</li>
					</ul>
				{{/if}}
				<a href="/member/recharge/newRecharge.html" hidefocus class="y_service_namesrecharge">充值</a>
				<a href="/member/cash/newCash.html" hidefocus class="y_service_namesdeposit">提现</a>
		</div>
				
      </div>
	</div>
	