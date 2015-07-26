<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dds1">时间</dd>
			<dd class="record_dds2">订单号</dd>
			<dd class="record_dds1">转账金额(元)</dd>
			<dd class="record_dds5">状态</dd>
		</dl>
	</li>
</ul>
<ul class="record_conssin_num record_conssin_num1" style="display:block;">
{{#each data.list}}
<li>
	<dl>
		<dd class="record_dds1">{{MyDateDateFormat addTime}}</dd>
		<dd class="record_dds2">{{transferNo}}</dd>
		<dd class="record_dds1">{{transferAmount}}</dd>
		<dd class="record_dds5">{{transferYunGouFormatHandleStatus transferStatus}}</dd>

	</dl>
</li>						
{{/each}}
</ul>