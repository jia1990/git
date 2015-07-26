<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dds1" style="width:200px;">来源</dd>
			<dd class="record_dds1"style="width:200px;">领取时间</dd>        
			<dd class="record_dds1">失效时间</dd>
			<dd class="record_dds1">金额(元)</dd>
			<dd class="record_dds1" style="width:60px;">状态</dd>
		</dl>
	</li>
</ul>
{{#each data.list}}
<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	<li>
		<dl>
			<dd class="record_dds1" style="width:200px;">{{rpDynamicResFun rpStaticRes}}</dd>
			<dd class="record_dds1" style="width:200px;">{{MyDateDateFormat rpCreateTime}} {{timeDateFormat rpCreateTime}}</dd>
			<dd class="record_dds1">{{transFormatDate deadTime}}</dd>
			<dd class="record_dds1">¥{{rpStaticMoney}}</dd>
			<dd class="record_dds1" style="width:60px;">{{awardStatusFormatType rpStaticStatus}}</dd>
		</dl>
	</li>							
</ul>							
{{/each}}	