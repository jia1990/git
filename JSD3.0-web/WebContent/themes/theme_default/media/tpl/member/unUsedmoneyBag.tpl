<ul>
						<li class="record_conss_title">
							<dl>
								<dd class="record_dds1">来源</dd>
								<dd class="record_dds1">领取时间</dd>        
								<dd class="record_dds1">金额(元)</dd>
							</dl>
						</li>
</ul>

{{#each data.list}}

<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	<li>
		<dl>
			<dd class="record_dds1">{{rpDynamicResFun rpDynamicRes}}</dd>
			<dd class="record_dds1">{{transFormatDate rpCreateTime}}</dd>
			<dd class="record_dds4" style="width:200px">¥{{rpDynamicMoney}}</dd>
		</dl>
	</li>
								
</ul>
							
{{/each}}	