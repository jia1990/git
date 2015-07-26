<li class="record_conss_title">
	<dl>
		<dd class="record_dd1">交易时间</dd>
		<dd  style="width:250px">交易类型</dd>
		<dd style="width:250px">交易金额（元）</dd>
		<dd class="record_dd2" style="width:150px;">交易对方</dd>
		<dd class="record_dd2" style="width:100px;">备注</dd>
	</dl>
</li>
				
{{#each data.list}}
<li>
	<dl>
		<dd class="record_dd1">{{transFormatDate addTime}}</dd>
		<dd style="width:250px">{{typeName}}</dd>
		<dd style="width:250px">{{moneyFormat money}}</dd>
		<dd class="record_dd2" style="width:150px;">{{hideToUserName}}</dd>
		<dd class="record_dds6" style="left:20px;">
					<i></i>
					<div class="c_remark_info" style="display: none;">
					<b class="c_recharge_arrow"></b>
					<a href="javascript:void(0);" style="font-size:12px;color:#555;">{{{remark}}}</a></div>
		</dd>
	</dl>
</li>			
{{/each}}


