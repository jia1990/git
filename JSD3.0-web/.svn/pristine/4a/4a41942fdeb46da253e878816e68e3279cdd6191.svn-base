<li class="record_conss_title">
	<dl>
		<dd class="record_dd1">提现时间</dd>
		<dd>提现银行</dd>
		<dd style="width:200px;">提现卡号</dd>
		<dd class="record_dd4" style="width:140px;">提现金额（元）</dd>
		<dd class="record_dd4" style="width:140px;">手续费（元）</dd>
		<dd class="record_dd4" style="width:140px;">状态</dd>
		<dd class="record_dd4" style="width:100px;">备注</dd>
	</dl>
</li>

{{#each data.list}}
<li >
	<dl>
		<dd class="record_dd1">{{MyDateDateFormat addTime}}</dd>
		<dd>{{bankName}}</dd>
		<dd style="width:200px;">{{bankNo}}</dd>
		<dd class="record_dd140">{{moneyFormat drawAmount}}</dd>
		<dd class="record_dd140">{{drawFee}}</dd>
		<dd class="record_dd140">{{drawFormatHandleStatus drawHandleStatus}}</dd>
		<dd class="record_dds6 record_dd100" style="left:20px;">
					<i></i>
					<div class="c_remark_info" style="display: none;">
					<b class="c_recharge_arrow"></b>
					<a href="javascript:void(0);" style="font-size:12px;color:#555;">{{drawCashRemark   firstTrialFailRemark recheckFailRemark}}</a></div>
		</dd>
	</dl>
</li>					
{{/each}}	
