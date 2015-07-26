
<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dds1">时间</dd>
			<dd class="record_dds1" style="width:210px;">流水号</dd>
			<dd>类型</dd>
			<dd>对方</dd>
			<dd class="record_dds4">交易金额（元）</dd>
			<dd class="record_dds5">状态</dd>
		</dl>
	</li>
</ul>

{{#each data.list}}

<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	<li>
		<dl>
			<dd class="record_dds1">{{addTimeStr}}</dd>
			<dd class="record_dds1" style="width:210px;">{{tradeNo}}</dd>
			<dd>{{rechargeFormatType rechargeType}}</dd>
			<dd>晋商贷</dd>
			<dd class="record_dds4">{{moneyFormat rechargeAmount}}</dd>
			<dd class="record_dds5">{{tradeFormatStatus tradeStatus}}</dd>
		</dl>
	</li>
								
</ul>
							
{{/each}}	