<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dds1">时间</dd>
			<dd class="record_dds2">银行名称</dd>
			<dd class="record_dds1">银行卡号</dd>
			<dd class="record_dds4">交易金额（元）</dd>
			<dd class="record_dds5">状态</dd>
			<dd class="record_dds6">备注</dd>
		</dl>
	</li>
</ul>
<ul class="record_conssin_num record_conssin_num1" style="display:block;">
{{#each data.list}}
<li>
	<dl>
		<dd class="record_dds1">{{MyDateDateFormat addTime}}</dd>
		<dd class="record_dds2">{{bankName}}</dd>
		<dd class="record_dds1">{{bankNo}}</dd>
		<dd class="record_dds4">{{moneyFormat drawAmount}}</dd>
		<dd class="record_dds5">{{drawFormatHandleStatus drawHandleStatus}}</dd>
		<dd class="record_dds6">
		<i></i>
		<div class="c_remark_info" style="display: none;"><b class="c_recharge_arrow"></b>
			{{#cancelDrawEqual drawHandleStatus}}
			<a class="cancelDrawCash" href="javascript:;" data-val="{{id}}" style="font-size:12px;color:#555;">取消提现</a>
			{{else}}
				{{#equal drawHandleStatus '11'}}
					{{firstTrialFailRemark}}
				{{else}}
					{{#equal drawHandleStatus '10'}}
						{{firstTrialFailRemark}}	
					{{else}}
						{{#equal drawHandleStatus '20'}}
							{{recheckFailRemark}}	
						{{else}}
							{{#equal drawHandleStatus '21'}}
								{{recheckFailRemark}}	
							{{else}}
							{{/equal}}
						{{/equal}}
					{{/equal}}
				{{/equal}}
			{{/cancelDrawEqual}}
		</div>
		</dd>
	</dl>
</li>						
{{/each}}
</ul>