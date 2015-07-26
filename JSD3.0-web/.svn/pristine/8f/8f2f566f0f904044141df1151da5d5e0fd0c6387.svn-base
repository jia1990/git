<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd1">标的名称</dd>
			<dd>金额</dd>
			<dd>年利率</dd>
			<dd class="record_dd4" style="margin:0;color:#858797;">期限</dd>
			<dd class="record_dd6">发布时间</dd>
			<dd class="record_dd5">进度</dd>
			<dd>状态</dd>
		</dl>
	</li>
</ul>
{{#each businessBidList}}
<li>
	<dl style="float:left;">
		<dd class="record_dd1">{{{logBorrowNameFun name id addTime}}}</dd>
		<dd>{{moneyFormat account}}元</dd>
		<dd>{{{apr}}}%</dd>
		<dd class="record_dd4 c_data4">{{{timeLimitFormat type timeLimit borrowTimeType}}}</dd>
		<dd class="record_dd6">{{transFormatDate addTime}}</dd>
		<dd class="record_dd5">{{scales}}%</dd>
		<dd>{{logBorrowStatusFun status scales type flow}}</dd>
	</dl>
</li>
{{/each}}
<a id="borrowmore" hidefocus class="c_refund_info" href="/member_borrow/borrow/mine.html">查看更多借款中的项目&gt;&gt;</a>