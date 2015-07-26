<div class="record_conss record_conss1">
	<ul>
		<li class="record_conss_title">
			<dl>
				<dd class="record_dds1">时间</dd>
				<dd class="record_dds1">类型</dd>
				<dd class="record_dds1">对方</dd>
				<dd class="record_dds4">交易金额（元）</dd>
				<dd class="record_dds6">备注</dd>
			</dl>
		</li>
	</ul>
	<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	{{#each data.list}}
		<li>
			<dl>
				<dd class="record_dds1">{{MyDateDateFormat addTime}} {{timeDateFormat addTime}}</dd>
				<dd class="record_dds1">{{typeName}}</dd>
				<dd class="record_dds1">{{hideToUserName}}</dd>
				<dd class="record_dds4">{{moneyFormat money}}</dd>
				<dd class="record_dds6">
					<i></i>
					<div class="c_remark_info" style="display: none;"><b class="c_recharge_arrow"></b><a href="javascript:void(0);" style="font-size:12px;color:#555;">{{{remark}}}</a></div>
				</dd>
			</dl>
		</li>
	{{/each}}	
	</ul>
</div>
