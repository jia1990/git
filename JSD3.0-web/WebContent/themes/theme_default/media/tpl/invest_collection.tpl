<dl class="c_data_title" style="border:1px solid #DFDFDF;border-top:none;">
	<dd>项目名称</dd>
	<dd>本金</dd>
	<dd>利息</dd>
	<dd>本金+利息</dd>
	<dd>收款时间</dd>
	<div class="c_clear"></div>
</dl>
					

{{#each data.list}}
<dl>
	<dd>{{{logBorrowNameFun borrowName borrowId addTime}}}</dd>
	<dd>{{moneyFormat capital}}</dd>
	<dd>{{moneyFormat actualInterest}}</dd>
	<dd class="c_number">{{moneyFormat repaymentAccount}}</dd>
	<dd>{{transFormatDate repaymentTime}}</dd>
	<div class="c_clear"></div>
</dl>
{{/each}}