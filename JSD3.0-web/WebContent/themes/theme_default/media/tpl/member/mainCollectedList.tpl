<li class="record_conss_title">
	<dl>
		<dd class="record_dd6">投资借款标题</dd>
		<dd class="record_dd5">已收日期</dd>
		<dd class="record_dd5">已收本金</dd>
		<dd>已收利息</dd>
		<dd class="record_dd2">利息管理费</dd>
		<dd class="record_dd2">逾期利息</dd>
		<dd class="record_dd2">逾期天数</dd>
	</dl>
</li>
{{#each data.list}}
<li>
<dl>
	<dd class="record_dd6 record_dd6aa" style="position:relative;">{{hideBorrowName borrowName}}</dd>
	<dd class="record_dd5">{{timeFormat repaymentYesTime}}</dd>
	<dd class="record_dd5">{{capital}}</dd>
	<dd>{{interest}}</dd>
	<dd class="record_dd2">{{manageFee}}</dd>
	<dd class="record_dd2">{{lateInterest}}</dd>
	<dd class="record_dd2">{{lateDays}}</dd>
</dl>
</li>
{{/each}}
