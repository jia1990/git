{{#each data.list}}
<dl>
	<dd style="width:100px"><b>{{MyDateDateFormat addTime}}</b><span>{{timeDateFormat addTime}}</span></dd>
	<dd style="width:100px"><b>{{{userNameFormat userName}}}</b><span>借款人</span></dd>
	<dd style="width:100px">{{{logBorrowNameFun name id addTime}}}<span>标种标题</span></dd>
	<dd style="width:100px">{{typeName}}<span>类型</span></dd>
	<dd style="width:120px">{{account}}<span>金额</span></dd>
	<dd style="width:80px">{{apr}}%<span>年利率</span></dd>
	<dd style="width:100px">
	{{#if borrowTimeType}}
	{{timeLimit}}天
	{{else}}
	{{timeLimit}}月
	{{/if}}
	<span>期限</span></dd>
	<dd class="c_last_data">
		<i class="c_detail_icon"></i>
		<div class="c_remark_info" style="width:194px;padding:8px 12px;left: -164px;">
			<b class="c_recharge_arrow" style="right: 24px;"></b>
			<div class="c_money_state">状态：<label>{{statusNew}}</label></div>
			<div class="c_money_operate">操作：<a href='/member_guarantee/repayment/repaymentDetail.html?borrowId={{id}}' target='_blank' style="color:#0697DA;text-decoration:underline;">还款明细</a></div>
			<div class="c_money_plan">进度：<i class="c_plan_number">{{scales}}%</i></div>
		</div>
		<span>备注</span>
	</dd>
	<div class="c_clear"></div>
</dl>
{{/each}}