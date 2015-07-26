<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd1">记录时间</dd>
			<dd class="record_dd4" >类型</dd>
			<dd class="record_dd4" >交易对方</dd>
			<dd class="record_dd4" style="margin:0;color:#858797;">	操作金额</dd>
			<dd class="record_dd6">备注信息</dd>
		</dl>
	</li>
</ul>
{{#each accountLogList}}
<li>
	<dl>
		<dd class="record_dd1">{{transFormatDate addTime}}</dd>
		<dd class="record_dd4">{{typeName}}</dd>
		<dd class="record_dd4">{{hideToUserName}}</dd>
		<dd class="record_dd4 c_data4">{{getOptAccountTotal borrowerRechargeMoney borrowerEnterMoney}}</dd>
		<dd class="record_dd6" title="{{remark}}" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">{{{remark}}}</dd>
	</dl>
</li>
{{/each}}
<a id="tendermore" hidefocus class="c_refund_info" href="/member_borrow/account/log.html">查看所有交易记录&gt;&gt;</a>