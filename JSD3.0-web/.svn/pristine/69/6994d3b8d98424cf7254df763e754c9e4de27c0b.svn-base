<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd1">提现时间</dd>
			<dd style="width:240px;">提现银行</dd>
			<dd style="width:160px;">提现账号</dd>
			<dd class="record_dd4" style="margin:0;width:180px;">提现金额</dd>
			<dd class="record_dd6" style="width:80px;">手续费</dd>
			<dd class="record_dd5" style="width:120px;">状态</dd>
		</dl>
	</li>
</ul>
{{#if data.list}}
	{{#each data.list}}
		<li class="c_draw_log">
			<dl >
				<dd class="record_dd1">{{noticeDateFormatNew addTime}}</dd>
				<dd style="width:240px;">{{bankName}}</dd>
				<dd style="width:160px;">{{bankNo}}</dd>
				<dd class="record_dd4 c_data4" style="width:180px;">{{moneyFormat drawAmount}}元</dd>
				<dd class="record_dd6" style="width:80px;">{{moneyFormat drawFee}}元</dd>
				<dd class="record_dd5" style="width:120px;">{{drawFormatHandleStatus  drawHandleStatus}}</dd>
			</dl>
		</li>
	{{/each}}
	<a href="/member_borrow/cash/log.html" id="repaymentmore" hidefocus class="c_refund_info">查看所有提现信息>></a>
{{else}}
	<p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>
{{/if}}
	
	