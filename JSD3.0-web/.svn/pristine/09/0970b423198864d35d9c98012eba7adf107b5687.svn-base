<div class="MemberCenter_con3_left c_borrow_index">
	<div class="c_usable_money">
		<div class="c_borrow_title">可提现金额 <span>{{moneyFormat useMoney}}</span>元</div>
		<ul class="c_borrowing">
			<li>正在借款项目<span><b>{{count}}</b>个</span></li>
			<li class="c_borrow_loan">正在借款金额<span><b>{{moneyFormat total}}</b>元</span></li>
		</ul>
		<div class="c_borrow_detail"><a href="/member_borrow/borrow/mine.html{{mineLink count}}">查看正在借款项目详情</a></div>
	</div>
	<div class="c_next_refund">
		<div class="c_borrow_title">下一个待还日期 <a href="/member_borrow/borrow/repayment.html" style="float:right;padding-right:10px;font-size:12px;color:#919191;">待还详情>></a></div>
		{{#with borrowRepay}}
        {{#if nextRepayTime}}
		<ul class="c_next_borrow">
			<li class="calendar clearfix">
				<div class="time">
			        <p class="month">{{repaymentMonth nextRepayTime}}</p>
			        <p class="day">{{repaymentDay nextRepayTime}}</p>
			    </div>
			</li>
			<li class="c_project_date">
				<span>待还总项目<b>{{nextRepayCount}}</b>个</span><span style="width:180px;">待还总额<b>{{moneyFormat nextRepayAccount}}</b>元</span><span><a href="{{borrowHref nextRepayTime}}">还款</a></span>
			</li>
			<div class="c_clear"></div>
		</ul>
		{{else}}
			<ul class="c_next_borrow">
				<li class="c_project_date">暂无{{url}}</li>
			</ul>
		{{/if}}
   		 {{/with}}
   		 <!--JSDBET-682 wcw 2015-3-7 start  -->
   		 {{#with borrowRepay}}
		<div class="c_borrow_withdraw">本月待还总金额 <span>{{moneyFormat repayData.monthAccount}}</span>元<div class="c_refund_project">本月待还总项目<span>{{repayData.monthCount}}</span>个</div></div>
	      {{/with}}
	     <!--JSDBET-682 wcw 2015-3-7 end  -->
	</div>
</div>
<div class="MemberCenter_con3_right c_INC">
	{{#if kefu}}
		<a target="_blank" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=938029566" title="联系客服">
			<img style="margin-left:20px;margin-bottom:19px;width:156px;height:153px;" src="{{urlAddNew url kefu.path}}">
		</a>
		<ul><!-- // JSDP-126 20150519 sxy start -->
			<li class="y_service_names" style="margin-left: 11px;"><a target="_blank" style="color: #0697da;" href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=938029566" title="联系客服">联系我 {{kefu.no}}</a></li>
			{{#if haveRecorde}}
				<li class="y_service_names2">
					{{{changeKf cstatus}}}
				</li>
			{{else}}
				<li class="y_service_names2"><span style="padding-left:10px;"></span><a hidefocus href="javascript:;" class="c_cf_re c_cf_re2"> 更换</a></li>
			{{/if}}
		</ul>
	{{else}}
		<img style="margin-left:20px;margin-bottom:19px;width:156px;height:153px;" src="{{imgpath}}/images/MemberCenter/MemberCenter_05.jpg">
		<ul>
			<li class="y_service_names changekf" style="width:160px;border:none;cursor:pointer;text-align:center;">选择风控</li>
		</ul>
	{{/if}}
	<a href="/member/recharge/newRecharge.html" hidefocus class="y_service_namesrecharge">充值</a>
	<a href="/member/cash/newCash.html" hidefocus class="y_service_namesdeposit">提现</a>
</div>