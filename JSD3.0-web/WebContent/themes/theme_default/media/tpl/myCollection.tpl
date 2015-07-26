<dl class="c_data_title">
	<dd>时间</dd>
	<dd style="width: 130px;">项目</dd>
	<dd style="width:180px;">会员名</dd>
	<dd style="width:80px;">第几期/总期数</dd>
	<dd style="width:140px;">金额（元）</dd>
	<dd style="width:50px;">交易操作</dd>
	<div class="c_clear"></div>
</dl>
{{#each data.list}}
<dl>
	<dd>{{transFormatDate repaymentTime}}</dd>
	<dd style="width: 130px;">{{{logBorrowNameFun borrowName borrowId addTime}}}</dd>    
	<dd style="width:180px;">{{userName}}</dd>
	<dd style="width:80px;">{{investPeriodFun borrowStyle period timeLimit}}</dd>
	<dd class="c_number"  style="width:140px;">{{moneyFormat repaymentAccount}}</dd>
	<dd style="width:50px;">{{transStatusFun status}}</dd>
	<div class="c_clear"></div>
</dl>
{{/each}}
