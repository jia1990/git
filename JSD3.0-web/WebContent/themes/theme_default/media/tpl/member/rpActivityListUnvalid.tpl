<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dds1">用户名</dd>      
			<dd class="record_dds1">失效时间</dd>
			<dd class="record_dds1">金额(元)</dd>
		</dl>
	</li>
</ul>

{{#each data.list}}
<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	<li>
		<dl>
			<dd class="record_dds1">{{userName}}</dd>
			<dd class="record_dds1">{{rpActivityUnvalidFormatDate addTime}}</dd>
			<dd class="record_dds4" style='margin-left: 27px;'>¥{{consumeMoney}}</dd>
		</dl>
	</li>							
</ul>						
{{/each}}	