
	<div class="MemberCenter_con3">
		<div class="MemberCenter_con3_left c_guarantee_index">
			<dl class="c_guarantee_project">
				<dd style="margin-right:22px;">正在担保项目<div><span>{{guaranteeingCount}}</span>  个</div></dd>
				<div class="c_clear"></div>
			</dl>
			<dl class="c_guarantee_money">
				<dd>正在担保项目金额&nbsp;&nbsp;<span>{{moneyFormat guaranteeingAccount}}</span>  元</dd>
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
	<dl class="c_delay_project">
		<dd>催收项目&nbsp;<span>{{urgeCount}}</span>  个<a href="/member_guarantee/collection/collectionList.html">查看详情</a></dd>
		<dd>逾期项目&nbsp;<span>{{overdueCount}}</span>  个<a href="/member_guarantee/overdue/overdueList.html">查看详情</a></dd>
	</dl>
