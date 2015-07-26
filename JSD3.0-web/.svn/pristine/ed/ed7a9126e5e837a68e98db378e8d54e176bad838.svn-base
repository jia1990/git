<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd1">标的名称</dd>
			<dd>金额</dd>
			<dd>年利率</dd>
			<dd class="record_dd4" style="margin:0;color:#858797;">期限</dd>
			<dd class="record_dd6">发布时间</dd>
			<dd class="record_dd5">还款进度</dd>
			<dd>状态</dd>
		</dl>
	</li>
</ul>
{{#each businessRepaymentList}}
<li>
	<dl style="float:left;">
		<dd class="record_dd1">{{{mainRepaymentNameFunNew name id}}}</dd>
		<dd>{{moneyFormat account}}元</dd>
		<dd>{{apr}}%</dd>
		<dd class="record_dd4 c_data4">{{{timeLimitFormat type timeLimit borrowTimeType}}}</dd>
		<dd class="record_dd6">{{transFormatDate addTime}}</dd>
		<dd class="record_dd5">{{mainRepayPeriodFun borrowStyle borrowTimeType timeLimit currPeriod}}</dd>
		<dd>还款中</dd>
	</dl>
</li>
{{/each}}
<a href="/member_borrow/borrow/repayment.html" id="repaymentmore" hidefocus class="c_refund_info">查看所有还款信息>></a>